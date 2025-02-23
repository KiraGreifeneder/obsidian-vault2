---
type: university-assignment
assignment-course: "[[Exercise|Logic (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2025-01-06T23:59:00
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
## Solutions
### Original Expression
```
(!e & !d & c & a) | 
(d & !c & !e & !a) | 
(b & !e & !c & d) | 
(b & c & !e & d) | 
(!b & d & !c & a) | 
(c & !d & b & e) | 
(!c & !b & !d & !e) | 
(!e & b & !a & !c) | 
(d & c & !a & !b) | 
(!b & !d & !e & !c) | 
(!e & a & !c & !d) | 
(e & !d & !a & b) | 
(!b & !d & !c & a) | 
(e & !b & a & !d) | 
(c & !b & !d & e) | 
(!a & e & b & !d) | 
(c & !d & !a & b) | 
(!d & e & !c & !b)
```
### Definitions
```
ln1 <-> (!e & !d & c & a)
ln2 <-> (d & !c & !e & !a)
ln3 <-> (b & !e & !c & d)
ln4 <-> (b & c & !e & d)
ln5 <-> (!b & d & !c & a)
ln6 <-> (c & !d & b & e)
ln7 <-> (!c & !b & !d & !e)
ln8 <-> (!e & b & !a & !c)
ln9 <-> (d & c & !a & !b)
ln10 <-> (!b & !d & !e & !c)
ln11 <-> (!e & a & !c & !d)
ln12 <-> (e & !d & !a & b)
ln13 <-> (!b & !d & !c & a)
ln14 <-> (e & !b & a & !d)
ln15 <-> (c & !b & !d & e)
ln16 <-> (!a & e & b & !d)
ln17 <-> (c & !d & !a & b)
ln18 <-> (!d & e & !c & !b)
```
### Translation into CNF
In general, step by step for `ln1`:
```json
(ln1 -> (!e & !d & c & a)) & ((!e & !d & c & a) -> ln1)
(!ln1 | (!e & !d & c & a)) & (!(!e & !d & c & a) | ln1)
(!ln1 | !e) & (!ln1 | !d) & (!ln1 | c) & (!ln1 | a) & (e | d | !c | !a | ln1)
```

Search pattern: `(\w+).*\((!?\w) & (!?\w) & (!?\w) & (!?\w)\)`
Replace: `(!$1 | $2) & (!$1 | $3) & (!$1 | $4) & (!$1 | $5) & (!$2 | !$3 | !$4 | !$5 |) &`
Remove all resulting `!!`.

Final result:
```
(ln1 | ln2 | ln3 | ln4 | ln5 | ln6 | ln7 | ln8 | ln9 | ln10 | ln11 | ln12 | ln13 | ln14 | ln15 | ln16 | ln17 | ln18) &

(!ln1 | !e) & (!ln1 | !d) & (!ln1 | c) & (!ln1 | a) & (e | d | !c | !a | ln1) &
(!ln2 | d) & (!ln2 | !c) & (!ln2 | !e) & (!ln2 | !a) & (!d | c | e | a | ln2) &
(!ln3 | b) & (!ln3 | !e) & (!ln3 | !c) & (!ln3 | d) & (!b | e | c | !d) &
(!ln4 | b) & (!ln4 | c) & (!ln4 | !e) & (!ln4 | d) & (!b | !c | e | !d) &
(!ln5 | !b) & (!ln5 | d) & (!ln5 | !c) & (!ln5 | a) & (b | !d | c | !a) &
(!ln6 | c) & (!ln6 | !d) & (!ln6 | b) & (!ln6 | e) & (!c | d | !b | !e) &
(!ln7 | !c) & (!ln7 | !b) & (!ln7 | !d) & (!ln7 | !e) & (c | b | d | e) &
(!ln8 | !e) & (!ln8 | b) & (!ln8 | !a) & (!ln8 | !c) & (e | !b | a | c) &
(!ln9 | d) & (!ln9 | c) & (!ln9 | !a) & (!ln9 | !b) & (!d | !c | a | b) &
(!ln10 | !b) & (!ln10 | !d) & (!ln10 | !e) & (!ln10 | !c) & (b | d | e | c) &
(!ln11 | !e) & (!ln11 | a) & (!ln11 | !c) & (!ln11 | !d) & (e | !a | c | d) &
(!ln12 | e) & (!ln12 | !d) & (!ln12 | !a) & (!ln12 | b) & (!e | d | a | !b) &
(!ln13 | !b) & (!ln13 | !d) & (!ln13 | !c) & (!ln13 | a) & (b | d | c | !a) &
(!ln14 | e) & (!ln14 | !b) & (!ln14 | a) & (!ln14 | !d) & (!e | b | !a | d) &
(!ln15 | c) & (!ln15 | !b) & (!ln15 | !d) & (!ln15 | e) & (!c | b | d | !e) &
(!ln16 | !a) & (!ln16 | e) & (!ln16 | b) & (!ln16 | !d) & (a | !e | !b | d) &
(!ln17 | c) & (!ln17 | !d) & (!ln17 | !a) & (!ln17 | b) & (!c | d | a | !b) &
(!ln18 | !d) & (!ln18 | e) & (!ln18 | !c) & (!ln18 | !b) & (d | !e | c | b) 
```
... my dumbass forgot the ln1, ln2 at the end of each line...