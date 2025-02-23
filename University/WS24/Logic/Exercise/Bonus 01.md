---
type: university-assignment
assignment-course: "[[Exercise|Logic (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-10-21T18:00:00
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/challenge1.pdf)
## Solutions
Limboole input (done using RegEx)
```
(!j | !i | !e) & 
(c | b | a) & 
(i | !c | b) & 
(f | !e | c) & 
(i | !h | a) & 
(!g | !b | a) & 
(!g | f | !d) & 
(i | d | !b) & 
(h | !f | c) & 
(!f | e | a) & 
(h | d | a) & 
(!i | !d | c) & 
(!g | !e | d) & 
(h | d | !c) & 
(!j | b | a) & 
(h | !g | b) & 
(!h | !d | !a) & 
(j | !f | !c) & 
(!j | !d | !a) & 
(!j | !i | b) & 
(!j | f | !d) & 
(d | b | a) & 
(e | !d | c) & 
(j | !f | !d) & 
(g | !f | b) & 
(!d | !c | b) & 
(j | !e | !d) & 
(!g | d | !c) & 
(!j | h | f) & 
(!j | !f | e) & 
(!h | !g | f) & 
(!h | !f | c) & 
(i | !f | !e) & 
(h | g | !b) & 
(h | !c | !b) & 
(d | c | !a) & 
(!j | !b | a) & 
(h | f | !a) & 
(!f | b | !a) & 
(!g | f | !c)
```
Limboole output
```
% SATISFIABLE formula (satisfying assignment follows)
j = 0
i = 1
e = 0
c = 0
b = 1
a = 0
f = 0
h = 1
g = 0
d = 0
```
