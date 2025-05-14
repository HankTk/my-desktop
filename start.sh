#!/bin/bash

# Script to start multiple applications in new Terminal windows using npm start

# Function to free a port if in use
free_port() {
  PORT=$1
  PID=$(lsof -ti tcp:$PORT)
  if [ -n "$PID" ]; then
    echo "Port $PORT is in use by PID $PID. Killing..."
    kill -9 $PID
    echo "Killed process $PID using port $PORT."
  fi
}

# Helper to open a new Terminal window and run a command
open_new_terminal() {
  DIR=$1
  CMD=$2
  osascript <<EOF
tell application "Terminal"
  do script "cd \"$(pwd)/$DIR\" && $CMD"
end tell
EOF
}

echo "Checking and freeing port 9010 if needed..."
free_port 9010
echo "Starting MyServer in new Terminal..."
open_new_terminal "MyServer" "npm start"

echo "Starting MyClient in new Terminal..."
open_new_terminal "MyClient" "BROWSER=none npm start"

echo "Checking and freeing port 3030 if needed..."
free_port 3030
echo "Starting MyClock in new Terminal..."
open_new_terminal "MyClock" "BROWSER=none npm start"

echo "Checking and freeing port 3020 if needed..."
free_port 3020
echo "Starting MyDiagrams in new Terminal..."
open_new_terminal "MyDiagrams" "BROWSER=none npm start"

echo "Starting MySuite in new Terminal..."
open_new_terminal "MySuite" "BROWSER=none npm start"

echo "Checking and freeing port 8080 if needed..."
free_port 8080
echo "Starting MyTetris in new Terminal..."
open_new_terminal "MyTetris" "BROWSER=none npm start"

echo "Checking and freeing port 3010 if needed..."
free_port 3010
echo "Starting MyWebGL in new Terminal..."
open_new_terminal "MyWebGL" "BROWSER=none npm start"

echo "All application start commands issued in new Terminal windows." 
