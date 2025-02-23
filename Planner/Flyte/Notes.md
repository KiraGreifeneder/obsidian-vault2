
- HyperUI? very lightweight and decent components for application UI. Don't really want component libraries that have lots of different props, so we can only implement the ones we need
## Getting Started
What does a user need to do when they're getting started?
- grobe outline der docs
- Was muss ein nutzer machen, wenn dieser das boot erhält
### Config
- Connect to wifi, go to 192.168.4.1
- Name boat, "Rename 'Flyte Computer' to 'your-boat-name' prompt"
- User should add password
### Calibration

| Rare                                                    | Regularly                                            |
| ------------------------------------------------------- | ---------------------------------------------------- |
| [Compass in Cockpit (display)](#Compass)                | [4 Motors (controlling the foils, rudders)](#Motors) |
| [Compass in Flyte-Computer](#Compass)                   |                                                      |
| [Mast rotation (delta from compass).](#Mast%20rotation) |                                                      |

Calibrations done regularly should be controllable from the frontend, as it might have to be done before every sailing session

Rare calibrations are ideally only done once/calibrated by the vendor
#### Compass
It would be good if compass calibration data can be stored as JSON.
Flyte-computer (box in boat) - offset to bow direction (ideally 0°)​
#### Mast rotation
 Potentially needs to be done for every mast stepping (mast aufstellen) or transport of boat.
#### Motors
Safety/text/info/check?

**In the worst case, we want to calibrate the following before every sail:**
Activate a) ALL motors b) only rudders c) only main foils d) one of motors to move until it hits the max, should be marked as the "zero" point.

**Safety issues:** If the foil is trying to detect the zero point and is hitting the confines, need to make sure people can't get their fingers stuck and crushed...
### Pairing
Should be able to do so on display on boat
#Eliaswork Need encryption for paired devices, should only be able to use remote control for paired devices/boat
- Can see paired devices in the web UI
	- Should be able to remove paired devices
### Update
Upload binary file, contains a signature that identifies which device it is for. The right device will automatically be updated.

Upload of cockpit website as a single package that can be uploaded to the microcontroller (http PUT 3 files in one zlib with 0 compression) 

## WEB
Datahub store that does all the unit conversion etc. Store should store everythign in ISO
Converter wrapper? that can THEN translate it lol. Something inbetween. 
Wrapper component that requests and populates component data based on what data is needed
Tabs/pages should autoload what is needed (http keep-alive polling), e.g. every second for high frequency data, every 60s for low frequency data. 

## Debugging
Generic debugging page that requests all data with a manual refresh?
Logs from cockpit or computer stored in PSRAM, should load them into the UI and download them.

## UI things
Use banner notifications for when the device becomes connected or disconnected, rather than just the indicator. Use the same icon to make the connection between the status and the notification banner clear.

## Suggestions
- ProtoBuf instead of line protocol