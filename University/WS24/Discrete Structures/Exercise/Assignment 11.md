---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-12-31T12:23:59
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt11.pdf)
## Solutions
### 11.1.a
> Sei S die Menge aller reellen Zahlen mit Ausnahme von −1. Auf S werde durch a ◦ b = a + b + a · b eine Verknüpfung definiert.

> Zeigen Sie, dass ◦ eine binäre Operation auf S ist (also stets ein Ergebnis innerhalb von S liefert)

Da $+$ und $\cdot$ sind binäre operationen auf den reellen Zahlen. Müssten aber zeigen, dass sie auf $\mathbb{R} \backslash \{-1\}$ ebenfalls binär sind...

Igor said he wants to do 1., so I won't even bother

### 11.1.b. 
> Man zeige, dass (S, ◦) eine Gruppe ist

**Assoziativität:**
$a \circ b = a + b + ab = b + a + ba = b \circ a$
Durch die Assoziativität der Addition und Multiplikation ist auch $G$ Assiozativ.

**Neutrales Element/Identität:**
$e = 0$
Beispiel: $a \circ 0 = a + 0 + a \cdot 0 = a$

**Inverses Element:**
Wir suchen ein $a^{-1}$ mit $a \circ a^{-1} = a + a^{-1} +a \cdot a^{-1} = 0 = e$:
$$a+a^{-1}+a \cdot a^{-1} = 0$$
$$a+ a^{-1}\cdot(1+a)=0$$
$$a^{-1} = - \frac{a}{1+a}$$
Wenn wir dieses $b$ nun einsetzen:
$$a \circ (- \frac{a}{1+a}) $$
$$= a - \frac{a}{1+a} - a\cdot(\frac{a}{1+a})$$
$$= a- \frac{a-a^2}{1+a}$$
$$= a- \frac{a\cdot (1+a)}{1+a}$$
$$a-a=0$$

Somit sind die 3 Bedingungen für eine Gruppe erfüllt.
### 11.1.c.
> Man löse in (S, ◦) die Gleichung 3 ◦ x ◦ 5 = 7

$$3 \circ x \circ 5 = 7$$
$$3 \circ (x+5+5x) = 7$$
$$3 \circ (5+6x) = 7$$
$$3 + (5+6x) + 3\cdot (5+6x) = 7$$
$$8 + 6x + 15 + 18x = 7$$
$$23 + 24x = 7$$
$$24x = -16$$
$$x = - \frac{16}{24} = - \frac{2}{3}$$
### 11.2.
Bro wouldn't this take forever

### 11.3.a. !!
> Stellen Sie die Verknüpfungstabelle für die Gruppe ({1, 2, 3, 4} , ·) auf, mit · als Multiplikation modulo 5.

Wrong oof

| **$\cdot$** |  1  |  2  |  3  |  4  |
| :---------: | :-: | :-: | :-: | :-: |
|    **1**    |  1  |  2  |  3  |  4  |
|    **2**    |  2  |  4  |  1  |  3  |
|    **3**    |  3  |  1  |  4  |  2  |
|    **4**    |  4  |  3  |  2  |  1  |

### 11.3.b. !!
>Der Graph G habe die Knotenmenge Z5 und eine Kante von v nach w, wenn v ≡ 2w (mod 5) gilt. Zeichnen Sie den Graphen G.

```plantuml-svg
digraph G {
dpi=60
	rankdir="LR"
    bgcolor=transparent
	node [margin=0 width=0.5 color="#666666" penwidth=1.5 shape=circle fontcolor="#eeeeee" fontsize=20 style=filled fillcolor="#333333"]
	edge [color="#666666"]
	
	2 -> 1
	4 -> 2
	1 -> 3
	3 -> 4
	0 -> 0
}
```
This shows that the group is cyclical somehow. Every mod 5 group will be cyclical. 
### 11.4. !!
![500](_attachments/Pasted%20image%2020241229161151.png)
#### Assoziativität:
$(a,b)*(c,d)=(ac-bd,ad+bc) = (ca-db,cb+da) = (c,d)*(a,b)$
Durch die Assoziativität der Addition und Multiplikation ist auch $G$ Assiozativ.

