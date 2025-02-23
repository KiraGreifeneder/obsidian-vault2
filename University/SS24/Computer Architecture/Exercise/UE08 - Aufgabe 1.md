---
type: university-assignment
assignment-course: "[[Exercise|Computer Architecture (Exercise)]]"
assignment-status: Closed
assignment-deadline: 
---
![[_attachments/Pasted image 20240630195440.png]]
![[_attachments/Pasted image 20240630195503.png]]
![[_attachments/Pasted image 20240630195603.png]]
## a) CPI und Ausführungszeit
> For the CPI (avg. number of cycles per instruction), we look at the number of requred cycles for each operation and multiply it by its probability
> For the Execution Time, we multiply the instruction count, CPI, and the clock fperiod (Taktperiode = t/taktfrequenz)
### Single-cycle Prozessor
Since everything takes one cycle here, the CPI is 1.
Ausführungszeit $T^A_{exe}=I_c*CPI*T$
Taktfrquenz  $f = 700Mhz = 700 * 10^6 Hz$
Taktperiode $T =1/700*10^6 = 1.42857*10^{-9}s = 1.42857ns$
$T^{A}_{exe}=3Mrd. * ~1 * 1.42857ns = 4285710000ns = 4285710000 * 10^{-9} = 4.28571s$
### Multicycle Prozessor
$CPI = \sum\limits^n_{i=1}(CPI_i*F_i)$
$CPI = 0.42 * 4 + 0.12*5 + 0.21 * 3 + 0.07 * 4 + 0.18 * 4 =3.91$
$T = \frac{1}{3.4*10^9}s$
$T^{A}_{exe}=3Mrd. * ~3.91 * \frac{1}{3.4*10^9} = 3.45s$
### Pipelined Prozessor
In this case, we'll just calculate the total number of cycles we need
- We have a baseline of needing at 3 billion cycles + 4 cycles where no instructions are completed due to the processor not being full yet.
- Additionally some cycles will be incurred through jumps and NOPs (or similar):
	- $Cycles_{jal, beq}=(3B * (0.21*0.32+0.18)) * 2 = 1483200000$ additional cycles, because for each jump two cycles are flushed
	- $Cycles_{NOP} = (3B * 0.42) * 0.25 = 315000000$ because for every 4th arithmetic operation, we lose a cycle 

With that, out CPI is the total number of cycles divided by the number of instructions...:
$CPI = (3B + 4 + 1483200000 + 315000000)/(3B) = 1.5994$ cycles per instruction

Funky things to remember for pipelined processors:
- Technically, most operations only require one cycle (as we read in a new instruction with each cycle and at the same time an instruction is completing every cycle)
- However, in the beginning, no instructions haven't been read in yet and we have 5 cycles where no instruction is being completed
- When we have to jump in the execute phase, we also have to cancel the instructions that were read in while all the branch/jump stuff was being processed, thereby "losing" two cycles. So these instructions sometimes take up two cycles instead of one.
![[_attachments/Pasted image 20240630223027.png]]