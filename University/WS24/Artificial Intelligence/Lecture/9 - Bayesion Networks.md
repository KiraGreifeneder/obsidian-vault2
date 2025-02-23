---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Artificial Intelligence/Lecture]]"
completion-status: "Not started"
---
## Lecture material

## Summary/Notes
## Quiz Prep

### Reading Bayesian Networks
![450](_attachments/Pasted%20image%2020250112212736.png)
### Conditional Independence
![450](_attachments/Pasted%20image%2020250112215543.png)
- **If we know the values/state of the parents**, then a node X is conditionally independent of neighboring (non-descendant) nodes.
- **If we don't know the values/state of the parents**, X is dependent on non-descendants!
### Determine joint distribution
This is the "Normal" probability calculation, without "givens".
![450](_attachments/Pasted%20image%2020250112230013.png)
If a Bayesian Network consists of $n$ random variables $X_1, X_2, \ldots, X_n$, the joint probability distribution $P(X_1, X_2, \ldots, X_n)$ is given by: $$ P(X_1, X_2, \ldots, X_n) = \prod_{i=1}^n P(X_i \mid \text{Parents}(X_i)) $$
- $P(X_i \mid \text{Parents}(X_i))$ represents the conditional probability of $X_i$ given its parent nodes in the network.
- If $X_i$ has no parents, $P(X_i \mid \text{Parents}(X_i))$ simplifies to $P(X_i)$, the marginal probability of $X_i$.
### Solve a probabilistic query $P(X) | E = e$
By example: in the burglary example, we want to calculate the probability of a burglary given that John and Mary called.

To do this, we have to calculate $P(b | j, m)$ and $P(\neg b | j, m)$.

For both events, we have to sum up all the possible joint probabilities. This involves going through all variations of the remaining nodes in the network. 

![600](_attachments/Pasted%20image%2020250112234811.png)
The nodes that aren't given in the query are $e$ and $a$, so we have to sum up all the possible joint probabilities.

Do the same thing for the negation of the event:
![](_attachments/Pasted%20image%2020250112234947.png)Finally, compute $\alpha$ using the results:
![600](_attachments/Pasted%20image%2020250112235042.png)
### Non-Redundant Numbers
![600](_attachments/Pasted%20image%2020250112235617.png)
Only need to store one number per case