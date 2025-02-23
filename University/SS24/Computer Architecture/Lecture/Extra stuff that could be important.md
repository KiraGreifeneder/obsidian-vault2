---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
# 05 Prozessorkomponenten
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


# 06 Prozessoraufbau
Prozessor besteht aus
- Datenpfad: Funktionseinheiten zur Ausführung der Instruktionen
- Kontrollpfad: Kontrollsignale für Steuerung
3 verschiedene Implementierungen:
- Single-cycle:
	- Jede Instruktion wird in einem einzigen Takt ausgeführt
	- Erlaubt sehr gutes Verständnis der Prinzipien
- Multicycle:
	- Aufteilung einer Instruktion in Teilschritte
	- In einem Takt wird nur ein Teilschritt ausgeführt
	- Ausführung einer Instruktion benötigt mehrere Takte (unterschdl. Anzahl abhängig von Instr.)
	- Aber: Takte können kürzer sein, da kürzere kritische Pfade  höhere Taktfrequenz
- Pipelined:
	- Aufteilung einer Instruktion in Teilschritte
	- Parallele Ausführung mehrerer Instruktionen
	- Performancesteigerung
Tjere are only 13 instructions of 5 types thattt we need to create useful programs
- R type: add, sub, and, or, shifts... register/register
- I type: immediate instructinos
- S type: Memory instructions
- B type: bedingte sprünge
- J type: unbedingte sprünge
## Komponenten
![[_attachments/Pasted image 20240629174930.png]]![[_attachments/Pasted image 20240629174950.png]]
Der Single-cycle Prozessor hat getrennte Instruktions- und Datenspeicher.
Beim Multicycle prozessor (Von-Neumann-Architektur) sind diese kombiniert.
[Single Cycle RISCV notes]([../../Excalidraw/SingleCycleRISCV)
### I-Typ
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-01 3.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-02 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-03 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-04 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-05 2.png]]
### S-Typ
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-10 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-11 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-12 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-13 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-14 2.png]]
### R-Typ
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-16 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-17 2.png]]
### B-Typ
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-19 2.png]]![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-20 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-21 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-22 2.png]]

![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-23 2.png]]
![[_attachments/Rechnerarchitektur - 06_prozessoraufbau-24 2.png]]
## Steuerwerk
![[_attachments/Pasted image 20240629203550.png]]
To allow for jumps, we also need to define that we either want to do a dependent or independent jump. If independent, we override the need to get a zero result from the ALU.
![[_attachments/Pasted image 20240629203944.png]]
### ALU (inside view)
![[_attachments/Pasted image 20240629203738.png]]
### Steuersignale
![[_attachments/Pasted image 20240629204025.png]]
![[_attachments/Pasted image 20240629204353.png]]


