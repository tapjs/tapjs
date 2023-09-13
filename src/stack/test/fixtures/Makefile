FILES := $(shell ls *.ts | grep -v '.d.ts' | sed 's\#.ts\#.js\#g')

all: $(FILES)

echo:
	echo $(FILES)

%.js: %.ts
	tsc --skipLibCheck --inlineSourceMap --module nodenext --target es2022 --moduleResolution nodenext --declaration $<

clean:
	rm -f $(FILES) *.d.ts *.map
