---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2025-01-14T12:23:59
---
 Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt12.pdf)

## Solutions
### 12.1.a.
- Die Verknuepfung ist **Assoziativ**, da es egal ist, welche Farben zuerst gemischt werden.
- Sie ist auch **Kommutativ**, da die Reihenfolge der Farben zum mischen egal ist.
- Es gibt **kein neutrales Element**, da es keine einzige Farbe gibt, bei der jede Farbe gleich bleiben wuerde. Auch Schwarz oder Weiss wuerde sie Saettigung aendern.
- Es gibt kein **inverses Element**, da gemischte Farben nicht wieder "ent-mischt" werden koennen. (bspw. Gruen kann nicht mehr zu Blau und Gelb werden).
- Sie ist **Abgeschlossen**, da nur weitere Farben entstehen koennen.
-> Wir haben also eine kommutative Halbgruppe
### 12.1.b.
Man koennte Wasser vielleicht als neutrales element sehen, m.m.n aendert es aber nichts, da Wasser die saettigung aendert. 

Abgeschlossenheit? Wasser + Farbe produziert... Farbe? Es produziert kein Wasser, sonder Faerbiges Wasser?
### 12.1.c.
Fall a): Schwarz und Weiss waeren nun neutrale elemente
Fall b): Schwarz, Weiss und Wasser waeren nun neutrale elemente

Wir haben nun ein kommutatives monoid.
### 12.2.a.
$7x$ soll ein vielfaches von 13 sein, plus 2 damit das Ergebnis mod 13 wieder 2 ergibt:
$$\exists n,x \in \mathbb{Z}: 7x=2+13n$$
$$\iff \exists n,x \in \mathbb{Z}: x=\frac{2+13n}{7}$$
Dann wollen wir alle n finden, fuer die dies gilt. Die kleinstmoegliche Zahl waere 2, dann 16, dann 23, dann 30... (danke geogebra). Also haben wir $n = 2+7*m$. Setzten wir fuer $n$ ein:
$$x = \frac{{2+13(2+7m)}}{7} = \frac{{2+26+91m}}{7}=\frac{{28+91m}}{7} = 4+13m $$
Also gilt $X = \{ x | \forall m\in \mathbb{Z}: x = 4+13m\}$
### 12.2.b.
Wir koennen den Ausdruck wie folgt uebersetzen:
$$(7+12a)*(x+12b)=2+12c$$
$$7x+7⋅12b+12a⋅x+12a⋅12b=2+12c$$
$$7x+84b+12a⋅x+144ab=2+12c$$
$$(7+12a)x=2+12c−84b−144ab$$
$$x=\frac{{2+12c−84b−144ab}}{7+12a}​​$$
uauuhguhauhauh man now we need to find abc so that x is an integerrrrr
ok ok ok 
needs to be divisible by 7+12a
sooo
$$2+12c-84b-144ab \equiv 0 \mod{7+12a}$$
that means... hhh
$$2+12c-84b-144ab = (7+12a)n$$
yeah that doesn't help

OK APPARENTLY IT'S THE SAME AS $7x \equiv 2 \mod{12}$ (according to mister gpt, and some further thonking) so I'm gonna roll with it :sob:
Explanation: $[2]_{\equiv 12}$ describes a domain, which includes 2, 14, 26 etc, in other words, 2 + 12n

$$7x = 2 + 12n$$
$$x = \frac{{2+12n}}{7}$$
Ein passendes n waere dann bspw 1, 
$$2+12n \equiv 0 \mod{7}$$
$$12n \equiv 2$$
-> by trying out some values, we get 1, ...
god i don't fucking know

### 12.2.c.
Aehnlich wie in a: 
$$\exists n,x \in \mathbb{Z}: 6x = 2 + 12n$$
$$\iff \exists n,x \in \mathbb{Z}: x = \frac{2 + 12n}{6}$$
$$\iff \exists k,x \in \mathbb{Z}: x = \frac{1}{3}+2n$$
Da wir einen Bruch haben, existiert kein ganzzahliges n, mit dem x auch gleichzahlig werden kann. 
### 12.2.d.
Wir uebersetzen den Ausdruck wieder:
$$(2+12a)(x+12b)=(6+12c)$$
$$2x+24b+12a⋅x+144ab=6+12c$$
$$(2+12a)x=6+12c−24b−144ab$$
$$x= \frac{6+12c-24b-144ab}{2+12a}$$
here tooooooo
### 12.3.
In $\mathbb{Z}_5$

|  +  |  0  |  1  |  2  |  3  |  4  |
| :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  1  |  2  |  3  |  4  |
|  1  |  1  |  2  |  3  |  4  |  0  |
|  2  |  2  |  3  |  4  |  0  |  1  |
|  3  |  3  |  4  |  0  |  1  |  2  |
|  4  |  4  |  0  |  1  |  2  |  3  |

| $\cdot$ |  0  |  1  |  2  |  3  |  4  |
| :-----: | :-: | :-: | :-: | :-: | :-: |
|    0    |  0  |  0  |  0  |  0  |  0  |
|    1    |  0  |  1  |  2  |  3  |  4  |
|    2    |  0  |  2  |  4  |  1  |  3  |
|    3    |  0  |  3  |  1  |  4  |  2  |
|    4    |  0  |  4  |  3  |  2  |  1  |
In $\mathbb{Z}_6$

|  +  |  0  |  1  |  2  |  3  |  4  |  5  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  1  |  2  |  3  |  4  |  5  |
|  1  |  1  |  2  |  3  |  4  |  5  |  0  |
|  2  |  2  |  3  |  4  |  5  |  0  |  1  |
|  3  |  3  |  4  |  5  |  0  |  1  |  2  |
|  4  |  4  |  5  |  0  |  1  |  2  |  3  |
|  5  |  5  |  0  |  1  |  2  |  3  |  4  |

| $\cdot$ |  0  |  1  |  2  |  3  |  4  |  5  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: |
|    0    |  0  |  0  |  0  |  0  |  0  |  0  |
|    1    |  1  |  1  |  2  |  3  |  4  |  5  |
|    2    |  0  |  2  |  4  |  0  |  2  |  4  |
|    3    |  0  |  3  |  0  |  3  |  0  |  3  |
|    4    |  0  |  4  |  2  |  0  |  4  |  2  |
|    5    |  0  |  5  |  4  |  3  |  2  |  1  |
### 12.4.a.
$f(X) = X^4 + 2X^3 + 3X^2 + 3X + 4$
$g(X) = 2X^2 + 3X + 4$

find $q(X)$ and $r(X)$ such that $f(X) = q(X) * g(X) + r(X)$
Wir wollen den quotienten q(X) finden mit rest r(X).
wir berechnen dazu f(X) dividiert durch g(X).

steps:
https://en.wikipedia.org/wiki/Polynomial_long_division

![[University/WS24/Discrete Structures/Exercise/_attachments/Tldraw 2025-01-12 1.08AM.md]]
We end up with 
$q(x) = \frac{1}{2} X^2 + \frac{1}{4}X-\frac{5}{8}$
$r(x) = \frac{31}{8}x+\frac{3}{2}$
### 12.4.b.
![Tldraw 2025-01-12 1.42AM](_attachments/Tldraw%202025-01-12%201.42AM.md)
$q(x) = 3X^2 + 4X + 6$
$r(x) = 4X$
### 12.5.