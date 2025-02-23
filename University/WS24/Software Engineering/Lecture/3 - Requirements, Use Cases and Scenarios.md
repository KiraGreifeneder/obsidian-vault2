---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/SWE-JKU-Lecture03%20-%20Requirements,%20Use%20Cases,%20and%20Scenarios.pdf)
## Summary/Notes
### Examples
- Deadlines are usually constraints, but not requirements. Other constraints might be limited number of programmers etc.
- "It should support a minimum of 2500 users" is a very vague requirement, it should rather go under the category of examples
- "the UI shall support...." is a requirement
- "The user shall be able to find a product in less than 3 minutes" is a UX requirement
- "A user shall be able to select an icon to..." is a user space requirement, but removes a lot of flexibility

### Types of requirements
- **Functionality** - what should the software do?
- **External interfaces** - how does the software interact the people, hardware, other software... ?
- **Performance** - what is the speed, availability, response time etc. we expect of various functions?
- **Attributes:** What are the portability, correctness, maintainability, and security considerations?
- **Design constraints imposed on an implementation:** Are there any required standards in effect, implementation language, policies for database integrity, resource limits, operating environments etc.?

### Where do requirements come from?
Stakeholders are people who have some sort of justifiable claim to be allowed to influence the requirements. This can include:

- Customer
- End user
- Developers
- literally anyone tbh

### Onion model
The onion model is used to represent different stakeholders of a product.

**The product** (also called **the Kit**) is at the center of the onion model (the smallest circle).

The next circle represents **the System**. It is the Kit along with any people who directly interact with/benefit from the system. This can include:
- System Admins (Maintenance Operator)
- Support Staff (Operational Support)
- Users (Normal Operator)

The next biggest circle is **the Containing System**. It Includes any stakeholders that do not directly interact with the kit, but still benefit from it. At thee same time, this layer represents the business organization that hosts, controls, or generally controls the product solution.
- User Management
- Legal
- Sales
- Technical Management

Te last circle is called **the Wider Environment**. These are stakeholders who are outside the firm but are still important. They are often "within" the firm but are usually not functional beneficiaries of the solution and are not involved in ongoing maintenance
- Developers
- Regulators
- Public
- media
- Suppliers
- Clients
- Financial beneficiaries
### Use case specification
- Consistent use of "system" and "user" etc.
- Present tense
- Active voice (no can, will, should, it just "does").

Use cases should have some significance, not just logging in and logging out. Under the user goals, the subfunctions, can cover this stuff.