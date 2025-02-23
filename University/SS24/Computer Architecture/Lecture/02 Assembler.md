---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
[ICS RISC-V Card](_attachments/riscv-card-ext-v0.6a.pdf)
## Summary
### Basic commands
For arithmetic: instruction/mnemonic, destination, source operands

`addi` for adding constants (immediates)

`lw destination, offset(base)` and `sw source, offset(destination base)

- e.g. `lw t1, 5(s0)`
- this would load t1 into the address 5 bytes after of s0. Any register can therefore be used as base addr
- RISC-V is byte-addressable, so for every word we have to multiply the address by 4
- Can always use `zero` as base and then memory as offset, e.g. `0x4(zero)` points to the 2nd word in memory.

`lui destination, immediate`

- Can use a 20 bit immediate
- The other 12 bits are zeroes
- Can then use `addi` to fill the other 12 bits of the register

`and, or, xor`: `and destination, source1, source2`

- negation by `xor` with -1

`andi, ori, xori`: `andi destination, source, immediate`

Shifts: e.g. `slli destination, source1, immdediate`

- shift left: logical, immediate: `sll` `slli`
- shift right: logical, immediate, arithmetic, arith imm. `srl` `srli` `sra` `srai`

### Jumps
Bedingt:
- branch if equal `beq` e.g. `beq s1, s1,  target`
- branch if not equal `bne`
- branch if less than `blt`
- branch if greate than or equal `bge`
Unbedingt:
- jump `j`
- jump register `jr`
- jump and link `jal`
- jump and link register `jalr`

> tip: always try to use jump to "skip" an action to avoid jumping back and forth 
> e.g. instead of switching to a different target if something is true and then switching back to the main code block, just negate the expression and choose to skip or drop through.
> The rest of the code block after the if statement is the target then, and exists right under the code block with the if statement
> ![[_attachments/Pasted image 20240629115102.png]]
### Reigsters
Only listed the ones I deemed relevant:

| Name  | Description                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| zero  | Constant 0, cannot be overwritten                                                                                                                               |
| ra    | Rücksprungadresse, jump back                                                                                                                                    |
| sp    | Stack pointer                                                                                                                                                   |
| t0-6  | **Temporary registers** (We don't expect these to stay the same after a sub-program is called)                                                                  |
| s1-11 | **Saved registers** (Expected to stay the same after a sub-program is called). You can change these in a function, but should always change it back afterwards! |
| a0-1  | Function arguments, return values (!)                                                                                                                           |
| a2-7  | Function arguments                                                                                                                                              |
Each register = 32 bits = 4 bytes  = 1 word
Addressable by byte, so word 0 is 0x0, word 1 is 0x4

**We can use the stack to temporarily store registers that are preserved.**
By storing them on the stack, we can retrieve/restore them sometime later.
```
# s3 = result

diffofsums:
addi sp, sp, -4 # make space on stack to

# store 1 registers
sw s3, 0(sp) # save s3 on stack

add t0, a0, a1 # t0 = f + g
add t1, a2, a3 # t1 = h + i
sub s3, t0, t1 # result = (f + g) − (h + i)
add a0, s3, zero # put return value in a0

lw s3, 0(sp) # restore s3 from stack

addi sp, sp, 4 # deallocate stack space

jr ra # return to caller
```
By convention, we just have to do this for s0-11.

### Recursion
Recursion is where we really should start saving registers, and here's why: All the variables local to each call need to be stored, otherwise we would need a new register for each call (and separate functions lol). Additionally, we need to store the return addr. so we continue where we left off in the function once the called func returns. Step-by step:

- Saving stuff on the stack
	- When a function is called, we save the return addr `ra` (the address to jump back to after the function completes) on the stack.
	- We also save local variables that should stay the same when the function comes back
- Stack unwinding
	- Once the base case is reached, we can start the stack unwinding
	- This means we call the first return in our base case rather than a branch
	- continue after the `return func()`
	- here we can restore `ra` and any variables again
	- combine intermediate results and return to the next callee
## Examples

### Basic jumps
From C code to Assembler:
```C
int main() {
	int sum = 0;
	for(int i=0; i<100; i++) {
		if(i%3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}
```
```
.globl main

.text
main:
addi s1, zero, 0 # sum
addi s2, zero, 0 # i
addi s3, zero, 100 # constant
addi t3, zero, 3 # constant
addi t4, zero, 5 # constant

for:
addi s2, s2, 1 # i++
bge s2, s3, done # jump to end if loop condition is false

addi t0, zero, 0 # for i % 3
addi t1, zero , 0 # for i % 5


rem t0, s2, t3 # left side or OR
beq t0, zero, sum # if it is true we can immediately increase the sum

rem t0, s2, t4 # right side or OR
beq t0, zero, sum # if it is true we can immediately increase the sum

jal zero for # otherwise go back and check the for loop condition again

sum:
add s1, s1, s2 # add i to sum
jal zero for # go back and check the for loop condition again

done:
add a0, zero, s1 # store sum at a0
```
### Arrays
```C
int arr[9] = {4, 8, 12, 11, 5, 21, 1, 99, 41};
int main() {
	int sum = 0;
	int *p = arr;
	while(*p > 1) {
		sum += *p;
		p++;
	}
return sum;
}
```
```
arr:
  .word 4, 8, 12, 11, 5, 21, 1, 99, 41

.text
main:
  addi a0 zero 0 # a0 = sum = 0
  addi t0 zero 1 # t0 = 1

  la t1 arr # t1 = p = &arr

loop:
  lw t2 0(t1)   # t2 = *t1 = *p
  bge t0 t2 end # if (t0 >= t2) goto end = if (*p <= 1) goto end

  add a0 a0 t2 # a0 = a0 + t2 = sum + *p

  addi t1 t1 4  # t0 = t0 + 4 = p++
  jal zero loop # goto loop

end:

```

### Factorial
```C
int factorial(int n) {
	if (n <= 1)
		return 1;
	else
		return (n*factorial(n−1));
}
```
```
fact:
	addi sp, sp -8 		# space for two words on the stack (i.e. move up the stack)
    sw a0, 4(sp) 		# save (n-1) from previous call, i.e. local n
    sw ra, 0(sp)
    
    # if
    addi t0, zero, 1
    bgt a0, t0, else
    
    # base case (inside if)
    addi a0, zero, 1 	# set local a0 (return value) to 1, i.e. return 1
    addi sp, sp, 8
    jr ra				# return to caller
   	
else:
	addi a0, a0, -1		# n = n-1
    
    jal ra, fact		# recursive call using n-1
    
    lw t1, 4(sp)		# get next call's local n and restore it on the stack
    lw ra, 0(sp)		# get return addr. for caller
    
    addi sp, sp, 8		# go down the stack (remove this from the stack as we have loaded our stuff back locally)
    mul a0, t1, a0		# n * factorial (n-1), where t1 is the return from the recursive call
    jr ra
```
