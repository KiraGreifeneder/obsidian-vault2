---
type: university-assignment
assignment-course: "[[Exercise|Statistics (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## Instructions


## Solutions
```table-of-contents
```
## 122
Out of all participants in a conference:
30% are from England. 
1/8 English people drink tomato juice for breakfast.
1/80 non-English people drink tomato juice for breakfast.

**a) Welcher Anteil der Frühstücksgedecke soll mit Tomatensaft versehen werden?**

$P(T)=0.3 * \frac{1}{8} + 0.7 * \frac{1}{80} = 0.04625 \approx 4.6\%$

**b) Wie groß ist die Wahrscheinlichkeit, dass ein Konferenzteilnehmer Engländer ist, wenn beobachtet wird, dass er zum Frühstück Tomatensaft trinkt?**

$P(E|T) = \frac{P(E\cap T)}{P(T)}= \frac{{0.3 * \frac{1}{8}}}{0.04625} \approx 0.8108 = 81.1\%$
## 123
Internet users in a country:
4.1% are full-time students (V). 65% of these access the internet from somewhere other than home or work.
2.9% are part-time students (T). 20% of these access the internet from -"-.
other 93% are normal adults (E). 15% of these access -"-.

**Wie viele Prozent aller erwachsenen Internetnutzer:innen (hierin sind natürlich die
Studierende eingeschlossen) insgesamt greifen auf das Internet von einem anderen Ort
als von zu Hause oder der Arbeit aus?**

$P(X) = 0.041 * 0.65 + 0.029 * 0.2 + 0.93 * 0.15 = 0.17195 \approx 17.2\%$
## 124
Normal dist. - Tagesabsatz an Bier
$X \sim N(300, 6900)$

**Welche Menge muss Judith vorrätig halten, damit das Bier mit 95% Wahrscheinlichkeit morgen ausreicht?**

$P(X \le A) = 0.95$
$A = \space?$

$\phi(z)=0.95 \rightarrow z=1.645$
$z = \frac{{A-300}}{\sqrt{6900}}=1.645 \rightarrow A \approx 436.644$

Judith muss 437 Biere vorrätig halten.
## 125
Normal dist. - Birth weight in the 28th week of pregnancy
$X \sim N(975, 60^2)$

**a) Wie groß ist die Wahrscheinlichkeit, dass ein in der 28ten Schwangerschaftswoche
geborenes Kind ein Gewicht zwischen 980 g und 1060 g hat?**

$P(980 \le X \le 1060)=P(X\le 1060)-P(X\le980)=$
$=\phi\left(\frac{1060-975}{60} \right)-\phi\left( \frac{{980-975}}{60} \right)=\phi(1.42)-\phi(0.08)=0.9222-0.5319=0.3903=39.03\%$

**b) Bestimmen Sie das 25%-Fraktil des Geburtsgewichts.**

$\phi(z) = 0.25 \rightarrow z \approx -0.674$
$z = \frac{{x-976}}{60}=-0.674\rightarrow x = 934.56g$

**c) In welchem Intervall liegt das Geburtsgewicht mit einer Wahrscheinlichkeit von
95% symmetrisch um den Mittelwert?**

$D(z) = 0.95 \rightarrow z = 1.96$
Distanz vom Erwartungswert $d = 1.96*60=117.6$
Intervall $I = [975-d; 975 +d]=[857.4; 1092.6]$
## 126
Normalverteilung von Kaffeepackungen
$X \sim N(246, \sigma^2)$

$\phi(z)=0.1 \rightarrow z=-1.28$
$z=\frac{{236-246}}{\sigma}=-1.28\rightarrow \sigma \approx 7.8125$

**a) Wsl., dass eine Packung schwerer ist als 247 g.**

$P(X > 247) = 1 - P(X \le 247) = ?$
$\phi\left( \frac{{247-246}}{7.8125} \right)=\phi(0.13)=0.5517$
$P(X > 247) = 1 - 0.5517 =0.4483 =44.83\%$

**b) unter 10 Packungen mindestens 9 leichter sind als 247 g.**

$P(X\le 247)=0.5517$       
$P(X\ge 9) = 9 * 0.5517^9*0.4483+0.5517^{10}\approx2.17\%$
## 127
$X\sim N(\mu,16^2)$

**Find $\mu$ such that $P(X>250)=0.02$**

Proabability of putting out more than 250ml should be 2%
$z(\phi)=z(98\%) = 2.054$
$z = \frac{{250 - \mu}}{16}=2.054\rightarrow \mu = 217.14 ~ml$
## 128
Normal dist. - Baumstämme
1800 delivered
Sicherheitswahrscheinlichkeit: 1 − α = 95% $\rightarrow \alpha = 0.05$
diameters measured from the 1800: 1210, 1190, 1240, 1410, 1100, 950, 1700, 1490

