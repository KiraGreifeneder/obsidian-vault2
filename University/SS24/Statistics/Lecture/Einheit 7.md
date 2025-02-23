---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Theorie der Zufallsvariablen
## Wahrscheinlichkeits-/Verteilungsfunktion
**Bei diskreten Zufallsvariablen**
Tablle aufstellen in denen jedes Ergebnis (bspw. Augenzahl) und die Wahrscheinlichkeit $f(x_i)$ notiert wird, Verteilungsfunktion $F(x_i)$ ist dann die Kumulative Wahrscheinlichkeit in der zweiten Spalte.

**Bei stetigen Zufallsvariablen**
Zur Wahrscheinlichkeitsfunktion hinzu kommt die Wahscheinlichkeits _dichte_. Dies ist einfach das Integral der Funktion.

Für eine stetige Zufallsvariable X gilt:
![[_attachments/Pasted image 20240626173335.png]]
Zur bestimmung der Dichte muss man nicht $\pm\infty$ hernehmen, sondern nur den Bereich in dem die Wsl. nicht 0 ist, um den Ausdruck = 1 zu setzen.
## Erwartungswert
Bei einer diskreten Zufallsvariable
![[_attachments/Pasted image 20240626185139.png]]
Bei stetigen Zufallsvariable
![[_attachments/Pasted image 20240626185309.png]]
Der Erwartungswert einer stetigen Zufallsvariablen ist der „Schwerpunkt" der Fläche unter der Dichtefunktion aus
### Momente von Zufallsvariablen
- Momente von Zufallsvariablen sind Kenngrößen, die zur Beschreibung einer Zufallsvariablen dienen.
- Momente sind als Erwartungswerte der Funktionen y = (x − a)k definiert.
- Für den Fall „a = 0“ spricht man von gewöhnlichen Momenten und für den Fall „a = E(X)“ von zentralen Momenten.
![[_attachments/Pasted image 20240626185532.png]]
- Der erste gewöhnliche Moment ist der Erwartungswert
- Der zweite zentrale Moment ist die Varianz
### Rechenregeln
![[_attachments/Pasted image 20240626185820.png]]
![[_attachments/Pasted image 20240626185937.png]]
![[_attachments/Pasted image 20240626190044.png]]
