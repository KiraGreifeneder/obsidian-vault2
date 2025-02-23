---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Discrete Structures/Lecture]]"
completion-status: In progress
---
## Lecture material
![](_attachments/DiskreteStrukturen_1.pdf)
## Summary/Notes
### Aussagen
Aussagen, sind Prädikate an ein bestimmtes Subjekt. Aussagen sind daher entweder wahr oder falsch.

Die Negation einer Aussage ist klar: "3 ist eine Primzahl", $\neg$"3 ist eine Primzahl" = "3 ist keine Primzahl"
### Implikation
WENN-DANN Gebilde. p -> q bzw. WENN p DANN q bzw. AUS p FOLGT q.

Die Negation einer Implikation ist keine Implikation. $p \rightarrow q: \neg(p \rightarrow q) \iff (p \land \neg q)$. 
Die Kontraposition: $(\neg q \rightarrow \neg p) \iff (p \rightarrow q)$
Inverse Implikation: $(\neg q \rightarrow \neg p) \centernot\iff (p \rightarrow q)$
Umkehrung der Implikation: $p \rightarrow q \centernot\iff q \rightarrow p$

### Äquivalenz
p <-> q bedeutet p GENAU DANN, WENN q, bzw. p DANN, UND NUR DANN, WENN q.

 Bei der Negierung gilt dann: 
 $\neg(A \xleftrightarrow{} B)  ~~\text{is equivalent to}~~ \neg A \xleftrightarrow{} B,~~ A \xleftrightarrow{} \neg B$  -> It's an XOR

### Tautologie, Kontradiktion, Erfüllbarkeit
Eine **Tautologie** ist bei allen Belegungen ihrer Variablen wahr. Wird mit $\top$ gekennzeichnet.
- Ex.: $p \vee \neg p \vee q$ 

Eine **Kontradiktion** ist bei allen Belegungen ihrere Variablen falsch. Wird mit $\bot$ gekennzeichnet.
- Ex.: $p \wedge \neg p \wedge q$ 

Eine Formel ist **Erfüllbar**, wenn es mindestens eine Belegung ihrer Variablen gibt, für die sie wahr ist.
- Ex.: $\neg (p \rightarrow q)$ ist erfüllbar, da p = w und q = f die Formel insgesamt wahr macht, da dies besagt, dass es einen Fall gibt, in dem aus p nicht 1 folgt.

### Logische Äquivalenz
Die Beziehung $r_1 \iff  r_2$ ist nicht dasselbe wie die reine Äquivalenz ($\leftrightarrow$). Die Logische Äquivalenz besagt, dass $r_1$ und $r_2$ dieselben Wahrheitstafeln haben, unabhängig von den eigentlichen Werten der Variablen in $r_1$ und $r_2$. Wobei wenn-dann Formulierungen in mathematischen Definitionen fast immer logische Äquivalenzen darstellen sollen.

Zwei aussagenlogische Formeln sind genu dann logisch äquivalent, wenn die Formel $r_1 \leftrightarrow r_2$ eine Tautologie ist.

![](_attachments/Pasted%20image%2020241008125613.png)
### Duale Formeln
Bei Formeln, die nur aus $\lor$ und $\land$ bestehen, können wir die Duale Formel finden. Diese bekommt man, indem man alle $\land$ und  $\lor$ "umdreht", sowie $\top, \bot$
$r: \top \lor p \lor \neg q, ~~~~ r_{dual}: \bot \land p \land \neg q$

Sind zwei logische Formeln äquivalent, dann sind ihre dualen Formeln ebenfalls äquivalent:
$(r \iff s) \implies (r^d \iff s^d)$ 

### Modus Ponens, Modus Tollens
Modus Ponens: Gilt p -> q, und wir wissen, dass p wahr ist, dann wissen wir, dass q wahr ist. 
Modus Tollens: Gilt p -> q, und wir wissen, dass q falsch ist, dann wissen wir, dass p falsch ist.

### Kontradiktionsregel
$\neg p \rightarrow \bot$, dann gilt p ???

### Bedingungen
Notwendige Bedingungen: erforderlich, aber nicht ausreichend
Hinreichende Bedingungen: ausreichend, aber nicht erforderlich
"Notwendige Bedingung" UND "Hinreichende Bedingung" ergibt aber keine "notwendige und hinreichende Bedingung"!

Beispiel:
![](_attachments/Pasted%20image%2020241009182346.png)

![](_attachments/Pasted%20image%2020241008163751.png)

### Prädikatenlogik
Verallgemeinerung der Aussagenlogik über eine Aussageform (variables Subjekt).