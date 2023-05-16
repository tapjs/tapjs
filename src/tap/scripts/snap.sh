#!/bin/bash

export TAP_SNAPSHOT=1
export TAP_BAIL=1

shopt -s globstar

echo 'TAP version 13'
failed=0

pids=()
snap () {
  f=$1
  id=$2
  out=$(node $f 2>&1)
  res=$?
  let '++id'
  if [ $res != 0 ]; then
    failed=1
    echo "not ok $id - $f {"
    echo "$out" | sed "s|^|    |g"
    echo "}"
    exit 1
  else
    echo "ok $id - $f"
  fi
}

files=(test/**/*.js)

echo "1..${#files[@]}"

for (( id=0 ; id < ${#files[@]} ; id++ )) do
  t=${files[$id]}
  snap $t $id &
  pids+=($!)
  if [ $failed -eq 1 ]; then
    break
  fi
done

for p in "${pids[@]}"; do
  wait $p
  if [ $? != 0 ]; then
    for q in "${pids[@]}"; do
      kill -SIGINT $q &>/dev/null
    done
    echo "Bail out! # failed test"
    break
  fi
done
