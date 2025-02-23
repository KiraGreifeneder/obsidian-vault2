---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Statistics/Lecture]]"
completion-status: Complete
---
# Index
- Einheit 1:
	- Grundbegriffe, Skalenniveaus, Häufigkeiten
- Einheit 2
	- Mittel, Median, Quartile, Modus
- Einheit 3
	- Streuungsmaßzahlen, Boxplot
- Einheit 4
	- Korrelation, Kovarianz, Korrelationskoeffizient, Gütemaßzahlen
- Einheit 5
	- Kombinatorik, Wege zur Wahrscheinlichkeit
- Einheit 6
	- Rechnen mit Wahrscheinlichkeiten
- Einheit 7
	- Wahrscheinlichkeits/-Verteilungsfunktion, Erwartungswert, Momente
- Einheit 8
	- Diskrete Verteilungen (binomial, bernoulli, hypergeometrisch, poisson, geometrisch, negativ binomial)
- Einheit 9
	- Stetige Verteilungen (Normalverteilung, Chi, t, F), Zusammenfassung
- Einheit 10
	- Punktschätzüng, Bereichsschätzung (Konfidenzintervalle (mittelwert, für einen Anteil))
- Einheit 11
	- Testen von Hypothesen





# Einheit 1
# Definitionen
## Grundbegriffe
**Empirische Grundgesamtheit:** Eine _endliche_ Menge von N Objekten, die räumlich, zeitlich und sachlich abgegrenzt sind. 

**Merkmal:** dient der Klasseneinteilung der Grundgesamtheit in k Klassen. Die Zerlegung ist
- disjunkt
- vollständig

**Merkmalsausprägung ($x_i$):** charakteristische Eigenschaft der Elemente einer Grundgesamtheit.

**Parameter:** die "wahren Werte" einer Grundgesamtheit.

**Urliste:** unkomprimierte Aufzeichung aller Merkmalsauprägungen der Elemente einer Grundgesamtheit. 

**Extensive Merkmale:** Merkmale, bei denene eine Summenbildung möglich und sinnvoll wäre.

**Intensive Merkmale:**  Summenbildung ergibt keinen Sinn, erst die Durchschnittsbildung ist interpretierbar

## Skalenniveaus
**Nominal:** keine Beziehung zwischen Elementen einer Grundgesamtheit außer der Klasseneinteilung (bspw. Lieblingsfarben)

**Rangmerkmale:** "natüliche objektive" Ordnungsbeziehung (z.B. Schulnoten)

**Quantitativ:** Zähl- oder Messprozesse
- diskret oder stetig

## Häufigkeiten
**Absolut ($f_i$):** Anzahl de Merkmalsausprägungen

**Relativ ($p_i$):** Prozentsatz der Merkmalsauprägungen in einer Klasse

**Kumuliert ($F(x_i)$):** Anteil oder Anzahl, kumuliert... -> Empirische Verteilungsfunktion, CDF


# Einheit 2
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

![[../Summaries - Copy/_attachments/Pasted image 20240626145845.png]]
### Gewogenes arithmetisches Mittel
• erlaubt Betonung einflussreicher Daten bzw. Reduzierung des Einflusses weniger wichtiger Daten

![[../Summaries - Copy/_attachments/Pasted image 20240626145830.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626145956.png]]
## Median
- Ausreißer sind kein Problem
In Verteilungsfunktion: $F(\bar x)_{0.5} = 0.5$ (Kumulierte Haufigkeiten only ofc)

Bei gruppierten Daten gilt folgende Formel:

![[../Summaries - Copy/_attachments/Pasted image 20240626152258.png]]
### Tukey's Hinges
Aufteilung in 3 Quartile
- Median (Mittelwert der zwei mittleren Zahlen oder die zahl selber)
- Quartile: Mediane der Zwei Hälften
## Modus
- Der Modalwert xmod ist die Merkmalsausprägung, die am häufigsten vorkommt (sprich der Wert mit der größten Wahrscheinlichkeit). 
- Falls mehrere Ausprägungen gleich häufig vorkommen, spricht man von einer multimodalen Verteilung (Gegenteil: unimodale Verteilung). 
- Bei einer Klasseneinteilung gilt: Klasse mit der größten Häufigkeit = modale Klass


