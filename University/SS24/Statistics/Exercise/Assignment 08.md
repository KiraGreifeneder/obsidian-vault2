---
type: university-assignment
assignment-course: "[[Exercise|Statistics (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## Instructions


## Solutions
## 93
Probability of Bomb being on board during flight: 1/1.000.000
Probability of a second bomb being on board given that there already is a bomb on board.

$P(B|B) = \frac{1}{1.000.000}$ The probability remains the same...
## 94
Two dice are thrown.
Probability that the sum is greater than 10 given that...

$^WV^2_6=6^2=36$

| For                      | Possibilities | Probability                                               | Combi. pt. 1     | Combi. pt. 2     |
| ------------------------ | ------------- | --------------------------------------------------------- | ---------------- | ---------------- |
| $\ge$ 10                 | 4             | $\frac{4}{36}=\frac{1}{9}$                                | 5, 6             | 5, 6             |
| $<10$                    | 32            | $\frac{8}{9}$                                             | 1, 2, 3, 4, 5, 6 | 1, 2, 3, 4       |
| D1 = 5                   | 6             | $\frac{1}{6}$                                             | 5                | 1, 2, 3, 4, 5, 6 |
| $X \ge10\|(D1 = 5)$      | 2             | <span style="color:#66df5d">${2\over6}={1\over 3}$</span> | 5                | 5, 6             |
| $(D1 \cup D2) = 5$       | 13            | $13\over36$                                               | 5                | 1, 2, 3, 4, 5, 6 |
| $X\ge10\|(D1 \cup D2)=5$ | 2             | <span style="color:#66df5d">$2\over13$</span>             | 5                | 5, 6             |
for $(D1 \cup D2) = 5$: 5 and 5 OR 5 and all OR all and 5 -> 1 + 6 * 2 = 13 -> 13/36
## 95
M: 1/4 chance of living another 15 years 
F: 1/3 chance of living another 15 years

**Probability of neither being alive in 15 years**
$P(\bar M \cap \bar F)=\frac{3}{4} * \frac{2}{3} = \frac{6}{12}=\frac{1}{2}$

**Probability of both being alive in 15 years**
$P(M \cap F) = \frac{1}{4} * \frac{1}{3} = \frac{1}{12}$

**Probability of only F being alive**
$P(\bar M \cap F) = \frac{3}{4} * \frac{1}{3} = \frac{3}{12} = \frac{1}{4}$

**Probability of at least one of them being alive**
$P(M \cup F) = 1 - \frac{1}{2} = \frac{1}{2}$
## 96
75% of students eat at the Mensa regularly (M)
45% of students want longer opening times (O)
25% of students do both.

|          | $M$                                    | $\bar M$                                | Sum  |     |
| -------- | -------------------------------------- | --------------------------------------- | ---- | --- |
| $O$      | 0.25                                   | <span style="color:#66df5d">0.2</span>  | 0.45 |     |
| $\bar O$ | <span style="color:#66df5d">0.5</span> | <span style="color:#66df5d">0.05</span> | 0.55 |     |
| Sum      | 0.75                                   | 0.25                                    | 1    |     |
**a)** $P(M|O)=\frac{0.25}{0.45}=\frac{5}{9}$
b) $P(O|\bar M)=\frac{0.2}{0.25}=\frac{4}{5}$
## 97
**Probability of 22 people having their birthdays on different days.**

Number of ways to have different birthdays: 
${365\choose22} = 62155453333629754060332641169334800$

Total number of ways for the birthdays to be distributed:
${{n+k-1}\choose k} = {{386}\choose 22} = 388407899846673310037900894354508000$

Probability of having all different birthdays:
$\frac{{365\choose22}}{{{386}\choose 22}} \approx 0.2818 \approx 28.18\%$
This is WRONG lol, should use variation! then it works. but why?

probably correct answer:
 $P(\text{22 different birthdays})=\frac{365}{365}*{364\over 365}*\dots*{\frac{344}{365}}\approx 0.5243 \approx 52.43\%$

**How many people until the probability of at least two people having the same birthday is greater than 50%?**

