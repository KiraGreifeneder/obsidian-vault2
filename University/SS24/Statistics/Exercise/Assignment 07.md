---
type: university-assignment
assignment-course: "[[Exercise|Statistics (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## Instructions


## Solutions

## 76
M... Math failed (= 0.3)
C... Chemistry failed (= 0.2)
B... Both failed (= 0.06)

- $P(M|C)=\frac{P(M\cap C)}{P(C)}=\frac{0.06}{0.2}=0.3$ 
- $P(C|M)=\frac{0.06}{0.3}=0.2$
- $0.3+0.2-0.06=0.044$
## 77
S... Pregnant: 95% positive result
Not pregnant: 3% positive result
35% of testers are pregnant
1. $P(S|P)=\frac{P(P|S)*P(S)}{P(P|S)*P(S)+P(P|\neg S)*P(\neg S)}=\frac{0.95*0.35}{0.95*0.35+0.03*0.65}=0.9446=94.46\%$
2. $P(S|N)=\frac{P(N|S)*P(S)}{P(N|S)*P(S)+P(N|\neg S)*P(\neg S)}=\frac{0.05*0.35}{0.05*0.35+0.97*0.65}=0.0270=2.70\%$
## 78
W = 0.7 ... Win
L = 0.25 ... Loss
T = 0.05 ... Tie
3 games, are played, order matters
1. possible permutations: WWW: none. WWT: 3 (p. mit w.)
   $P(\text{WWW}\cup \text{WWT})=0.7^3+0.7^2*0.05*3=0.4165=41.65\%$
2. possible permutations for WLT:  $3! = 6$
   $P(WLT)=0.7*0.25*0.05*6=0.0525=5.25\%$
## 79
3 different colored 6-sided dice are thrown
Bet on a number
If that number appears 1-3 times you get a 1-3x multiplier on your money + your money
Otherwise the money is lost
X = 1 ... investment of 1 dollar

| $x_{i}$ | $f(x_{i})$                             |
| ------- | -------------------------------------- |
| -1      | $\left( \frac{5}{6}\right)^3=0.578$    |
| 1       | $\frac{1}{6}*(\frac{5}{6})^2*3=0.347$  |
| 2       | $(\frac{1}{6})^2*\frac{5}{6}*3=0.0694$ |
| 3       | $(\frac{1}{6})^3=0.00463$              |
## 80
X... sum of 3 chosen cards (1-5)
cards: (1)(2)(3)(4)(5)

|       | Possibilities | Sum $x_{i}$ | W. Funktion $f(x_{i})$ | Verteilungsfunktion $F(x_{i})$ |
| ----- | ------------- | ----------- | ---------------------- | ------------------------------ |
|       | 123           | 6           | 0.1                    | 0.1                            |
|       | 124           | 7           | 0.1                    | 0.2                            |
|       | 125, 134      | 8           | 0.2                    | 0.4                            |
|       | 135, 234      | 9           | 0.2                    | 0.6                            |
|       | 145, 235      | 10          | 0.2                    | 0.8                            |
|       | 245           | 11          | 0.1                    | 0.9                            |
|       | 345           | 12          | 0.1                    | 1.0                            |
| Total | 10            |             |                        |                                |

## 81
10 people
2 in vienna
4 stamps
choose 4 out of 10

a) hypergeometrische verteilung:

| $x_i$ | $f(x_i)$                                              |
| ----- | ----------------------------------------------------- |
| 0     | ${{2\choose 0}*{8\choose 4}\div{10 \choose 4}}=0.333$ |
| 1     | ${2\choose 1}*{8\choose 3}\div {10\choose 4}=0.533$   |
| 2     | ${2\choose 2}*{8\choose 2}\div{10\choose 4}=0.133$    |

b) 
$E(X)=0.533+2*0.133=0.8$
$E(X^2)=0.533+2^2*0.133=1.0655$
$Var(X)=E(X^2)-E(X)^2=1.0655-0.8^2=0.427$

## 82
n = 400
4/400 = 1/100 are colorblind
$P(X=0)=0.99^{400}=0.01795$
$P(X\ge 1)=1-P(X=0)=0.9820$

