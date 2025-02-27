#!/bin/bash
LOG_PATH="/home/agc/Insync/agreencat.kirag@outlook.com/OneDrive/obsidian-vault/_backup"

LOG_FILE="${LOG_PATH}/backup_$(date +'%Y%m%d_%H%M%S').log"

touch "$LOG_FILE"

dunstify "Obsidian vault is being migrated and pushed to GitHub..."
git add . >> $LOG_FILE 2>&1
git commit -m "automated backup" --author="KiraDesktop <kira.greifeneder@gmail.com>" >> $LOG_FILE 2>&1
yes | git lfs migrate import --include="*.pdf" >> $LOG_FILE 2>&1
git push --force >> $LOG_FILE 2>&1
yes | git lfs migrate export --everything --include="*" >> $LOG_FILE 2>&1
dunstify "Finished migrating and pushing vault to GitHub."