>some notes: 
>Präzision -> Genauigkeit der Schätzung, länge L des Konfidenzintervalls.
>Zuverlässigkeit -> Sicherheit der Schätzung 1 - a, a ist der maximal erlaubte "Fehler".
>s ist die Standardabweichung der Stichprobe, diese können wir berechnen. Genauso ist der mittelwert der Erwartungswert der Stichprobe.

**a) Bestimmen Sie ein entsprechendes Konfidenzintervall.**

$\bar x = 1286.25$
$s = \sqrt{\frac{1}{n-1} \sum_{i=1}^n\left(x_i-\bar{x}\right)^2}=\sqrt{\frac{1}{8-1}\sum_{i=1}^{8}\left(x_i-1286.25\right)^2}=$
$=\sqrt{\frac{1}{7}*((1210-1286.25)^2+(1190-1286.25)^2+\dots+(1490-1286.25)^2)}\approx236.94$ //done in R

```R
# the above calculation:
x <- c(1210, 1190, 1240, 1410, 1100, 950, 1700, 1490)
s <- sqrt(sum((x - mean(x))^2) / (length(x) - 1))
print(s)
```

now we can calculate the actual interval via t-Verteilung:
$t_{n-1,1-\frac{\alpha}{2}}=t_{7, 0.975}=2.37$
$\mu \in \bigg[1286.25\pm2.37*{\frac{236.94}{\sqrt{8}}}\bigg]$
$\mu \in [1087.713;1484.787]$

**b) Konfidenzintervall für den mittleren Baumstammumfang (120mm breit). Gleiche Zuverlässigkeit. Berechnen Sie den dazu notwendigen ungefähren Stichprobenumfang.**

`u is just inverse phi(z)`
Annäherung des Stichprobenumfangs: $n \approx \left( 2*u_{1-\frac{\alpha}{2}}*{\frac{s}{L}}\right)^{2}=\left( 2*u_{1-\frac{0.05}{2}}*{\frac{236.94}{120}}\right)^{2}=\left( 2*1.96*{\frac{236.94}{120}}\right)^{2}\approx60$
## 129
Normal dist. - magnesium in water
23,1 23,1 22,1 25,1 24,1 23,4 \[mg/l]
n = 6

**a) Bestimmen Sie ein 90% Konfidenzintervall für den mittleren Magnesiumgehalt,
wenn die tatsächliche Standardabweichung bekannt ist und σ = 0,932 beträgt.**

$\bar x\approx 23.48$
$\alpha = 0.1$
$u_{1-\frac{\alpha}{2}}=u_{95\%}=1.645$

$\mu \in [23.48-1.645*{\frac{0.923}{\sqrt{6}}}; 23.48+1.645*{\frac{0.923}{\sqrt{6}}}]$
$\mu \in [22.86;24.10]$

**b) Bestimmen Sie obiges 90% Konfidenzintervall, wenn die Standardabweichung
unbekannt ist und basierend auf obiger Stichprobe geschätzt werden muss.**

```R
x <- c(23.1, 23.1, 22.1, 25.1, 24.1, 23.4)
m <- mean(x)
s <- sqrt(sum((x - mean(x))^2) / (length(x) - 1))
```

$s \approx 1.02062$

$t_{n-1,1-\frac{\alpha}{2}}=t_{6, 0.95}=1.94$

$\mu \in \left[ 23.48 \pm 1.94*{\frac{1.02062}{\sqrt{6}}} \right]$
$\mu \in \left[ 22.67;24.29 \right]$
## 130
Brötchengewichte: 48 46 49 47 48 50 49 51 54 51 \[g]

**a) Bestimmen Sie ein 95% Konfidenzintervall für das „wahre“ mittlere Gewicht der
Brötchen unter Verwendung obiger Stichprobe.**

```R
x <- c(48, 46, 49, 47, 48, 50, 49, 51, 54, 51)
m <- mean(x)
s <- sqrt(sum((x - mean(x))^2) / (length(x) - 1))
```

$\alpha = 0.05$
$\bar x = 49.3$
$s \approx 2.3118$

$t_{10-1,1-\frac{0.05}{2}}=t_{9, 0.975}=2.26$
$\mu \in \left[ 49.3 \pm 2.26*{\frac{2.3118}{\sqrt{10}}} \right]$
$\mu \in \left[ 47.65; 50.95\right]$

