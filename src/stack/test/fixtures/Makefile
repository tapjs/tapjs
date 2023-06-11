all: capture.js

capture.js: capture.ts
	tsc --module commonjs --target es2022 --moduleResolution node16 --sourceMap --declaration ./capture.ts