Poisson Verteilung (used when there is a small chance of something, and large sample)
![[_attachments/Pasted image 20240515105047.png]]
![[_attachments/Pasted image 20240515104509.png]]
$\lambda=n*p=4$
$f(0)={4^0\over0!}*e^{-4}=0.0183$
$P(X\ge 1)= 1-0.0183= 0.9817$
## 83
30 seats
6% of people don't show up
32 signups
Only dealing with "success and failure" and the events are independent + mit Zurücklegen -> Binomial dist.
![[_attachments/Pasted image 20240515110903.png]]
1. $P(X=0)={32\choose 0}*0.06^0*(1-0.06)^{32}=0.1381$
2. $P(X=2)={32\choose 2}*0.06^2*(1-0.06)^{30}=0.2790$
3. $P(X=1)={32\choose 1}*0.06^1*(1-0.06)^{31}=0.2820$
   $P(X\ge 2)=1-(P(X=0)+P(X=1))=0.5799$
## 84
400 pieces pp
no more than 5% Ausschuss
choose 40 out of 400 without zurücklegen
if these 40 are good, package is sold
Probability of more than 5% being bad in a package?

N = 400
p = 0.05
n = 40
M = N * p = 20

We have success and failure, independent events, no zurücklegen -> hypergeometrische V.
![[_attachments/Pasted image 20240515113029.png]]
$P(X\ge 1)=1-P(X=0)$
probability that the bag does not meet quality standards:
$f(0)={{20\choose 0}*{400-20\choose 40-0}\over {400 \choose 40}}=0.1151$
prob. that it does meet quality standards
$P(X\ge 1)= 1-0.1151=0.8849$

## 85
S. and F, indep. mit Zurückl. -> Binomialverteilung
n and p disparity is high -> Poisson

n = 50,000 Autos pro Woche
p = 3/50,000 = 0.00006
$\lambda$ = n * p = 3
$P(X \le 1) = P(X=0)+P(X=1)$
![[_attachments/Pasted image 20240515114653.png]]
$f(0)=e^{-3}=0.0498$
$f(1)={3^1\over 1!}*e^{-3}=0.1494$
$P(X \le 1) = f(0)+f(1)=0.1991$
## 86
![[_attachments/Pasted image 20240515113029.png]]
4 red, 7 blue
take orbs until all red are gone
X ...Number of takes

a) hypergeometrische verteilung, prob. function 
N = 11
M = 4
n = 4, 5, ..., 10, 11
x = 4 number of red orbs ( we want P(X=4) for each take)

${M \choose x} = {4 \choose 4}$ is always 1, so we can ignore it
Need to subtract, otherwise it's just describing the prob of having 4 red orbs "by now" rather than getting the red orb at that take.

