---
type: university-course
course-id: "339.281"
course-type: Exercise
course-allocation: Direct
course-attendance: Optional
course-lecturers: Markus Weninger
etcs: 3
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
Total of 240 points can be reached. There are 4 Theory and and 7 Practical UEs. Each one is worth 10-30 points.
Creating and handing in new unit tests allows you to get up to 12 Bonus points!
- Do NOT copy off/look at the 5th or 6th homework. They know the Musterlösungen lmao.
- Grace period until Thursday 6 AM, -4 points
- If you get 0 points in the 6th practical UE, you fail the course.

**Hand-in checklist**
- Lösung unklar strukturiert
- Komplizierte Lösung
- Hohe Komplexität der Ausdrücke
- Falsche Wahl der Datentypen (z.B. `float` statt `int`)
- Unnötiger Import oder Deklaration von Klassen bzw. Variablen
- Unnötige Zuweisungen
- "Toter" Programmcode
- Umständliche Formulierungen, zum Beispiel:
    - Vergleiche auf true oder false:  
        `if (a == true) /` `if (a == false)`
    - sinnlose Verzweigungen:  
        `if (a) return true; else return false;`  
        `if (a) return false; else return true;`
- Konkatenation von Strings in Schleifen ohne `StringBuilder`:  
    `while (...) { aString = aString + getString(...); }`
- Zugriff auf Schleifenlaufvariable nach Verlassen der Zählschleife (`for`)
- Veränderung der Schleifenlaufvariable in der Zählschleife
## On Absence
Probably enter yourself as "absent" on Moodle

## Course to-do
- [x] Add future assignments as expected

## Assignments

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "New Assignment").addEventListener('click', () => tp.user.create_assignment(false))
```

```dataview
TABLE assignment-status AS "Status", assignment-deadline AS "Deadline"
WHERE file.folder = this.file.folder AND type = "university-assignment"
SORT file.name ASC
```

## Notes
Always enter Anwesenheit on Moodle!

### Deductions to dispute:
P-2
- Unnecessary case splitting got deducted when it would have been ugly and wasn't deducted for in other HWs
- Style deductions seem a bit harsh but ok considering the style in the slides, I can accept those
P-3
- (-0.5) deductions for checking for eof, ident when the angabe said void, ident
T-3
- (-0.5) deduction for not following order in EBNF even though it was never mentioned that it had to
P-6
- (-2) For returning a Token.Kind instead of an OpCode even though there was absolutely no mention of having to do so.