# Einheit 3
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
![[../Summaries - Copy/_attachments/Pasted image 20240626152922.png]]
bzw. nach Steiner
![[../Summaries - Copy/_attachments/Pasted image 20240626153903.png]]
### Stichprobenvarianz
- Wollen von einer Stichprobe auf die "Wahre" Varianz schließen
![[../Summaries - Copy/_attachments/Pasted image 20240626154131.png]]
this only gains relevance in induktive statistik though, should stick to normal variance for the most part
### Varianz bei gruppierten Daten
![[../Summaries - Copy/_attachments/Pasted image 20240626154323.png]]
Just take the Klassenhäufigkeit $f_i$ into account too and use the Klassenmitten for $x_i$
### Varianz (stetig)
![[../Summaries - Copy/_attachments/Pasted image 20240626185748.png]]
## Standardabweichung
- Löst die Probleme der Varianz
- $SD(x)= \sigma =\sqrt{Var(x)}$
## Variationskoeffizient, Empirische Schiefe/Wölbung
### Variationskoeffizient
- Hängt nicht von Maßeinheiten ab
- Für Verteilungen mit unterschiedlichen Maßeinheiten
- Streuung wird in relation zum Mittelwert gesetzt und in Prozent angegeben
- Eignet sich zum Vergleich von Streuungsverhältnissen
![[../Summaries - Copy/_attachments/Pasted image 20240626160928.png]]
### Empirische Schiefe/Wölbung
**Schiefe**
- Wie sehr die Verteilung nach links/rechts gewölbt ist
![[../Summaries - Copy/_attachments/Pasted image 20240626161114.png]]

**Wölbung**
- höhe der "spitze" der Verteilung
![[../Summaries - Copy/_attachments/Pasted image 20240626161134.png]]
# Boxplot
- In a normal box plot, the line ends/whiskers are the max/min of the dataset
- in a modified boxplot, we can represent outliers too, but the ends are shifted... need to determine which one we use in advance
![[../Summaries - Copy/_attachments/Pasted image 20240626161420.png]]
An Extremwert would be represented by a tiny dot if it's beyond the Box edge $\pm 3*$box length




# Einheit 4
# Korrelation
## Kovarianz
- Vorrraussetzung: Es liegt eine bivariate (two variables) Grundgesamtheit mit den Datenreihen x und y vor.
- Eine Kennziffer zur Beschreibung der Art des Zusammenhangs der beiden Datenreihen
- Die Kovarianz ist eine nicht standardisierte Maßzahl für den Zusammenhang zweier Datenreihen und gibt nur die Richtung eines Zusammenhangs an, nicht die Stärke des Zusammenhangs
- N ist die Anzahl an Ausprägungen pro Datensatz. Alles nach dem Summenzeichen sollte auch in klammern sein.
(nach Steiner, Empirisch)
![[../Summaries - Copy/_attachments/Pasted image 20240626162330.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626162335.png]]
Stichprobenkovarianz:
![[../Summaries - Copy/_attachments/Pasted image 20240626162354.png]]
## Korrelationskoeffizient
Ein Korrelationskoeffizient gibt die Stärke und Richtung des Zusammenhangs zweier Datenreihen an
- Voraussetzung: Es liegt eine bivariate Grundgesamtheit mit den Datenreihen x und y vor.
### Bravais-pearson
- Empirische Korrelationskoeffizient
- standardisiert und dimensionslos
- invariant gegenüber linearen transformationen
- immer von -1 bis +1
![[../Summaries - Copy/_attachments/Pasted image 20240626162612.png]]
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
![[_attachments/Pasted image 20240627211142.png]]
Die Berechnung des Korrelationskoeffizienten $r_{xy}$  ist gleich wie bei den anderen.
# Regressionsrechnung
- Create a linear equation $\hat y_i$ to predict a value at a certain point between two variables
![[../Summaries - Copy/_attachments/Pasted image 20240626163943.png]]
## Gütemaßzahlen
- Das Regressionsmodell erklärt die Streuung der abhängigen Variable Y. Wenn diese erklärte Streuung hoch ist, liegt ein gutes Regressionsmodell vor.
- Die Streuung der Variable Y kann durch s.g. Quadratsummen („Sum of Squares“) ausgedrückt werden.
 ![[../Summaries - Copy/_attachments/Pasted image 20240626164242.png]]
