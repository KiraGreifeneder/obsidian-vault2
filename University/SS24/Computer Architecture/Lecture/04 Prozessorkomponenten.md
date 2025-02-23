---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
[ICS RISC-V Card](_attachments/riscv-card-ext-v0.6a.pdf)
## Summary
### Recap: Adders
**Half Adder:** adds 1-bit numbers without a carry in
- Cost: 2
- Depth: 1
![[_attachments/Pasted image 20240629120316.png]]
**Full Adder:** adds 2 1-bit numbers with a carry
![[_attachments/Pasted image 20240629120510.png]]
**Carry Ripple Adder:** 
- Cost: 5n
- Depth: 3 + 2(n-1)
![[_attachments/Pasted image 20240629132753.png]]
![[_attachments/Pasted image 20240629132804.png]]
**Subtrahierer:**
![[_attachments/Pasted image 20240629132845.png]]
**Addierer/subtrahierer:**
![[_attachments/Pasted image 20240629132909.png]]
### Conditional Sum Adder
Recursive, in each CSA is a CSA until it breaks down to a FA
![[_attachments/Pasted image 20240629142245.png]]
### Carry-Look-Ahead adder
Works in parallel 
![[_attachments/Pasted image 20240629133907.png]]
## Examples
idk, other than kosten and tiefe calculations
