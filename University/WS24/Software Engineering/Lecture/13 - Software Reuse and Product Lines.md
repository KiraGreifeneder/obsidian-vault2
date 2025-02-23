---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Pretty much
---
## Lecture material
![](_attachments/12.pdf)
## Summary/Notes
### Key Points
- Software reuse and product lines are essential
- Product Line Engineering has developed a wide array of methods and tools
- Product feature maps support the scoping process
- Variability modeling is fundamental in product lines
- Flexibility and end-user orientation are key requirements
### Context and  Motivation
Why should we reuse and compse existing components?
- Increased dependability
- Reduced process risk
- Effective use of specialists
- Standards compliance
- Accelerated development

It does come with some challenges though:
- Creating, maintaining and using component libraries
- Finding, understanding and adapting reusable components
- Lack of tool support
- Not-invented-here syndrome (tendency to avoid things from external origins)
### Software Product Lines
Software product lines are sets of software-intensive systems that share a common, managed set of features. These features satisfy the specific needs of a particular market segment or mission. They are developed from a common set of core assets in a prescribed way.

"The two lifecycles in PL Engineering":
![600](_attachments/Pasted%20image%2020250115005017.png)

The problem is that ad-hoc use often fails, as the software needs to be prepared for reuse first. 
### Variability
Achieving reuse relies on understanding, documenting, and managing variability.
#### External Variability
- Also referred to as variability in the **problem space**
- is visible to customers
- e.g. manual or automatic transmission of a car, or the camera on a smartphone

Example: 
- Some Floating Weather Stations may report the wind direction, whilee otheers don't
- Compile-time configuration vs load-time configuration of an application
#### Internal Variability
- Also referred to as variability in the **solution space**
- is managed "under the hood" (not visible)
- e.g. engine configuration in a car, communication protocols
#### Common Variability Modeling Notations
![](_attachments/Pasted%20image%2020250115163102.png)
#### Unit of variability
##### Features:
- Characteristic of a concept (e.g. a system component) that is relevant to some stakeholder of the concept

**Feature Model for the Ice Rescue Scenario in Dronology**
![](_attachments/Pasted%20image%2020250115164054.png)
**Decisions:**
- Differences among systems
- Anything that an aplication engineer needs to decide during derivation
### Product Line Engineering
Typically follows this model:
![500](_attachments/Pasted%20image%2020250115163000.png)
#### Feature-Oriented Product Lines
![](_attachments/Pasted%20image%2020250115164219.png)
**Domain Analysis:**

**Focus**: Activities include scoping the domain to identify similarity and variability among products. The goal is to determine which features are reusable across the product line.
- **Artifacts**:
- Feature models and feature diagrams (e.g., FODA method).
- **Tools**:
- Feature modeling tools like FeatureIDE.
- **Example (****EcoTrack****)**:
- Define features such as "Carbon Footprint Tracking," "Gamification," and "Energy Usage Monitoring" as reusable elements. 

**Domain Implementation:**
**Focus**: Develop reusable implementation artifacts (e.g., code libraries, templates, and components) that correspond to the features defined in domain analysis.
- **Artifacts**:
- Modular components (e.g., APIs or libraries for tracking emissions or managing user rewards).
- **Tools**:
- Version control systems like Git; feature-oriented programming techniques.
- **Example (****EcoTrack****)**: Implement a "Reward System" as a reusable module to gamify eco-friendly behavior.

**Requirements analysis:**
**Focus**: Gather customer-specific requirements and map them to existing features identified in domain engineering.
- **Artifacts**:
- Customer-specific requirement documents. 
- **Tools**:
- Requirement management tools like Jira.
- Feature configurators. 
- **Example (****EcoTrack****)**:
- A corporate client requests customizations such as "Fleet Emissions Tracking" and "Employee Recycling Goals."

**Product Derivation:**
**Focus**: Combine reusable components and customer-specific configurations to create tailored products.
- **Artifacts**:
- Customized applications.
- Integration documents (e.g., API mappings).
- **Tools**:
- CI/CD pipelines and deployment tools. (e.g. Jenkins)
- **Example (****EcoTrack****)**:
- Deploy a version of EcoTrack for a client, including modules for "Fleet Tracking" and "Real-Time Emissions Monitoring."
#### Product Lines VS Other Approaches to Reuse
- Instead of ad hoc, small-grained reuse, reuse is **explicitly planned, enabled, and eforced**
- Instead of single-system development with reuse, assets are **designed/developed for reuse**
- Instead of component-based development, a product line defines an **assembly of components**, documents **variability**, and integrates **management** aspects
- A reconfigurable architecture is only **one of many** interests in product lines
- A set of technical standards is also only **one of many** interests in product lines


#software-eng-todo top down, bottom up analysis. is this really relevant though