### Coefficient of determination
- Das Verhältnis von SQE und SQT kann als Gütemaßzahl verwendet werden und wird als Bestimmtheitsmaß R2 („Coefficient of Determination“) bezeichnet.
- Bei einem einfachen linearen Regressionsmodell entspricht das R2 dem quadrierten Bravais-Pearson-Korrelationskoeffizient der beiden Variablen.
- Es gilt: **Je größer das R2 ist, desto höher ist die Güte des Regressionsmodells.**
- Das R2 gibt den Anteil der durch die Regression erklärten Varianz der Variablen an. Damit ergibt sich ein Wertebereich von 0 bis 1.
- **Faustregel: ab 0,60 liegt ein brauchbares Modell vor**
![[../Summaries - Copy/_attachments/Pasted image 20240626164210.png]]


# Einheit 5
# Kombinatorik
## Permutation
**Definition:** Die n-stelligen Sequenzen (Pn), in denen jedes Element der Grundgesamtheit A1, A2, A3, … , An genau einmal vorkommt, nennt man Permutationen ohne Wiederholung aus n Zeichen.
-> Anordnungsmöglichkeiten
Ohne Wiederholung: ABC, CBA ...
![[../Summaries - Copy/_attachments/Pasted image 20240626164912.png]]
Mit Wiederholung:  ABBC, AABC
![[../Summaries - Copy/_attachments/Pasted image 20240626164959.png]]
#stichwörter: "Auf wie viele Arten"...
## Kombination (nCr)
- n choose k, order in which we choose elements doesn't matter, only the "pool" of elements we get
- Always used when we think about the collection we have as a whole, not "ziehen" a certain hand. No action is involved, just existence (sounds like my life tbh).
Ohne Wiederholung:
![[../Summaries - Copy/_attachments/Pasted image 20240626165237.png]]
#stichwörter: "wie viele verschiedene... gibt es"
Mit Wiederholung:
![[../Summaries - Copy/_attachments/Pasted image 20240626165303.png]]
#stichwörter: "Wie viele Zusammensetzungen von... gibt es?"
## Variation
- n choose k, order in which we choose the elements does matter.
Ohne Wiederholung:
![[../Summaries - Copy/_attachments/Pasted image 20240626165646.png]]
#stichwörter: "Wie viele Möglichkeiten..."
Mit Wiederholung:
![[../Summaries - Copy/_attachments/Pasted image 20240626165702.png]]
#stichwörter:  "Wie viele Möglichkeiten... jeweils eine Ziffer von..."
# Wege zur Wahrscheinlichkeit
- Theoretische Wahrscheinlichkeit („Wahrscheinlichkeitsbegriff nach Laplace“): Ableitung aus einer mathematischen Theorie und Erstellung eines Modells
- Empirische Wahrscheinlichkeit: Ableitung aus den Daten
- Subjektive „Wahrscheinlichkeit“: Ableitung aus einer persönlichen Meinung
- Bayesianische Wahrscheinlichkeit: Kombination von subjektiven Wahrscheinlichkeiten („prior-probabilites“), einem Modell und den Daten
-