**b) Wie hoch muss das Konfidenzniveau ungefähr gewählt werden, damit mit nur 40
Messungen für die Bäckerei erreicht werden kann, dass das Konfidenzintervall
höchstens 1 Gramm breit ist?**

$L = 1g$
$n = 40$
$S = 1-\alpha=?$

Through Stichprobenumfang:
$n \approx \left( 2*u_{1-\frac{\alpha}{2}}*{\frac{s}{L}}\right)^{2}$
$u\approx \pm {\frac{L\sqrt{n}}{2s}}$

$S = D\left({\frac{L\sqrt{n}}{2s}}\right)= D\left( {\frac{1\sqrt{40}}{2*2.3118}} \right)= D(\approx1.37)\approx82.93\%$
## 131
$X\sim N(220,20^2)$

**In welchem Intervall liegt das Gewicht mit einer Wahrscheinlichkeit 99% symmetrisch
um den Mittelwert?**

$z(D)=z(99\%)=2.576$
$\rightarrow [\mu-2.567*\sigma;\mu+2.567*\sigma] \rightarrow [220-2.567*20;\mu+2.567*20]\rightarrow$
$\rightarrow[168.66;271.34]$
## 132
$\sigma^{2}= 400 \rightarrow \sigma =20;~~ n=10;~~\bar x=220; ~~\alpha=0.01$
$\mu =~?$

**Bestimmen Sie ein 99% Konfidenzintervall für das „wahre“ mittlere Gewicht dieser
Kaninchenart unter Verwendung obiger Stichprobe**

$t_{9,0.995}=3.25$
$\mu \in \left[ 220 \pm 3.25*{\frac{20}{\sqrt{10}}} \right]$
$\mu \in \left[ 199.45; 240.55\right]$
## 133
$X\sim N(1000, 62^2)$

**a) Bestimmen Sie die Wahrscheinlichkeit, dass eine zufällig ausgewählte Milchflasche
eine Füllmenge von 978 ml bis 1060 ml besitzt.**

$P(X\le 1060)=\phi({1060-1000\over 62})=\phi(\approx0.97)=0.8340$
$P(X\le978)=\phi({978-1000\over62})=\phi(\approx-0.35)=0.3632$

$P(978 \le X \le 1060)=P(X\le 1060)-P(X\le978)=0.8340-0.3632=0.4708=47.08\%$

**b) Bestimmen Sie die Füllmenge, die von 30% aller Milchflaschen überschritten wird.**

$P(X\le A) = 0.7$
$z(70\%)=0.524$
$A = \mu +0.524*\sigma =1000+0.524*62\approx1032.5ml$
## 134
Bernoulli-Verteilung: Es gibt "Erfolg" und "Misserfolg", x=0, x=1. $x_i$ ist Bernoulli-Verteilt.

$f(x)= \begin{cases}p & \ldots \text { für } \mathrm{x}=1 \\ 1-p & \ldots \text { für } \mathrm{x}=0\end{cases}$

**a) Berechnen Sie den Erwartungswert dieses Schätzers.**

$E(\hat P)=E\left( {1\over2n}\sum\limits^n_{i=1}x_i \right)={1\over2n}E\left( \sum\limits^n_{i=1}x_i \right)={1\over2n}\sum\limits^n_{i=1}E(x_i)={1\over2n}\sum\limits^n_{i=1}p={1\over2n}np=\frac{p}{2}$

**b) Berechnen Sie die Varianz dieses Schätzers.**

$V(\hat P)=Var\left( \frac{1}{2n}\sum\limits^n_{i=1}x_i \right)=\left( \frac{1}{2n} \right)^2Var(\sum\limits^n_{i=1}x_i)={1\over4n^2}\sum\limits^n_{i=1}Var(x_i)={1\over4n^2}\sum\limits^n_{i=1}(p(1-p))=$
$= {1\over4n^2}(n(p-p^2))={1\over4n^2}(np-np^2)={np\over4n^2}-{np^2\over4n^2}={p\over4n}-{p^2\over4n}$

**c) Ist dieser Schätzer erwartungstreu und konsistent?**

```
Erwartungstreue: der Erwartungswert des Schätzers entspricht dem
tatsächlichen Parameter

Konsistenz: mit steigendem Stichprobenumfang wird die Varianz des
Schätzers immer kleiner
```

Der Schätzer ist nicht Erwartungstreu, da der Erwartungswert halbiert wird. Um das zu korrigieren, könnte man den faktor 2n auf n ändern: ${1\over n}\sum\limits^n_{i=1}x_i$
Der Schätzer ist konsistent.
