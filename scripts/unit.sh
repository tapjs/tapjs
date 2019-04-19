#!/bin/bash
if [ "${1}" = "" ]; then
  units=($(cd test &>/dev/null; ls))
  for u in "${units[@]}"; do
    u=$(basename "$u" .js)
    if ! [ $u == "clean-stacks" ]; then
      $BASH scripts/unit.sh "$u" || exit 1
    fi
  done
else
  shopt -s extglob
  include=$(echo +(bin|lib)/$1.js)
  if [ -f "$include" ]; then
    set -x
    node bin/run.js test/${1}* --nyc-arg=--include="$include" -Rterse -M coverage-map.js
  else
    set -x
    node bin/run.js test/${1}* --no-cov -Rterse
  fi
fi
