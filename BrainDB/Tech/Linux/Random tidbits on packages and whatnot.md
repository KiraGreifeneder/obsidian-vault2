## systemd


## betterlockscreen
The rofi script calling of betterlockscreen happens in `/home/agc/.config/bspwm/scripts/rofi_powermenu`

```
PARAMS=(
		--lock -- -e
		--radius 100 --ring-width 10 --indicator
		--ring-color=385773FF --ringver-color=8eaa60ff --keyhl-color=8eea60ff --time-color=385773FF --verif-color=385773FF
		--wrong-text="boo, you suck." --greeter-text="" --ind-pos="1720:720" --time-pos="1400:740" --verif-pos="1400:740" --verif-text="idk man, you seem kinda sus"
	)
	betterlockscreen "${PARAMS[@]}"
	elif [[ "$1" == '--opt2' ]]; then
```

**xflock4** is the script called when xfce-power-manager (or whatever else?) decides that it is time to lock the screen. This script is found in /usr/local/bin/xflock4

## grep
For extended RegEx, the `-E` flag needs to be set. This enables the use of "+" among others... 
`-o` makes it so that only the matching part of the regex is output by grep, rather than the whole line.

## xsettingsd.conf`
`/home/agc/.config/xsettingsd/xsettingsd.conf`
Responbsible for setting the GTK theme and stuff (cursor, icons...)

## Anacron
The file where cron jobs are defined lies in ``/etc/anacrontab``