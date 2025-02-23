---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Formal Models/Lecture]]"
completion-status: Complete
---
# BCP (Binary Constraint Propagation)
---
[Limboole](https://maximaximal.github.io/limboole/)
## Definitions
Literal:
	Variable or negated variable.
Clause:
	Disjunction of literals.
	e.g. $x \vee y$
Cube:
	Conjunction of literals.
	e.g. $x\wedge y$
Verum and Falsum:
	$\top$ and $\bot$

The $BCP(\phi ,l)$ is obtained from $\phi$ by
1. Finding a lone variable $l$ (i.e. not in a clause such as $(l \vee n)$)
2. Removing all clauses with $l$ 
3. removing all occurrences of $\overline l$
4. Finding a new lone variable $l'$ and repeating the process

If the result is:
1. an empty clause, then the formula is unsatisfiable
2. the empty CNF, then the formula is satisfiable

Example:
$\phi = (a\vee b) \wedge (\neg a\vee \neg b)\wedge a$
$BCP(\phi , a)=\neg b = {\phi}_2$
$BCP(\phi , \neg b)=\top$
# Bounded Model Checking (BMC)
---
Model checking: We requirements (temporal logic), and our model (kripke structure etc.) and we want to check if it fits the requirements. -> BMC

Some **properties** to evaluate our model:
- Reachability: property _p_ holds in one reachable state
- Invariant: property _p_ holds in all reachable states
- Safety: some bad property _p_ never holds
	- Can show a violation by finding some property that is violated in a state on a finite path
- Liveness: something good will eventually happen
	- violated if a formula p never holds at all
	- if a counter-example (violation) is infinite, it must be because of a cycle
- Fairness: under certain conditions, some property holds repeatedly