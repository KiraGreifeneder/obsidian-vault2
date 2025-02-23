---
type: university-assignment
assignment-course: "[[Exercise|Computer Architecture (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## a) 
![[_attachments/Pasted image 20240523041028.png]]
Mögliche Pfade (nicht alle Möglichkeiten)
$R2 \rightarrow R4: 32 + 140 + 60 =232ps$
$R1 \rightarrow R2: 32+32+224+60=348ps$
$R5\rightarrow R3:32+32+32+224+60=380ps$
$R4 \rightarrow R5: 32 + 32 +272 + 60 = 396ps$
$R2 \rightarrow R5 \space (blau): 32+32+272+60=396ps$
$R1 \rightarrow R1: 32+32+272+32+60=428ps$
$R2 \rightarrow R5 \space (braun): 32+43+32+272+60=439ps$

## b)

$R2 \rightarrow R4: 32 + 140 + 60 =232ps$
$R2 \rightarrow R5: 32+32+185+32=281ps$
$R4 \rightarrow R5: 32 + 32 + 185 + 60 = 309ps$
$R4 \rightarrow R1: 32+32+185+32+60=341ps$
$R1 \rightarrow R2: 32+32+224+60=348ps$
$R5\rightarrow R3:32+32+32+224+60=380ps$ <- neuer kritischer Pfad

Die 3 Pfade, die von der Beschleunigung betroffen wären, werden sehr viel kürzer. Am langsamsten sind die Pfade, die über die Memory Komponente laufen. 

## c)
**Multicycle:** $F_c=\frac{1}{380}\approx2.63GHz$

**Single Cycle:**
![[_attachments/Pasted image 20240523020920.png]]
$Rot: 32+150+32+60=274ps$
$Gelb: 32 + 150 + 32 + 60 = 274ps$
$Blau: 32 + 150 + 32 + 70 = 284ps$
$Grün: 32 + 224 + 140 + 185 + 224 + 32 + 70 = 907ps$ <- kritischer Pfad
$F_{c}=\frac{1}{907}\approx1.10GHz$

Der multicycle Prozessor hat eine eindeutig **höhere Taktfrequenz**. Jedoch braucht der multicycle Prozessor bis zu 5 Takte pro Operation des Single Cycle Prozessors, wodurch er insgesamt langsamer ist.
