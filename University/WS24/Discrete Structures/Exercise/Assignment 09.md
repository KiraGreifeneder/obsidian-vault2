---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-12-10T23:23:59
---
  Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt09.pdf)
## Solutions
### 9.1.a.
> a **cyclic permutation** is a [permutation](https://en.wikipedia.org/wiki/Permutation "Permutation") consisting of a single cycle

Diese Aussage ist falsch.
Wir nehmen folgendes Beispiel her, um die Aussage zu widerlegen:
$$
\pi = (1, 2)(3) =
\pmatrix{
  1 & 2 & 3 \\ 
  2 & 1 & 3
}
$$
$$
\pi^2 = \pi \circ \pi
= \pmatrix{
  1 & 2 & 3 \\ 
  2 & 1 & 3
}
\pmatrix{
  1 & 2 & 3 \\ 
  2 & 1 & 3
}
= \pmatrix{
  1 & 2 & 3 \\ 
  1 & 2 & 3
}
$$
Die neue Permutation $\pi^2$ enthält nun nur mehr Fixpunkte, also eigentlich keine Zyklen oder 3 Zyklen, je nach Ansicht. Jedenfalls gibt es nicht mehr genau einen Zyklus, somit ist $\pi^2$ nicht zyklisch.
### 9.1.b.
Diese Aussage ist wahr.
Da $\pi^2: M \rightarrow M$ zyklisch ist, gilt
$$i_1, i_2, ... i_k \in M: i_1 \mapsto i_2 \mapsto i_3 \mapsto ... \mapsto i_k \mapsto i_1$$
Für alle anderen Elemente, also für die Fixpunkte $j \in M \backslash \{i_1,...,i_k\}$ gilt $j \mapsto j$.

...
### 9.1.c.
Diese Aussage ist falsch.
Wir nehmen folgendes Beispiel her, um die Aussage zu widerlegen:
$$
\pi = \pmatrix{
  1 & 2 & 3 \\ 
  2 & 1 & 3
}
$$
$$
\sigma = \pmatrix{
  1 & 2 & 3 \\ 
  1 & 2 & 3
}$$
$$
\pi^2 = 
\pmatrix{
  1 & 2 & 3 \\ 
  1 & 2 & 3
}
= \sigma^2
$$
wobei $\pi \not= \sigma$. $\square$
### 9.1.d.
Diese Aussage ist falsch.
Wir nehmen folgendes Beispiel her, um die Aussage zu widerlegen:
$$
\pi = \pmatrix{
  1 & 2 & 3 \\ 
  2 & 1 & 3
}
$$
$$
\sigma = \pmatrix{
  1 & 2 & 3 \\ 
  1 & 2 & 3
}$$
$$
\pi \circ \sigma = 
\pmatrix{
  1 & 2 & 3 \\ 
  2 & 3 & 1
} = \sigma \circ \pi
$$
wobei $\pi \not= \sigma$. $\square$
### 9.2.
$\pi = (1,5,4,9,6,2)(3,8,7)$
### 9.3.a.
$c > 0: f(1) \le c * n \forall n \ge n_0$
$f^2(n) \le c^2 * n ^2 \forall n \ge n_0$
$c^2 \in O(n^2)$
### 9.3.b.

### 9.3.c.
$c = 2$
$n = 1$
$\sqrt{1 + 1} \le 2 \sqrt{1}$
$\approx1,41 \le 2$
$\sqrt{n+1}$
### 9.3.d.

### 9.4.
Alice:
```plantuml-svg
digraph G {
dpi=60
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]
	1 -> 2
	2 -> 2
	2 -> 3
	3 -> 1
}
```
Bob:
```plantuml-svg
digraph G {
dpi=60
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]
	1 -> 1
	1 -> 3
	2 -> 1
	3 -> 2
}
```
Beide haben einen Isomorphismus desselben Graphen. Beide Adjazenzmatritzen sind also valide. Bob und Alice sollten sich schämen.
### 9.5.a.
Variation ohne wiederholung: 
$\frac{6!}{(6-1)!} + \frac{6!}{(6-2)!} + \frac{6!}{(6-3)!} + \frac{6!}{(6-4)!} + \frac{6!}{(6-5)!} + \frac{6!}{(6-6)!} = 1956$
### 9.5.b.
$\infty$, da $a, c, d, e, f$ beliebig oft wiederholt werden dürfen
### 9.5.c.


Z.z.:  $\binom{n}{r} \binom{r}{k}$ = $\binom{n}{k} \binom{n-k}{r-k}$ bzw.
$$\frac{n!}{r!(n-r)!}*\frac{r!}{k!(r-k)!} \iff \frac{n!}{k!(n-k)!}*\frac{(n-k)!}{(r-k)!((n-k)-(r-k))!}$$
Proof:
$$\frac{n!}{k!(n-k)!}*\frac{(n-k)!}{(r-k)!((n-k)-(r-k))!}$$
$$= \frac{n!}{k!(n-k)!}*\frac{(n-k)!}{(r-k)!(n-r)!}$$
$$= \frac{n!}{k!}*\frac{1}{(r-k)!(n-r)!}$$
$$= \frac{n!}{k!(r-k)!(n-r)!}$$
$$= \frac{n! r!}{k!r!(r-k)!(n-r)!}$$
$$= \frac{n!}{r!(n-r)!}*\frac{r!}{k!(r-k)!} ~~~~ \square$$
