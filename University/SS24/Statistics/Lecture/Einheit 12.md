---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
## Asymptotischer Binomialtest
- Binäre Daten (Also nur 2 Kategorien, bspw Männlich/Weiblich), eine Variable
- Wir wollen testen ob der Anteil π einer Grundgesamtheit sich von einem Referenzanteil π0 unterscheidet. 
![[_attachments/Pasted image 20240627005759.png]]\
## Exakter Binomialtest
Der p-Wert des exakten Binomialtests kann direkt basierend auf der Binomialverteilung bestimmt werden.
![[_attachments/Pasted image 20240627005858.png]]
## Chi-Quadrat-Test
### ...für eine Stichprobe
- Vergleich Kategorialer Daten (bspw. Farben) gegen eine fixe Referenzverteilung
- Eine Variable
![[_attachments/Pasted image 20240627010044.png]]
Bei k = 2 und großen Fallzahlen führen der asymptotische Chi-Quadrat-Test bei einer Stichprobe und der asymptotische Binomialtest zum gleichen Ergebnis.
Beispiel:
![[_attachments/Pasted image 20240627010223.png]]
### ...für mehr als eine Stichprobe
![[_attachments/Pasted image 20240627010144.png]]
### ...für 2 Variablen
- Zusammenhang zweier Variablen bspw. Raucherstatus und Autounfälle
![[_attachments/Pasted image 20240627010425.png]]
## Asymptotische vs. Exakte Tests
- Die Familie der Chi-Quadrat-Tests ist eine Familie von asymptotischen Tests, deren Anwendbarkeit jeweils an bestimmte Voraussetzungen geknüpft ist. 
- Bei asymptotischen Tests wird die exakte Verteilung der Teststatistik durch eine andere Verteilung approximiert. Man spricht dann auch von approximativen bzw. asymptotischen Tests.
- Wenn die Voraussetzungen („Mindestfallzahl“) erfüllt sind, liefern asymptotische Tests valide Ergebnisse bei einem sehr überschaubaren Rechenaufwand. • 
- Bei einer kleinen Fallzahl sind oft die Voraussetzungen für eine Approximation der exakten Verteilung der Teststatistik nicht gegeben. Asymptotische Tests würden daher in solchen Fällen ungenaue und unter Umständen „falsche“ Ergebnisse liefern. 
- Fischer ist d.h. ein alternativer exakter test
because i don't feel like finishing this :D

![[_attachments/integral_table8926129618540832178.jpg]]