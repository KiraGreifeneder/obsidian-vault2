---
type: university-assignment
assignment-course: "[[Exercise|Statistics (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## Instructions


## Solutions
```table-of-contents
title: Overview
style: nestedList # TOC style (nestedList|nestedOrderedList|inlineFirstLevel)
minLevel: 0 # Include headings from the specified level
maxLevel: 0 # Include headings up to the specified level
includeLinks: true # Make headings clickable
debugInConsole: false # Print debug info in Obsidian console
```
## 107
3 Ja- oder Nein Entscheidungen. Wahrscheinlichkeit, dass sie sich irren:
A = 0,05
B = 0,10
C = 0,15
Unternehmen richtet sich nach einer Mehrheitsentscheidung.

| AB!C                    | A!BC                    | !ABC                     | ABC                     |
| ----------------------- | ----------------------- | ------------------------ | ----------------------- |
| $0,05*0,1*0,85=0,00425$ | $0,05*0,9*0,15=0,00675$ | $0,95*0,10*0,15=0,01425$ | $0,05*0,1*0,15=0,00075$ |
$P(2 \le X)=0,00425+0,00675+0,01425+0,00075\approx0,026=2,6\%$
## 108
2% voted for E-Partei in Survey
In total 13% voted for E-Partei

**a) How many people lied? (the 13% are accurate)**
$13-2=11\%$ of all voters said they'll vote for something else but actually voted E-Partei

**b) What percentage of E-Partei Voters lied?**
$\frac{11\%}{13\%}\approx84,62\%$
## 109
Normal dist:
$\mu=498g, \space\sigma=4g$
Need packets with 500g $\pm$ 5g

**What percentage of Packets don't fulfill this?**

$z(505)=\frac{{505-498}}{4}=1,75\rightarrow 0,9599$
$z(495)=\frac{{495-498}}{4}=-0,75\rightarrow 0,22663$
$P(505 < X < 495) =1-0,9599+0,22663=0,26673\approx 26,7\%$ aren't in the valid range.
## 110
Normal dist.
$\mu = 8, \space\sigma^{2}=0,25 \rightarrow \sigma=\sqrt{0,25}=0,5$

$P(X \le 8,4)=?$
$z=\frac{{8,4-8}}{0,5}=0,8 \rightarrow 0,78814$
$P(X \le 8,4)\approx 78,8\%$

Stetiges Merkmal, d.h. ist die Wahrscheinlichkeit, dass ein Werkstück genau 8.4cm lang ist 0%.
## 111
Normal dist.
$\mu = 100$
$\sigma_A=4$
$\sigma_B=2$

**a) Probability of having more than 205 dag after buying from both?**
Take sum of the normal distributions...
$\mu'=200$
$\sigma'=\sqrt{{\sigma_A}^2+{\sigma_B}^2}\approx4,4721$

$P(205 < X) = 1 - P(X \le 205)=?$

$z(205)=\frac{{205-200}}{4,4721}\approx 1,12\rightarrow 0,86864$
$P(205 < X) = 1 - P(X \le 205)=1 - 0,86864 = 0,13136 \approx 13,1\%$

**b) Probability of getting more from A than from B?**
Take difference of the two normal dists., find from what point difference is greater than 0.
$\mu_{B-A}=0$        ... if A is greater than B, we will get a negative result, -> under 0 is where we get more in A
-> we can already see that our z value result is 0 as we have 0 in the nominator, therefore the probability is 50%.

![[_attachments/Pasted image 20240529173525.png]]
## 112
Prisoners A, B and C, one shall not be sentenced to death.
Analog zu Monty Hall, Gefangenenproblem:

$W_{B}$ ... Wärter naming B
$L$ ... Los for getting to live

$P(W_{B}|L_A) = \frac{1}{2}$
$P(W_{B}|L_B) = 0$
$P(W_{B}|L_C) = 1$

$P(L_A|W_B)={{P(L_A)*P(W_B|L_A)}\over{P(L_A)*P(W_B|L_A)+P(L_B)*P(W_B|L_B)+P(L_C)*P(W_B|L_C)}}=$
$=\frac{\frac{1}{3} \cdot \frac{1}{2}}{\frac{1}{3} \cdot \frac{1}{2}+\frac{1}{3} \cdot 0+\frac{1}{3} \cdot 1}=\frac{1}{3}$

