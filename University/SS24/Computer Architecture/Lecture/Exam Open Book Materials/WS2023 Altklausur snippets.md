![[_attachments/Pasted image 20240701192433.png]]
4: `aupic 10 label[31:12]`; `addi t0, t0, label[31:12]`
5: `lui t1 0xDEADC`; `addi t1, t1, 0xEEF`

![[_attachments/Pasted image 20240701193330.png]]
opcode: 0100011
Type: S
funct3: 000
immediate: 19 = 000000010011
t5 -> x30 -> 11110
a3 -> x13 -> 01101
machine code: 0000000 11110 01101 000 10011 0100011
0000 0001 1110 0110 1000 1001 1010 0011
-> 0x01E689A3

![[_attachments/Pasted image 20240701195826.png]]
in binary: 1111 1110 1101 1111 1111 1100 0110 1111
op code: 1101111 (jal rd, label)
funct3: -
rd: 11000 -> x24 ->s8
imm: 1 1111 1111 1 111 1110 110 = 3156
instruction: jal s8, 3156
![[_attachments/Pasted image 20240701200617.png]]
i) immediate: 21 bits. Range: $-2^{20}= -1048576; 2^{20}-1=1048575$
Assume instruction length of 1 word -> 4 bytes
1048575/4=262143.75->262143 instructions
ii)
1048576/4=262144
![[_attachments/Pasted image 20240701204241.png]]
> basically just have to save all our saved registers on the stack and release them at the end.

![[_attachments/Pasted image 20240701202015.png]]
![[_attachments/Pasted image 20240701202046.png]]
![[_attachments/Pasted image 20240701202056.png]]
Basically we just added a unit that can take whole word we read out of an address and just take the first byte out of it \[7:0]. Then we expand resultSrc to allow for the writeback of that byte instead of the whole word. 
Note that it was basically `lw` and therefore we didn't have to change much.
![[_attachments/Pasted image 20240701202257.png]]
Look at what instructions DON'T write into memory in card.
![[_attachments/Pasted image 20240701202427.png]]
![[_attachments/Pasted image 20240701202455.png]]
![[_attachments/Pasted image 20240701202614.png]]
For beq, we can read the parameters to make a branch decision, but if we don't jump we need the OldPC value which we can't get. Everything that needs OldPC doesn't work. In the decode phase, the jump addr is calculated. It's only relevant for jump/branch operations. so beq and jal.

![[_attachments/Pasted image 20240701203458.png]]
RAW:
t2: i4
s2: i6
WAR:
t1: i2
WAW: t1, i1
![[_attachments/Pasted image 20240701203537.png]]
Datenkonflikte:
t1: i1, i2 because t1 won't be written yet
s2: i6, i7  because s2 won't be written yet
Kontrollkonflikte:
i2 because sw and sub aren't flushed
i5 because no flushing happens after the jump
![[_attachments/Pasted image 20240701204331.png]]
No branch: i1, i2, NOP, NOP, NOP, i3, i4, i5, i6, NOP, NOP, i9
> 3 NOPs are needed to write into registers, as those will be written in writeback and at the same time a new instruction is loaded.
> Since we jump in the decode phase, 2 NOPs needed there.

With branch: i1, i2, NOP, NOP, NOP, i3, NOP, NOP, i7, i8, i9
> two NOPs after branch since we have no flushing. 

![[_attachments/Pasted image 20240701205928.png]]
swap i1 and i2, i4 and i5. 
![[_attachments/Pasted image 20240701210022.png]]
LRU, FIFO, LFU