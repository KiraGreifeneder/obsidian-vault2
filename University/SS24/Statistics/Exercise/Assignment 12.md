---
type: university-assignment
assignment-course: "[[Exercise|Statistics (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## Instructions


## Solutions
## 145
```
x <- c(18, 14, 11, 18, 14, 14, 19, 17)
mean <- mean(x)
s_squared <- sum((x - mean)^2) / (length(x) - 1)
s <- sqrt(s_squared)

T_x <- (mean - 18)/s * sqrt(length(x))

interval_left <- mean - 1.9 * (s/sqrt(8))
interval_right <- mean + 1.9 * (s/sqrt(8))
```
### a)
>Wir verwenden den Einstichproben-t-Test Punktschätzer (da Varianz der Grundgesamtheit nicht bekannt ist)

Results from R:
$\bar x = 15.625$
$s \approx 2.774$
### b)
- $H_{0}: \mu \approx 18 ~ g/dl$
- $H_{1}: \mu \not\approx 18 ~ g/dl$
### c)
**t-test**
$\mu_0=18~g/dl$
$t_{7, 0.95} = 1.9$ (kritischer Wert)

$T(x)=\frac{{15.625-18}}{2.774}*\sqrt{8} \approx -2.421$
$|T(x)|=2.421>1.9 \rightarrow H_{0}\;\text{wird abgelehnt}$ 

Wir können ablehnen, dass es keinen signifikanten Unterschied gibt, d.h. gibt es einen Unterschied.
### d)
Konfidenzintervall fü einen Mittelwert (unbekannte Varianz):
$\pi \in \left[\bar x  \pm t_{n-1,1-\frac{\alpha}{2}}*\frac{s}{\sqrt{n}} \right] \rightarrow$
$\rightarrow \pi \in\left[ 15.625 \pm 1.9 * \frac{2.774}{\sqrt{8}} \right]$
$\rightarrow \pi \in [13.761;17.489]$
## 146
$\mu = 10ml$
$\sigma^2=0.0025\:ml^2$
$n = 100$
```
z <- (10.007-10)/sqrt(0.0025)

left <- 10-1.645 * 0.005/sqrt(8)
right <- 10+1.645 * 0.005/sqrt(8)
```
### a)
$P(\bar x > 10.007) = \;  \phi\left( -\frac{10.007-10}{\sqrt{0.0025}} \right) = \phi(-0.14) = 0.4443$
<span style="color:#c00000">Wrong: should look at the dist. of the mean.</span>
From tutorial:
$\sigma_{x}= \frac{\sqrt{\sigma^2}}{\sqrt{n}}=0.005ml$
$\bar x = N\left(\frac{x-\mu}{\sigma_x} \right)$
$z = \frac{x-\mu}{\sigma_{x}}= 1.4$
$P(Z > 1.4) = 8\%$
### b)
- $H_{0}: \mu \approx 10 ~ ml$
- $H_{1}: \mu \not\approx 10 ~ ml$
> Die Varianz ist bekannt, unsere Stichprobengröße beträgt n > 30. Wir können d.h. den Gauß-Test anwenden

Linker Intervallrand:
$\mu_{0} < \bar x - u_{1-\frac{\alpha}{2}} * \frac{\sigma}{\sqrt{n}}$
$\mu_{0} > 10 - 1.645 * \frac{0.005}{\sqrt{8}} \approx 9.997$

Rechter Intervallrand:
$\mu_{0} < 10 + 1.645 * \frac{0.005}{\sqrt{8}} \approx 10.003$
### c)
- Falsch... kann trotzdem überschritten werden
- Richtig, da wir die Nullhypothese nun ablehnen können.
- Richtig, da der kritische Wert größer wird -> der Bereich der nicht-Ablehnung wird größer
## 147
```
f_sg <- 9.506^2/4.146^2
t_sg <- (13.96-6.87)/sqrt((4.146^2)/10+(9.506^2)/10)

var_s <- 9.506^2
var_g <- 4.146^2
n <- 10
m <- 10

z_s <- (var_s/n/(var_s/n+var_g/m))^2 * 1/(n-1)
z_g <- (var_g/n/(var_s/n+var_g/m))^2 * 1/(m-1)
df <- 1/(z_s+z_g)
```
**"Wahre mittlere Körperlänge"**
> Homoskedastizitätstest um zu entscheiden, ob wir t oder Welch anwenden.
> Wir nehmen bei F(x, y) die größere Zahl in den Zähler, dann brauchen wir nur alpha und nicht alpha/2 -> können F tabelle nehmen da es um einen 95% Bereich geht
![[_attachments/Pasted image 20240619003147.png]]

