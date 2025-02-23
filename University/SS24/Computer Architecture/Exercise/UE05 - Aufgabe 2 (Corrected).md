---
type: university-assignment
assignment-course: "[[Exercise|Computer Architecture (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
[A2 Angabe](obsidian://open?vault=University&file=Rechnerarchitektur%2FUEs%2F_attachments%2FPasted%20image%2020240516125441.png)

---
**Betrachte das IEEE-754 Format für Single Precision Zahlen. Gib deine Ergebnisse sowohl
im IEEE-754-Format (binär) als auch im Dezimalsystem an.**
## a) Ermittle die kleinste Zahl ε sodass 2 + ε > 2.
$\epsilon$ can't be `minreal` as adding`minreal`to 2 would still result in 2 due to precision errors. $\epsilon$ therefore needs to be the smallest step up from 2 we can take.

2 can be represented as $2_{10} = (-1)^0*(1 + 0)*2^{128-127}$, giving us the following parameters:

| S   | Exponent  | Mantissa                     |
| --- | --------- | ---------------------------- |
| 0   | 1000 0000 | 000 0000 0000 0000 0000 0000 |
The smallest mantissa step we can take is obviously 1, and $1.000 0000 0000 0000 0000 0000_{2}= $ 
## b) Ermittle die kleinste darstellbare (positive oder negative) Zahl `minreal`.
We want the number closest to 0 in the format 
$$(-1)^S*(1.F)*2^{E-127}$$
### The smallest normalized number
Our $\varepsilon$ needs to be positive, so $S = 0$.
Smallest possible fraction/mantissa value:  
$$F = .0000\space 0000\space 0000\space 0000\space 0000\space 0000_2=0_{10}$$
and our exponent needs to be as small as possible (without being 0, as that would lead to denormalized interpretation). Therefore
$$E = 1_{10} = 0000\space0001_2$$
$$\varepsilon = (-1)^{0}*(1+0)*2^{1-127}=2^{-126}\approx1.75494*10^{-38}$$

|   S    | Exponent  |           Mantissa           |
| :----: | :-------: | :--------------------------: |
| 0 or 1 | 0000 0001 | 0000 0000 0000 0000 0000 000 |
### The smallest denormalized number
If all bits of the the exponent are 0 and the mantissa is non-zero, the "hidden bit" is set to 0. This allows us to represent even smaller numbers.

We add 1 to _F_ , as we still want the smallest possible mantissa without making it `null`.
$$F = .0000\space 0000\space 0000\space 0000\space 0001\space 0000_2={2^{-23}}_{10}$$
Our exponent becomes $E = 0_{10}$, and the hidden bit is set to 0. In the denormalized mode,  $2^{-126}$ is used instead of $2^{E-127}$.
$$\varepsilon = (-1)^0*(0+2^{-23})*2^{-126}\approx1.401298*10^{-45}$$

| S      | Exponent  | Mantissa                     |
| ------ | --------- | ---------------------------- |
| 0 or 1 | 0000 0000 | 0000 0000 0000 0000 0000 001 |
## c) Ermittle die größte darstellbare (positive oder negative) Zahl `maxreal`.
$$\varepsilon=(-1)^0*(1.F)*2^{254-127}=1*(1+0.99999988079071044921875)*2^{127}\approx3.402823*10^{38}$$

| S   | Exponent  | Mantissa                     |
| --- | --------- | ---------------------------- |
| 0   | 1111 1110 | 1111 1111 1111 1111 1111 111 |
