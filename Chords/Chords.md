```dataview
TABLE WITHOUT ID
link(file.name) AS "Song",
start + artist + end AS "Artist"
FROM "Chords"
WHERE file.name != "Chords"
SORT artist ASC, file.name ASC

FLATTEN "<span style='display:flex; justify-content: center;'>" AS start
FLATTEN "</span>" AS end
```
