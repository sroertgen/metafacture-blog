---
title: Metafacture-core release 5.3.1
date: "2022-01-06T12:09:03.284Z"
description: "This is about changes coming with the metafacture-core release 5.3.0 and 5.3.1"
authors: [{lastname: "Christoph",
           firstname: "Pascal"}]
---

*Preamble*

This post describes the new developements in `metafacture-core release 5.3.1` since the release
of [metafacture-core-5.2.0 in April 2021](https://github.com/metafacture/metafacture-core/releases/tag/metafacture-core-5.2.0).
As the [release of metafacture-core-5.3.0](https://github.com/metafacture/metafacture-core/releases/tag/metafacture-core-5.3.0)
comes with some [possible breaking changes](https://github.com/metafacture/metafacture-core/pull/429) it is recommended to stick to `5.3.1`.
The intention is to provide a single paged overview of the improvements with the [example](#examples)
section to provide a condensed glimpse showing more real life examples.

## Table of Contents

```toc
# this will be replaced by the toc
```

## Changes

### Bug fixes

- XML/biblio: Fix creation of Marc XML namespaces [#403](https://github.com/metafacture/metafacture-core/issues/403)
- XML/biblio: Fix Namespace-prefixes of elements and attributes [#377](https://github.com/metafacture/metafacture-core/issues/377)
- XML/biblio: Marc-XML-encoder: record-type written as controlfield not as attribut of record-field [#402](https://github.com/metafacture/metafacture-core/issues/402)
- XML/biblio: Improve handling of XML attributes and element values [#394](https://github.com/metafacture/metafacture-core/pull/394)
- XML/biblio: Encode top-level MARC record leader as proper XML element instead of control field [#336](https://github.com/metafacture/metafacture-core/issues/336)
- XML/biblio: Make simple XML encoder value tag name configurable [#379](https://github.com/metafacture/metafacture-core/issues/379)
- JSON: Fix `_elseNested` loses array-key in JSON [#374](https://github.com/metafacture/metafacture-core/issues/374)
- Metamorph: Fix `_elseNested` only outputs two hierachy levels [#378](https://github.com/metafacture/metafacture-core/issues/378)
- Metamorph: Fix "setreplace" using a FileMap [#381](https://github.com/metafacture/metafacture-core/issues/381)
- Metamorph: Guarantee that tests should verify that no unexpected interactions occurred [#339](https://github.com/metafacture/metafacture-core/issues/339)

### New Features

- JSON: Make JSON encoder array marker configurable [#393](https://github.com/metafacture/metafacture-core/pull/393)
- JSON: Add or enhance a function to extract JSON-Records from an JSON-API [#382](https://github.com/metafacture/metafacture-core/issues/382)
- Mangling: Split up event stream into records [#385](https://github.com/metafacture/metafacture-core/issues/385)
- Metamorph: Allow empty values in setreplace map [#420](https://github.com/metafacture/metafacture-core/issues/420)
- Triples: Sort triples numerically [#380](https://github.com/metafacture/metafacture-core/issues/380)
- YAML: Add YAML Encoder/Decoder [#399](https://github.com/metafacture/metafacture-core/issues/399)

### Others

- Update release and publish process [#311](https://github.com/metafacture/metafacture-core/issues/311)
- Checkstyle and javadoc [#389](https://github.com/metafacture/metafacture-core/issues/ )389 and [#396](https://github.com/metafacture/metafacture-core/issues/396)
- Update and apply EditorConfig file [#388](https://github.com/metafacture/metafacture-core/issues/388)
- Add initial CONTRIBUTING.md [#382](https://github.com/metafacture/metafacture-core/issues/382)
- Fix insecure logging configuration [#364](https://github.com/metafacture/metafacture-core/issues/364)

... and various smaller fixes and improvements (e.g. [#417](https://github.com/metafacture/metafacture-core/issues/417))

### Caveats

This will occur only quite rarely:
If you are using a `metamorph.xsd` on your own and make use of `FileMap` you have to also update your locally `metamorph.xsd`:

```diff
-      <attribute name="separator" type="string" use="optional" default="\t">
+      <attribute name="separator" type="string" use="optional" default="&#09;">
```

## Examples
Here are some examples that describe the former behaviour and the new changes.

### Encoding (MARC21) XML
Namespace prefixes of elements and attributes in XML can now be preserved by adding
a parameter in the flux: `handle-generic-xml(emitnamespace="true")`.

The MARC21 XML encoding has gotten some improvements regarding the _record type_ (which
was formerly written as a _controllfield_). Also the output of _leader_ is now fixed.

Input:
```
	<record xmlns="http://www.loc.gov/MARC21/slim" type="Bibliographic">
		<leader>00000pam a2200000 c 4500</leader>
		<marc:datafield tag="856" ind1="4" ind2="0">
			<marc:subfield code="u">http://www.video2brain.com/</mx:subfield>
			<marc:subfield code="x">Agentur</mx:subfield>
		</marc:datafield>
	</record>
```

was:
```
	<marc:record>
		<marc:controlfield tag="type">Bibliographic</marc:controlfield>
		<marc:leader>00000pam a2200000 c 4500</marc:leader>
		<marc:datafield tag="856" ind1="4" ind2="0">
			<marc:subfield code="u">http://www.video2brain.com/</marc:subfield>
		</marc:datafield>
		<marc:datafield tag="856" ind1="4" ind2="0">
			<marc:subfield code="x">Agentur</marc:subfield>
		</marc:datafield>
	</marc:record>

```

now:
```
	<marc:record type="Bibliographic">
		<marc:leader>00000pam a2200000 c 4500</marc:leader>
		<marc:datafield tag="856" ind1="4" ind2="0">
			<marc:subfield code="u">http://www.video2brain.com/</mx:subfield>
			<marc:subfield code="x">Agentur</mx:subfield>
		</marc:datafield>
	</marc:record>
`
```

It's now possible to configure what's a `valuetag (String)` and an `attributemarker (String)` in many XML-related readers and encoders (see the diff of the [flux-commands.md](https://github.com/metafacture/metafacture-documentation/compare/metafacture-core-5.2.0...metafacture-core-5.3.1#diff-7fd24f94041ffda2e7eb15c142412b7a526b755259837bc20cdb15fcce46ef1e)).

### Encoding JSON
The possibilty in morph to serve pass down untreated fields untouched was delimited to
a nested hierachy of only two. Also, the structure was kind of broken e.g. for JSON.

Using the following FLUX:

```
"testArray.json"
| open-file
| as-records
| decode-json
| morph("all.xml")
| encode-json(prettyPrinting="true")
| write("stdout");
```

and the morph:
```
<?xml version="1.0" encoding="UTF-8"?>
<metamorph xmlns="http://www.culturegraph.org/metamorph" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	version="1">
	<rules>
<data source="_elseNested"/>
</rules>
</metamorph>
```

with this JSON input:
```JSON
{
    "author": [
        {
            "@type": "Person",
            "name": "Katja Königstein-Lüdersdorff"
        },
        {
            "@type": "Person",
            "name": "Corinna Peters"
        },
        {
            "@type": "Person",
            "name": "Oleg Tjulenev"
        },
        {
            "@type": "Person",
            "name": "Claudia Vogeler"
        }
    ]
}
```


resulted in:
```JSON
{
  "1" : {
    "@type" : "Person",
    "name" : "Katja Königstein-Lüdersdorff"
  },
  "2" : {
    "@type" : "Person",
    "name" : "Corinna Peters"
  },
  "3" : {
    "@type" : "Person",
    "name" : "Oleg Tjulenev"
  },
  "4" : {
    "@type" : "Person",
    "name" : "Claudia Vogeler"
  }
}
```

With the new release the output is:

```JSON
{
  "author" : [ {
    "@type" : "Person",
    "name" : "Katja Königstein-Lüdersdorff"
  }, {
    "@type" : "Person",
    "name" : "Corinna Peters"
  }, {
    "@type" : "Person",
    "name" : "Oleg Tjulenev"
  }, {
    "@type" : "Person",
    "name" : "Claudia Vogeler"
  } ]
}
```

### Morph function "setreplace" with filemaps
You can now use the morph function `setreplace` with externals file maps. These maps
are lists of tabulator separated values (tsv): the first value is, when matched,
substituted by the second value. You can also leave out a second value resulting in the
removal of the matched value. Use it like this:

```
       ...
       <rules>
          <data source='fieldNameWhereValuesShallBeSubstituded'>
            <setreplace map='mapname' />
          </data>
        </rules>
        <maps>
          <filemap name='mapname' files='org/metafacture/metamorph/maps/file-map-test.txt' />
        </maps>
        ...
```

## Outlook
We are working on a [Catmandu like fix language](https://librecat.org/Catmandu/#fix-language) which can be used instead of the `morph` script.
Also, there will be a [playground](https://metafacture.org/playground), realized as
a web app, to play around with data and transformation rules and see the outcome
immediately. You will be offered to load predefined examples.
The `playground` comes with the capability to share examples or whole complex
workflows, with the vision to enable this as a web API for processing data without
even installing metafacture.
