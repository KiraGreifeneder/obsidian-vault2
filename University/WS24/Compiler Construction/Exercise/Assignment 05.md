---
type: university-assignment
assignment-course: "[[Exercise|Compiler Construction (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-13T23:59:00
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/UE-T-3.pdf)
## Solutions
>We just need to write lines of code where applicable... Declare the OUT of the NTS we're representing beforehand, but assume that the OUT of other NTS within are already declared for us...l
```html
Number<out num> =    
digit                             (. int num = t.numVal; .)
{ digit                           (. num = num * 10 + t.numVal .)
} .                 

Minutes<out mins> =   
digit                             (. int mins = t.numVal * 10; .)
digit                             (. mins += t.numVal; 
                                     if (mins > 59) { error("Mins val cannot be greater than 59."); } .)
.

Hours<out mins> =                  
digit                             (. int mins = t.numVal; .)
[ digit                           (. mins = mins * 10 + t.numVal.)
]                                 (. mins *= 60 .)
.

Time<out mins> =                  (. int mins, h, m, n; .)
Hours<out h> ":"                  (. mins = h .)
Minutes<out m>                    (. mins += m .)
[ "*" Number<out n>               (. mins *= n .)
] .

Duration<out mins> =              (. int mins, t; boolean add; .)
Time<out t>                       (. mins = t; .)
{ AddOp<out add> Time<out t>      (. mins = add ? mins + t : mins - t .)
} .

AddOp<out add> =                  (. boolean add; .)
"+"                               (. add = true; .)
| "-"                             (. add = false; .)
.
```
