---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-12-17T12:23:59
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
## Instructions
![](_attachments/blatt10.pdf)
## Solutions
### 10.1.a.
**Nicht assoziativ,** da $(x \circ y) \circ z \neq x \circ ( y \circ z)$
Bsp.: $x = 1, y = 2, z = 3$
$(x \circ y) \circ z = (1 * 2 + 1) * 3 + 1 = 10$
$x \circ ( y\circ z) = 1 * (2*3 + 1) + 1 = 8$
$10 \neq 8 ~~~ \square$

**Kommutativ**, da $x * y = y * x$ (Multiplikation ist kommutativ)
### 10.1.b.
**Nicht assoziaztiv**, da $x^{(y^z)} \neq (x^y)^z$ 
Bsp.: $x = z = 2,~~~ y = 1$
$2^{1^2} = 2 \neq 4 = (2^1)^2 ~~~ \square$

**Nicht Kommutativ**, da $x^y \neq y^x$ 
Bsp.: $x = 1, ~~~ y =2$
$x^y = 1^2 = 1 \neq 2 = 2^1 = y^x ~~~ \square$
### 10.1.c.
**Nicht assoziativ:**
$x \circ (y \circ z) = 2^{x*2^{y*z}} \neq 2^{2^{x * y}*z}=( x \circ y ) \circ z$
Bsp.: 
$x = 0, y = 1, z = 2$
$x \circ (y \circ z) = 2^{0*2^{1*2}}=2^0=1$
$( x \circ y ) \circ z = 2^{(2^{0 * 1})*2}=2^4=32$
$1 \neq 32 ~~~ \square$

**Kommutativ**, da $x * y =  y * x$ in $2^{x*y}$
### 10.2.a.
$x_n...$ Anteil der Bevölkerung, der am $n$ten Tag infiziert ist.
$r: 0<r<4$
$x_{n+1}=rx_n(1-x_n)$
or: $f(n) = r * f(n-1)(1-f(n-1))$

Zz.: $\forall n \in \mathbb{N}: 0 \le x_0 \le 1 \Rightarrow 0 \le x_n \le 1$

To find the maximum, we first take the derivative:
$\frac{d}{dx} [rx(x-1)]$
$= r*\frac{d}{dx}[x(x-1)]$
$= r*\frac{d}{dx}[x^2-x]$
$= r*(2x-1)$
$max(f(x)): r * (2x-1) = 0 \rightarrow x = \frac{1}{2}$

$x_n = rx(1-x)$ kann maximal $\frac{1}{2}$ sein. Somit kann jede weitere Berechnung maximal $x_{n+1} = r * \frac{1}{2}*\frac{1}{2} = r * \frac{1}{4} < 1$ sein, da $r < 4$.
### 10.2.b.
Z.z.: $\forall n \ge 1: r \le 1 \Rightarrow x_n < \frac{1}{n}$

Induktionsanfang: $n = 1$
$x_1 = r * x_0 (1-x_0)=rx_0-rx_0^2 < \frac{1}{1} ~~~ \checkmark$
Um genau zu sein, ergeben sich bei $r \le 1$ drei Fälle:
- $x_0 = 0: x_1 = 0$
- $x_0 < 1:$ da beide Terme kleiner als 1 (und positiv) bleiben, ist deren Differenz ebenfalls kleiner als 1.
- $x_0 \ge 1:$ $x_1$ wird 0 oder negativ, wahrscheinlich sollte für $x_0$ also $0 \le x_0 \le 1$ gelten.

Induktionsvoraussetzung:
$x_n < \frac{1}{n}$

Induktionsschluss:
$$x_n < \frac{1}{n}$$
$$rx_n(1-x_n)< \frac{1}{n+1}$$
Da $r \le 1$:
$$rx_n(1-x_n) \le x_n(1-x_n) < \frac{1}{n+1}$$
..... I'm stuck

FROM UE:
Refer to pic

### 10.2.c.
// todo
### 10.3.a.

### 10.3.b.

### 10.4.a.
> Note: Ungerichtete Grafen!

$2^m$ für mögliche Kombinationen der Kanten (like binary, each bit is either 1 or 0, each edge either exists or not)
$m=n * n = n^2$ mögliche Verbin  dungen zwischen allen Knoten (the bits themselves)
-> $2^{n^2}$ 
Kinda like two Variations with recurrence.

Anders ausgedrückt:
Wir haben zwei verschachtelte Variationen mit Wiederholung: 
- Die $m = n*n = n^2$ stellt die möglichen Verbindungen zwischen allen $n$ Knoten dar (Variation mit Wiederholung über alle Knoten n: n choose 2)
- $2^m = 2^{n^2}$ gibt uns alle möglichen Kombinationen von Kanten (2 choose n^2), wobei 2 für das "existieren" der Kante steht. Die Kante existiert entweder (Fall 1), oder existiert nicht (Fall 2). Somit bekommen wir die Anzahl aller Variationen von 0 Kanten bis zu n^2 Kanten 
### 10.4.b.
$n = |V| = 4$
Wenn wir $V$ gedanklich "duplizieren", können wir die möglichen Verbindungen/Kanten zwischen diesen 2 Grafen abzählen (da jeder Knoten ja auch mit sich selbst verbunden sein kann). 
Die Anzahl der möglichen Kanten innerhalb von $V$ ist dann $n * n = 16$.

Nun können wir mit einer Kombination ohne Wiederholung die Anzahl der Grafen mit genau 2 Kanten ziehen (16 choose 2)
$$\binom{16}{2} = 120$$
### 10.4.c.
W.w.:
$f(0) = 1$
$f(n+1)=2^{2n+1}f(n)$

Z.z.: $\forall n \in \mathbb{N}: f(n) = 2^{n^2}$

Induktionsanfang:
$n = 1$
$f(0 + 1)=2^{2*0+1}*1=2$
$f(1)=2^1=2$

Induktionsschritt:
$$f(n+1)=2^{2n+1}*2^{n^2}$$
$$= 2^{2n+1+n^2}$$
$$= 2^{n^2+2n+1}$$
$$= 2^{(n+1)^2} ~~~ \square$$

### 10.5.
> "f(n) ist höchstens von der Grössenordnung g(n)" oder "g(n) ist höchstens von der Grössenordnung f(n)"

sin and cos, no matter what constant we multiply it by, at no point will one function remain "higher" than the other 

Auf deutsch:
Wenn $f(n) = sin(n)$ und $g(n) = cos(n)$, dann gibt es keine Konstante $c$ mit der wir eine der beiden Funktionen multiplizieren können, um ein $n$ zu finden ab der $\forall m \ge n: f(m)*c > g(m)$ oder $\forall m \ge n: g(m)*c > f(m)$ gilt. Die zwei Funktionen werden sich immer an gewissen Stellen schneiden.

-> $f(n) = sin(n), ~~~ g(n) = cos(n)$

WRONG: It needs to be whole numbers only!
f(n) = n for even numbers, $n^2$ for odd
g(n) = $n^2$ for odd numbers, n for even