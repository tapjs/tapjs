#!/bin/bash
if [ "${1}" = "" ]; then
  echo "Must provide unit name" >&2
  exit 1
fi
set -x
node bin/run.js --100 test/${1}* --nyc-arg=--include={bin,lib}/$1.js -J