$P(\text{overlap with 22 people})=1-0.5243\approx 0.4757 \approx 47.57\%$
Since 22 is already at 47.57%, we can check out how much  +1 person changes.

$P(\text{23 different birthdays})=\frac{365}{365}*{364\over 365}*\dots*{\frac{343}{365}}\approx 0.4927$
$P(\text{overlap with 23 people})=1-0.4927=0.5073=50.73\%$
Therefore the probability becomes greater than 50 when we have 23 people.

-> Geburtstagsparadoxon
## 98
Measurement error can be modeled by the density function $\frac{x^{2}}{3}\space\text{for}-1<x<2$

**a) X < 2 and 0<X<1**
$P(X<2)=1$
$P(0<X<1)=\int_{0}^{1}{\frac{x^2}{3}dx}={[\frac{x^3}{9}}]|_{0}^{1}=\frac{1}{9}$

**b) E(X), Var(X)**
$E(X) = \int_{-1}^{2}{x*\frac{x^2}{3}dx}=\int_{-1}^{3}{\frac{x^3}{2}dx}=[\frac{x^4}{12}]|_{-1}^{2}=\frac{2^4}{12}-\frac{(-1)^4}{12}=1.25$
$Var(x)=E(X^2)-E(X)^2= \int_{-1}^{2}{x^2*\frac{x^4}{3}dx}-1.25^2=\left[  \frac{x^7}{21}  \right]|_{-1}^{2}-1.25^2=\frac{128}{21}-\frac{-1}{21}-1.25^2\approx4.58$
## 99
4 coin tosses.
Wappen (W): 70% chance
x... number of Ws

(WWWZ) also stands for (ZWWW) etc...

| (WWWW)         | (WWWZ)               | (WWZZ)                 | (WZZZ)               | (ZZZZ)         |
| -------------- | -------------------- | ---------------------- | -------------------- | -------------- |
| $0.7^4=0.2401$ | $0.7^3*0.3*4=0.4116$ | $0.7^2*0.3^2*6=0.2646$ | $0.7*0.3^3*4=0.0756$ | $0.3^4=0.0081$ |


| x   | $f(x_i)$       | $F(x_i)$ |
| --- | -------------- | -------- |
| 0   | 0.0081         | 0.0081   |
| 1   | 0.0756         | 0.0837   |
| 2   | 0.2646         | 0.3483   |
| 3   | 0.4116         | 0.7599   |
| 4   | $0.7^4=0.2401$ | 1        |

## 100
Event A: a family has children of each gender
Event B: a family has at most one girl
Are A and B independent events?

**a) If the family has 2 kids**
A=0.5
B=0.75

$P(A|B)=\frac{2}{3}\ne P(B)$
$P(B|A)=1\ne P(A)$
$P(A\cap B)=0.5\ne 0.5*0.75$
None of these are true, therefore they are dependent (if one was true, the rest would be true too tbf)

**b) If the family has 3 kids**
```
(MMM)
(MMF)*3
(MFF)*3
(FFF)
```
A = 6/8 = 3/4
B = 4/8 = 1/2
$P(A\cap B)=\frac{3}{6} = \frac{1}{2} =P(B)$
-> independent
## 101
90% have a Gehaltskonto (G)
60% have Sparkonto (S)
All customers have at least one of the two

|          | $G$                                              | $\bar G$                                | Sum |
| -------- | ------------------------------------------------ | --------------------------------------- | --- |
| $S$      | 0.9\*0.6=<span style="color:#66df5d">0.54</span> | <span style="color:#66df5d">0.06</span> | 0.6 |
| $\bar S$ | 0.9-0.54=<span style="color:#66df5d">0.36</span> | <span style="color:#66df5d">0.04</span> | 0.4 |
| Sum      | 0.9                                              | 0.1                                     | 1   |
a) P(G and S) = 0.54
b) P(S|G) = 0.54/0.9 = 0,6
c) P(G|S) = 0.54/0.6 = 0.9
d) P(S and not G) = 0.06
e) P(S or G) = 0.36 + 0.06 = 0.44

U stopid again.. not G and not S is not a valid combination
## 102
Anton does 30%, fails in 1/20 cases
Berta does 50%, fails, 1/10
Kevin does 20%, fails 1/10

