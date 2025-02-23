---
type: university-assignment
assignment-course: "[[Exercise|Statistics (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## Instructions


## Solutions
[UeStat1_SS2024_11.pdf](file:///C:%5CUsers%5Ckirag%5COneDrive%5CJKU%5CSS24%5CStatistik%5CAngaben%5CUeStat1_SS2024_11.pdf)
## Aufgabe 135
95% Konfidenzintervall für die durschnittliche Abfüllmenge von 750ml Flaschen.
```R
x <- c(772, 756, 758, 755, 745, 765, 749, 762, 755, 769)
mean <- mean(x)
s_squared <- sum((x - mean)^2) / (length(x) - 1)
```
### a)
$\bar x=758.6$
$s^2=\frac{1}{n-1}\sum^n_{i=1}(x_{i}-\bar x)^{2}\approx72.27$ 
### b)
$s = \sqrt{72.27} \approx 8.501$
$\mu \in \left[\bar x \pm t_{n-1,1-\frac{\alpha}{2}}* \frac{s}{\sqrt{n}}\right]\rightarrow$
$\rightarrow \mu \in [758.6 \pm t_{9, 0.975} * \frac{8.501}{\sqrt{10}}]$
$\rightarrow \mu \in [758.6 \pm 6.08]$
$\rightarrow \mu \in [752.52; 764.68]$

Der Mittelwert der Abfüllmenge liegt mit einer Wahrscheinlichkeit/Sicherheit von 95% in dem gegebenen Intervall.
### c)
L = 1ml
$n\approx \left( 2*u_{1-\frac{\alpha}{2}}* \frac{s}{L} \right)^2$
$n\approx \left( 2* z(0.975) * 8.501 \right)^{2}= (2*1.96*8.501)^{2} \approx1110.48 \rightarrow 1111$
### d)
L = 1ml, n = 40
$n\approx \left( 2*u_{1-\frac{\alpha}{2}}* \frac{s}{L} \right)^{2}\rightarrow u\approx \pm {\frac{L\sqrt{n}}{2s}}$
$S = D\left({\frac{L\sqrt{n}}{2s}}\right)= D\left( {\frac{1\sqrt{40}}{2*8.501}} \right)= D(\approx 0.37)\approx28.86\%$
## Aufgabe 136
4708 patients with migraines reacted to placebos
out of 294, 185 stomach flu patients reacted to placebo

$p_{migraine}=\frac{1385}{4708}=0.2942$
$p_{stomach}=\frac{185}{294}=0.6293$

Konfidenzintervall für einen Anteil. Voraussetzung: $np(1-p)\ge 9$
$migraine:~~ 4708*0.2942*(1-0.2942) \approx 977.60 \ge 9$
$stomach:~~ 294*0.6293*(1-0.6293) \approx 68.58 \ge 9$
OK
### a)
$\pi \in \left[ p \pm u_{1-\frac{\alpha}{2}}*\sqrt{{\frac{p*(1-p)}{n}}} \right] \rightarrow$
$\rightarrow \pi \in \left[0.2942 \pm u_{0.995}*\sqrt{{\frac{0.2942*(1-0.2942)}{4708}}} \right]$
$\rightarrow\pi \in \left[0.2942 \pm 2.576 * 0.0064 \right]$
$\rightarrow\pi \in \left[0.5567; 0.7019 \right]$
### b)
$\pi \in \left[0.6293 \pm u_{0.995}*\sqrt{{\frac{0.6293*(1-0.6293)}{294}}} \right]\rightarrow$
$\rightarrow \pi \in \left[0.6293 \pm 2.576 * 0.0282 \right]$
$\rightarrow \pi \in \left[0.5567; 0.7019 \right]$

## Aufgabe 137
n = 1000, p = 0.6
### a)
For n = 1000
$np(1-p) = 1000 * 0.6 * (1-0.6) = 240 \ge 9$  -> OK
$\pi \in \left[ p \pm u_{1-\frac{\alpha}{2}}*\sqrt{{\frac{p*(1-p)}{n}}} \right] =\left[ 0.6 \pm 1.96 * \sqrt{{\frac{0.6*(1-0.6)}{1000}}} \right] = [0.5696;0.6304]$

For n = 500
$np(1-p) = 500 * 0.6 * (1-0.6) = 120  \ge 9$  -> OK
$\pi \in \left[ 0.6 \pm 1.96 * \sqrt{{\frac{0.6*(1-0.6)}{500}}} \right] = [0.5571;0.6429]$

For n = 5
$np(1-p) = 5 * 0.6 * (1-0.6) = 1.2  \not\ge 9$  -> INVALID
### b)
n = 1000, p = 0.456
$np(1-p) = 1000 * 0.456 * (1-0.456) = 248.064   \ge 9$  -> OK
$\pi \in \left[ 0.456 \pm 1.96 * \sqrt{{\frac{0.456*(1-0.456)}{1000}}} \right] = [0.4251;0.4869]$
## Aufgabe 138
n = 600
p = 0.3
$\mu \in [0.29; 0.31]$

$SE=\sqrt{\frac{p*(1-p)}{n}}=\sqrt{\frac{0.3*(1-0.3)}{600}}=0.0187$
$E = \frac{{0.31-0.29}}{2}=0.01$
$z = 0.31 - \frac{0.01}{0.0187}\approx 0.54$
Konfidenzniveau: $D(z)=D(0.54)=0.4108=41.08\%$
## Aufgabe 139
### a)
Es soll bewiesen werden, dass sich as Durschnittsalter deutlich von 27 Jahren unterscheidet.
- $H_{0}: \mu \approx 27$
- $H_{1}: \mu \not\approx 27$
### b)
t-Test:
$\mu_{0}= 27$
$\bar x=27.8$
$s = \sqrt{16} = 4$

$T(x) =  \frac{\bar x - \mu_{0}}s * \sqrt{n}$
$t_{n-1,1-\frac{\alpha}{2}}=t_{20, 0.995}= 2.09$

$|T(x)|=\frac{27.8-27}{4} * \sqrt{21} = 0.9165 \le 2.09$   -> $H_0$ kann nicht abgelehnt werden
## Aufgabe 140
```R
x <- c(1009, 1005, 1010, 1008, 995, 1010)
mean <- mean(x)
s_squared <- sum((x - mean)^2) / (length(x) - 1)
```
### a)
$\bar x \approx 1006.17$
$s \approx 5.776$
### b)
- $H_{0}: \mu \approx 1kg$
- $H_{1}: \mu \not\approx 1kg$
### c)
$t_{n-1,1-\frac{\alpha}{2}}=t_{5, 0.995}= 4.03$
$|T(x)|=\frac{1006.17-1000}{5.773} * \sqrt{6} \approx 2.618 > 4.03$ -> $H_0$ wird abgelehnt
### d)
$\mu \in \left[\bar x \pm t_{n-1,1-\frac{\alpha}{2}}* \frac{s}{\sqrt{n}}\right]\rightarrow$
$\rightarrow \mu \in \left[1006.17 \pm 4.03 * \frac{5.776}{\sqrt{6}}\right]$
$\rightarrow \mu \in \left[996.67; 1015.67\right]$
## Aufgabe 141
### a)
- $H_{0}: \mu \approx 114$
- $H_{0}: \mu \not\approx 114$
### b)
s = 38
$t_{n-1,1-\frac{\alpha}{2}}=t_{30, 0.99}= 2.46$
$|T(x)|=\frac{114-140}{38} * \sqrt{31} \approx |-3.81| > 2.46$ -> $H_0$ wird abgelehnt
## Aufgabe 142
Zentrum: $\mu = 24,~ \sigma^{2}=25, \sigma = 5$
Autobahn: $\mu = 27,~ \sigma^{2}=4, \sigma = 2$
Should arrive at 9
### a)
$P(X_Z\le30)=\phi\left( \frac{{30-24}}{5} \right)=\phi(1.2)=88.49\%$
$P(X_A\le30)=\phi\left( \frac{{30-27}}{2} \right)=\phi(1.5)=93.32\%$ -> Autobahn ist die bessere Route
### b)
$P(X_Z\le32)=\phi\left( \frac{{32-24}}{5} \right)=\phi(1.6)=94.52\%$
$P(X_A\le32)=\phi\left( \frac{{32-27}}{2} \right)=\phi(2.5)=99.38\%$ -> Autobahn ist die bessere Route
## Aufgabe 143
1kg Sack: $\mu = 1.18,~\sigma=0.06$
3kg Sack: $\mu = 3.22,~\sigma=0.08$
### a)
$\mu' = 1.18 * 3 = 3.54kg$
$\sigma^{2}=0.06^2*3\approx0.0108kg^2$
### b)
$\mu_{\text{diff}} = 3.54-3.22=0.32kg$
$\sigma^{2}_{\text{diff}} = 0.0108 + 0.08^2 = 0.0172kg^{2}=0.1311kg$

$\phi(-z) = \phi(-\frac{{0-0.32}}{0.1311})=\phi(2.44)=0.9927=99.27\%$
## Aufgabe 144
70% der Patienten hatten Masern
60% hatten Windpocken
90% der Patienten hatten mindestens eines der beiden

$P(M \cap W)=0.7+0.6-0.9=0.4$