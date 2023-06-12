FILES := $(shell ls *.ts | grep -v '.d.ts' | sed 's\#.ts\#.js\#g')

all: $(FILES)

echo:
	echo $(FILES)

%.js: %.ts
	tsc --inlineSourceMap --module commonjs --target es2022 --moduleResolution node16 --declaration $<

clean:
	rm -f $(FILES) *.d.ts *.map
