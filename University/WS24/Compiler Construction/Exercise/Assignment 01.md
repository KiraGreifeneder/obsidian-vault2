---
type: university-assignment
assignment-course: "[[Exercise|Compiler Construction (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-10-16T23:59:00
---
Kira Greifeneder (k12242829)
## Instructions
![](_attachments/UE01.pdf)

## Solutions
### 1. Grundbegriffe
#### a)
```
"program" ident "singleton" ident "{" "}" "=" "(" charConst ")" "{" "}" .
```
Länge: 12 TS
Beispiel: 
```
program a singleton b{} = ('b'){}
```
#### b)
> NTS sind rechtsrekursiv, wenn das NTS am ende des NTS auftauchen kann, linksrekursiv wenn es am Anfang auftauchen kann, und sonst zentral. Linksrekursionen sind problematisch, wenn ein NTS sich selbst als erstes symbol haben kann, bspw. Expr = Term | Expr "-" . 

**Statement**
Rekursiv: Ja
- Bei `"if" "(" Condition ")" Statement [ "else" Statement]` -> direkt, zentral/rechts
- Bei `Block -> "{" Statement "}"` -> indirekt, zentral
- Bei `"while" "(" Condition ")" Statement` -> direkt, zentral

**Designator**
Rekursiv: Ja
- Bei `ident "[" Expr "]" -> [ "-" ] Term -> Factor -> Designator` -> indirekt, zentral

**SingletonDecl**
Rekursiv:  Nein
#### c)
> We can build this by starting with the NTS and simply building our way down and expanding each NTS. Then just write all the TS on the same level at the end.

![[_attachments/Assignment 01 2024-10-11 17.01.45.excalidraw]]
#### d)
> Pretty self explanatory. For the terminale Anfaenge, just find what TS an NTS can start with.
> For the Nachfolger, find out what TS can follow AFTER the NTS (Not the ending, really! just what follows)
```
First(AssignOP) = "=", "+=", "-=", "*=", "/=", "%="
Follow(AssignOP) = "-", ident, number, charConst, "new", "(", 
```
```
First(Condition) = "-", ident, number, charConst, "new", "("
Follow(Condition) = ")"
```
```
First(GlobalVarDecl) = "ident"
Follow(GlobalVarDecl) = 
	First(ConstDecl), First(GlobalVarDecl), First(ClassDecl),
		First(SingletonDexl)}, "{"
	= "final", First(Type), "class", "singleton", "{"
	= "final", ident, "class", "singleton", "{"
```
### 2. Konstruktion einer Grammatik
> Also pretty self explanatory. [] are optional, {} is 0..n repetitions, | is a choice.
> Write TS small, NTS large. word is allowed to be lowercase because it gets read in as one token, so we don't need to define it as being multiple characters etc.

```
Chatverlauf = Eintrag { ";" Eintrag } "." .

Eintrag = User [ "[" Datum "]" ] ":" word {word} .

User = "@" word [ "#" digit digit [digit] ] . 

Datum = "heute" | "gestern" | digit digit "." digit digit "." digit digit digit digit .
```

### 3. Beseitigung von Linksrekursionen
> We can remove Linksrekursionen by adding a repetition instead.
> Look at what happens if we choose the non-recursive path
> Look at what happens when we terminate the recursion
> 
> Usually we can just kinda replace the NTS with the anchor and put the rest into a repetition

**Tree**
Keine Linksrekursion

**Properties**
```
Properties = ident "=" text { "," ident "=" text } .
```
**Children**
```
Children = ε {"solid" ident | "dashed" ident}
```

