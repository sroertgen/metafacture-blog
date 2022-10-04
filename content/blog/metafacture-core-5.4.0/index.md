---
title: Metafacture-core release 5.4.0
date: "2022-10-04T16:34:03.2300Z"
description: "This is about changes coming with the metafacture-core release 5.4.0"
authors: [{lastname: "Christoph",
           firstname: "Pascal"}]
---

*Preamble*

This post describes the new developements in `metafacture-core release 5.4.0` since the [release
of metafacture-core-5.3.2](https://blog.metafacture.org/metafacture-core-5.3.2/) in May 2022.

## Table of Contents

```toc
# this will be replaced by the toc
```

## Changes

### New Features

- HTTP: Enable other methods to HttpOpener than just GET - i.e. DELETE, HEAD, OPTIONS, POST, PUT and TRACE [#463](https://github.com/metafacture/metafacture-core/issues/463)
- HTTP: Enable generic header support in HttpOpener [#456](https://github.com/metafacture/metafacture-core/issues/456)
- File: Add support for compressed files as FileMap input [#455](https://github.com/metafacture/metafacture-core/pull/455)
- JSON: Implement JSON booleans and numbers [#458](https://github.com/metafacture/metafacture-core/pull/458)

Have a look at [flux-commands](https://github.com/metafacture/metafacture-documentation/blob/master/flux-commands.md) how to use these features.

### Other

- Update OAI-PMH harvester library [#360](https://github.com/metafacture/metafacture-core/issues/360)
- "./gradlew fluxCommands" to see the currently available options [(743e90e)](https://github.com/metafacture/metafacture-core/commit/743e90e54d5f63e3a4209e1afe248456d763d0d7)

... and various smaller fixes and improvements (e.g. Mark deprecated Flux command options in help output [#451](https://github.com/metafacture/metafacture-core/pull/451))
