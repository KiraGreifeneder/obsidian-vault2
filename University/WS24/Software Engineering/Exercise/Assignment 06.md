---
type: university-assignment
assignment-course: "[[Exercise|Software Engineering (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-12-10T23:59:00
---

> Scoring: 
> - UI components: 4500 SLOC
> - Service Component: 5000 SLOC
> - CORE Component: 1000 SLOC
>   
>   Assumption: Around 10 methods per component

startCOCOMO, 1
MonteCarlo, MonteCarlo_Off
AutoCalculate, Off
size_type, SLOC

> New SLOC: 
> Added 2 classes, UI Mission Planning and Mission Planning Service -> 4500 + 5000 = 9500 SLOC.

new_size, 9500

>Reused SLOC: We didn't reuse any methods, only components. 3 CORE components were reused, leading to 1000 * 3 = 3000 SLOC

reused_size, 3000

> Integration required (reused): The reused CORE components will need to support mission planning, but integrating their new methods into Mission Planning should not be very doable. The reused components do not induce any breaking changes -> I estimate it to be around 10%

IM_reused, 10
AA_reused, 0

> Modified SLOC: We modified the existing CORE components that were required in the new use case. Added 10 methods to existing components -> 1000 SLOC

modified_size, 1000

> Design Modified: The design has changed mainly in the UI department, where the new Mission Planning interface needs to be integrated with the rest of the UI and system. Different UI components will now need to interact with each other (main page now needs to be able to bring up the mission planning UI), all leading to some amount of modification.
> 
> The rest of the system stays intact though, and the base functionality of the drones and the system doesn't change all that much.
> 
> I estimate it to be around 6%.

DM_modified, 6

> Code modified: Changes will most likely have to be made to existing UI components, although their scope should be limited. New methods have to be added to existing components, which should not be too difficult as we do not have to modify existing methods. 
> 
> I estimate it to be around 5%.

CM_modified, 5

> Integration required (modified): Since we have modified existing components and added new methods, integration is required for the reused CORE components/methods, which was already covered in IM_reused. However, other UI components may need to modified too, e.g. map UI, live positions etc. This requires more significant amounts of integration.
> 
> I estimate is to be around 30%.

IM_modified, 30
AA_modified, 0
SU_modified, 0
UNFM_modified, 0

> Precedentedness: Some of us have decent experience in designing UIs and implementing similar things, but no specific experience that might help for sure. -> nominal

prec, Nominal 
flex, High

> Required Software Reliability: Failure would mean losing drones, making the whole system  unusable. Reliability is critical -> very high

rely, Very_High

>  Database size: Most likely will need some space to store flight plans, lots of data from heat mapping, tracking etc., but no big data stores -> nominal

data, Nominal

> Product Complexity :  Lots of risk/failure mitigation during flight, complex navigation and control over the drones -> high

cplx, High
ruse, Low
docu, Low

>Architecture/Risk Resolution: Identified lots of risks in all fields -> very high

resl, Very_High

> Team Cohesion: Decent communication, when we do work together we can communicate well and work very efficiently -> high

team, High

> Analyst Capability:  Don't really have much experience in that area at all -> low

acap, Low

> Programmer capability: Decent amount of job experience between all of us, capable programmers -> high

pcap, High

> Personell continuity: We haven't had anyone leave the team, assuming we've been working on this together from the start and didn't "take over" the project from another teram -> very high

pcon, Very_High

>Application Experience: Not fully clear how everything is supposed to work, little experience with similar mission planning apps -> low

apex, Low

> Platform Experience: Only viewed it from the outside, no hands-on experience, only basic concepts -> low

pexp, Low

>  Language and Toolset experience: Lots of experience with Java but not with VaadimUI -> Nominal

ltex, Nominal
pmat, Nominal

> Time Constraint: No real constraint -> very low (lowest COCOMO would allow is nominal, therefore nominal instead)

time, Nominal

> Storage Constraint: Should be rather easy to achieve as it is run on a capable machine (most likely no embedded device or something similar) with enough available storage space for the normal/small amount of data -> very low  (lowest COCOMO would allow is nominal, therefore nominal instead)

stor, Nominal

> Platform Volatility: Lots of new applications will be added, but low modification and rather lots of addition. -> low

pvol, Low
tool, Nominal
site, Nominal
sced, Low
software_maintenance, Off

> Low salary for a project that is mainly for research and development purposes - most people working on it for free most likely. 

software_labor_cost_per_PM, 2500
submit2, Calculate
software_EAF, 1.34
size_exponent, 1.0503
schedule_exponent, 0.308
software_effort, 42.8
software_schedule, 11.7

![](_attachments/Pasted%20image%2020241210165600.png)