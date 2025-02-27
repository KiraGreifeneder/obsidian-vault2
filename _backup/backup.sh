#!/bin/bash

dunstify "Obsidian vault is being pushed to GitHub... Any performance issues should pass shortly."
git add . > log.txt
git commit -m "automated backup" > log.txt
git lfs migrate import --include="*.pdf" > log.txt
git push --force > log.txt
git lfs migrate export --everything --include="*" > log.txt
