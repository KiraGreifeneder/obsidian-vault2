---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
[ICS RISC-V Card](_attachments/riscv-card-ext-v0.6a.pdf)
## Summary
### Recap: registers
![[_attachments/Pasted image 20240629115047.png]]
### Instruction Formats
![[_attachments/Pasted image 20240623004557.png]]
- The _opcode_ partially specifies which of the 6 instruction format types is being used
- _funct7_ and _funct3_ further specify the operation
- *rs1*, *rs2*, or *rd* specify the arguments

**R-Type**
- OP codes: 51
- `<operator> <rd>, <rs1>, <rs2>`

**I-Type**
- OP codes: 3, 19, 103
- `<operator> <rd>, <rs1>, <imm>`
- `<memop> <rd>, <imm>(<rs1>)`
- immediate is spread across two parts of the instruction, see what bits of the immediate are where in the table above.

**S-Type**
- OP codes: 35
- `<memop> <rs2>, <imm>(<rs1>)`
- immediate is spread across two parts of the instruction, see what bits of the immediate are where in the table above.

**B-Type**
- OP codes: 99
- `<operator> <rs1>, <rs2>, LABEL`
- immediate is spread across two parts of the instruction, see what bits of the immediate are where in the table above.
- Immediate bits are weirdly spread out for compatibility reasons, can be read from table above
	- e.g. bits 7-11 of the instruction contain the 1st to 4th bits of the immediate, followed by the 11th bit of the immediate.

**U-Type**
- OP codes: 23, 55
- `<operator> <rd>, <imm>`

**J-Type**
- OP codes: 111
- `<operator> <rd>, <imm>`
- Again, pay attention to the way the immediate bits are distributed.
- LSB of immediate is always 0
### Decoding
1. Identify the OP-code
2. From the OP-code, figure out how to split up and read the rest of the numbers
3. match up the functs3-7 codes
4. match up the destination/source/immediate based on their addr
## Examples
[UE02 Task 1](obsidian://open?vault=University%20Notebook&file=Rechnerarchitektur%2FUEs%2FUE02%20Task%201)