# Brainstorming
- Explain base theory, distribution forces
    - We can control the Auftrieb of the foils using their depth
    
- Velocity Prediction Program (VPP) 
    - what it is; the program used in this bachelor thesis; outputs and explanations

# Structure

## Title
- Deriving (Foiling Catamaran) Flight Control profiles from Velocity Prediction Program (VPP) predictions.
(vpp files are in bernds flyte onedrive)
http://d3design.tools/balanceo/
## Abstract

## Motivation & Goal
- explain why we should use a state machine, maybe explore other options
- Create a representation to work off of, maybe a proof-of-concept implementation
- Optimize Anfahrt, Flight and Landing
## Objective
- establish states for 
    - optimum rudder/foil angles for 
        - acceleration steps up to target speed 
        - H2(two hulls in water)/H1(one hull flying)/H0(foiling) modes
        - given wind speed categories
        - upwind, downwind, reaching 
        - rookie, advanced, pro settings
- We're not necessarily looking for a implementation, but want to define what state machines we need to create these 4 rake outputs. Could do a simple TS impl, maybe create a sim using PlantUML.
- Show how we can feed the values into the state machine (working with categories)
- Define the different phases/zones and optimise within these using D3 and maybe additional calculations?

# Resources
- [Theory - 2018 DNA F1x tuning guide](https://onedrive.live.com/view.aspx?resid=B506CCB9E94B8A79%21232114)
- https://d3design.tools/balanceo/
    - Simulates speed based on different params.
    - Can read it as something like "from this true wind speed onwards we should be able to foil"
    - Can see forces in all 3 dimensions
    - The arrows in the viz are not the forces, but the "biegekräfte" on the foils?
    - Positions and outputs should already be optimized in theory

- [Trim Table](https://onedrive.live.com/edit.aspx?resid=B506CCB9E94B8A79!413923&cid=b506ccb9e94b8a79&CT=1740235105645&OR=ItemsView)
    - Fly hull means "not in Trapez"
    - The exact values probably aren't crazy important, it's more about the phases/categories.


# What am I actually doing?
- Use the information in the table at the bottom.
- `foil_rake` (port) and `foil_rake_stb` (starboard) are the values we want to change to optimize speed. The numbers are degrees (angle).  These are controlled with a motor as well. The angle we use should be controlled by the flyte computer, chosen based on the input of the followng: 
    - true wind speed (TWS)
    - Boat speed / speed over course (SOG, in the table VS, and is measured using GPS)
    - Leeway (seitlicher abdrift, how we get pushed sideways by the wind Also causes auftrieb)
    - heel (how flat the boat is/tilted)
    - pitch (negative is downwards angle "nase nach unten")
    - Heave (wie weit herausgehoben das Boot ist, vertical displacement)
    - Apparent Wind Speed (AWS), helps in understanding what course we're on
    - Upwind/Downwind
- rudder rakes angle can be angled from -6 to +6 degrees, rudder rakes +4 to -2
- Can evaluate how optimal our outputs are based on the output that the d3design tool gives us
- Goal is to be able to tell the sailor things like "du bist zu steil am wind" etc. For now we'll probably just assume that the sailor knows what they're doing
- Usually optimized for Velocity Made Good (VMG) and Boat Top Speed.
- What's the optimal angle to the wind to get the best VMG? The program (d3) does this, along with calculating the best angle for the foils.
- Sailor is shown / sails the right course
- Foils get eingestellt according to this -> should be all for optimal performance since flyte computer handles rake angles.
- TWA (True Wind Angle) is the course we're on. Could also be seen as another input.
- Also take into account weight. Look at graphs in the powerpoint
- In non-foiling mode, the rakes should be set to induce as little drag as possible, increasing the chance of foiling.
- Should we create our own JSON format 

### Phases the state machine should be able to handle:
- Minimize drag
- Once we are foiling, user should be able to change course
- notice this change in course and optimize rakes for foiling

# What's next?
- Do some research on the theory, look at the PDF
- Look at VMG and whatnot
- Put a screenshot from Flyte > D3 Technologies (onedrive) into outline
- Maybe get some renderings from flyte showing motors