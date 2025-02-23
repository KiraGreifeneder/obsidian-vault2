---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Logic/Lecture]]"
completion-status: "Not started"
---
## Lecture material
![](_attachments/sat2.pdf)
## Summary/Notes
### Rules of Precedence
![](_attachments/Pasted%20image%2020241021164340.png)
### Trees
 Formulas have a tree structure, where inner nodes are connectives, and the leaves are truth constants or variables. 
 ![500](_attachments/Pasted%20image%2020241021165257.png)
 ![500](_attachments/Pasted%20image%2020241021165346.png)
 The **Immediate Subformula** is defined as follows:
 - truth constants and atoms have no immediate subformula
 - the only immediate subformula of $\neg \phi$ is $\phi$
 - Informally, it is a formula that is part of another formula.
 ![](_attachments/Pasted%20image%2020241021165600.png)
 kinda nice for remembering this: an implication is like an if-then-else statement.
 for a -> b, the statement is
 if (a) then {return b} else {return true}

Equivalence is just !a && !b || a && b 
### Functional completeness
![](_attachments/Pasted%20image%2020241021170739.png)
