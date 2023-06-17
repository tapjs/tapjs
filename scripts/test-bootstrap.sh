#!/usr/bin/env bash
set -e
set -o pipefail

SRC=$(pwd)/.git
TMP=$(node -p 'require("path").resolve(require("os").tmpdir(), "tapjs-")')
rm -rf "$TMP"*
DST=$(node -p 'require("fs").mkdtempSync(process.argv[1])' "$TMP")/bootstrap
git clone "$SRC" "$DST"
cd -- "$DST" &>/dev/null
DEBUG=1 npm run bootstrap &&\
  echo -e "\n\033[1;32;40m\nbootstrap successful\033[m" &&\
  rm -rf "$DST" &&\
  exit 0 ||\
  echo -e "\n\033[1;31;40mbootstrap failed\033[m\n$DST" && exit 1