A wird keinesfalls genannt, B (oder auch C, wäre gleich) aber schon. 
**Alternatively, if we don't take into account WHO asks, there is a second way to calculate this**
"Wie hoch ist die Wahrscheinlichkeit dafür, dass A begnadigt wurde, unter der Bedingung, dass B nicht begnadigt wurde?"
https://de.wikipedia.org/wiki/Gefangenenparadoxon

| A     | B     | C     | Outcome |
| ----- | ----- | ----- | ------- |
| lives | dies  | dies  | A lives |
| dies  | dies  | lives | A dies  |
| dies  | lives | dies  | A dies  |
Out of these 3 cases, we know the one where B lives cannot be true. Therefore two options remain:

| A     | B    | C     | Outcome |
| ----- | ---- | ----- | ------- |
| lives | dies | dies  | A lives |
| dies  | dies | lives | A dies  |
Where A lives in 1/2 possible arrangements. Therefore A has a 50% chance of survival.
This is basically 
![[_attachments/Pasted image 20240528210042.png]]
## 113
Normal dist.
$\mu=96$
$\sigma^2=100\rightarrow\sigma=10$
150 people per plane

**a) For a full plane: E(X), Var(X) = ?**
$E(X)=96*150=14.400kg$
$Var(X)=100*150=15.000kg$

**b) Probability of the total passenger weight being more than 14,3 tons**
$P(X > 14.300) = 1 - P(X\le 14.300)=?$
$z(14.300)=\frac{{14.300-14.400}}{\sqrt{15.000}}\approx-0.82\rightarrow0.20611$
$P(X > 14.300) = 1 - 0.20611 = 0.79389 \approx 79.4\%$
## 114
Normal dist.
$\mu = 10$
$\sigma^{2}=25\rightarrow\sigma = 5$

$z(7,4)=\frac{{7,4-10}}{5}=-0.52\rightarrow0,30153$
**$P(X > 7,4) = 1 - 0.30153 \approx 69,85\%$

|X-10| has to be smaller or equal to 9, so X can be up to 19, and has to be at least 1
$z(1) = -\frac{9}{5}= -1,8 \rightarrow \phi(-1,8) = 0,03593$
$z(19)=\frac{9}{5}=1,8\rightarrow \phi(1,8)=0,96407$
$P(|X-10|\le9)= P(1 \le X \le 19) =0,96407-0,03593=0,92814\approx92,81\%$ 
## 115
A: 8 pieces, 3 broken
B: 6 pieces, 2 broken
Take one piece from each

**a) Probability that both are broken and not broken**
$P(A_{d}\cap B_d)=\frac{3}{8}*{\frac{2}{6}}= \frac{1}{8}=12,5\%$
$P(A\cap B)=\frac{5}{8}*{\frac{4}{6}}=\frac{5}{12}\approx 41.67\%$

**b) that only one piece is broken**
$P((A_{d}\cap B)\cup(A \cap B_d)) = 1 - \frac{1}{8}-\frac{5}{12}=\frac{11}{24}\approx45,83\%$

**c) that the broken piece is from box a if only one piece is broken**
$P(A_{d}\cap B) = \frac{3}{8}* \frac{4}{6}=0,25$
$P((A_{d}\cap B)|(A_{d}\cap B)\cup(A \cap B_d))=\frac{0,25}{0,4583}\approx0,5455=54,55\%$
## 116
Normal dist.
$\sigma = 2,4$
$\mu = 4,9$

**a) E(X)**
-> $\mu = 4,9$

**b) Interval of 90% around $\mu$**
take 5% from each side -> 5%, 95%
0.05 is at z = -1,64
0.95 is at z = 1,65

$\frac{{x_1-4,9}}{2,4}=-1,645 \rightarrow x_{1}=0,952m$

$\frac{{x_2-4,9}}{2,4}=1,645$ (take value inbetween, needs to be symmetrical) $\rightarrow x_{2}=8,48m$
## 117
$\sigma = 2,3$
$\mu = 4,6$

