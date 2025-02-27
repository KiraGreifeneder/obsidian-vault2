#!/bin/bash

dunstify "Obsidian vault is being pushed to GitHub... Any performance issues should pass shortly."
git add .
git commit -m "automated backup"
git lfs import
git push --force
git lfs migrate export --everything --include="*"
