Follow the [documentation in the wiki](https://github.com/cryinkfly/Autodesk-Fusion-360-for-Linux/wiki/Documentation) in the repo, install using YAD. After running the initial command, Fusion should be able to start (ignore all the other stuff below)

Last time, all I had to run for the installation was:
```
mkdir -p "$HOME/.fusion360/bin" && cd "$HOME/.fusion360/bin" && wget -N https://raw.githubusercontent.com/cryinkfly/Autodesk-Fusion-360-for-Linux/main/files/builds/stable-branch/bin/install.sh && chmod +x install.sh && ./install.sh
```
Login is where additional work is necessary.
The baseline for the login workaround comes from this [comment](https://github.com/cryinkfly/Autodesk-Fusion-360-for-Linux/issues/460#issuecomment-2436702373).

I eneded up finding the deploy folder in 
```
C:\users\agc\AppData\Local\Autodesk\webdeploy\production\778460b9c71e3a1499585e5d8456468dad28c923\Autodesk Identity Manager\
```
In the linux filesystem that would be
```
/home/agc/.fusion360/wineprefixes/default/drive_c/users/agc/AppData/Local/Autodesk/webdeploy/production/778460b9c71e3a1499585e5d8456468dad28c923/Autodesk Identity Manager/
```
The long number is the ID we need to use.

THE FOLLOWING STEPS have to be taken.
- Complete this command with the the path to the folder in the wine prefix that contains the autodesk identity manager.
- When starting Fusion, follow the login process until it tries to redirect you back to the program. The page will have a "go to product" button
- Copy the link of the button, use it in the `LINK` part of the comand.

```
WINEPREFIX="/home/agc/.fusion360/wineprefixes/default" wine "C:\users\agc\AppData\Local\Autodesk\webdeploy\production\778460b9c71e3a1499585e5d8456468dad28c923\Autodesk Identity Manager\AdskIdentityManager.exe" "LINK"
```
YAHOOO YAHOO IT WORKS IT WORKS
## Troubleshooting
### "Could not open working directory..."
Probably missing the Z drives in PREFIX/dosdevices. Copy from .wine in home file or whatever, add to the prefix that's missing it.
### Fusion UI is tiny
Working option 1:
- During installation, config to use OpenGL
- Increase DPI beyond 200 using `WINEPREFIX="/home/agc/.fusion360/wineprefixes/default" winecfg` and reboot
- Only issue is that fusion is unusably slow now :(
Working option 2, an improvement:
- Install with DXVK (default)
- Increase DPI beyond 200 using `WINEPREFIX="/home/agc/.fusion360/wineprefixes/default" winecfg` and reboot
- While in winecfg, enable "VAAPI as backend for GPU decoding"
- Reboot
- It works :) still some visual glitches (black flickering of canvas) but now the UI is legible and the performance is okay as expected!
### Flickering
- Turning on staging > "enable CSMT for better graphic performance (deprecated)" and Turning off "Allow window manager to control the windows" seems to have solved the black flickering. idk why. I think the latter one is the important one. EDIT: I am an idiot, it didn't fix shit.
- Using DX11/9/OpenGL doesn't change anything
#### Revelation/Reason
The flickering only appears once fusion is hidden by the window manager for any amount of time. So e.g. switching between workspaces causes the flickering. If fusion is opened on a workspace by itself and is rendered by the WM continuously, there is no flickering.
- Even just opening a second window on the same workspace (causing the window size to adjust) causes the flickering