# Einheit 6
# Rechnen mit Wahrscheinlichkeiten
**Disjunkte Ereignisse** sind Ereignisse, die nicht gleichzeitig auftreten können, bspw. Tor: 30%, Tor: 40%. Wenn A und B disjunkt sind, dann können sie nicht gleichzeitig auftreten, und sind niemals unabhängig.
Bei additionsregel können ereignisse disjunkt sein? also $A \cap B = \{\}$. 
## Unabhängige Ereignisses
**Unabhängig:** Eintreten eines Ereignis beeinflusst das andere Ereignis
![[../Summaries - Copy/_attachments/Pasted image 20240626171923.png]]
## Bedingte Wahrscheinlichkeiten
![[../Summaries - Copy/_attachments/Pasted image 20240626171824.png]]
$P(A|B)= \frac{P(B|A)*P(A)}{P(B)}$
### Bayes
- P(A|B) bezeichnet die bedingte Wahrscheinlichkeit des Ereignisses A unter der Bedingung, dass B eingetreten ist („posteriori Wahrscheinlichkeit“).
![[../Summaries - Copy/_attachments/Pasted image 20240626172119.png]]


# Einheit 7
# Theorie der Zufallsvariablen
## Wahrscheinlichkeits-/Verteilungsfunktion
**Bei diskreten Zufallsvariablen**
Tablle aufstellen in denen jedes Ergebnis (bspw. Augenzahl) und die Wahrscheinlichkeit $f(x_i)$ notiert wird, Verteilungsfunktion $F(x_i)$ ist dann die Kumulative Wahrscheinlichkeit in der zweiten Spalte.

**Bei stetigen Zufallsvariablen**
Zur Wahrscheinlichkeitsfunktion hinzu kommt die Wahscheinlichkeits _dichte_. Dies ist einfach das Integral der Funktion.

Für eine stetige Zufallsvariable X gilt:
![[../Summaries - Copy/_attachments/Pasted image 20240626173335.png]]
Zur bestimmung der Dichte muss man nicht $\pm\infty$ hernehmen, sondern nur den Bereich in dem die Wsl. nicht 0 ist, um den Ausdruck = 1 zu setzen.
## Erwartungswert
Bei einer diskreten Zufallsvariable
![[../Summaries - Copy/_attachments/Pasted image 20240626185139.png]]
Bei stetigen Zufallsvariable
![[../Summaries - Copy/_attachments/Pasted image 20240626185309.png]]
Der Erwartungswert einer stetigen Zufallsvariablen ist der „Schwerpunkt" der Fläche unter der Dichtefunktion aus
### Momente von Zufallsvariablen
- Momente von Zufallsvariablen sind Kenngrößen, die zur Beschreibung einer Zufallsvariablen dienen.
- Momente sind als Erwartungswerte der Funktionen y = (x − a)k definiert.
- Für den Fall „a = 0“ spricht man von gewöhnlichen Momenten und für den Fall „a = E(X)“ von zentralen Momenten.
![[../Summaries - Copy/_attachments/Pasted image 20240626185532.png]]
- Der erste gewöhnliche Moment ist der Erwartungswert
- Der zweite zentrale Moment ist die Varianz
### Rechenregeln
![[../Summaries - Copy/_attachments/Pasted image 20240626185820.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626185937.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626190044.png]]



