---
type: university-assignment
assignment-course: "[[Exercise|Computer Architecture (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
## a) Kritische Pfade

**1. Fetch**
$t_{pd}=t_{pcq}+t_{adder}+t_{mux} + t_{setup}=225ps$

**2. Decode**
$t_{pd}=t_{pcq}+t_{RF-Read}+t_{setup}=50+65+20=135ps$

**3. Execute**
$t_{pd}=t_{pcq}+t_{mux}+t_{ALU}+t_{setup}=20+30+200+50=300ps$

**4. Memory**
$t_{pd}=t_{pcq}+t_{mem-read}+t_{setup}=20+150+50=220ps$

**5. Writeback**
$t_{pd}=t_{pcq}+t_{mux}+t_{RF-Setup}= 20 + 30 + 70 = 120ps$

![[_attachments/Pasted image 20240606021241.png]]
## b) Taktzykluslängen

Minimale Länge des Taktzyklus im multi-cycle Prozessor: 300ps (der längste Kritische Pfad von allen Pipeline Phasen)

Der minimale Pfad im single-cycle Prozessor hat eine Länge von:
$t_{pd}=t_{pcq}+t_{mem-read}+t_{RF-Read}+t_{ALU}+t_{mem-read}+t_{mux}+t_{mem-setup}=$
$=20+150+65+200+150+30+70=685ps$

Theoretisch hat der pipelined Prozessor einen maximalen Speedup von Faktor 5 (# der Pipeline-Stufen) $\rightarrow \frac{685}{5}=137ps$. Jedoch wird dieser Speedup nicht eingehalten: $\frac{685}{300}\approx2.28$

Dies liegt daran, dass nicht jeder Pfad in der Pipeline gleich lang ist, und bei jedem Schritt an den neuen Registern nun die Clock-to-Q und Setup Time beachtet werden muss.

![[_attachments/Pasted image 20240606021255.png]]