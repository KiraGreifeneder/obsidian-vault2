---
type: university-assignment
assignment-course: "[[Exercise|Logic (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2025-01-07T12:00:00
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
## Instructions
\[... generate a proof of the same formula "by hand" and write it down as beautifully as possible, in a style as you would present it in a mathematics course. Scan your hand-written proof or take a photo of it and save this scan/photo as a pdf. **The document containing your hand-written proof is what you need to submit as a solution for this Lab Exercise.**

For the presentation of the exercise, you have to present the automated proof in the Theorema System, explain your hand-written solution, and finally compare the two.]
## Proving Theorem #3
### Theorema Proof
![](_attachments/Theorema%20Proof.pdf)
### My Proof
We want to prove:
$$\forall R, A: reflexive[R,A] \land (\exists x \in A)\Rightarrow \neg asymmetric[R,A]$$
Definitions:
$$reflexive[R,A] \iff \forall x \in A: R[x,x]$$
$$asymmetric[R,A] \iff \forall x, y \in A: R[x,y] \Rightarrow \neg R[y,x]$$

#### Proof by contradiction
$\exists x \in A$, so let $x \in A$ be arbitrary but fixed.
Because we know that $[R,A]$ is reflexive, we know the following:
$$R[x,x]$$
To prove our statement by contradiction, let's assume that reflexivity does imply asymmetry:
$$\forall R, A: reflexive[R,A] \land (\exists x \in A)\Rightarrow asymmetric[R,A]$$
Since the definition for asymmetry tells us that, for any tuple $R[x,y]$ there is no tuple $R[y,x]$, it would mean that our tuple $R[x,x]$ implies that $R[x,x]$ doesn't exist, which is contradictory:
$$asymmetric[R,A] \implies R[x,x] \Rightarrow \neg R[x,x]$$
We have thereby shown that reflexivity, given that there is an element x in A, must imply that the relation is not asymmetric. $\square$

#### Proof by contradiction (less text)
$$\forall R, A: reflexive[R,A] \land (\exists x \in A)\Rightarrow asymmetric[R,A]$$
Let $x \in A$ be arbitraty  but fixed. By the definition of reflexivity we know:
$$reflexive[R,A] \iff \forall x \in A: R[x,x]$$
$$\implies R[x,x]$$
By the definition of asymmetry we know:
$$asymmetric[R,A] \iff (\forall x, y \in A: R[x,y] \Rightarrow \neg R[y,x])$$
$$\implies (x \in A: R[x,x] \Rightarrow \neg R[x,x])$$
$$\iff \bot$$
We have therefore proven that $\forall R, A: reflexive[R,A] \land (\exists x \in A)\Rightarrow \neg asymmetric[R,A] ~~~~\square$
### Comparison
I followed the same structure as the theorema proof, as it was the easiest way I could think of.

Unlike Theorema, I didn't specifically say what we have to assume and prove for a proof by contradiction, since i explain it in the conclusion of my more textual proof. The proof method itself is considered more "self explanatory" in my work.

The Theorema proof also didn't explain how exactly it came to the contradiction, just that one could be derived from multiple definitions. I tried to make up for this in my proof by adding explanations and writing out the derivation.