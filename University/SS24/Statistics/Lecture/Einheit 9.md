---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Stetige Verteilungen
## Normalverteilung
- Dichte ist symmetrisch um µ 
- Dichte hat das Maximum an der Stelle x = µ 
- Dichte strebt für x → ±∞ gegen 0 
- Median entspricht dem Erwartungswert
### Dichte
![[_attachments/Pasted image 20240626223042.png]]
- Eine kleinere Varianz bedeutet eine "schmalere" Kurve
- Änderungen des Mittelwerts ändert die Lage
### Standardnormalverteilung
- $\mu = 0$ und $\sigma^2=1^2$
![[_attachments/Pasted image 20240626223432.png]]
![[_attachments/Pasted image 20240626223453.png]]
### Sigma-Regel
![[_attachments/Pasted image 20240626223521.png]]
## Chi-Quadratverteilung
- Die Chi-Quadrat-Verteilung bildet die Basis des Chi-Quadrat-Tests, der u.a. beim statistischen Vergleich nominaler Daten eine wichtige Rolle spielt.
- Es wird ein Zufallsexperiment $Z_i$ mit standard-normalverteiltem Ausgang betrachtet.
- Dieses Zufallsexperiment wird n-mal unter gleichen Bedingungen unabhängig voneinander wiederholt. Damit erhält man die Zufallsvariablen Z1, Z2, … , Zn.
- Die Summe dieser quadrierten Zufallsvariablen folgt einer Chi-Quadratverteilung mit n Freiheitsgraden („Degrees of Freedom“).\
![[_attachments/Pasted image 20240626223942.png]]
## t-Verteilung
- Die t-Verteilung ist die Basis des t-Tests, der zur Überprüfung dient, ob sich die Mittelwerte zweier Stichproben statistisch signifikant unterscheiden oder nicht.
- Es werden folgende zwei Zufallsexperimente Z und X betrachtet, wobei Z standardnormalverteilt und X Chi-Quadrat-verteilt mit n Freiheitsgraden ist.
- Damit ergibt sich unten stehende t-verteilte Zufallsvariable mit n Freiheitsgraden:
![[_attachments/Pasted image 20240626224729.png]]
## F-Verteilung
- Die F-Verteilung basiert auf dem Quotienten zweier Chi-Quadrat-verteilter Zufallsvariablen. Die F-Verteilung besitzt dadurch zwei unabhängige Freiheitsgrade m und n als Parameter.
- Bildet die Basis der Varianzanalyse
![[_attachments/Pasted image 20240626224839.png]]
## Zusammenfassung
Alle genannten Verteilungen spielen eine wichtige Rolle in der induktiven Statistik bzw. beim Testen („Prüfen“) von normalverteilten Daten. Daher werden diese Verteilungen oft auch Prüfverteilungen der Normalverteilung genannt.
![[_attachments/Pasted image 20240626224933.png]]
p... Wahrscheinlichkeit, mit der wir arbeiten wollen
# Zentraler Grenzwertsatz
- Zufallsvariablen lassen sich oft als Summen von Zufallsvariablen darstellen
	- bspw. das Gesamtgewicht eines Kartoffelsacks setzt sich aus der Summe der einzelnen Kartoffeln zusammen
**Der Erwartungswert der Summe ist** $E(S)=n*\mu$
**Die Varianz der Summe ist** $Var(S)=n*\sigma^2$
- Die n einzelnen Beobachtungen behalten ihre Verteilung bei, erst die Summe vieler einzelner Beobachtungen konvergiert zur Normalverteilung
- Strebt ab n > 30 gegen die Standardnormalverteilung
![[_attachments/Pasted image 20240626230040.png]]
### Grenzwertsatz nach Moivre-Laplace
- Approximation der diskreten Binomialverteilung durch die stetige Normalverteilung
- Vorraussetzung; $np(1-p)\ge 9$
![[_attachments/Pasted image 20240626230101.png]]
Die $\pm 0.5$ sind eine Verbesserung des normalen Moivre-laplace Satzes.