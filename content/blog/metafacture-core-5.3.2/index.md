---
title: Metafacture-core release 5.3.2
date: "2022-05-20T15:04:03.2300Z"
description: "This is about changes coming with the metafacture-core release 5.3.2"
authors: [{lastname: "Christoph",
           firstname: "Pascal"}]
---

*Preamble*

This post describes the new developements in `metafacture-core release 5.3.2` since the release
of [metafacture-core-5.3.1 in January 2022](https://blog.metafacture.org/metafacture-core-5.3.1/).

## Table of Contents

```toc
# this will be replaced by the toc
```

## Changes

### Bug fixes
- Strings: Call `LineRecorder` receiver's `closeStream()` [#433](https://github.com/metafacture/metafacture-core/issues/433)
- Flux: Throw `ANTLR` errors in `FluxParser` [#421](https://github.com/metafacture/metafacture-core/issues/421)
- XML/biblio: Do not trim control field values in `MARCXML` handler [#440](https://github.com/metafacture/metafacture-core/issues/440) and [#233](https://github.com/metafacture/metafacture-core/issues/233)


### Other
- Use `protected` on all `on...()` methods [#435](https://github.com/metafacture/metafacture-core/pull/435)

### Caveats

This will occur only quite rarely:
"Do not trim control field values in `MARCXML` handler ([#440](https://github.com/metafacture/metafacture-core/issues/440))" breaks positional access (`<substring>`) to control field data elements.
> For fixed-length fields with various kinds of coded information, specific data elements are positionally defined.
([MARC 21 Bibliographic - Control Fields](https://www.loc.gov/marc/bibliographic/bd00x.html))
