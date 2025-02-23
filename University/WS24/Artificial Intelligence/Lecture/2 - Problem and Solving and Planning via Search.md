---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Artificial Intelligence/Lecture]]"
completion-status: In progress
---
## Lecture material
![](_attachments/02_Blind_Search.pdf)
## Summary/Notes
### Formalising Search Problems
#### Defining a search problem
- The complete set $S$ of possible **world states**
- A **Successor function** $Succ(s)$ that gives, for every state $s \in S$, all possible actions that can be taken in $s$, and their effects (the resulting world state). We need to know the consequences of each action.
- **Initial state**
- A **Goal Test** that defines what woul be a solution. Can be explicit (the exact state we want) or implicit (computed on $s$ e.g. a checkmate in chess)
- **Action Costs** are non negative values assigned to actions which get summed up(some actions may e.g. take more energy), so we usually want to find the cheapest/most efficient solution
---

![500](_attachments/Pasted%20image%2020241014121913.png)

---
