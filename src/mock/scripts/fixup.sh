#!/usr/bin/env bash
cat >dist-tmp/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF

cat >dist-tmp/mjs/package.json <<!EOF
{
  "type": "module"
}
!EOF

# dialect-specific workarounds
# copy all -{mjs,cjs}.* files to their expected locations
types=(cjs mjs)
shopt -s nullglob
for dir in ./dist-tmp/*; do
  t=$(basename -- $dir)
  if [ -d "$dir" ]; then
    for file in $dir/*-${t}.js; do
      base="$(basename -- $file)"
      stem=${base%-$t.js}
      for stemfile in $dir/$stem.*; do
        rm $stemfile
      done
      mv $dir/$stem-$t.js $dir/$stem.js
      mv $dir/$stem-$t.d.ts $dir/$stem.d.ts
    done
  fi
done


sync-content dist-tmp dist
rm -rf dist-tmp