#### Neutrales Element/Identität:
Wir suchen das neutrale Element $e = (e_1, e_2)$
Damit $(a,b)*(e_1,e_2)=(a,b)$ gilt, muss folgendes gelten:
1. $ae_1-be_2 = a$
2. $ae_2+be_1 = b$

Setzen wir $e = (1,0)$ ein:
1. $a\cdot 1-b \cdot 0 = a$
2. $a\cdot 0+b\cdot 1 = b$

Es gilt also
$(a,b)*(e_1,e_2)=(a,b)$ und
$(e_1,e_2)*(a,b)=(a,b)$


Beispiel: 
$(a,b)*(1,0)=(a*1-b*0,a*0+b*1)=(a,b)$
$(1,0)*(a,b)=(1*a-0*b,1*b+0*a)=(a,b)$

#### Inverses Element:
Wir suchen ein Element $n = (n_1,n_2)$, sodass folgendes gilt:
$(a,b) * (n_1, n_2) = (1, 0) = e$
$(n_1, n_2) * (a,b) = (1, 0) = e$

also muss folgendes gelten:
1. $an_1-bn_2 = 1$
2. $an_2+bn_1 = 0$

- For this part:
	- ![500](_attachments/Pasted%20image%2020250115195720.png)

Da die erste gleichung wie der "echte" Teil einer Komplexen Zahl aussieht, und die 2. wie der imaginäre Teil, können wir für die beiden Gleichungen die selbe Konstruktion wählen wir für das Multiplikative Inverse über den komplexen Zahlen.
![200](_attachments/Pasted%20image%2020250115201044.png)
Wobei der erste Term dem "Echten" Teil entspricht und der Rechte dem imaginären. Jedoch haben wir keine Komplexen Zahlen, und können einfach die Terme übernehmen ohne dem $i$ etc.
$$n_1=\frac{a}{a^2+b^2}$$
$$n_2=-\frac{b}{a^2+b^2}$$
Damit sind beide Voraussetzungen erfüllt:
**1:**
$$an_1-bn_2=a \cdot \frac{a}{a^2+b^2}-b \cdot (-\frac{b}{a^2+b^2})$$
$$=\frac{a^2}{a^2+b^2}+ \frac{b^2}{a^2+b^2} = 1$$
**2:**
$$an_2+bn_1 = a \cdot (-\frac{b}{a^2+b^2}) + b \cdot \frac{a}{a^2+b^2}$$
$$= -\frac{ab}{a^2+b^2} + \frac{ab}{a^2+b^2} = 0$$
Dies funktioniert, weil $(0,0)$ nicht in der Menge $G$ enthalten ist, also $a, b \neq 0$. Somit kann es keine Division durch Null geben.

Somit sind alle drei Voraussetzungen erfüllt, und $G$ ist eine Gruppe.


REVISED; IN CLASS METHOD
![[University/WS24/Discrete Structures/Exercise/_attachments/Tldraw 2025-01-16 11.59AM.md]]
#diskrete-todo

Sth like the abgeschlossenheit is trivial
### 11.5.a. !!
Nein. Beispiel: $a \circ b = d \neq c = b \circ a$
### 11.5.b. !!
Ja. Die $1$ ist das neutrale Element.
### 11.5.c. !!
 $1^{-1}, a^{-1},b^{-1},c^{-1},d^{-1}$ sind ebenfalls jeweils $1, a,b,c,d$, da hier eine Verknüpfung eines Elements mit sich selbst wieder das neutrale Element ergibt. 
Diese sind links- und rechtsinvers.
### 11.5.d. !!
$d \circ x = a \circ b$
$d \circ x = d$
$x = 1$
Ja. $x$ muss das neutrale Element sein.
### 11.5.e. !!
$(a \circ b) = d \circ c = a$
$a \circ (b \circ c) = a \circ d = c$
Die Ergebnisse sind nicht gleich. Die Operation ist also nicht Assoziativ.