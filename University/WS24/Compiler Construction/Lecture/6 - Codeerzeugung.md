---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Compiler Construction/Lecture]]"
completion-status: "Not started"
---
## Lecture material
![](_attachments/06.Codeerzeugung.pdf)
## Summary/Notes
stack machine vs register machine: stack machine is slower, but we don't need to remember which register holds what etc... just add to stack, which is easier.
### UE P.5. (1) notes
estack - expression stack, temporary expressions stored here
static/data area - plain array, points to heap addr.
- stores global variables
heap
- storing objects andn their fields
code - byte array
- stores our instructions
- this is where our code generator puts instructions
- pc counts to index in here
pstack - method stack
- contains locals and return addresses
- 
- has function/frame pointer and stack pointer
	- between stack and frame pointer are local variables

Summary
![500](_attachments/Pasted%20image%2020241221140323.png)

Instructions
![500](_attachments/Pasted%20image%2020241221144129.png)
Eselsbrücke: lokal Variablen sind "näher" dran, daher verwenden diese den kürzeren Befehl (load). Statische Variablen sind "weiter weg", und haben daher längere Befehle (getStatic, putStatic).

getStatic puts a variable on the expression stack.
![500](_attachments/Pasted%20image%2020241221145011.png)
![500](_attachments/Pasted%20image%2020241221145231.png)
For the #compilerbau-exam, look at this video! Learn what instructions need how many bytes. Each instruction one byte, const w has 8 bytes total, const_n only 1, getStatic needs 3...

Here, load(y) loads y onto the expression stack?
![500](_attachments/Pasted%20image%2020241221162343.png)
And here, load(y) is loaded onto the expression stack again just in case...
![200](_attachments/Pasted%20image%2020241221162410.png)
If that first load(y) wasn't there, Expr() wouldn't be able to load y from the expression stack, because it's never been used in an expression before.

![](_attachments/Pasted%20image%2020241221172817.png)