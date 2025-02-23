---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-12-03T12:23:59
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt08.pdf)

## Solutions
### 8.1.a.
> **Definition 3.16 (Graphenisomorphie)**
> G1 = (V1, E1) und G2 = (V2, E2) seien endliche Graphen. G1 und G2 heißen isomorph, in Zeichen G1 ≃ G2, falls eine bijektive Abbildung φ : V1 → V2 existiert, so dass (v , w ) ∈ E1 ⇐⇒ (φ(v ), φ(w )) ∈ E2 (Kurzschreibweise G2 = φ(G1)), sonst heißen sie nichtisomorph. Ist φ nicht bijektiv, so spricht man von Graphen-Homomorphie.
> Für G1 ≃ G2 gilt |V1| = |V2| , |E1| = |E2|

$G_1$
```plantuml-svg

digraph G {
	resolution=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]

	1 -> 2
	2 -> 3
	3 -> 4
	4 -> 5
	1 -> 5
}
```
$G_1$ und $G_2$ sind Isomorph:
$\phi(1) = 3$
$\phi(2) = 4$
$\phi(3) = 5$
$\phi(4) = 2$
$\phi(5) = 1$
$G_1 = \phi(G_2), ~~G_2=\phi^{-1}(G1)$
### 8.1.b.
$G_1$
```plantuml-svg
digraph G {
    dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]

	1 -> 2
	2 -> 3
	4 -> 3
	5 -> 4
}
```
$G_2$
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]

	1 -> 2
	2 -> 3
	3 -> 4
	5 -> 4
}
```
$G_1$ und $G_2$ sind nicht isomorph. Es gibt keinen Weg, die Knoten "umzubenennen" um von einem Graph auf den anderen zu kommen: in $G_2$ folgen bis zu 4 Knoten aufeinander, was in $G_1$ gar nicht erst vorkommt.
### 8.1.c.
$G_1$ und $G_2$ sind Isomorph:
$\phi(1) = 3$
$\phi(2) = 5$
$\phi(3) = 2$
$\phi(4) = 4$
$\phi(5) = 1$
$G_1 = \phi(G_2), ~~G_2=\phi^{-1}(G1)$
### 8.2.
Labels: (roughly) how many people are responsible for appointing the child nodes. (Note: 6 Mio people over the age of 16)

(Volk: Wahl für Nationalrat, Bundespräsident
Bundespräsident: Ernennung des Bundesminister, Bundeskanzler
Bundeskanzler: Hat die Wahl über den Bundesminister)

```plantuml-svg
digraph G {
	dpi=61
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=rectangle fontcolor="#eeeeee" style=filled fillcolor="#333333"]
	edge [color="#666666"]

	Volk -> Nationalrat [label="6 Mio." fontcolor="#666666"]
	Volk -> Bundespräsident [label="6 Mio." fontcolor="#666666"]
	Nationalrat -> Bundespräsident [label="183" fontcolor="#666666"]
	Bundespräsident -> Bundeskanzler [label="1" fontcolor="#666666"]
	Bundeskanzler -> Bundesminister [label="1" fontcolor="#666666"]
	Bundespräsident -> Bundesminister [label="1" fontcolor="#666666"]
}
```
### 8.3.
>Wir nennen eine Relation R asymmetrisch, wenn aus (x, y) ∈ R immer (y, x) /∈ R folgt. Ein Beispiel hierfuer ist die strikte < -Relation. Beweisen oder widerlegen Sie: jede asymmetrische Relation ist auch antisymmetrisch.

Antitsymmetrisch: $[(a, b) ∈ R ∧ (b, a) ∈ R] ⇒ a = b$. Intuitiv: wenn beide Relationen gelten, dann muss es sich um das gleiche Element handeln.

Intuition:
Asymmetry would imply that $a < b$ and $a > b$, cannot be true at the same time (unlike $a \ge b$ and $a \le b$ for $a = b$.). But since both can never be true at the same time in an asymmetric relation, the left hand side of the implication for the definition of asymetry is always false, which then means it is always true. 

Z.z.: $(\forall (x, y) ∈ R: (y, x) \not∈ R) \implies ([(x, y) ∈ R ∧ (y, x) ∈ R] ⇒ x = y)$

Wir wissen, dass (x, y) und (y, x) nicht beide in der Relation sein können:
$$(\forall (x, y) ∈ R: (y, x) \not∈ R))$$
$$\implies (\forall (x, y) ∈ R: ((x, y) ∈ R ∧ (y, x) ∈ R \Leftrightarrow \bot))$$
$$\implies (\bot \Rightarrow x = y) \implies \top ~~~ \square$$

### 8.4.
Coming up with S(n)
```
S(0) = 1
S(1) = 2 = S(0) * 2
S(3) = 4 = S((3 - 1) / 2) * 2
S(7) = 8 = S((7 - 1) / 2) * 2
S(15) = 16 = S((15 - 1) / 2) * 2
```
$S(n) \Leftrightarrow n + 1 = S((n-1)/2)*2$
Wir definieren $S(0) = 1$, da es bei keinen inneren Knoten (nur ein Knoten im ganzen Baum/nur Wurzel), nur ein Blatt gibt (die Wurzel selbst).

Induktionsanfang
$S(1) = S(0) * 2 = 1 * 2 = 2 = 1 + 1 ~~~~~ \checkmark$

Induktionsschritt
??? I'm not sure what to do here if I'll be honest, especially with "Use the recursive structure"...

Attempt number two:
$n \iff K(m) \iff 2^0 + 2^1 + 2^2 + ... + 2^{m-1}$
$S(n) \iff 1 + K((n - 1) / 2)$
$\implies S(n+1) = 1 + n + 2^{((n+1)-1)/2}$

$$n + 1 + $$
I think I'll just leave this one be... 

UE Solution: Literally just need to argue that, if we take an inner node, it produces two leaf nodes: -1+2=+1, leading to one extra leaf node compared to inner nodes overall.
### 8.5.a.
1.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	1 -> 2
	2 -> 3
}
```
2.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	2 -> 1
	1 -> 3
}
```
3.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	3 -> 1
	2 -> 3
}
```
4.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	1 -> 2
	2 -> 3
	3 -> 1
}
```
5.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	1
	2
	3
}
```
6.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	1 -> 2
	3
}
```
7.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	2 -> 3
	1
}
```
8.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	1 -> 3
	2
}
```
### 8.5.b.
1.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="TB"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	1 -> 2
	1 -> 3
}
```
2.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="TB"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	2 -> 3
	2 -> 1
}
```
3.
```plantuml-svg
digraph G {
	dpi=50
	rankdir="TB"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none]

	3 -> 2
	3 -> 1
}
```
