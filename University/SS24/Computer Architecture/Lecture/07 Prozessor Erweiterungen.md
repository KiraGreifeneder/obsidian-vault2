---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
## Kodierung von Gleitkommazahlen
![[_attachments/Pasted image 20240629221320.png]]
- Mantissa between $1 \le m < 10$
	- 23 bits long + hidden bit (which is always 1)
We are left with the generalised format of 
	$(-1)^S*(1.F)*2^{E-127}$, used as $(-1)^S*(1 + F)*2^{E-127}$
	where F is the mantissa, E is the exponent and S the 1+ is the hidden bit. This can be set to 0 in some special cases to create even smaller numbers.
	The -127 is the bias, which is -1023 for double precision.
Special cases:
- If all exponent bits are 0, then the hidden bit also becomes 0. These are denormalised numbers. We can make even smaller numbers with them, and it's the only way to represent 0.
- If all exponent bits are 1 and all mantissa bits are 0 -> infinity
- If all exponent bits are 1 and not all mantissa bits are 0 -> NaN