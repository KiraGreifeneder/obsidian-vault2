## Keybinds
Here's a list of some important keybinds you need to know for operating Bspwm easily. If you want to view, modify or add new keybinds, Edit `~/.config/bspwm/sxhkdrc` file.
### Applications[​](#applications "Direct link to Applications")

| Keys                   | Action                     |
| ---------------------- | -------------------------- |
| super + Return         | Open terminal (alacritty)  |
| super + shift + Return | Open floating terminal     |
| super + alt + Return   | Open fullscreen terminal   |
| super + shift + F      | Open file manager (thunar) |
| super + shift + E      | Open text editor (geany)   |
| super + shift + W      | Open web browser (firefox) |

### Menu and Applets[​](#menu-and-applets "Direct link to Menu and Applets")

| Keys      | Action                      |
| --------- | --------------------------- |
| super     | Open application launcher   |
| alt + F1  | Open application launcher   |
| alt + F2  | Open command runner         |
| super + N | Open network manager applet |
| super + B | Open bluetooth applet       |
| super + M | Open music applet           |
| super + X | Open powermenu applet       |
| super + S | Open screenshots applet     |
| super + R | Open apps as root applet    |
| super + T | Open Volume Settings        |
| super + W | Open window applet          |

### Hardware Keys[​](#hardware-keys "Direct link to Hardware Keys")

| Keys                            | Action                                      |
| ------------------------------- | ------------------------------------------- |
| Print                           | Take screenshot                             |
| alt + Print                     | Take screenshot in 5 seconds delay          |
| shift + Print                   | Take screenshot in 10 seconds delay         |
| ctrl + Print                    | Take screenshot of currently focused window |
| super + Print                   | Take screenshot of selected area            |
| XF86AudioRaiseVolume            | Increase volume                             |
| XF86AudioLowerVolume            | Decrease volume                             |
| XF86AudioMute                   | Toggle mute speakers                        |
| XF86AudioMicMute                | Toggle mute microphone                      |
| XF86Audio + Next/Prev/Play/Stop | Media controls (MPD)                        |
| XF86MonBrightnessUp             | Increase display brightness                 |
| XF86MonBrightnessDown           | Decrease display brightness                 |

### Workspaces[​](#workspaces "Direct link to Workspaces")

|Keys                             |Action                                        |
|---------------------------------|----------------------------------------------|
|super + 1..8                     |Switch to respective workspace                |
|super + shift + 1..8             |Send active window to respective workspace    |
|ctrl + alt + Left/Right          |Switch to previous/next workspace             |
|super + ctrl + shift + Left/Right|Send focused window to previous/next workspace|

### Window Management[​](#window-management "Direct link to Window Management")

|Keys                                    |Action                                                |
|----------------------------------------|------------------------------------------------------|
|super + C                               |Close focued window                                   |
|super + shift + C                       |Kill focued window                                    |
|super + shift + H                       |Hide/Unhide window                                    |
|super + Left/Right/Up/Down              |Change focus of the window directionally              |
|super + shift + Left/Right/Up/Down      |Swap windows directionally                            |
|super + alt + shift + Left/Right/Up/Down|Move floating windows directionally                   |
|super + ctrl + Left/Right/Up/Down       |Expand windows directionally                          |
|super + alt + Left/Right/Up/Down        |Shrink windows directionally                          |
|super + H/V/Q                           |Split tiles horizontally / vertically / cancel        |
|super + ctrl + 1..9                     |Preselect the ratio of tile                           |
|super + L                               |Toggle Layout (Tiled/Monocle)                         |
|super + F                               |Toggle fullscreen mode                                |
|super + Space                           |Toggle between floating and tiled mode                |
|super + shift + Space                   |Toggle between pseudo tile and tiled mode             |
|super + ctrl + M/X/Y/Z                  |Set node flag, marked/locked/sticky/private           |
|alt + Tab                               |Change focus to next window, including floating window|

### Window Manager[​](#window-manager-1 "Direct link to Window Manager")

|Keys            |Action            |
|----------------|------------------|
|ctrl + shift + R|Restart bspwm     |
|ctrl + shift + Q|Quit bspwm        |
|super + Escape  |Reload Keybindings|

### Misc Keys[​](#misc-keys "Direct link to Misc Keys")

|Keys               |Action                                 |
|-------------------|---------------------------------------|
|ctrl + alt + V     |Open vim in terminal                   |
|ctrl + alt + R     |Open ranger in terminal                |
|ctrl + alt + H     |Open htop in terminal                  |
|ctrl + alt + M     |Open ncmpcpp with album art in terminal|
|ctrl + alt + L     |Trigger lockscreen                     |
|super + P          |Run colorpicker                        |
|ctrl + alt + Escape|Run xkill                              |

## NODE FLAGS
   hidden
       Is hidden and doesn’t occupy any tiling space.

   sticky
       Stays in the focused desktop of its monitor.

   private
       Tries to keep the same tiling position/size.

   locked
       Ignores the node --close message.

   marked
       Is marked (useful for deferred actions). A marked node becomes
       unmarked after being sent on a preselected node.

   urgent
       Has its urgency hint set. This flag is set externally.