# Einheit 8
# Verteilung von Zufallsvariablen
## Diskrete Verteilungen
### Diskrete Gleichverteilung
Ausprägung für jedes X gleich, bspw. eine bestimmte nummer 1x würfeln -> Wsl. immer 1/6 bei einem normalen Würfel.
![[../Summaries - Copy/_attachments/Pasted image 20240626190847.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626190929.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626190934.png]]
### Binomialverteilung
- Beschreibt Erfolge (Vorraussetzung "Erfolg" und "Misserfolg" als Ereignisse). 
- Die Erfolgswahrscheinlichkeit p ist für jeden Versuch gleich (also bspw. mit zurücklegen)
![[../Summaries - Copy/_attachments/Pasted image 20240626191214.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626191219.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626191235.png]]
### Bernoulli-Verteilung
- Erfolg/Misserfolg als Vorraussetzung
- Versuch wird nur einmal durchgeführt
![[../Summaries - Copy/_attachments/Pasted image 20240626191500.png]]
- Die Bernoulli-Verteilung besitzt den Erwartungswert p und die Varianz p⋅(1 − p).
- Eine Bernoulli-Kette („Bernoulli-Prozess“) besteht aus unabhängigen Bernoulli-Variablen mit jeweils identer Erfolgswahrscheinlichkeit p.
- Die Anzahl der Erfolge bei n Bernoulli-Variablen (= Bernoulli-Kette der Länge n) folgt einer Binomialverteilung mit den Parametern n und p
### Hypergeometrische Verteilung
- "Ziehen" merhmals (n-mal), kein Zurücklegen (bspw. rote und blaue kugeln)
- Wahrscheinlichkeitsverteilung der bspw. Anzahl an X roten kugeln nach n-mal ziehen (... beim Ziehen ohne Zurücklegen von n Elementen („Stichprobe“) genau x Erfolge erzielt werden)
![[../Summaries - Copy/_attachments/Pasted image 20240626222018.png]]
### Poisson-Verteilung
- Ist ein Grenzfall der Binomialverteilung für unendlich viele Versuche (n → ∞) mit einer kleinen Erfolgswahrscheinlichkeit (p → 0).
- Die Poisson-Verteilung kann zur Modellierung der Anzahl von (seltenen) Ereignissen verwendet werden, die bei einer konstanten mittleren Rate unabhängig voneinander in einem festen Zeitintervall oder räumlichen Gebiet eintreten („Poisson-Prozess“).
![[../Summaries - Copy/_attachments/Pasted image 20240626222339.png]]
Bspw. bei N = 100 anwendbar
#stichwörter 3000 Autos pro woche (n), 4 (p=4/3000) verkehrsunfälle pro woche... approx. wsl, dass 7 unfälle in einer woche stattfinden?. APPROXIMATIV
### Geometrische Verteilung
- „Anzahl der Versuche bis zum ersten Erfolg“
- Vorraussetzung "Erfolg" und "Misserfolg"
![[../Summaries - Copy/_attachments/Pasted image 20240626222535.png]]
### Negative Binomialverteilung
- X „Anzahl der Versuche bis zum k-ten Erfolg“
- Vorraussetzung "Erfolg" und "Misserfolg"
![[../Summaries - Copy/_attachments/Pasted image 20240626222631.png]]


# Einheit 9
# Stetige Verteilungen
## Normalverteilung
- Dichte ist symmetrisch um µ 
- Dichte hat das Maximum an der Stelle x = µ 
- Dichte strebt für x → ±∞ gegen 0 
- Median entspricht dem Erwartungswert
### Dichte
![[../Summaries - Copy/_attachments/Pasted image 20240626223042.png]]
- Eine kleinere Varianz bedeutet eine "schmalere" Kurve
- Änderungen des Mittelwerts ändert die Lage
### Standardnormalverteilung
- $\mu = 0$ und $\sigma^2=1^2$
![[../Summaries - Copy/_attachments/Pasted image 20240626223432.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240626223453.png]]
### Sigma-Regel
![[../Summaries - Copy/_attachments/Pasted image 20240626223521.png]]
## Chi-Quadratverteilung
- Die Chi-Quadrat-Verteilung bildet die Basis des Chi-Quadrat-Tests, der u.a. beim statistischen Vergleich nominaler Daten eine wichtige Rolle spielt.
- Es wird ein Zufallsexperiment $Z_i$ mit standard-normalverteiltem Ausgang betrachtet.
- Dieses Zufallsexperiment wird n-mal unter gleichen Bedingungen unabhängig voneinander wiederholt. Damit erhält man die Zufallsvariablen Z1, Z2, … , Zn.
- Die Summe dieser quadrierten Zufallsvariablen folgt einer Chi-Quadratverteilung mit n Freiheitsgraden („Degrees of Freedom“).\
![[../Summaries - Copy/_attachments/Pasted image 20240626223942.png]]
## t-Verteilung
- Die t-Verteilung ist die Basis des t-Tests, der zur Überprüfung dient, ob sich die Mittelwerte zweier Stichproben statistisch signifikant unterscheiden oder nicht.
- Es werden folgende zwei Zufallsexperimente Z und X betrachtet, wobei Z standardnormalverteilt und X Chi-Quadrat-verteilt mit n Freiheitsgraden ist.
- Damit ergibt sich unten stehende t-verteilte Zufallsvariable mit n Freiheitsgraden:
![[../Summaries - Copy/_attachments/Pasted image 20240626224729.png]]
## F-Verteilung
- Die F-Verteilung basiert auf dem Quotienten zweier Chi-Quadrat-verteilter Zufallsvariablen. Die F-Verteilung besitzt dadurch zwei unabhängige Freiheitsgrade m und n als Parameter.
- Bildet die Basis der Varianzanalyse
![[../Summaries - Copy/_attachments/Pasted image 20240626224839.png]]
## Zusammenfassung
Alle genannten Verteilungen spielen eine wichtige Rolle in der induktiven Statistik bzw. beim Testen („Prüfen“) von normalverteilten Daten. Daher werden diese Verteilungen oft auch Prüfverteilungen der Normalverteilung genannt.
![[../Summaries - Copy/_attachments/Pasted image 20240626224933.png]]
p... Wahrscheinlichkeit, mit der wir arbeiten wollen
# Zentraler Grenzwertsatz
- Zufallsvariablen lassen sich oft als Summen von Zufallsvariablen darstellen
	- bspw. das Gesamtgewicht eines Kartoffelsacks setzt sich aus der Summe der einzelnen Kartoffeln zusammen
