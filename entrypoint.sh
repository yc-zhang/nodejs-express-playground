#! /bin/bash
set -e

echo "start to install modules..."
npm install
echo "modules are installed successfully"

$@