$F(S, G)=\frac{9.506^{2}}{4.146^2} \approx 5.257$
![[_attachments/Pasted image 20240619004048.png]]
$F_{9,9,0.95} = 3.18$
$5.257 > 3.18 \rightarrow H_{0} \; \text{wird abgelehnt}$
-> Wir können keinen Zwischenproben-t Test hernehmen, müssen Welch verwenden.

- $H_{0}: \mu_G = \mu_S$
- $H_{1}: \mu_G \not= \mu_S$
![[_attachments/Pasted image 20240619004539.png]]
$T(S, G)=\frac{{13.96-6.87}}{\sqrt{{\frac{4.146^2}{10}}+\frac{9.506^2}{10}}} \approx 2.162$\
![[_attachments/Pasted image 20240619005048.png]]
$df\approx12$
$|T(S,G)|\le t_{df, 1-\frac{\alpha}{2}}=2.18 \rightarrow H_{0}\; \text{kann nicht abgelehnt werden}$
-> die mittleren Körperlängen unterscheiden sich nicht signifikant
## 148
```
mean_a <- 23.13
mean_b <- 19.48
var_a <- 3.54^2
var_b <- 3.31^2
n <- 8
m <- 6

f_ab <- var_a/var_b # var_a should be larger than var_b

s_p <- sqrt((n-1)/(n+m-2)*var_a + (m-1)/(n+m-2)*var_b)
t_test_ab <- (mean_a-mean_b)/s_p * sqrt((n*m)/(n+m))
```
### a)
$H_{0}: \mu_A = \mu_B$
$H_{1}: \mu_A \not= \mu_B$
### b)
Test auf Homoskedastizität
$H_{0}: \sigma^2_{A}=\sigma^2_{B}$
$H_{1}: \sigma^2_{A}\not=\sigma^2_{B}$

$F(A, B) \approx 1.144$
$F_{7,5,0.95} = 4.88$
$f(A,B) \le F_{7,5,0.95} \rightarrow H_{0}\; \text{kann nicht abgelehnt werden, Zwischenproben-t-Test}$
![[_attachments/Pasted image 20240619133518.png]]
![[_attachments/Pasted image 20240619134354.png]]
$s_{p}\approx 3.446$ (gepoolter Varianzschätzer)
$T(A, B) \approx 1.961$
$t_{12,0.975} =2.179$

$1.961 \le 2.179 \rightarrow H_{0}\; \text{kann nicht abgelehnt werden}$
Wir können also nicht zeigen, dass es keinen signifikanten Unterschied gibt.
## 149
n=16
m=10
### a)
$\bar x_A = 8.7625$
$\bar x_{B}= 10.53$

$s^2_A=1.032$
$s^2_B=2.0668$

$s_A=1.0158$
$s_B=1.43768$
### b)
![[_attachments/Pasted image 20240619135048.png]]
$t_{24,0.975}=2.064$
$s_p=\sqrt{\left( \frac{14}{25}*1.032 \right) + \left( \frac{9}{24}*2.0668 \right)}\approx 1.4201$
$(\mu_A-\mu_{B})\in \left[ (8.7625-10.52)\pm2.064*1.192*\sqrt{16^{-1}+10^{-1}} \right]=-1.7675 \pm 0.9918$
$\rightarrow (\mu_A-\mu_{B}) \in [-2.7593; -0.7757]$ bzw. $[0.7757; 2.7593]$
### c)
Test auf Homoskedastizität
$H_{0}: \sigma^2_{A}=\sigma^2_{B}$
$H_{1}: \sigma^2_{A}\not=\sigma^2_{B}$

$F(B, A) = \frac{s^2_B}{s^2_{A}}=\frac{2.0668}{1.032} \approx 2.0029$
$F_{9,15,0.95} = 3.01$
$F(B, A) \le F_{9,15,0.95} \rightarrow H_{0}\; \text{kann nicht abgelehnt werden, Zwischenproben-t-Test}$
![[_attachments/Pasted image 20240619133518.png]]
![[_attachments/Pasted image 20240619134354.png]]
$s_{p}\approx 1.192$
$T(A, B) \approx -3.677$
$t_{24,0.975} = 2.064$

$|-3.677| > 2.067 \rightarrow H_{0} \;\text{wird abgelehnt}$

es gibt einen signifikanten Unterschied bezüglich des mittleren Hämoglobingehalts zwischen den beiden Gruppen
### d)
Das 95%-Konfidenzintervall für die Differenz der Mittelwerte liegt zwischen -2,757 und -0,778 g/100 ml. Da dieses Intervall den klinisch relevanten Schwellenwert von 1 g/100 ml einschließt, besteht ein relevanter Unterschied im mittleren Hämoglobingehalt zwischen den beiden Gruppen.

<span style="color:#c00000">wrong</span>

