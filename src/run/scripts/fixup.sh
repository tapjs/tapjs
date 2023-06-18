#!/usr/bin/env bash

chmod 0755 dist-tmp/index.js

sync-content dist-tmp dist
rm -rf dist-tmp
