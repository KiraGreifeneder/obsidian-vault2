---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Formal Models/Lecture]]"
completion-status: Complete
---
# Temporal logics (Lecture 5)
---
## Kripke Structures
Kripke structures only have states and no actions. 
![[_attachments/Pasted image 20240515205321.png]]
The transitions of an LTS become part of the state in the kripke diagram. For example, if state `A` has transitions `a` and `b` going from it,  then state A has attributes `a` and `b` and the state its arrow points to has the attributes of its own transitions.

## Linear Temporal Logic (LTL)
A **trace $\pi$** of $K$ is a finite of infinite sequence of states: $\pi=(s_0,s_1\dots)$
LTL semantics defined recursively along **infinite** paths $\pi$ in $K$:
- $|\pi|$ is the length of a trace $\pi$
- $\pi(i)$ defines the _i_'th state $s_i$ for $i\le |\pi|$
- $\pi ^i$ a path starting from the _i_'th state

LTL semantics:
![[_attachments/Pasted image 20240515230906.png]]
- For FG, it's just about if there exists _a_ path where it is true globally. It does not have to be true for all paths from some point onward. That is not part of LTL I believe. It's like an EFAG
- X asks that there IS a next state for which g holds, not that all of them need to fulfil g.

# Temporal Logics (Lecture 6)
---
## Computation Tree Logic (CTL)
![[_attachments/Pasted image 20240515235756.png]]
- for EG, there a path where _f_ holds must always _exist_ from the state we are in, even if it is not taken.
- 