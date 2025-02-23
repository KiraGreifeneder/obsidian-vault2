---
type: university-assignment
assignment-course: "[[Exercise|Logic (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2025-01-13T16:59:00
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
## Instructions
![](_attachments/challenge11.pdf)
## Solutions
### 1. 
Input/Encoding:
```
( set-logic QF_LIA )

( declare-fun circle () Int )
( declare-fun square () Int )
( declare-fun triangle () Int )

(assert (= (+ circle circle) 10))
(assert (= (+ (* circle square) square) 12))
(assert (= (- (* circle square) (* triangle circle)) circle))

; Solve
(check-sat)
(get-model)
```
Z3 Output:
```
sat
(
  (define-fun square () Int
    2)
  (define-fun triangle () Int
    1)
  (define-fun circle () Int
    5)
)
```
### 2. 
```
( set-logic QF_LIA )

( declare-fun circle () Int )
( declare-fun square () Int )
( declare-fun triangle () Int )

(assert (= (+ circle circle) 3))
(assert (= (+ (* circle square) square) 10))
(assert (= (- (* circle square) (* triangle circle)) circle))

; Solve
(check-sat)
(get-model)
```
Doesn't work because no sum of two ints can be 3. We can fix this by changing one line:
Input:
```
( set-logic QF_LIA )

( declare-fun circle () Int )
( declare-fun square () Int )
( declare-fun triangle () Int )

(assert (= (+ circle circle) 2)) ; changed 3 to 2 so that circle = 1
(assert (= (+ (* circle square) square) 10))
(assert (= (- (* circle square) (* triangle circle)) circle))

; Solve
(check-sat)
(get-model)
```
Output:
```
sat
(
  (define-fun square () Int
    5)
  (define-fun triangle () Int
    4)
  (define-fun circle () Int
    1)
)
```