Es gibt vielleicht einen Trend zur Relevanz, aber es ist nicht eindeutig relevant. Der größere Teil unseres Intervalls liegt über dem Schwellenwert von 1, aber es gibt immerhin einen Teil, der darunter liegt. -> das ganze intervall sollte unter den 1g liegen, also bis -1
## 150
n = m = 9
### a)
$\bar x_{L}= 287.111$
$\bar x_{U}= 279.333$

$s^2_L=57.611$
$s^2_U=59.50$

$s_L=7.59$
$s_U=7.7136$
### b)
![[_attachments/Pasted image 20240619141822.png]]
$\bar x_{diff} = 7.778$
$s^2_{diff}=41.194$
$s_{diff}=46.4183$

$\mu \in \left[ \bar x_{diff} \pm t_{8, 0.975}* \frac{s_{diff}}{\sqrt{9}} \right]$
$\mu \in [2.844;12.712]$
### c)
statt Gauß-Test verwenden wir t-Test, da die Varianz der Grundgesamtheit nicht bekannt
ist.
![[_attachments/Pasted image 20240619143251.png]]
![[_attachments/Pasted image 20240619143129.png]]
$T(x)=-3.636$
$t_{8, 0.975} = 2.306$

$|-3.636| > 2.306$
-> H0 wird abgelehnt, es gibt einen Signifikanten Unterschied der von der Messmethode Abhängt
## 151
### a)
$s_{p}^2= \sqrt{\frac{7}{14} * 10.879^{2} +  \frac{7}{14} * 8.988^{2}}= 9.978$
$t_{14, 0.975} = 2.145$
$(\mu_A-\mu_{B})\in \left[ (43-63)\pm2.145*9.978*\sqrt{\frac{2}{8}} \right]=-20 \pm 10.701$
$\rightarrow (\mu_A-\mu_{B}) \in [-30.701; -9.299]$ bzw. $[9.299; 30.701]$
### b)
-> H0: Gegenteil von Behauptung (kein Unterschied vorhanden)
-> Es gibt keinen Unterschied in der mittleren Gewichtszunahme zwischen den
beiden Gruppen
$μ_A = μ_B$
-> H1: Behauptung (Unterschied vorhanden)
-> Es gibt einen Unterschied in der mittleren Gewichtszunahme zwischen den
beiden Gruppen
$μ_{A} \not= μ_B$

Wir haben eine Grundgesamtheit und darum ist die Varianz automatisch gleich für beide Stichproben -> zweistich test
![[_attachments/Pasted image 20240619144326.png]]
$s_p = 9.978$
$T(x,y) = (43 - 63) / 9.978 * \sqrt{64 / 16} = -4.009$
$t_{14, 0.975} = 2.145$

$|-4.009| > 2.145$
-> H0 wird abgelehnt -> Es gibt einen statistisch signifikanten Unterschied in der
mittleren Gewichtszunahme zwischen den beiden Gruppen (Gruppe A und Gruppe B) bei
einem Signifikanzniveau von 5%
## 152
n = m = 6
### a)
$\bar x_{vor} = 86.383$
$s^2_{vor} = 798.778 \rightarrow s_{vor} = 28.263$
$\bar x_{nach} = 87.32$
$s^2_{nach} = 584.582 \rightarrow s_{nach} = 24.178$
### b)
Behauptung: Es gibt einen Unterschied im durchschnittlichen Gewicht vor und nach dem
Aufhören des Rauchens.
-> H0: Gegenteil von Behauptung (kein Unterschied vorhanden)
-> Es gibt keinen Unterschied im durchschnittlichen Gewicht vor und nach dem
Aufhören des Rauchens.
$μ_{vor} = μ_{nach}$
-> H1: Behauptung (Unterschied vorhanden)
-> Es gibt einen Unterschied im durchschnittlichen Gewicht vor und nach dem
Aufhören des Rauchens.
$μ_{vor} \not = μ_{nach}$
### c)
Da wir eine Grundmenge haben und daher automatisch die Varianz der Grundgesamtheit
gleich ist für beide Stichproben… darum brauchen wir keinen Homo-Test und können
gleich den unverb. Zweistichproben-t-Test verwenden

$s_p^2 = (5/10 * 798.778) + (5/10 * 584.582) = 691.68$
$s_p = \sqrt{691.68} = 26.3$

$T(x,y) = (86.383 - 87.32) / 26.3 * \sqrt{36 / 12} = -0.0617$
$t_{10, 0.975} = 2.228$

-> $|-0.0617| \le 2.228$
-> H0 kann nicht abgelehnt werden -> Es gibt keinen statistisch signifikanten
Unterschied im durchschnittlichen Gewicht vor und nach dem Aufhören des Rauchens
bei einem Signifikanzniveau von 5%