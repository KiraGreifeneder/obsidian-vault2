---
type: university-assignment
assignment-course: "[[Exercise|Artificial Intelligence (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-11T12:12:00
---
Kira Greifeneder (k12242829)
## Instructions


## Notes
Heuristic functions
``` python
def random_heuristic(current: Node, goal: Node):
    return random.random()

# the distance in movement along x axis + movement across y axis
def cityblock_heuristic(current: Node, goal: Node):
    return sum(abs(x - y) for x, y in zip(current.state, goal.state))

# length of direct line from point to point
def euclidean_heuristic(current: Node, goal: Node):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(current.state, goal.state)))

# distance purely in movement along the axis that produces the bigger number
def chebyshev_heuristic(current: Node, goal: Node):
    return max(abs(x - y) for x, y in zip(current.state, goal.state))
```

