---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Logic/Lecture]]"
completion-status: In progress
---
## Lecture material
![](_attachments/sat1.pdf)
## Summary/Notes
 CNF (Conjunctive Normal Form), a formula is a conjunction of clauses, and a clause is a disjunction of literals.

# Exercise sheet
## Instructions
![](_attachments/ex1.pdf)
## Solutions
### 1. Formula Structure
- Truth constants: $T = {\top}$
- Literals $l = \{x, \neg y, z, \top\}$
- Variables $v = x, y, z$
- Clauses:  $C = \{(x \lor \neg y),~~(z \lor \neg y \lor \top),~~(x)\}$
### 2. Truth tables
#### a)
| $x$ | $(x \lor \top)$ | $\top$ |
| --- | --------------- | ------ |
| 0   | 1               | 1      |
| 1   | 1               | 1      |
#### b)
| $x$ | $y$ | $(x \oplus y)$ | $\neg(x \leftrightarrow y)$ | $(x \lor y) \land (\neg x \lor \neg y)$ |
| --- | --- | -------------- | --------------------------- | --------------------------------------- |
| 0   | 0   | 0              | 0                           | 0                                       |
| 0   | 1   | 1              | 1                           | 1                                       |
| 1   | 0   | 1              | 1                           | 1                                       |
| 1   | 1   | 0              | 0                           | 0                                       |
### 3. Satisfiability
#### a)
This formula is not satisfiable. It would require for either $x$ or $y$ to be 0 and 1 simultaneously.
#### b)
This formular is satisfiable for the following assignments: $x = 1, ~~y = 1$
The whole formula could therefore also be simplified to $(x) \land (y)$
### 4. Models
| $a$ | $b$ | $c$ | mystery formula |
| --- | --- | --- | --------------- |
| 0   | 0   | 0   | 0               |
| 0   | 0   | 1   | 0               |
| 0   | 1   | 0   | 1               |
| 0   | 1   | 1   | 1               |
| 1   | 0   | 0   | 1               |
| 1   | 0   | 1   | 1               |
| 1   | 1   | 0   | 1               |
| 1   | 1   | 1   | 1               |
$\rightarrow \text{mystery formula}: \phi = (a \lor b) \land (c \lor \neg c)$

### 5. Notation
$\phi = (l_{1, 1} \lor l_{1, 2} \lor l_{1, 3}) \land (l_{2,1} \lor l_{2,2} \lor l_{2,3})$
$\phi = \{\{l_{1, 1},l_{1, 2},l_{1, 3}\}, \{l_{2,1}, l_{2,2}, l_{2,3}\}\}$
### 6. SAT Encoding
```plantuml
digraph G {
	bgcolor="#FFFFFF00"
	node [shape=circle, color=lightgreen, fontcolor="lightgreen"]
	edge [color=lightgreen, fontcolor="lightgreen"]
	
	i [style=invis]
	
	i -> a
	a -> b
	b -> c
	c -> a
}
```
Limboole input:
```
(a1 | a2) & (b1 | b2) & (c1 | c2) &
(!a1 | !a2) & (!b1 | !b2) & (!c1 | !c2) &
(!a1 | !b1) & (!a2 | !b2) & (!b1 | !c1) & (!b2 | !c2) & (!c1 | !a1) & (!c2 | !a2)
```
Limboolee output"
```
% UNSATISFIABLE formula
```



| a1  | a2  | b1  | b2  | c1  | c2  |
| --- | --- | --- | --- | --- | --- |
| 0   | 1   | 1   | 0   | 0   | 1   |
| 1   | 0   | 0   | 1   | 1   | 0   |
|     | 1   | 1   |     |     |     |

if we go by this formula ( this is the satisfiable one that isn't circular! )
```
(a1 | a2) & (b1 | b2) & (c1 | c2) &
(!a1 | !a2) & (!b1 | !b2) & (!c1 | !c2) &
(a1 | b1) & (a2 | b2) & (b1 | c1) & (b2 | c2)
```
and the first two lines define that:
- each node must have a color
- each node may not be two colors at the same time

We can then look at how we would move along the last line to determine a model:
let's start with a1
(a1 | b1)
- If a1 and b1 are true (they are the same color), then neither a2 nor b2 (the next clause) can be true. therefore the conjunction will fail
- If a1 is true and b1 is not, then we can move on to the next clause.
(a2 | b2)
- Since a1 is true, a2 must be false. only b2 is therefore true.
(b1 | c1)
- Since b2 is true, b1 must be false. c1 is therefore true.
(b2  | c2)
- b2 is true, c2 can't be true anyways.

we are left with the following literals being true: a1, b2, c1

Now what if we start with a2 being true?
(a1 | b1)
- Again, if both are true, the conjunction will fail. Since a2 is true, a1 is false. Therefore b1 is true.
(a2 | b2)
- Since b1 is true, b2 can't be true. a2 is true, as we established in the beginning.
(b1 | c1)
- We know b1 is true. c1 could be true too, but, if we look ahead to (b2 | c2) we'll see the following:
	- We already established that b2 is false. 
	- c2 has to be true for the clause to hold
	- if c1 is true, c2 cannot be true
	- if c1 is false, c2 can be true
	- therefore c1 has to be false
(b2 | c2)
- b1 is true, therefore b2 must be false
- c2 is true.

we are left with the following literals being true: a2, b1, c2S