#!/bin/bash
counter=0
ADB_PATH="/mnt/c/Users/siddh/AppData/Local/Android/Sdk/platform-tools/adb.exe"
PREVIOUS_NAME=""
while [ true ]; do
    echo $counter
    $ADB_PATH  shell uiautomator dump
    $ADB_PATH pull sdcard/window_dump.xml window_dump.xml
    mv window_dump.xml  /mnt/c/Users/siddh/Documents/
    # sed -e 's/resource-id/id/' /mnt/c/Users/siddh/Documents/window_dump.xml  > /mnt/c/Users/siddh/Documents/out.xml
    echo "moved"
    # node name-script.js 
    NAMED_OUTPUT=$(node name-script.js)
   #  echo "$NAMED_OUTPUT"
    if [[ "$NAMED_OUTPUT" == "#"* ]]
    then
       echo  "$NAMED_OUTPUT" >> matched.txt
       $ADB_PATH shell input touchscreen tap 726 1942
    else
        echo "$NAMED_OUTPUT" >> not_matched.txt
       $ADB_PATH shell input touchscreen tap 375 1942
    fi
     let counter=counter+1
     if [ "$PREVIOUS_NAME" = "$NAMED_OUTPUT" ] 
     then
        echo "$counter" >> counter.txt
        break
     fi  
     PREVIOUS_NAME=NAMED_OUTPUT
done

