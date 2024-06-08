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
import isFile from "@ryn-bsd/is-file"; // node
import isFile from "@ryn-bsd/is-file/web"; // web
import isFile from "@ryn-bsd/is-file/node"; // node
```

# Examples

```js
// Single //

import isFile from "../build/index.js";

isFile.isApplication("../assets/text.xml");
// => true, otherwise false

isFile.isImage("../assets/image.png");
// => true, otherwise false

isFile.isVideo("../assets/video.mp4");
// => true, otherwise false

isFile.isAudio("../assets/audio.mp3");
// => true, otherwise false

isFile.isFont("../assets/font.ttf");
// => true, otherwise false

isFile.isModel("../assets/model.glb");
// => true, otherwise false
```

```js
// Multiple //

import isFile from "../build/index.js";

isFile.isApplication(["application.xml", "application.pdf"]);
// => true, otherwise false

isFile.isImage(["image.png", "image.jpeg"]);
// => true, otherwise false

isFile.isVideo(["video.mp4", "video.mov"]);
// => true, otherwise false

isFile.isAudio(["audio.mp3", "audio.wav"]);
// => true, otherwise false

isFile.isFont(["font.ttf", "font.woff"]);
// => true, otherwise false

isFile.isModel(["model.glb", "model.gltf"]);
// => true, otherwise false
```

```js
// Core //

import { type } from "../build/index";

// This is the core function for the library you can import it like this,
// and use it, If it detect the file format if return an object
// otherwise undefined

type("image.png");
// => { mime: "image/png", ext: png }, otherwise undefined
```

# How it work?

The library check file format by it signature (not extension), to ensure the exact file format. In case you pass multiple files in array the library use concurrency model to optimize the performance.
