---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Streuungsmaßzahlen

## Spannweite, Interquartilsdistanz
Spannweite („Range“): Maximum – Minimum
- Nachteil: Die Spannweite ignoriert alle Werte zwischen dem Minimum bzw. dem Maximum, hängt empfindlich von Ausreißern ab und nützt die Daten nicht effizient aus.
Interquartilsdistanz („Interquartilrange“): IQR = 3. Quartil – 1. Quartil 
- Umgeht die Ausreißer-Problematik teilweise
- Dennoch sind Spannweite und IQR nur grobe Maßzahlen für die Streuung, da sie nur von 2 Werten abhängen
## Varianz
- Der Nachteil der Varianz ist die „quadratische Maßeinheit“ und die „quadratische Skalentransformation“.
### Empirische Varianz
- Wir gehen von empirisch erhobenen Daten aus
![[_attachments/Pasted image 20240626152922.png]]
bzw. nach Steiner
![[_attachments/Pasted image 20240626153903.png]]
### Stichprobenvarianz
- Wollen von einer Stichprobe auf die "Wahre" Varianz schließen
![[_attachments/Pasted image 20240626154131.png]]
this only gains relevance in induktive statistik though, should stick to normal variance for the most part
### Varianz bei gruppierten Daten
![[_attachments/Pasted image 20240626154323.png]]
Just take the Klassenhäufigkeit $f_i$ into account too and use the Klassenmitten for $x_i$
### Varianz (stetig)
![[_attachments/Pasted image 20240626185748.png]]
## Standardabweichung
- Löst die Probleme der Varianz
- $SD(x)= \sigma =\sqrt{Var(x)}$
## Variationskoeffizient, Empirische Schiefe/Wölbung
### Variationskoeffizient
- Hängt nicht von Maßeinheiten ab
- Für Verteilungen mit unterschiedlichen Maßeinheiten
- Streuung wird in relation zum Mittelwert gesetzt und in Prozent angegeben
- Eignet sich zum Vergleich von Streuungsverhältnissen
![[_attachments/Pasted image 20240626160928.png]]
### Empirische Schiefe/Wölbung
**Schiefe**
- Wie sehr die Verteilung nach links/rechts gewölbt ist
![[_attachments/Pasted image 20240626161114.png]]

**Wölbung**
- höhe der "spitze" der Verteilung
![[_attachments/Pasted image 20240626161134.png]]
# Boxplot
- In a normal box plot, the line ends/whiskers are the max/min of the dataset
- in a modified boxplot, we can represent outliers too, but the ends are shifted... need to determine which one we use in advance
![[_attachments/Pasted image 20240626161420.png]]
An Extremwert would be represented by a tiny dot if it's beyond the Box edge $\pm 3*$box length

