---
type: university-assignment
assignment-course: "[[Exercise|Discrete Structures (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-10-15T23:59:00
---
## Instructions
![[_attachments/blatt02.pdf]]

## Solutions
### Aufgabe 2.1.
#### a)
Implikationen sind WENN-DANN Gebilde...
`if-else` Statements können diese Gebilde darstellen. Der Inhalt des `if` statements gilt nur unter der ersten Bedingung (WENN diese Bedingung wahr ist, DANN führe diese Anweisungen aus).
Der `else` Teil beschreibt dann die Negierung der oberen `if` Implikation.

==Sie sind aber nicht gleich, die semantik ist anders.==
==ABER es ist eigentlich eine äquivalenz, und keine direkte Implikation==
#### b)
"Wenn ich früh genug aufstehe, komme ich rechtzeitig zu meiner Vorlesung"
- Eigentlich wird eher eine Äquivalenz gemeint, da ich eigentlich nur dann rechtzeitig zu meiner Vorlesung kommen kann, wenn ich früh aufgestanden bin. 

"Mit 17 darf man Auto fahren"
- "Ich bin 17" -> "Ich darf Auto fahren" beschreibt zwar eine notwendige Bedingung, es fehlen aber noch andere hinreichende Bedingungen, die in der reellen Welt nötig wären (Führerschein).

==Eigentlich gemeint war: Sarkasmus, Ironie, correlation but no causation==
### Aufgabe 2.2
#### a)
| $p$ | $q$ | $r$ | $p \land (q \land r)$ |
| --- | --- | --- | --------------------- |
| 0   | 0   | 0   | 0                     |
| 0   | 0   | 1   | 0                     |
| 0   | 1   | 0   | 0                     |
| 0   | 1   | 1   | 0                     |
| 1   | 0   | 0   | 0                     |
| 1   | 0   | 1   | 0                     |
| 1   | 1   | 0   | 0                     |
| 1   | 1   | 1   | 1                     |
#### b)
| $p$ | $q$ | $r$ | $\neg p \land (q \lor \neg r)$ |
| --- | --- | --- | ------------------------------ |
| 0   | 0   | 0   | 1                              |
| 0   | 0   | 1   | 0                              |
| 0   | 1   | 0   | 1                              |
| 0   | 1   | 1   | 1                              |
| 1   | 0   | 0   | 0                              |
| 1   | 0   | 1   | 0                              |
| 1   | 1   | 0   | 0                              |
| 1   | 1   | 1   | 0                              |
### Aufgabe 2.3.
$a = \text{"Ich bin rechtzeitig in der Arbeit"}, ~~b = \text{"Ich fahre mit dem Bus um 8:05"}$
$a \land b$   // apply de Morgan
$\neg a \lor \neg b$
"Ich bin nicht rechtzeitig in der Arbeit oder ich fahre nicht mit dem Bus um 8:05"
### Aufgabe 2.4.
#### a)
$h = \text{"Heute ist Ostersonntag"}, ~~m = \text{"Morgen ist Ostermontag"}$
$\neg m \rightarrow \neg h$   // apply Kontrapositionsgesetz
$h \rightarrow m$ 
"Wenn heute Ostersonntag ist, dann ist Morgen Ostermontag"
#### b)
$p = \text{"} x \text{ ist gerade"}, ~~q = \text{"} x^2 \text{ ist gerade"}$
$p \rightarrow q$   // apply Kontrapositionsgesetz
$\neg q \rightarrow \neg p$
"Wenn $x^2$ nicht gerade ist, dann ist $x$ auch nicht gerade"
### Aufgabe 2.5.
#### a)
$p \lor (\top \land q) \iff p\lor q \centernot\iff p ~~~~~\square$
#### b)
$p \lor (p \land q) \iff p ~~~~~ \square$  (Absorption)
#### c)
$p \lor \bot \iff p ~~~~~ \square$  (Identität)

Die Identität ist schön und gut
man fragt sich aber, was sie tut.
Im "oder" mit der Falsum
ist es schnell vorüber.
Nur das einsame literal bleibt über.

#### d)
$p \land (q \lor r) \iff (p \land q) \lor (p \land r) ~~~~~ \square$  (Distributivität)