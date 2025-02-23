---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-12T12:23:59
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/blatt05.pdf)
## Solutions
### 5.1.
$A \cap B :=\{x~|~ x \in A \land x \in B\}$
$A \cup B :=\{x~|~ x \in A \lor x \in B\}$

Für ein beliebiges $x$ : Wenn "$x$ ist in $A$ und $B$ enthalten" gilt, dann muss auch "$x$ ist in $A$ oder $B$ enthalten" gelten. Dies gilt jedoch nur in eine Richtung:
$$\forall x: ((x \in A \land x \in B) \Rightarrow (x \in A \lor x \in B)) \land ((x \in A \lor x \in B)\centernot\Rightarrow (x \in A \land x \in B))$$
$$\iff$$
$$(x \in A \cup B \Rightarrow x \in A \cap B) \land (x \in A \cap B \centernot\Rightarrow x \in A \cup B)$$
$A \cup B$ enthält also mindestens jedes Element in $A \cap B$.
$A \cap B$ enthält aber nicht unbedingt jedes Element in $A \cup B$.
Daraus folgt $A\cap B \subseteq A \cup B$.

Formaler ausgedrückt: 
$$A \cap B \subseteq A \cup B$$
$$A \cap B := \{ x ~~|~~ x \in A \land x \in B\}$$
$$A \cup B := \{ x ~~|~~ x \in A \lor x \in B \}$$
$$A \cap B \subseteq A \cup B \iff [\forall x \in A \land x \in B \Rightarrow x \in A \lor x \in B]$$
### 5.2. $\checkmark$
$R_1 \cup R_2 = \{ (1,a), (1,b), (2,a), (3,b), (2,b) \}$
$R_1 \cap R_2 = \{ (1,b), (3,b) \}$
$R_1 \backslash R_2 = \{ (1,a), (2,a) \}$
### 5.3.a. $\checkmark$
$R = \{ (1,1), (2,2), (3,3), (4,4), (5,5), (1,2)\}$
### 5.3.b. $\checkmark$
$R = \{ (1,2), (2,3), (3,4), (4,5) (1,3), (1,4), (1,5), (2,4), (2,5), (3,5) \}$
### 5.3.c. $\checkmark$ 
$R = \{ (1, 2), (2,1), (2,3), (3,2), (1,3), (3,1) \}$ 
Note: the empty set would count too lol
### 5.3.d. $\checkmark$
$R = \{ (1,1), (2,2), (3,3), (4,4), (5,5)\}$
### 5.4.
<span style="color:red">I didn't put enough effort into this, pls don't look</span>
Definitionen:
Reflexiv: $\forall a \in M : (a,a) \in R$
Symmetrisch: $(a,b) \in R \implies (b,a) \in R$
Antisymmetrisch: $[(a,b) \in R \land (b,a) \in R)] \implies a = b$

>  Für eine Relation R auf der Menge M zeige man: genau dann, wenn R reflexiv, symmetrisch und antisymmetrisch ist, so ist R die Gleichheitsrelation (d.h. a R b ⇐⇒ a = b).

$$\forall a, b \in M: aRa \land bRb \land (aRb \Rightarrow bRa) \land (aRb \land bRa \Rightarrow a = b)$$
Da es für jedes $aRb$ ein $bRa$ geben muss, gilt a = b für alle Paare in R:
$$\forall a, b \in M : aRa \land bRb \land (aRb \lor bRa \Rightarrow a = b)$$
Gleichzeitig kann die Relation aber nicht leer sein, da $aRa$ bzw. $bRb$ durch die Reflexivität immer in der Relation vorhanden sein muss. Alle Elemente aus $M$ müssen also in R vorkommen. Da für $aRa$ trivialerweise $a = a$ gilt (und für $bRb$ ebenfalls), gilt nun:
$$\forall a, b \in M: aRa, bRb \in R \land (aRb \lor bRa \Rightarrow a = b)$$
$$\implies$$
$$\forall a, b \in M : R \neq \emptyset \land (aRb \lor bRa \Rightarrow a = b)$$
Somit bleibt uns eine nicht-leere Relation (Korrektion: eine Relation, die alle Elemente in M beinhaltet) über $M$ in der jedes Paar $a = b$ impliziert, es bleibt uns also die Gleichheitsrelation.
### 5.5.
Z.z.: $(A \subseteq B) \iff (A \cap B = A)$
$$A \subseteq B$$
$$\iff$$
$$\forall x \in A: x \in B$$
$$\iff$$
$$\forall x \in A: (x \in A) \land (x \in B)$$
$$\iff$$
$$\forall x \in A: x \in \{x~|~x \in A \land x \in B\}$$
$$\iff$$
$$\forall x \in A: x \in A \cap B$$
$$\iff$$
$$A \cap B = A ~~~ \square$$
Z.z: $A \cup B = B \implies A \cap B = A$
$$A \cup B = B$$
$$\implies$$
$$A\backslash B = \emptyset$$
$$\implies$$
$$ \forall x \in A: x \in B$$
$$(\text{from first part})\implies$$
$$A \cap B = A$$
Z.z: $A \cap B = A \implies A \cup B = B$
$$A \cap B = A$$
$$\implies$$
$$\forall x \in A \cup B : x \in A \lor x \in B \backslash A. $$
$$\implies$$
$$x \in B$$
$$\implies$$
$$A \cap B = A$$
<span style="color:red">I didn't put enough effort into this, pls don't look</span>


KORREKTION:
Wir können es in drei aussagenlogische formeln umwandeln:
$a \rightarrow b, (a \land b) \leftrightarrow b, (a\lor b) \leftrightarrow b$
Daraus können wir eine Wahrheitstafel bilden, für alle drei statements sind die Wahrheitswerte gleich...

| a   | b   | $a \rightarrow b$ | $(a \land b) \leftrightarrow b$ | $(a \lor b) \leftrightarrow b$ |
| --- | --- | ----------------- | ------------------------------- | ------------------------------ |
| 0   | 0   | 1                 | 1                               | 1                              |
| 0   | 1   | 1                 | 1                               | 1                              |
| 1   | 0   | 0                 | 0                               | 0                              |
| 1   | 1   | 1                 | 1                               | 1                              |
