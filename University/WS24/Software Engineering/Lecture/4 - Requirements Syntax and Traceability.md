---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/SWE-JKU-Lecture04-Requirements%20Syntax%20and%20Traceability.pdf)
## Summary/Notes
Common problems with requirements:
- ambiguity
- vagueness
- complexity
- omission
- duplication
- wordiness
- inappropriate implementation (statements of how the system should be built, rather than what it should do)
- untestability (can't prove these requirements to be true or false after implementation)

### EARS Requirements
**Ubiquitous:** System behaviors which are always active/present
**Event-Driven:** Keyword **when**. Triggered by an event.
**State-driven**: keyword **while**. Active in a specific state of the system.
**Option**: keyword **where**. Only applicable if a feature is included.
**Unwanted behavior**: keyword **if**. Response to some kind of failure.

All of them should use a concise structure of "when this happens, then the system shall" etc...

