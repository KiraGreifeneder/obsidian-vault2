---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Artificial Intelligence/Lecture]]"
completion-status: "Not started"
---
## Lecture material

## Summary/Notes
#### Heuristic functions
**The Heuristic function** guesses how close we are the the goal node. h(n) is the estimated cost of the cheapest path from a node n to a goal node. Therefore, if n is the goal node, h(n) = 0.

**Euclidean Distance**
![500](_attachments/Pasted%20image%2020241101192838.png)
**City Block (or Manhattan) Distance**
![500](_attachments/Pasted%20image%2020241101192901.png)
**Chebyshev Distance**
![500](_attachments/Pasted%20image%2020241101193143.png)
#### Greedy Best-First Search
The basic strategy is to rely directly on h(n). From the fringe, we'll always use/expand the node n that appears closest to a goal. f(n) = h(n). This should avoid expanding many useless branches.

It relies solely on local information / guesses and is therefore very short-sighted. There is no guarantee.
#### A\* Search
The idea of this search algorithm is to minimise the total estimated solution cost. We avoid expanding paths that are already expensive, and use a more complex evaluation function $f(n)=g(n)+h(n)$, where $g(n)$ is the actual path cost from the start node to the current node $n$, and $h(n)$ is the heuristic function from above.

It ends up acting like a combination of Uniform Cost Search and Greedy Search.
![400](_attachments/Pasted%20image%2020241101192425.png)
![400](_attachments/Pasted%20image%2020241101192454.png)
### Summary
![](_attachments/Pasted%20image%2020241101192630.png)