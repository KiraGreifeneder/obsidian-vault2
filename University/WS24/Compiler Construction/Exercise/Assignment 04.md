---
type: university-assignment
assignment-course: "[[Exercise|Compiler Construction (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-11-06T23:59:00
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
## Instructions
![](_attachments/UE04.pdf)
## Solutions
> LL(1) Verletzungen can be found by looking at the First() of different NTS and seeing if they are any overlaps (pay attention to the context though, they can start with the same ident if there is no way of mixing them up). However many lookahead symbols it would take to distinguish between them again is the LL(n) it would conform to.
### 1a
LL(1) Verletzungen: Linksrekursion in `Pointer`,
$First(Base) \cap First(Pointer) = \{\text{"float", "long"}\}$
2 Vorgriffsymbole nötig durch die Linksrekursion-> LL(\*)
> Since Type only resolves to one TS, we'd only need two symbols to distinguish between Pointer and Var. It's kinda goofy with the linksrekursion, but even then... if we keep re-entering Type, we'd still eventuall either end up with void or float or long.
### 1b
Diese Grammatik besitzt die LL(1) Eigenschaft.
### 1c
LL(1) Verletzung: $First(Seconds) \cap First(Minutes) = \{number\}$
Unendlich viele Vorgriffsymbole nötig, da `number` unendlich hoft wiederholt werden könnte -> LL(\*)
### 2a

>Where LL(1) conflicting NTS are used, reduce it down to TS. Then work your way back to NTS where applicable.
>We can simply get rid of VarDecl and ArrDecl after doing this, because we've now transferred that functionality to Decl.

```
Decl      = Type ident ( "=" number | "[" number "]"  ) .
Type      = "float" | "double" .
```
### 2b
> This LL(1) violation comes from the follows. Follow of Pairs is ",", and the iteration in Pairs also begins with ",", so we have no way of knowing whether or not we've exited. We could have kept Spread, but oh well...

```
Map       = ident ":" Value "," {ident ":" Value ","} "..." ident  .
Value     = number | "'" ident "'" .
```
### 3
```
Fields    = Assigns ":" Type .
Assigns   = ident "=" Expr .
Expr      = ( ident | number ) { ( "+" | "-" ) ( ident | number ) } .
Type      = ident { "*" } .
```
### 4
```
A         = B | C .
B         = ident ":" "b" .
C         = ident ":" "c" .
```