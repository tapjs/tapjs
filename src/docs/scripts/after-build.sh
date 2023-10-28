#!/usr/bin/env bash

cp ./misc/* _site/

pagefind --site _site --glob "**/*.html"
