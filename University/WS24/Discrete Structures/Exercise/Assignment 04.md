---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-05T12:23:59
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
<br><br>
## Instructions
![](_attachments/blatt04.pdf)
## Solutions
### 4.1.a
Wenn $p$ prim ist, und $a$ das Produkt von $b$ und $r$ ist, und $p$ ein Teiler von $r$ ist,
dann ist $p$ auch ein Teiler von $a$ oder $b$.
### 4.1.b
Es lassen sich a und b wie folgt darstellen 
$a=p_1*p_2*...*p_n$
$b=p_1*p_2*...*p_n$
Wobei $p_n$ Primzahlen sind. Daraus folgt, dass wenn $p|r$, muss einer dieser $p_n = p$, somit gilt auch $p|r \lor p|b$
### 4.2.
a) $x=\frac{1}{2}:x\not\gt \frac{1}{x} = 2$
b) $a=-1:\frac{a-1}{a} = 2\in \mathbb{Z}$
### 4.3.
a) Falsch, es gibt einen versteckten "für allen" Quantor. Die korrekte verneinung wäre "Es gibt zumindest eine Kombination von zwei irrationalen Zahlen dessen Summe rational ist."
b) Die Verneinung ist inkorrekt, da der Quantor nicht beachtet wird. Die korrekte Verneinung wäre: "Für mindestens eine ganze Zahl $n$ mit $n^2$ ungerade ist $n$ nicht ungerade (bzw. gerade)".

b) aber formal ausgedrückt:
Original: $\forall n \in \mathbb{Z}:(n^2 \text{ ist ungerade} \Rightarrow n \text{ ist ungegerade})$
Korrekte Verneinung: $\exists n \in \mathbb{Z}:(n^2 \text{ ist ungerade} \land n \text{ ist gerade})$
### 4.4.
a)  Wahr.
b) Falsch. 0 ist eine Zahl. $\emptyset$ ist eine leere Menge. Eine Zahl ist keine Menge. (Im Von Neumann Model wäre dies sogar wahr, im Allgemeinen aber trotzdem falsch.)
c) Falsch. Die leere Menge ist leer, und kann somit auch keine weitere leere Menge beinhalten
d) Wahr.
e) Wahr.
f) Falsch. Die rationalen Zahlen sind keine Untermenge, sondern eine Übermenge der ganzen Zahlen.
### 4.5.
a) Da A leer ist, ist A eine Untermenge von B. ($A \subset B$)
b) A ist keine Teilmenge von B, da sie Mehr Elemente beinhaltet als B. A ist auch keine Obermenge von B, da sie die Zahl 5 nicht beinhaltet. 
