---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Compiler Construction/Lecture]]"
completion-status: "Not started"
---
## Lecture material
![](_attachments/01.Ueberblick.pdf)
## Summary/Notes
### Grammatiken
Sie besteht aus vier Bestandteilen:
- Terminalsymbole sind jene, die nicht weiter zerlegt werden können (if, >=, ident, number...)
- Nonterminalsymbol können weiter zerlegt werden (Statement, Condition, Type)
- Produktionen sind Ableitungsregeln (Statement = Designator "=" Expr ";".
Designator = ident \["." ident].)
- Das Startsymbol ist das oberste Nonterminal-symbol (e.g. Java)