**Der Erwartungswert der Summe ist** $E(S)=n*\mu$
**Die Varianz der Summe ist** $Var(S)=n*\sigma^2$
- Die n einzelnen Beobachtungen behalten ihre Verteilung bei, erst die Summe vieler einzelner Beobachtungen konvergiert zur Normalverteilung
- Strebt ab n > 30 gegen die Standardnormalverteilung
![[../Summaries - Copy/_attachments/Pasted image 20240626230040.png]]
### Grenzwertsatz nach Moivre-Laplace
- Approximation der diskreten Binomialverteilung durch die stetige Normalverteilung
- Vorraussetzung; $np(1-p)\ge 9$
![[../Summaries - Copy/_attachments/Pasted image 20240626230101.png]]
Die $\pm 0.5$ sind eine Verbesserung des normalen Moivre-laplace Satzes.


# Einheit 10
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
![[../Summaries - Copy/_attachments/Pasted image 20240626230724.png]]
**Punktschätzer für einen Anteil** $\pi$:
![[../Summaries - Copy/_attachments/Pasted image 20240626230801.png]]
### Gütekriterien für Punktschätzer
Ein schätzer ist **Erwartungstreu**, wenn der Erwartungswert dem tatsächlichen Parameter entspricht.
Er ist **Konsistent**, wenn die Varianz des des Schätzers immer kleiner wird, wenn der Stichprobenumfang steigt.
## Bereichsschätzung
- Konfidenzintervallschätzung
- Länge bzw. Breite $L$ (**Präzision**)
- Hat eine beliebige **Zuverlässigkeit** von $S = 1-\alpha$
- $\alpha$ ist "das Risiko einer Fehlschätzung"
![[../Summaries - Copy/_attachments/Pasted image 20240626232256.png]]
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
![[../Summaries - Copy/_attachments/Pasted image 20240626233633.png]]
$\mu \in [\bar x \pm t_{n-1,1-a/2} * \frac{s}{\sqrt{n}}]$
Stichprobenumfang $n \approx \left( 2*\phi^{-1}\left( 1-\frac{\alpha}{2} \right)* \frac{s}{L} \right)^2$
$S = D\left({\frac{L\sqrt{n}}{2s}}\right)$
### Konfidenzintervall für einen Anteil
- Wir wollen ein Konfidenzintervall für den Anteil 𝜋 der Objekte mit der interessierenden Eigenschaft in der Grundgesamtheit bestimmen.
- $k$ Objekte in unserer Stichprobe besitzen die "Interessierende" Eigenschaft, $1-k$ Objekte nicht.
$p = \frac{k}{n}$
$\pi \in [p \pm \phi^{-1}\left( 1-\frac{\alpha}{2} \right) * \sqrt{\frac{p*(1-p)}{n}}]$



