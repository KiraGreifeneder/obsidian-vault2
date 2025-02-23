---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Artificial Intelligence/Lecture]]"
completion-status: "Not started"
---
## Lecture material
![](_attachments/04_Game_Playing_Search.pdf)
![](_attachments/05_Learning_while_Acting.pdf)

## Summary/Notes
### Part 4: Planning Against an Opponent, Game Playing Search Algorithms
#### Game Playing as a Search Problem:
**Initial State:** initial board position and player to move.

**Successor Function:** Returns a list of `[move, newstate]` pairs (legal moves and corresponding results states) for a given state `s`

**Terminal (Goal) Test:** Determines when the game is over (check if we're in a terminal state).

**Utility Function:** (Also called Objective Function or Payoff Function) gives a numerical value to each terminal state (e.g. +1 for a win, -1 for a defeat, 0 for a draw). -> just decides the outcome of the game once we are in a terminal state...

#### Optimal Strategy
An Optimal strategy is a strategy that leads to the best outcome possible if one plays against an infallible opponent (imagine trying to find the best strategy against stockfish). The Optimal strategy for MAX is to always select the action that leads to the state with the highest Minimax Value at the next lower level. This is called the Minimax Decision.

![500](_attachments/Pasted%20image%2020241121183854.png)
If MAX chooses A1, then MIN will go for A11 as to not shift the utility in favor of MAX as much as possible. Higher numbers would be better for MAX, choosing A11 would leave MAX with a utility of 3.

#### Minimax Values
The **Minimax value** of a node `n` is the maximum utility MAX is guaranteed to gain from `n` onwards, assuming that both players play optimally from `n` until the end of the game:

It is the max utility (best outcome) we are guaranteed from a node n onwards...
![](_attachments/Pasted%20image%2020241121184513.png)
![](_attachments/Pasted%20image%2020241121185012.png)
**Properties of Minimax**
- **Completeness:** Minimax is complete **if** the game tree is finite (chess has special rules for this).
- **Optimality:** Minimax is optimal if the opponent also plays optimally
- **Time Complexity:** Every run of Minimax searches from the current node all the way to the leaves, and the complexity of a single run in `O(b^m)`
- **Space Complexity:** Minimax values can be computed by depth-first tree traversal

#### $\alpha-\beta$ Pruning
With this method we try to play optimally without exploring every path. We will try to compute the correct minimax decision without looking at every node. 

**Pruning** refers to the process of eliminating parts of a search tree without examining them in detail.
**Alpha-beta Pruning** is the specific method for computing the correct minimax possition, while ignoring subtrees that cannot possibly influence the final decision.

Alpha is the best value found for MAX so far. (highest value, worst for MIN)
Beta is the worst value found for MAX so far. (lowest value, best for MIN)

![500](_attachments/Pasted%20image%2020241121190426.png)

**The Algorithm**
![350](_attachments/Pasted%20image%2020241121190459.png)
#### Alpha-Beta Search with Depth Limit and Heuristic Evaluation
- We'll impose a depth limit, (cutoff-test) instead of a terminal test
- We'll apply a heuristic evaluation functin EVAL to non-terminal nodes
- Perorm Minimax / Alpha-Beta on these values instead of true utilities
![500](_attachments/Pasted%20image%2020241121191508.png)
![500](_attachments/Pasted%20image%2020241121191635.png)
