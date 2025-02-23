---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-26T12:23:59
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt07%201.pdf)
## Solutions
### 7.1.a. $\checkmark$ 
$[abab]=\{y \in \sum^* | ~y \sim abab\} = \{ abab, baba \}$
$[abba] = \{ abba, bbaa, aabb, baab \}$. 
### 7.1.b.
>Damit eine solche Funktion wohldefiniert ist, muss man somit zeigen, dass der Funktionswert $f ([x ]∼ )$ unabhi can't believe i got this right lol)ängig vom konkreten Repräsentanten $x$ der Äquivalenzklasse $[x ]∼$ ist. Formal zu zeigen: für zwei beliebige $x \sim y$, d.h. mit $[x ] = [y ]$, gilt auch immer $f ([x ]) = f ([y ])$

The function returns the length of the equavlanece class? 
Since any combination $\rho \sigma$ just consists of two parts of w, it will always have the same length as w. Therefore it is wohldefiniert?

Let there be two arbitraty but fixed numbers $w, v \in \sum^*$ such that $[w]_\sim = [v]_\sim \land w \ne v$.
$$\implies \exists c,d \in {\textstyle\sum}^*: w = cd \land v =dc$$
$|cd| = |w| = |c| + |d|$
$|dc| = |v| = |d| + |c|$
$$\implies |w| = |d| + |c| = |v|$$
$$\implies f([w]) = f([v]) ~~~ \square$$
### 7.1.c.
We could show that it is linkstotal, rechtseindeutig and linkseindeutig, but not rechtstotal. Although the angabe doesn't necessarily say we need to write a proof.

The function: generates an equivalence class from a word.

This is not injective, because two different words can have the same equivalence class:
$$\exists v,w \in \textstyle \sum^*: [w]_\sim = [v]_\sim \land w \ne v $$
$$\implies \exists v,w \in \textstyle \sum^*:f(w)=[w]=[v]=f(v)$$
### 7.2.
Indukstionsbeweis.
#### Induktionsanfang
$S(0) = {\frac{1}{(0+1)(0+2)}} = \frac{1}{2}=1-{\frac{1}{0+2}} ~ \checkmark$
#### Induktiosschritt
$S(n) = \frac{1}{(0+1)(0+2)} + \frac{1}{(1+1)(1+2)} + ... + \frac{1}{(n+1)(n+2)}$
$\implies S(n+1) =$
$$ 1 + \frac{-1}{n+2} + \frac{1}{((n+1)+1)((n+1)+2)}$$
$$1 + \frac{-1}{n+2} + \frac{1}{(n+2)(n+3)}$$
$$1 + \frac{-n-3}{(n+2)(n+3)} + \frac{1}{(n+2)(n+3)}$$
$$1 + \frac{-n-2}{(n+2)(n+3)}$$
$$1 - \frac{n+2}{(n+2)(n+3)}$$
$$1 - \frac{1}{n+3} ~ \square$$
### 7.3.a.
this should be gerichtet oof
```plantuml-svg

digraph G {
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=2 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]


	
	1 -> 2 
	2 -> 3
	2 -> 4
	3 -> 4
	3 -> 1
	4 -> 1
}
```
### 7.3.b.
```plantuml-svg
digraph G {
	dpi=55
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.8 color="#666666" penwidth=2 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none penwidth=2]

	
	aab -> aaa
	bbb -> abb
	aaa -> aba
	aaa -> baa
	abb -> aab
	abb -> aba
	bab -> aab
	bab -> bbb
	baa -> bab
	aba -> bba
	bba -> baa
	bba -> bbb
}
```
### 7.3.c.
```plantuml-svg
digraph G {
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.4 color="#666666" penwidth=2 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666" arrowhead=none penwidth=2]

	a -> d
	d -> b
	b -> e
	e -> c
	c -> a
}
```
### 7.4.
We can split the field into squares, in this case 4x7 (judging by the wall sizes)
If the top left is (0,0) we get the following layout, where (3,0) is the entrance and (0,6) is the exit.