In case of failure, what's the probability of Anton having done it.
$P(A|F)=\frac{P(A\cap F)}{P(F)}={0.3*\frac{1}{20}\over0.3* \frac{1}{20}+0.5* \frac{1}{10}+0.2* \frac{1}{10}}\approx 0.1765 \approx 17.65\%$ 
## 103
20% of the pop. smokes
150/1000 of the pop. dies of lung cancer
21/1000 of non-smokers die of lung cancer

**a) 6 People are chosen. Probability that exactly 50% smoke**
$0.2^3*0.8^3=0.004096=0.4096\%$ this do be wrong...

Binomial dist:
p = 0.2
n = 6

$P(X = 3)={6\choose 3}*0.2^3*(1-0.2)^{6-3}=0.08192=8.192\%$

**b) Multiple people are chosen at random. How many people do we need to choose so that there is a 95% chance of at least one smoker being among them**

$P(X = 0) = {n \choose 0}*0.2^{-0}*(1-0.2)^{n-0}=1*1*0.8^{n} = 0.8^n$
$P(X \ge 1) = 1 - P(X = 0) = 1 - 0.8^n$
$\rightarrow 1 - 0.8^{n}\ge 0.95$
$\rightarrow log_{0.8}(0.8^{n})\ge log_{0.8}(0.05)$
$\rightarrow n \ge 13.4351 \rightarrow$ <span style="color:#66df5d">We need to choose 14 people.</span>

**c) Probability of a lung cancer death (C) being from a smoker (S)**
this table is so unnecessary lol but i love it

|            | Cancer   | No cancer | sum |
| ---------- | -------- | --------- | --- |
| Smoker     | 129/1000 | 71/1000   | 0.2 |
| Non-smoker | 21/1000  | 779/1000  | 0.8 |
| sum        | 150/1000 | 850/1000  | 1   |

$P(S|C) = \frac{0.129}{0.15}=0.86=86\%$
<span style="color:#c00000">wrong, correct answer is as follows</span>

P(C_total) = (150/1000) * 0,2 + (21/1000) * 0,8 = 0,03 + 0,0168 = 0,0468
P(C_smokers) = 150 / 1000 = 0,15
P(S|C) = (0,2 * P(C_smokers)) / P(C_total)= 0,03 / 0,0468
= 0,64102… ≈ 0,6410 = 64,10%
## 104
LED burn time is distributed normally.
$\mu = 20,000$ hours
$\sigma^2=1,000,000$ hours$^2$

**a) Probability that a lamp burns for less than 19,000 hours**

$z = \frac{{x-\mu}}{\sigma}=\frac{19000-20000}{\sqrt{1000000}}=-1$
In z-score table: $P(X < 19,000) = 0.1587$

**b) Probability of burning for more than 21000 hours?**
$z=\frac{{21000-20000}}{1000}=1$
$P(X>21000)=1-0.8413=0.1587$

or just = P(X < 19000) as they are both 1000 away from $\mu$

**c) Between 19000 and 21000?**
$P(19000<X<21000)=1-0.1587*2=0.6826=68.26\%$
## 105
$\mu = 110000$ km
$P(X < 68640) = 0.06$

**a) how big is the standard deviation?**

in z index, 0.06 is roughly z = -1.55
$-1.55={68640-110000\over\sigma} \space \rightarrow \space \sigma \approx 26683.87$

**b) What percentage of the products has a lifespan of more than 160,000km?**
$z = \frac{{160000-110000}}{26683.87} \approx 1.874$
$P(X < 160000) = 1- 0.9699 = 0.0301$
## 106
3 doors: 1 car, others are goats.
Choose one door, showmaster will open a door with a goat.
Should you then change your choice of door?

Keeping choice of door:
P = 1/3 

Changing choice of door:
P = 2/3, because

| Chosen door 1 | Door 2        | Door 3        | Stay at door 1 | Switch |
| ------------- | ------------- | ------------- | -------------- | ------ |
| Goat          | Goat (opened) | Car           | Loss           | Win    |
| Goat          | Car           | Goat (opened) | Loss           | Win    |
| Car           | Goat          | Goat (opened) | Win            | Loss   |



