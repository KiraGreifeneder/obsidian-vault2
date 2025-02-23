---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Verteilung von Zufallsvariablen
## Diskrete Verteilungen
### Diskrete Gleichverteilung
Ausprägung für jedes X gleich, bspw. eine bestimmte nummer 1x würfeln -> Wsl. immer 1/6 bei einem normalen Würfel.
![[_attachments/Pasted image 20240626190847.png]]
![[_attachments/Pasted image 20240626190929.png]]
![[_attachments/Pasted image 20240626190934.png]]
### Binomialverteilung
- Beschreibt Erfolge (Vorraussetzung "Erfolg" und "Misserfolg" als Ereignisse). 
- Die Erfolgswahrscheinlichkeit p ist für jeden Versuch gleich (also bspw. mit zurücklegen)
![[_attachments/Pasted image 20240626191214.png]]
![[_attachments/Pasted image 20240626191219.png]]
![[_attachments/Pasted image 20240626191235.png]]
### Bernoulli-Verteilung
- Erfolg/Misserfolg als Vorraussetzung
- Versuch wird nur einmal durchgeführt
![[_attachments/Pasted image 20240626191500.png]]
- Die Bernoulli-Verteilung besitzt den Erwartungswert p und die Varianz p⋅(1 − p).
- Eine Bernoulli-Kette („Bernoulli-Prozess“) besteht aus unabhängigen Bernoulli-Variablen mit jeweils identer Erfolgswahrscheinlichkeit p.
- Die Anzahl der Erfolge bei n Bernoulli-Variablen (= Bernoulli-Kette der Länge n) folgt einer Binomialverteilung mit den Parametern n und p
### Hypergeometrische Verteilung
- "Ziehen" merhmals (n-mal), kein Zurücklegen (bspw. rote und blaue kugeln)
- Wahrscheinlichkeitsverteilung der bspw. Anzahl an X roten kugeln nach n-mal ziehen (... beim Ziehen ohne Zurücklegen von n Elementen („Stichprobe“) genau x Erfolge erzielt werden)
![[_attachments/Pasted image 20240626222018.png]]
### Poisson-Verteilung
- Ist ein Grenzfall der Binomialverteilung für unendlich viele Versuche (n → ∞) mit einer kleinen Erfolgswahrscheinlichkeit (p → 0).
- Die Poisson-Verteilung kann zur Modellierung der Anzahl von (seltenen) Ereignissen verwendet werden, die bei einer konstanten mittleren Rate unabhängig voneinander in einem festen Zeitintervall oder räumlichen Gebiet eintreten („Poisson-Prozess“).
![[_attachments/Pasted image 20240626222339.png]]
Bspw. bei N = 100 anwendbar
#stichwörter 3000 Autos pro woche (n), 4 (p=4/3000) verkehrsunfälle pro woche... approx. wsl, dass 7 unfälle in einer woche stattfinden?. APPROXIMATIV
### Geometrische Verteilung
- „Anzahl der Versuche bis zum ersten Erfolg“
- Vorraussetzung "Erfolg" und "Misserfolg"
![[_attachments/Pasted image 20240626222535.png]]
### Negative Binomialverteilung
- X „Anzahl der Versuche bis zum k-ten Erfolg“
- Vorraussetzung "Erfolg" und "Misserfolg"
![[_attachments/Pasted image 20240626222631.png]]