---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Architecture/Lecture]]"
completion-status: Complete
---
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