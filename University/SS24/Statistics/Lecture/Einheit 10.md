---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Induktive Statistik
Eine repräsentative Stichprobe weist (in bestimmten interessierenden Merkmalen) eine ähnliche Struktur wie die Grundgesamtheit auf.
Verfahren zur Schätzung von Parametern werden anhand folgender Eigenschaften beurteilt: 
- Präzision … Genauigkeit, mit der ein Ergebnis angegeben wird 
- Zuverlässigkeit … Wahrscheinlichkeit ein „richtiges“ Ergebnis zu erhalten
## Punktschätzung
- Ein Punktschätzer besitzt eine sehr hohe Präzision. 
- Das Ergebnis entspricht einer konkreten, bestimmten Zahl. 
- Er ist einfach berechenbar und „intuitiv“ verständlich. 
- Der Nachteil ist seine geringe Zuverlässigkeit.
- Er kann als ein Punkt auf dem Zahlenstrahl identifiziert werden („Problem bei stetigen Merkmalen“)
**Punktschätzer für erwartungswert und Varianz:**
![[_attachments/Pasted image 20240626230724.png]]
**Punktschätzer für einen Anteil** $\pi$:
![[_attachments/Pasted image 20240626230801.png]]
### Gütekriterien für Punktschätzer
Ein schätzer ist **Erwartungstreu**, wenn der Erwartungswert dem tatsächlichen Parameter entspricht.
Er ist **Konsistent**, wenn die Varianz des des Schätzers immer kleiner wird, wenn der Stichprobenumfang steigt.
## Bereichsschätzung
- Konfidenzintervallschätzung
- Länge bzw. Breite $L$ (**Präzision**)
- Hat eine beliebige **Zuverlässigkeit** von $S = 1-\alpha$
- $\alpha$ ist "das Risiko einer Fehlschätzung"
![[_attachments/Pasted image 20240626232256.png]]
### Konfidenzintervall für einen Mittelwert (bekanntes $\sigma$)
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unbekannter Erwartungswert µ der Grundgesamtheit soll geschätzt werden 
- die Varianz σ² der Grundgesamtheit ist bekannt 
- Stichprobe X bzw. der Mittelwert seien normalverteilt oder zumindest n > 30
$\mu \in \left[ \bar x \pm \phi^{-1}\left( 1-\frac{\alpha}{2} \right)* \frac{\sigma}{\sqrt{n}} \right]$
Länge des Intervalls $L = 2 * \phi^{-1}\left( 1-\frac{\alpha}{2} \right) * \frac{\sigma}{\sqrt{n}}$
Stichprobenumfang $n = \left(2* \phi^{-1}\left( 1-\frac{\alpha}{2} \right) * \frac{\sigma}{L}\right)^2$
Für ein einseitiges Konfidenzintervall betrachtet man dann entweder den mittelwert + oder - der rechten Seite der Formel.
### Konfidenzintervall für einen Mittelwert (unbekanntes $\sigma$)
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unbekannter Erwartungswert µ der Grundgesamtheit soll geschätzt werden 
- die Varianz σ² der Grundgesamtheit ist nicht bekannt 
- Stichprobe X bzw. der Mittelwert seien normalverteilt oder zumindest n > 30
s is also calculated by my GDC lol. Sx.
![[_attachments/Pasted image 20240626233633.png]]
$\mu \in [\bar x \pm t_{n-1,1-a/2} * \frac{s}{\sqrt{n}}]$
Stichprobenumfang $n \approx \left( 2*\phi^{-1}\left( 1-\frac{\alpha}{2} \right)* \frac{s}{L} \right)^2$
$S = D\left({\frac{L\sqrt{n}}{2s}}\right)$
### Konfidenzintervall für einen Anteil
- Wir wollen ein Konfidenzintervall für den Anteil 𝜋 der Objekte mit der interessierenden Eigenschaft in der Grundgesamtheit bestimmen.
- $k$ Objekte in unserer Stichprobe besitzen die "Interessierende" Eigenschaft, $1-k$ Objekte nicht.
$p = \frac{k}{n}$
$\pi \in [p \pm \phi^{-1}\left( 1-\frac{\alpha}{2} \right) * \sqrt{\frac{p*(1-p)}{n}}]$
