---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
## Timing Analyse
- Setup-Zeit: tsetup $t_{setup}$ = Zeitfenster vor Taktflanke in dem D stabil anliegen muss
-  Hold-Zeit: thold $t_{hold}$ = Zeitfenster nach Taktflanke in dem D stabil anliegen muss
-  Abtastzeit: $t_a$ = Zeitfenster um Taktflanke herum in dem D stabil anliegen muss
- $t_{ccq}$ = Zeitfenster nach Taktflanke, nach dem Q beginnen kann sich zu ändern (contamination delay)
- $t_{pcq}$ = Zeitfenster nach Taktflanke, nach dem Q garantiert stabil is (propagation delay)
### Guide
![[_attachments/Pasted image 20240629134942.png]]
- Add buffers to paths that are too short
## Serieller Addierer
Use Schieberegister, iteratively get result. The lone register is the carry bit, and the MSB once the calculation is done. Keep pushing the LSB to the right at the bottom
![[_attachments/Pasted image 20240629140652.png]]
### Ladbares Schieberegister
![[_attachments/Pasted image 20240629140223.png]]
## Multiplizierer
![[_attachments/Pasted image 20240629142513.png]]
![[_attachments/Pasted image 20240629144335.png]]
### Multiplikation im 2er-Komplement
-  Generally, 2s complement already works
- But one issue is that if we multiply two 4 bit numbers that the result is, let's say 5 bit with only zeroes on the left. 
- With this method, we are always left with zeroes as MSB if the number doesn't take up the full width.
- Since we can add any number of zeroes to the left and be left with a positive number, and it is the same with negative numbers (adding 1s instead of 0s), we can just make sure the full width is used and filled with either 1s or zeroes.
 ![[_attachments/Pasted image 20240629162400.png]]
- To do this, we double the size of each of our coefficients, either filling up the left with 1s or zeroes depending on what their MSB/sign bit is.
- Then, we calculate it as normal, and are left with a number twice the size of our (elongated) coefficients.
- We can then remove the left half of the number and are left with the actual result double the size of our original coefficients, which has the right sign bits filling up the left side.
From slides:
![[_attachments/Pasted image 20240629162639.png]]
All in all, what we would have to do to the Schaltung is
1. make it bigger
2. somehow fill all the extra bits based on the coefficients' MSB
3. Ignore the left half of all bits at the end
## Speicher
Example of 2x2 bit storage:
![[_attachments/Pasted image 20240629165731.png]]
- we only need one addressleitung for two columns of storage elements. 
- we need one multiplexer per column of storage elements
![[_attachments/Pasted image 20240629173937.png]]![[_attachments/Pasted image 20240629173953.png]]
![[_attachments/Pasted image 20240629174006.png]]