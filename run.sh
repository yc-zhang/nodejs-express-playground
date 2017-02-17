#! /bin/bash
set -e

echo "start to migration..."
./node_modules/db-migrate/bin/db-migrate up --config ./config/database.json --migrations-dir ./migration
echo "migration successfully"

echo "start app..."
npm start

$@