**a) Interval of 95% symmetrically around $\mu$**
97.5% is at z = 1,96
width of the interval is therefore 1,960 * 2,3 = 4,508m
$\begin{aligned} & P(4,6-d<X<4,6+d)=P(4,6-4,508<X<4,6+4,508)=P(0,092<X< 9,108)=0,95\end{aligned}$
untere grenze: $\mu - d = 4,508$
obere grenze: $\mu + d = 4,508$
$(0,092;9,108)$

<span style="color:#c00000">should use D spalte lol... Look at the table we got in class</span>

**b) height only 2.5% of giraffes reach**
$\begin{aligned} & \text {Größe }=\mu+z \times \sigma \\ & z(97,5 \%) \approx 1,96 \\ & 4,6+1,96 \times 2,3=9,108 \mathrm{~m}\end{aligned}$
## 118
Normal dist.
$\mu = 0, \space \sigma =1$

**a) Probability of a 1h deviation?**
0 weil stetig?
Sonst Abweichung bis zu einer Stunde: $1*\sigma$ Intervall, -> 68.27% (bekanntes Intervall, in Normalverteilung immer gleich)

**b) 95% interval?**
generally, 95% of values within 2 * $\sigma$, so in a $\pm 2h$ interval
## 119
5% of passengers don't show up
230 tickets for 220 seats
Probability that every passenger actually gets their seat?

**a) Exact (binomial) and näherungsweise (Poisson)**

$\begin{aligned}&\text{Binomial}\\ & X\sim B(230,0.05) \\ & f(x)=\binom{n}{x} * p^x *(1-p)^{n-x} \\ & P(X \geq 10)=1-P(X<10)=1-P(X \leq 9)=1-\Sigma_{i=0}^9\binom{230}{i} * 0.05^i * 0.95^{230-i}=1-0.2825=0.7175 \\ &\text{Poisson}\\& \lambda=230 * 0.05=11.5 \\ & P(X \geq 10)=1-P(X<10)=1-P(X \leq 9)=1-\Sigma_{i=0}^9 \frac{\lambda^i}{i!} * e^{-\lambda}=1-0.2888=0,7112\end{aligned}$

**b) Normalverteilung**
Grenzwertsatz nach Moivre-Laplace...
$P(X \ge 10) = 1-P(X<9)$
$Z=\frac{{9-11,5+0,5}}{\sqrt{11,5*(1-0,05)}}=-0,605$
$\phi(-0,605)=0,2709$
$P(X\ge10)=1-0,2709=0,7291$
## 120
**a) $\mu$ and $\sigma$ for the total weight of the pen**
$\mu = 2,5+0,5+10 = 13g$
$\sigma=\sqrt{0,2^2+0,1^2+0,5^{2}}\approx0,5477$ 

**b) Probability of a pack of pens exceeding 640g?**
$\mu'=13*50=650$
$\sigma = \sqrt{0,5477^2*50}\approx3,873$

$Z(640)=\frac{{640-650}}{3,873}\approx -2,582$
$\phi(-2,58)= 0,00494$

$P(X > 640) = 1 - P(X\le 640) = 1-0,00494=0,99506\approx99,51\%$
## 121
p ... probability of a bit becoming faulty
Parity bit set so that in total, the 8 bits are even.

p = 0,001

**a) probability of a byte being sent correctly**
$\bar p = 0,999$
$P(\bar p_{7}\cap \bar p_{6} \cap \dots \cap \bar p_{0})=0,999^8\approx0,9920=99,2\%$

**b) probability of at least 5 bits being sent incorrectly**
$P(p \ge 5) = 0,001^5*0,999^3*{8\choose 5}+0,001^6*0,999^2*{8\choose 6}+0,001^7*0,999*{8\choose 7}+0,001^8*{8\choose 8}\approx5.59 * 10^{-14}$

**c) If parity check delivers okay result, what's the probability of the Byte actually being ok?**
Returns okay if:
- no flipped bits
- 2 flipped bits
- 4 flipped bits
- 6 flipped bits
- 8 flipped bits

$P(\text{OK})=0,9920+0,001^2*0,999^6*{8\choose2}+0,001^4*0,999^4*{8\choose4}+0,001^6*0,999^2*{8\choose6}+0,001^{8}\approx0,9921$
$P(\bar p_{7}\cap \bar p_{6} \cap \dots \cap \bar p_{0} | OK)= \frac{0,9920}{0,9921}\approx0,99997=99,997\%$
