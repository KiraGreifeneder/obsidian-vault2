## Setup
All we need for all of this is the qmk CLI:
```
pip install --user qmk
```
## Creating a config
### Creation
```
qmk new-keyboard
```
Go through the config, for most things we can use defaults.
The keyboard name should be (for our handwired build) `handwired/KEEB_NAME` by convention.
### Configuration
By a config folder will be created in `$HOME/qmk_firmware/keyboards/handwired/KEEB_NAME`.

We need to edit the .json and the C file. In the JSON, use the pinout names below to replace/ list the rows and columns in the generated array. We also need to adjust the LAYOUT below it.

In the C file, we can define the actual keybindings. The basic keycodes used in it can be found [here](https://docs.qmk.fm/keycodes_basic).

![400](_attachments/Pasted%20image%2020250209003149.png)
### Compilation
A .hex config file will be created in `qmk_firmware`.  To compile, we can use
```
qmk compile -kb handwired/KEEB_NAME -km default
```
## Flashing
### Permissions
The device file (in my case it was `/dev/ttyACM0`, but check console output) is owned by root. This causes it to continuously wait for \[device file] to be writable, as qmk does not have the write permissions on the file. 

Since we installed qmk in the user space, we can't simply call `sudo qmk ...`. Since the group `dialout` usually DOES have read and write access though, we just need to add our user to this group:
```
sudo usermod -aG dialout agc
```
After a restart, flashing should work as expected.
### Actual flashing
Once the config file has been made (and it should have "default" appended to it), we can simply call
```
qmk flash -kb handwired/catkeebv1 -km default
```
It will wait for the board to be restarted. My promicro board needs to have GND and RST shorted to do this. That should be all.