JS Library helps to **check file formats**, in **node** and **web**.

# API

- isApplication
- isImage
- isVideo
- isAudio
- isModel
- isText
- isFont

Those functions need one parameter, exactly file. Files can be passed as path string, Buffer, Readable<br />

#### If you want a custom one, call

- isCustom
  Accept file and the mime or extension

# How to import

```js
import isFile from "@ryn-bsd/is-file"; // base on your environment it will import node or web functionalities
```

# Examples

```js
// Single //

import isFile from "@ryn-bsd/is-file";

isFile.isApplication("text.xml");
// => true, otherwise false

isFile.isImage("image.png");
// => true, otherwise false

isFile.isVideo("video.mp4");
// => true, otherwise false

isFile.isAudio("audio.mp3");
// => true, otherwise false

isFile.isFont("font.ttf");
// => true, otherwise false

isFile.isModel("model.glb");
// => true, otherwise false

isFile.isCustom("custom.png", "image/png");
// => true, otherwise false

isFile.isCustom("custom.png", "png");
// => true, otherwise false
```

```js
// Multiple //

import isFile from "@ryn-bsd/is-file";

isFile.isApplication(["application.xml", "application.pdf"]);
// => [{ valid: true, value: "application.xml" }, { valid: true, value: "application.pdf" }]

isFile.isCustom(["custom.png", "custom.xml", "custom.glb"], "image/png");
// => [{ valid: true, value: "custom.png" }, { valid: false, value: "custom.xml" }, { valid: false, value: "custom.glb" }]
```

# Core

```js
// Core //

import { Node } from "@ryn-bsd/is-file"; // Node core
import { Web } from "@ryn-bsd/is-file"; // Web core
import { typeFn } from "@ryn-bsd/is-file";

// This is the core function for the library you can import it like this,
// and use it, If it detect the file format if return an object
// otherwise undefined

typeFn("image.png");
// => { mime: "image/png", ext: png }, otherwise undefined
```

# How it work?

The library check file format by it signature (not extension), to ensure the exact file format. In case you pass multiple files in array the library use concurrency model to optimize the performance.
