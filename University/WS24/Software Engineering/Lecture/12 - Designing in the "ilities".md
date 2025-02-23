---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Pretty much
---
## Lecture material
![](_attachments/L12-Designing%20in%20the%20Ilities-1.pdf)
## Summary/Notes
The "ilities" refer to things like
- Usability
- Maintainability
- Reliability
- Availability
- ...
### Usability
- User interfaces should be designed with the skills of the user in mind. They should match their experience and expectations.
- Keep in mind that users will often judge a system by its interface rather than how well it actually works/what it can do.
- A poorly designed interface can lead to catastrophic errors and abandonment
#### Human factors in interface design
- Limited short-term memory: people can only remember about 7 things instantaneously
- People make mistakes: inappropriate messages and alarms can increase stress
- People are different: People have differing physical capabilities
- People have different interaction preferences: e.g. some prefer picture, some prefer text.
#### Design principles
**User familiarity**
- The interface should use terms and concepts the user is most likely familiar with
- There are certain expectations for what should do what

**Consistency**
- Comparable operations should be activated in the same way wherever possible
- e.g. Rotating and Flipping an image should follow roughly the same process, not be in two different menus or something

**Minimal surprise**
- Users should never be surprised by the behavior of a system

**Recoverability**
- The interface should include mechanisms to allow users to recover from errors

**User guidance**
- The interface should provide meaningful feedback when errors occur
- The interface should provide context-sensitive help to the user

**User diversity**
- The interface should provide appropriate ways to interact with it for different types of users.

#software-eng-todo  some other tangents
### Dependability
To achieve dependability, we should be able to avoid and handle faults:

**Fault avoidance**
- System is designed in a way that avoids human error as much as possible
- Development process allows for faults to be detected/repaired before the product is shipped.

**Fault detection**
- V&V is used to discover and remove faults before deployment

**Fault tolerance**
- System is designed so that faults in the delivered software do not result in system failure.
#### Fault Tolerance
- Fault tolerance is required when there are high availability requirements or where the cost of system failure is very high
- The system must be able to continue operation even when a piece of software fails.

The system must be able to do the following:
- Detect that a fault has occurred
- Detect the parts of the system that are affected
- Restore itself to a known safe state

The system may be modified to prevent the recurrence of a fault, but this is often not necessary.
### Diversity and Redundancy
**Redundancy**
- Keep more than one version of a critical component available
- In case of a failure, backups are available

**Diversity**
- Same functionality should be provided in different ways so that they don't fail in the same way
- e.g. use both linux and windows servers

However, adding diversity and redundancy does add complexity and can introduce errors. Some believe that extensive V&V is better.
### Security
A number of security controls should be in place:
- Controls that should ensure that attacks are unsuccessful (kinda like fault avoidance)
- Controls that should detect and repel attacks
- Controls that should support recovery from problems

For example, users should login using 2FA, etc...
#### Architectural design
There are 3 main points to consider in the architecture of our system concerning security.

For one, how can we organise the system in a way that critical assets are protected against attacks. Then, how can we distribute the assets so that the effects of a successfull attack are minimised? Last but not least, how do we balance distribution and costs? The more distributed the assets are, the more expensive it is to protect.

An illustration of layered protection:
![500](_attachments/Pasted%20image%2020250115175606.png)
#### Design guidelines
- Security decisions should be based on a explicit security policy
- Avoid single points of failure
- Fail securely
- Balance security and usability
- Be aware of social engineering
- Use redundancy and diversity to reduce risk
- Validate all inputs
- Compartmentalise your assets
- Design for deployment
- Design for recoverability
### Real-time systems (Availability and Responsiveness)
eh
#comparch-todo 