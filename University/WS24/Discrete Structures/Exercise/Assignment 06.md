---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-19T23:59:59
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
## Instructions
![](_attachments/blatt06.pdf)
## Solutions
### 6.1. $\checkmark$
Da es sich um die Gleichheitsrelation handelt, die alle Eigenschaften der Äquivalenzrelation (transitivität, reflexivität, symmetrie) besitzt, ist $\sim$ eine Äquivalenzrelation...

==should probably show this formally, but we'd essentially just show some pretty trivial stuff==
### 6.2. $\checkmark$
**Für alle $x \in A$ gilt $x \in [x]$**
Wahr.Jedes Element hat eine Äquivalenzklasse, in der mindestens das Element selber enthalten ist.

**Für zwei Äquivalenzklasen $[x], [y]$ gilt immer $[x] \cap [y] = \emptyset$**
Falsch. Solange die zwei Äquivalenzklassen nicht disjunkt sind, ist dessen Konjunktion nicht $\emptyset$. Wenn reflexivität, transitivität und symmetrie über mehrere Elemente in einer Relation gelten, dann werden diese Elemente identische Äquivalenzklassen haben.

**Für alle $x \in A$ gilt $[x] \subseteq A$**
Wahr, die Äquivalenzklasse ist ebenfalls eine Menge und besteht aus Elementen in A. 

**Für alle $x \in A$ gilt $[x] \in A$**
Falsch. $[x]$ ist kein Element sondern eine Menge, und kann daher nicht in $A$ sein.

**Für alle $x \in A$ gilt $[x] \subseteq A/\sim$**
Falsch. $A/\sim$ ist die Quotientenmenge. Sie ist die Menge aller Äquivalenzklassen, daher kann $[x]$, eine Menge von Elementen, keine Unterklasse dieser Quotientenmenge sein.

**Für alle $x\in A$ gilt $[x] \in A/\sim$**
Wahr. Jedes Element der Menge hat eine Äquivalenzklasse, die per Definition in der Quotientenmenge enthalten sind.
### 6.3. $\checkmark$
Z.z.: $u, v \in A ~|~ u \le v: \{ a \in A : a \le u\} \subseteq \{a \in A : a \le v\}$

Für jedes $a$ gilt: wenn $a$ kleiner gleich $u$ ist, folgt $a$ kleiner gleich $v$ (Transitivitä). In die andere Richtung gilt diese Folgerung jedoch nicht. Das bedeutet, dass die Menge $\{ a \in A : a \le u\}$ vollständig in $\{a \in A : a \le v\}$ enhalten ist. Gleichzeitig kann die zweite Menge Elemente enthalten, die in der ersten nicht vorhanden sind. Somit ist $\{ a \in A : a \le u\}$ eine Untermenge von $\{a \in A : a \le v\}$.
### 6.4.a. $\checkmark$
$ggT(132,90)$
$132 ~~ = ~~ 90 * 1 ~~~ + ~~~ 42$
$90 ~~~~ = ~~ 42 * 2 ~~~ + ~~~ 6$
$42 ~~~~ = ~~ 6 * 7 ~~~~~ + ~~~ 0 ~~~ \Rightarrow ggT(90,132) = 6$

$ggT(132, 90)= v132 + u90$
$ggT(132,90) = 6$
$~~~~~~~~ = 90 - (2*42)$
$~~~~~~~~ = 90 - (2*(132-90))$
$~~~~~~~~ = -2 * 132 + 3 * 90 ~~~ \Rightarrow u = 3, v = -2$
### 6.4.b. $\checkmark$
$ggT(112,91)$
$112 ~~ = ~~ 91 * 1 ~~~ + ~~~ 21$
$91 ~~~~ = ~~ 21 * 4 ~~~ + ~~~ 7$
$21 ~~~~ = ~~ 7 * 3 ~~~ + ~~~ 0 ~~~ \Rightarrow ggT(112,91) = 7$

$ggT(112, 91)= u91 + v112$
$ggT(112,91) = 7$
$~~~~~~~~ = 91 - (21*4)$
$~~~~~~~~ = 91 - ((112-91)*4)$
$~~~~~~~~ = 91 - 4 * 112 + 4 * 91$
$~~~~~~~~ = - 4 * 112 + 5 * 91 ~~~ \Rightarrow u = 5, v = -4$
### 6.5.
Induktionsanfang für $S(1)$:
$$1^2 = {\frac{1(1+1)(2*1+1)}{6}}=1 ~~~~\checkmark$$
Z.z.: $S(n) \implies S(n+1)$
$$S(n) \iff 1^2+2^2+3^2+...+n^2= {\frac{n(n+1)(2*n+1)}{6}}$$
$$\implies 1^2 + 2^2 + 3^2 + ~ ... ~ + ~n^2 + (n + 1)^2$$
$$= {\frac{n(n+1)(2n+1)}{6}} + (n+1)^2$$
$$= {\frac{n(n+1)(2n+1)+6n^2+12n+6}{6}}$$
$$= {\frac{2n^3+n^2+2n^2+n+6n^2+12n+6}{6}}$$
$$= {\frac{2n^3+9n^2+13n+6}{6}}$$
$$= {\frac{2n^3+6n^2+4n+3n^2+9n+6}{6}}$$
$$= {\frac{(n^2+3n+2)(2n+3)}{6}}$$
$$= {\frac{(n+1)(n+2)(2n+3)}{6}} ~~~ \square$$

