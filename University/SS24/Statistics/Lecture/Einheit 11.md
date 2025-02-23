---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Testen von Hypothesen
## Fehlerarten
### Fehler 1. Art ($\alpha$-Fehler)
Kurz: Ein Fehler 1. Art ist eine falsche positive Antwort
- Für eine Entscheidung basierend auf Stichproben-Ergebnissen müssen wir die Möglichkeit einer falschen Antwort akzeptieren.
- Konkret: Die Schlussfolgerung, dass unterschiedlicher Proteingehalt im Futter zu unterschiedlicher Gewichtszunahme führt, kann auch ein Fehlschluss sein.
- Anders formuliert: Bei der Stichprobe erhält man eine „positive“ Antwort, aber in der Grundgesamtheit ist dies die falsche Antwort. ➔ falsch positive Antwort
- Man spricht dann vom so genannten α-Fehler oder Fehler 1. Art.
Beispiele:
- Irrtumswahrscheinlichkeit, Signifikanznievaue
### Fehler 2. Art ($\beta$-Fehler)]
Kurz: Ein Fehler 2. Art ist eine falsche negative Antwort
- Angenommen, Dr. X hat trotz der Fütterung mit unterschiedlichem Futter keinen Unterschied bei der Gewichtszunahme beobachtet. 
- Schlussfolgerung von Dr. X: „Viel Protein im Futter bringt bei Ratten keine andere Gewichtszunahme als wenig Protein im Futter.“ Diese Schlussfolgerung kann aber ebenfalls ein Fehlschluss sein.
- Anders formuliert: Bei der Stichprobe erhält man eine „negative“ Antwort, aber in der Grundgesamtheit ist dies die falsche Antwort. ➔ falsch negative Antwort
- Man spricht dann vom so genannten β-Fehler oder Fehler 2. Art.
## Parametrischer Signifikanztest
- Wir stellen zwei statements auf, H0, H1
- H1 trägt die Beweislast („Unterschied vorhanden“)
- H0 ist das gegenteil unserer Behauptung („kein Unterschied vorhanden“)
- Wenn die Nullhypotehese nicht abgelehnt werden kann, wird die Behauptung nicht widerlegt noch nachgewiesen, da ein $\beta$-Fehler kann mit einem Signifikanztest nicht kontrolliert werden.
**Beispiel:**
Es soll bewiesen werden, dass sich as Durschnittsalter deutlich von 27 Jahren unterscheidet.
- $H_{0}: \mu \approx 27$
- $H_{1}: \mu \not\approx 27$
-> Konfidenzintervall Berechnen, wenn sich 27 nicht darin befindet können wir H0 ablehnen, ansonsten können wir H0 nicht ablehnen.
## Gauß-Test (z-Test)
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unbekannter Erwartungswert µ der Grundgesamtheit soll gegen einen Referenzwert µ0 getestet werden 
- die Varianz σ² der Grundgesamtheit ist bekannt 
-  Stichprobe X bzw. der Mittelwert seien normalverteilt oder zumindest n > 30
![[_attachments/Pasted image 20240627000857.png]]
where u is phi^-1
## Einstichproben-t-Test
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unbekannter Erwartungswert µ der Grundgesamtheit soll gegen einen Referenzwert µ0 getestet werden 
- die Varianz σ² der Grundgesamtheit ist nicht bekannt 
-  Stichprobe X bzw. der Mittelwert seien normalverteilt oder zumindest n > 30
![[_attachments/Pasted image 20240627001040.png]]
![[_attachments/Pasted image 20240627001129.png]]
## Hypothesen
![[_attachments/Pasted image 20240627001203.png]]
## Unverbundener Zweistichproben-t-Test
- 2 unabhängige Grundgesamtheiten
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unabhängige Zufallsstichprobe Y = {y1, y2, … , ym} vom Umfang m 
- X und Y sind unverbunden, d.h. sie hängen nicht voneinander ab 
- **Varianzhomogenität: Die Varianz σ² sei in den beiden Grundgesamtheiten gleich groß, aber unbekannt** ($\sigma^2 = \sigma^2_Y=\sigma^2_X$) 
- Stichproben bzw. Mittelwerte sind jeweils normalverteilt (ab einem Stichprobenumfang n > 30 greift der Zentrale Grenzwertsatz und man kann in diesem Fall sehr oft von einer annähernden Normalverteilung ausgehen)

Wir müssen den **gepoolten** **Varianzschätzer** nehmen
![[_attachments/Pasted image 20240627004419.png]]
**Konfidenzintervall der Mittelwertsdifferenz**
![[_attachments/Pasted image 20240627004505.png]]
![[_attachments/Pasted image 20240627004543.png]]
## p-Wert
Der konkrete Fehler 1. Art der "Datensituation"
- Der p-Wert ist (vereinfacht gesagt) die Wahrscheinlichkeit, das aktuelle Ergebnis (oder ein noch extremeres Ergebnis) zu erhalten, wenn die Nullhypothese richtig sei.
- Der p-Wert ist somit eine Art von „bedingter Wahrscheinlichkeit“ mit der Bedingung der angenommenen Gültigkeit der Nullhypothese.
- Ist der errechnete p-Wert kleiner oder gleich dem Signifikanzniveau (Fehler 1. Art) dann wird die Nullhypothese abgelehnt und das Ergebnis als statistisch signifikant bezeichnet.
- Vorteile: direkter Vergleich mit dem Signifikanzniveau möglich, ein Maß der Evidenz mit der eine Stichprobe für oder gegen die Nullhypothese spricht, einfache Datenexploration möglich
- Nachteil: händische Berechnung kaum möglich, „Fishing for Significance“
The closer to 0 it is, the stronger the evidence against the null hypothesis (under 0.01 or so)
## Entscheidung für einen geeigneten Test
### Test auf Homoskedatizität
![[_attachments/Pasted image 20240627004831.png]]
H0 kann nicht abgelehnt werden -> Zweistichproben-t-test
sonst -> Welch
## Welch's Test
![[_attachments/Pasted image 20240627005026.png]]
## Gepaarter t-test
- Wenn eine Stichprobe zweimal untersucht wird
- Für den Vergleich von Mittelwerten zweier verbundener Messung einer Grundgesamtheiten kann der gepaarte t-Test verwendet werden.
![[_attachments/Pasted image 20240627005310.png]]
## Multiples Testen
- In einer Studie wird in der Regel aber nicht nur eine einzelne Hypothese betrachtet, sondern mehrere Hypothesen. Jeder einzelne Test, der auf einem Signifikanzniveau von α = 5% durchgeführt wird, hat eine Irrtumswahrscheinlichkeit von 5% ➔ bei 100 Durchführungen liefern durchschnittlich 5 Tests ein „falsch signifikantes“ Ergebnis • 
- Vergleicht man den p-Wert jedes einzelnen Tests weiterhin mit α, so irrt man sich bei jeder Aussage mit der Wahrscheinlichkeit α ➔ in der Summe der Tests steigt dadurch die Wahrscheinlichkeit mindestens einer Falschaussage dramatisch an. Man spricht dann von einem s.g. „multiplen Testproblem“.
- Durch multiples Testen kommt es zu einer Inflation des Fehlers 1. Art. Sprich, je mehr Hypothesen man testet, desto höher wird die Wahrscheinlichkeit, dass eine davon (fälschlicherweise) abgelehnt wird.
![[_attachments/Pasted image 20240627005418.png]]
