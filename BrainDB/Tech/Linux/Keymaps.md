Keymaps are stored in `usr/share/kbd`. The keycodes in these map files are the signal received from the keyboard. 
### Umlauts
in de-alt, the umlauts are mapped to:
keycode  26 =   +udiaeresis     +Udiaeresis
keycode  39 =   +odiaeresis     +Odiaeresis
keycode  40 =   +adiaeresis     +Adiaeresis
keycode  12 =   ssharp 
### My changes
I have created a custom keymap in the same dir as all the other keymaps (`personal.map`). For me to be able to emit umlauts at certain key combinations, I'm hoping I can add the umlauts to keycodes i don't really use to use them in **Input Remapper**.

```
keycode 120 = +udiaeresis 
keycode 121 = +Udiaeresis
keycode 122 = +odiaeresis 
keycode 123 = +Odiaeresis
keycode 124 = +adiaeresis
keycode 125 = +Adiaeresis
keycode 126 = ssharp
```

Mkay  I'm stutpid, I was able to just use autokey after all. The listener is started in bspwmrc.