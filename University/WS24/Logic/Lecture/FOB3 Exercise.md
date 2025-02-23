---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Logic/Lecture]]"
completion-status: "Not started"
---
## Lecture material
![](_attachments/fob3.pdf)
## Summary/Notes
### 1.
Restriction: 
$restriction(f,C) := \text{the } g \text{ such that } \exists B: g: C \rightarrow B \land \forall x \in C: g(x) = f(x)$
$injective(f, A, B) \Leftrightarrow \forall x, y \in A: f(x) = f(y) \rightarrow x =y$
$A \subseteq B \Leftrightarrow \forall x: x \in A \rightarrow x \in B$

jesus i'm not writing this lmaoo

### 3.
Prove
$$\forall n \in \mathbb{N} : \sum^n_{k=1} k^2 = \frac{n*(n+1)*(2n+1)}{6}$$
Base:
$n = 1$
$$1^2=1=\frac{6}{6}=\frac{1*(1+1)*(2*1+1)}{6} ~~~ \checkmark$$
Induction step:
$n = n + 1$
$$\frac{n*(n+1)*(2n+1)}{6} + (n+1)^2$$
$$= \frac{n(n+1)(2n+1)}{6} + \frac{6(n+1)^2}{6}$$
$$\frac{6n(n+1)(2n+1)(n+1)^2}{6}$$
$$\frac{(6n^2+6n)(2n+1)(n^2+2n+1)}{6}$$
$$\frac{(12n^3+18n^2+6n)(n^2+2n+1)}{6}$$
$$\frac{12n^5+}{6}$$
