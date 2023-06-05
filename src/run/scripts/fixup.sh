#!/usr/bin/env bash
sync-content dist-tmp dist
rm -rf dist-tmp

chmod 0755 dist/index.js