| $n_i$ (X) | $f(n_i)$ (f(X))                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4         | ${11-4\choose 4-4}\div {11 \choose 4}=\frac{1}{330}=0.003030$                                                                                              |
| 5         | ${7\choose 1}\div {11 \choose 5}-f(4)=\frac{1}{66}-\frac{1}{330}=\frac{2}{165}$                                                                            |
| 6         | ${7\choose 2}\div {11 \choose 6}-f(4\dots5)=\frac{1}{22}-\frac{1}{330}-\frac{2}{165}=\frac{13}{330}$                                                       |
| 7         | ${7\choose 3}\div {11 \choose 7}-f(4\dots6)=\frac{7}{66}-\frac{1}{330}-\frac{2}{165}-\frac{13}{330}=\frac{47}{1430}$                                       |
| 8         | ${7\choose 4}\div {11 \choose 8} - f(4\dots7)=\frac{7}{33}-\frac{1}{330}-\frac{2}{165}-\frac{13}{330}-\frac{47}{1430}=\frac{7}{66}$                        |
| 9         | ${7\choose 5}\div {11 \choose 9}-f(4\dots 8)=\frac{21}{55}-\frac{1}{330}-\frac{2}{165}-\frac{13}{330}-\frac{47}{1430}-\frac{7}{66}=\frac{28}{165}$         |
| 10        | ${7\choose 6}\div {11 \choose 10} \dots=\frac{7}{11}-\frac{1}{330}-\frac{2}{165}-\frac{13}{330}-\frac{47}{1430}-\frac{7}{66}-\frac{28}{165}=\frac{14}{55}$ |
| 11        | $1-\frac{1}{330}-\frac{2}{165}-\frac{13}{330}-\frac{47}{1430}-\frac{7}{66}-\frac{28}{165}-\frac{14}{55}=\frac{4}{11}$                                      |
erwartungswert und varianz
$E(X) = E(X) = 4 \cdot \frac{1}{330} + 5 \cdot \frac{2}{165} + 6 \cdot \frac{13}{330} + 7 \cdot \frac{47}{1430} + 8 \cdot \frac{7}{66} + 9 \cdot \frac{28}{165} + 10 \cdot\frac{14}{55} + 11\cdot\frac{4}{11}=9.46$
$E(X^2) = 4^2 \cdot \frac{1}{330} + 5^2 \cdot \frac{2}{165} + 6^2 \cdot \frac{13}{330} + 7^2 \cdot \frac{47}{1430} + 8^2 \cdot \frac{7}{66} + 9^2 \cdot \frac{28}{165} + 10^2 \cdot\frac{14}{55} + 11^2\cdot\frac{4}{11}=93.37$
$Var(X)=E(X^2)-E(X)^2=93.37-9.46^2=3.88$ 
## 87
2 fish per hour
X ... # of fish caught
$P(X < 40)=\sum_{x=0}^{39}\frac{48^x}{x!}*e^{-48}=0.1073$
$P(X\ge 40)=1-P(X<40)=0.8927$
## 88
(BB)(BM)(MB)(MM)
a) 1/3
b) 1/2
## 89
P = 0.1 ... progammieren richtig benantwortet
D = 0.35 ... datenbanken richtig beantwortet
C ... Korrekt beantwortet

a) $P(\text{C})=\frac{1}{3}*(0.9+0.9+0.65)=0.8167$
b) $P(\text{C})^n>0.5$
n = ?
$ln(P(C)^n)>ln(0.5)$
$n*ln(P(C))>ln(0.5)$
$n < \frac{ln(0.5)}{ln(P(C))}$
$n < 3.423$
-> dem Bewerber dürfen höchstens 3 Fragen gestellt werden

## 90
![[_attachments/Pasted image 20240515162738.png]]
![[_attachments/Pasted image 20240515162745.png]]
b)
$P(3\le X\le 6)$ = $F(6)-F(3)=0.84-0.59=0.33$
$P(8 \le X)=F(10)-F(8)=1-0.96=0.04$
$P(|X-4|\le 3) \rightarrow X:\{1,2,3,4,5,6,7\}$
$P(|X-4|\le 3)=F(7)-F(1)=0.91-0.19=0.72$

c)
$E(X)=\int_{0}^{10}x*{1\over 5}-{x\over 50}dx=\frac{10}{3}=3.33$
$E(X^2)=\int_{0}^{10}x^2*({1\over 5}*{x\over 50})dx=\frac{50}{3}$
$V(X)=E(X^2)-E(X)^2={50\over 3}-({10\over 3})^2=5.556$

d)
$\int_{0}^{x}{1\over x}-{x\over 50}dx= 0.6$
$({x\over 5}-{x^2\over 100})\big|_{0}^x={x\over 5}-{x^2\over 100}=0.6$

![[_attachments/Pasted image 20240515162352.png]]
## 91
4 wins
5 losses
keep drawing until win is reached

Geometrische Verteilung mit Bernoulli Versuchen...
![[_attachments/Pasted image 20240515144832.png]]

p = 4/9

| X   | f(x)  | F(X)  |
| --- | ----- | ----- |
| 1   | 0.444 | 0.444 |
| 2   | 0.247 | 0.691 |
| 3   | 0.137 | 0.828 |
| 4   | 0.076 | 0.904 |
| 5   | 0.042 | 0.946 |
| 6   | 0.024 | 1     |
## 92
Stetige Gleichverteilung
$E(X)=0+\frac{15}{2}=7.5$
![[_attachments/Pasted image 20240515145915.png]]
