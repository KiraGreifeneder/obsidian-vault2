---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Korrelation
## Kovarianz
- Vorrraussetzung: Es liegt eine bivariate (two variables) Grundgesamtheit mit den Datenreihen x und y vor.
- Eine Kennziffer zur Beschreibung der Art des Zusammenhangs der beiden Datenreihen
- Die Kovarianz ist eine nicht standardisierte Maßzahl für den Zusammenhang zweier Datenreihen und gibt nur die Richtung eines Zusammenhangs an, nicht die Stärke des Zusammenhangs
- N ist die Anzahl an Ausprägungen pro Datensatz. Alles nach dem Summenzeichen sollte auch in klammern sein.
(nach Steiner, Empirisch)
![[_attachments/Pasted image 20240626162330.png]]
![[_attachments/Pasted image 20240626162335.png]]
Stichprobenkovarianz:
![[_attachments/Pasted image 20240626162354.png]]
## Korrelationskoeffizient
Ein Korrelationskoeffizient gibt die Stärke und Richtung des Zusammenhangs zweier Datenreihen an
- Voraussetzung: Es liegt eine bivariate Grundgesamtheit mit den Datenreihen x und y vor.
### Bravais-pearson
- Empirische Korrelationskoeffizient
- standardisiert und dimensionslos
- invariant gegenüber linearen transformationen
- immer von -1 bis +1
![[_attachments/Pasted image 20240626162612.png]]
interpretation:
- Um so näher der Betrag des Korrelationskoeffizienten bei 1 liegt, desto stärker ist der Zusammenhang.\
- Bei einem Korrelationskoeffizienten von 0 liegt kein linearer Zusammenhang („unkorreliert“) vor. Es kann aber ein nicht-linearer (z.B.: quadratischer, …) Zusammenhang bestehen
### Spearman
- auch von -1 bis +1
- Auf Grund seiner „Rangnatur“ misst er nicht den linearen Zusammenhang zweier Datenreihen sondern deren „generelle“ „Gleichläufigkeit“ bzw. „Gegenläufigkeit“ (Monotonieverhalten).

Interpretation: 
Es gilt:
- Gleichläufigkeit (monoton steigend): große x-Werte mit großen y-Werten
- Gegenläufigkeit (monoton fallend): große x-Werte mit kleinen y-Werten
- Bei +1 bzw. -1 liegt eine „perfekte“ Gleichläufigkeit bzw. Gegenläufigkeit vor.
- Bei 0 bzw. Werten nahe 0 besteht ein Zusammenhang, der nicht ausschließlich gleichläufig bzw. gegenläufig ist\
Beispiel:
![[_attachments/Pasted image 20240627155606.png]]
Die Berechnung des Korrelationskoeffizienten $r_{xy}$  ist gleich wie bei den anderen.
# Regressionsrechnung
- Create a linear equation $\hat y_i$ to predict a value at a certain point between two variables
![[_attachments/Pasted image 20240626163943.png]]
## Gütemaßzahlen
- Das Regressionsmodell erklärt die Streuung der abhängigen Variable Y. Wenn diese erklärte Streuung hoch ist, liegt ein gutes Regressionsmodell vor.
- Die Streuung der Variable Y kann durch s.g. Quadratsummen („Sum of Squares“) ausgedrückt werden.
 ![[_attachments/Pasted image 20240626164242.png]]
### Coefficient of determination
- Das Verhältnis von SQE und SQT kann als Gütemaßzahl verwendet werden und wird als Bestimmtheitsmaß R2 („Coefficient of Determination“) bezeichnet.
- Bei einem einfachen linearen Regressionsmodell entspricht das R2 dem quadrierten Bravais-Pearson-Korrelationskoeffizient der beiden Variablen.
- Es gilt: **Je größer das R2 ist, desto höher ist die Güte des Regressionsmodells.**
- Das R2 gibt den Anteil der durch die Regression erklärten Varianz der Variablen an. Damit ergibt sich ein Wertebereich von 0 bis 1.
- **Faustregel: ab 0,60 liegt ein brauchbares Modell vor**
![[_attachments/Pasted image 20240626164210.png]]