| (0,0) | (0,1) | (0,2) | (0,3) | (0,4) | (0,5) | (0,6) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| (1,0) | (1,1) | (1,2) | (1,3) | (1,4) | (1,5) | (1,6) |
| (2,0) | (2,1) | (2,2) | (2,3) | (2,4) | (2,5) | (2,6) |
| (3,0) | (3,1) | (3,2) | (3,3) | (3,4) | (3,5) | (3,6) |
We can visualize the valid paths using a tree:
```plantuml-svg
digraph G {
    bgcolor=transparent
	node [margin=0 width=0.2 color="#666666" penwidth=1 shape=circle fontcolor="#eeeeee" fontsize=10 style=filled fillcolor="#333333"]
	edge [color="#666666" penwidth=1]
	
	"(3,0)" -> "(2,0)"
	"(2,0)" -> "(1,0)"
	"(2,0)" -> "(2,1)"

	"(2,1)" -> "(2,2)"
	
	"(2,2)" -> "(3,2)"
	"(3,2)" -> "(3,1)"
	
	"(2,2)" -> "(1,2)"
	"(1,2)" -> "(1,3)"
	"(1,3)" -> "(2,3)"

	"(1,0)" -> "(0,0)"
	"(0,0)" -> "(0,1)"
	
	"(0,1)" -> "(1,1)"
	
	"(0,1)" -> "(0,2)"
	"(0,2)" -> "(0,3)"
	"(0,3)" -> "(0,4)"
	"(0,4)" -> "(1,4)"
	"(1,4)" -> "(2,4)"
	"(2,4)" -> "(3,4)"

	"(3,4)" -> "(3,3)"
	
	"(3,4)" -> "(3,5)"
	"(3,5)" -> "(3,6)"
	
	"(3,6)" -> "(2,6)"
	
	"(2,6)" -> "(2,5)"
	"(2,5)" -> "(1,5)"
	"(2,5)" -> "(0,5)"
	
	"(2,6)" -> "(1,6)"
	"(1,6)" -> "(0,6)"
	
	"(0,6)" [color=blue]
}
```
I should have really taken a "Turns and Walls" approach lmao. Because this is not presentable... 

Knotenmenge:
$W = \{0, 1, 2, 3, 4, 5\}$ (width of the labyrinth)
$H = \{0, 1, 2, 3\}$ (height of the labyrinth)
$V = W \times H$ (Vertices)

Kantenmenge:
$E = \{((3,0), (2,0))~((2,0), (1,0))~((2,0), (2,1))~((2,1), (2,2))~((2,2), (3,2)),$ 
$((3,2), (3,1))~((2,2), (1,2))~((1,2), (1,3))~((1,3), (2,3))~((1,0), (0,0)),$ 
$((0,0), (0,1))~((0,1), (1,1))~((0,1), (0,2))~((0,2), (0,3))~((0,3), (0,4)),$ 
$((0,4), (1,4))~((1,4), (2,4))~((2,4), (3,4))~((3,4), (3,3))~((3,4), (3,5)),$ 
$((3,5), (3,6))~((3,6), (2,6))~((2,6), (2,5))~((2,5), (1,5))~((2,5), (0,5)),$ 
$((2,6), (1,6))~((1,6), (0,6))\}$

### 7.5.a. $\sim\checkmark$
Z.z.: $\forall x,y \in A:f(x) \ne f(y) \implies f^{-1}(f(A'))=A'$
Since it is injective, every result $f(A')$ can be traced back to a unique $A'$. Therefore taking the inverse of $f(A')$ will always lead back to $A'$.
$$\forall X,Y \subseteq A:f(X) \ne f(Y)$$
$$\implies \exists B' \subseteq B: f(A') = B' \land f(B')$$

Proof? kinda, still feels like the intuition...
Assume there is an $f(A') = B'$ such that $f^{-1}(B') \ne A'$.

Then there must be another $A'' \subseteq A$ for which $f^{-1}(B')=A''$. But that would go against our premise that $f$ is injective, since that would imply that $f(A'') = f(A') = B'$. idk.

Therefore $f^{-1}(B') = A' \iff f^{-1}(f(A'))=A'$.
### 7.5.b. $\sim\checkmark$
Z.z.: $\forall B' \subseteq B : f^{-1}(B') \ne \emptyset \implies f(f^{-1}(B'))=B'$

Surjective means that for every element x in B, there is an element y in A so that f(y) = x. We need to show that if $f^{-1}(B')=A'$, then $f(A')=B'$. This is only guaranteed if $f$ is surjective, as otherwise $f^{-1}(B') = \emptyset$ would be possible, and $f(\emptyset) = B'$ will not necessarily hold.
### 7.5.c.
I don't see the point of doing this rn when it has zero effect on my grade. 😅