# Einheit 11
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
![[../Summaries - Copy/_attachments/Pasted image 20240627000857.png]]
where u is phi^-1
## Einstichproben-t-Test
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unbekannter Erwartungswert µ der Grundgesamtheit soll gegen einen Referenzwert µ0 getestet werden 
- die Varianz σ² der Grundgesamtheit ist nicht bekannt 
-  Stichprobe X bzw. der Mittelwert seien normalverteilt oder zumindest n > 30
![[../Summaries - Copy/_attachments/Pasted image 20240627001040.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240627001129.png]]
## Hypothesen
![[../Summaries - Copy/_attachments/Pasted image 20240627001203.png]]
## Unverbundener Zweistichproben-t-Test
- 2 unabhängige Grundgesamtheiten
Voraussetzungen:
- unabhängige Zufallsstichprobe X = {x1, x2, … , xn} vom Umfang n 
- unabhängige Zufallsstichprobe Y = {y1, y2, … , ym} vom Umfang m 
- X und Y sind unverbunden, d.h. sie hängen nicht voneinander ab 
- **Varianzhomogenität: Die Varianz σ² sei in den beiden Grundgesamtheiten gleich groß, aber unbekannt** ($\sigma^2 = \sigma^2_Y=\sigma^2_X$) 
- Stichproben bzw. Mittelwerte sind jeweils normalverteilt (ab einem Stichprobenumfang n > 30 greift der Zentrale Grenzwertsatz und man kann in diesem Fall sehr oft von einer annähernden Normalverteilung ausgehen)

Wir müssen den **gepoolten** **Varianzschätzer** nehmen
![[../Summaries - Copy/_attachments/Pasted image 20240627004419.png]]
**Konfidenzintervall der Mittelwertsdifferenz**
![[../Summaries - Copy/_attachments/Pasted image 20240627004505.png]]
![[../Summaries - Copy/_attachments/Pasted image 20240627004543.png]]
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
![[../Summaries - Copy/_attachments/Pasted image 20240627004831.png]]
H0 kann nicht abgelehnt werden -> Zweistichproben-t-test
sonst -> Welch
## Welch's Test
![[../Summaries - Copy/_attachments/Pasted image 20240627005026.png]]
## Gepaarter t-test
- Wenn eine Stichprobe zweimal untersucht wird
- Für den Vergleich von Mittelwerten zweier verbundener Messung einer Grundgesamtheiten kann der gepaarte t-Test verwendet werden.
![[../Summaries - Copy/_attachments/Pasted image 20240627005310.png]]
## Multiples Testen
- In einer Studie wird in der Regel aber nicht nur eine einzelne Hypothese betrachtet, sondern mehrere Hypothesen. Jeder einzelne Test, der auf einem Signifikanzniveau von α = 5% durchgeführt wird, hat eine Irrtumswahrscheinlichkeit von 5% ➔ bei 100 Durchführungen liefern durchschnittlich 5 Tests ein „falsch signifikantes“ Ergebnis • 
- Vergleicht man den p-Wert jedes einzelnen Tests weiterhin mit α, so irrt man sich bei jeder Aussage mit der Wahrscheinlichkeit α ➔ in der Summe der Tests steigt dadurch die Wahrscheinlichkeit mindestens einer Falschaussage dramatisch an. Man spricht dann von einem s.g. „multiplen Testproblem“.
- Durch multiples Testen kommt es zu einer Inflation des Fehlers 1. Art. Sprich, je mehr Hypothesen man testet, desto höher wird die Wahrscheinlichkeit, dass eine davon (fälschlicherweise) abgelehnt wird.
![[../Summaries - Copy/_attachments/Pasted image 20240627005418.png]]
