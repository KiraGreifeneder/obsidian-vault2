---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-10-29T12:23:59
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt03.pdf)
## Solutions
### Aufgabe 3.1.
#### a)
Für jede rationale Zahl $x$ existiert zumindest eine natürliche Zahl $y$, für die folgendes gilt: $y$ ist größer oder gleich $x$.
#### b)
Für jede reelle Zahl $x$ gilt: wenn $x^2 = 2$ gilt, dann gilt, dass x keine rationale Zahl ist.
#### c)
Für jede rationale Zahl $x$ und für jede ganze Zahl y gilt folgendes: Wenn $x$ kleiner $y$ ist, dann existiert eine rationale Zahl $z$ die größer $x$ und kleiner $y$ ist.
#### d)
$\exists x \in \mathbb{R}~~ \exists y \in \mathbb{R}: (x \ne y \land x^2 = y^2 = 2 )$
### Aufgabe 3.2.
#### a)
$p(x): \frac{x}{2}=4, ~~ q(x): x \ne 0$
Assumption: 
$\left( \forall x:\left( \frac{x}{2} = 4\right) \Rightarrow (x \ne 0) \right) \iff \left( \forall x:  (x \ne 0) \Rightarrow\left( \frac{x}{2} = 4\right)  \right)$
In dem Fall ist die linke Seite Wahr, die Rechte jedoch falsch. ( wir können auf der rechten seite ein x finden, für das die aussage nicht gilt)
#### b) 
$p(x): x<0,~~q(x): x>0$
left false: false, right side: true
Justification:
- Rechte Seite: Es kann eine Zahl x existieren, die kleiner 0 ist, und es kann eine Zahl x existieren, die größer 0 ist.
- Linke Seite: Es kann keine Zahl existieren, die gleichzeitig größer und kleiner als 0 ist. Daher ist die linke Seite in diesem fall Falsch und somit auch die Äquivalenz.
#### c)
$p(x, y): x+y = 5$
left: true, right: false
Justification;
- Linke Seite: Für ein beliebiges x kann man y so wählen, dass x + y = 5 gilt.
- Rechte Seite: Es existiert jedoch kein y, für das die Addition mit einem beliebigen x die Summe 5 ergibt. Somit ist die Äquivalenz falsch.
### Aufgabe 3.3.
Teilbar: $\forall x,y \in \mathbb{Z} ~~ \exists r \in \mathbb{Z} : (y = xr)$
Teilerfremd: $\forall x,y \in \mathbb{Z} ~~ \forall r \in \mathbb{Z} : (y \ne xr)$
Primzahl: $\forall x \in \mathbb{Z} ~~ \forall y \in \mathbb{Z} \backslash \{x, 1\} \land x,y>1: (y ~~ \centernot | ~~ x)$
Primzahl alternative (wahrscheinlich korrekter):
![450](_attachments/Pasted%20image%2020241030145445.png)
### Aufgabe 3.4.
#### a)
![[_attachments/Assignment 03 2024-10-23 13.34.01.excalidraw]]
$(1) ~~~ \text{Happy students} \iff \neg\text{Exam}$
$(2) ~~~ \text{Happy students} \Longrightarrow \text{Happy Lecturers} \Longrightarrow \text{No motivation} \Longrightarrow \text{Exam}$
$(3) ~~~  \text{Exam} \Longrightarrow \neg\text{Happy students}$

From line 2 to 3 the following is implied: 
$$\text{Happy students} \Longrightarrow \dots \Longrightarrow \text{Exam} \Longrightarrow \neg\text{Happy students}$$
Which would imply the following contradiction:
$$\text{Happy students} \Longrightarrow \neg\text{Happy students}$$
Therefore the entire statement cannot be true.
#### b)
![[_attachments/Assignment 03 2024-10-23 13.53.27.excalidraw]]
$p \dots \text{Portrait ähnelt dem Auftraggeber}$
$a \dots \text{Auftraggeber ist enttäuscht}$
$k \dots \text{Künstler ist enttäuscht}$
$f \dots \text{Frau weigert sich zu zahlen}$

$(1) ~~~ (p \implies a) \land (p \implies k)$
$(2) ~~~ \neg p \implies f$
$(2) ~~~ f \implies k$

We can simplify the implication down to $\neg p \implies k$. This statement is true, as p is false in this implication.
### Aufgabe 3.5.
M ist die Menge aller x, wobei x ein Mensch ist.

Die Funktion $\ell$ ist das Kreuzprodukt M x M über allen Menschen, sodass $\ell(x, y)$ 1 ist, wenn $x$ $y$ liebt, und sonst 0 ist.

Für alle $x$ in der Menge der Menschen existiert ein $y$ in der Menge der Menschen, für den $\ell(x, y)$ 1 ist. -> Für alle Menschen existiert ein anderer Mensch, den er liebt.