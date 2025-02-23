---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
```table-of-contents
```
# Lagemaßzahlen
## Mittelwert
- Nicht lageninvariant und nicht skaleninvariant, also ist der Mittelwert abhängig von lage und größe der Zahlen.
- Ohne Angabe einer Streuung nicht unbedingt aussagekräftig
### Arithmetischer Mittelwert
**bei gruppierten diskreten Daten:**
- $\bar x = \frac{1}{N} * \sum\limits^k_{i=1}f_i*x_i$ (absolute H. * Ausprägung)
- bzw. $\bar x = \sum\limits^k_{i=1}p_i*x_i$ (relative H. * Ausprägung)
**bei gruppierten stetigen Daten (Intervalle):**
- Es wird einfach nur der Mittelwert der Ober- und Untergrenze verwendet
### Geometrisches Mittel (Mittlerer Wachstumsfaktor):
Wird bei der Berechnung von "Wachstumsfaktoren" verwendet
	- Wachstumsfaktor: neuer Wert / alter WErt
	- Wachstumsrate: Wachstumsfaktor - 1

$\bar x_{geo} = \sqrt[3]{faktor_1*faktor_2*...*faktor_{n}} = \text{durchschnittlicher Wachstumsfaktor}$

### Harmonisches Mittel:
- Bei Verhältnisgrößen
- Das arithmetische Mittel ist der kehrwert des harmonischen Mittelwertes der kehrwerte der einzelnen Werte.
- Example where this is necessary: Average speed driven on the same length path. Drove for longer on a slower speed, so the avg. should shift in that direction.

![[_attachments/Pasted image 20240626145845.png]]
### Gewogenes arithmetisches Mittel
• erlaubt Betonung einflussreicher Daten bzw. Reduzierung des Einflusses weniger wichtiger Daten

![[_attachments/Pasted image 20240626145830.png]]
![[_attachments/Pasted image 20240626145956.png]]
## Median
- Ausreißer sind kein Problem
In Verteilungsfunktion: $F(\bar x)_{0.5} = 0.5$ (Kumulierte Haufigkeiten only ofc)

Bei gruppierten Daten gilt folgende Formel:

![[_attachments/Pasted image 20240626152258.png]]
### Tukey's Hinges
Aufteilung in 3 Quartile
- Median (Mittelwert der zwei mittleren Zahlen oder die zahl selber)
- Quartile: Mediane der Zwei Hälften
## Modus
- Der Modalwert xmod ist die Merkmalsausprägung, die am häufigsten vorkommt (sprich der Wert mit der größten Wahrscheinlichkeit). 
- Falls mehrere Ausprägungen gleich häufig vorkommen, spricht man von einer multimodalen Verteilung (Gegenteil: unimodale Verteilung). 
- Bei einer Klasseneinteilung gilt: Klasse mit der größten Häufigkeit = modale Klass