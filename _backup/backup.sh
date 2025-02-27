#!/bin/bash
LOG_PATH="/home/kira/Documents/obsidian-vault/_backup/"

LOG_FILE="${LOG_PATH}backup_$(date +'%Y%m%d_%H%M%S').log"
exec &> >(tee -a "$LOG_FILE")

dunstify "Obsidian vault is being pushed to GitHub... Any performance issues should pass shortly."
git add . &> log.txt
git commit -m "automated backup" --author="KiraDesktop <kira.greifneder@outlook.com>" &> log.txt
git lfs migrate import --include="*.pdf" &> log.txt
git push --force &> log.txt
git lfs migrate export --everything --include="*" &> log.txt
