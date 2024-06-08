// API //

import isFile from "../build/index.js"

isFile.isApplication(["application.xml", "application.pdf"])
// => true, otherwise false

isFile.isImage(["image.png", "image.jpeg"])
// => true, otherwise false

isFile.isVideo(["video.mp4", "video.mov"])
// => true, otherwise false

isFile.isAudio(["audio.mp3", "audio.wav"])
// => true, otherwise false

isFile.isFont(["font.ttf", "font.woff"])
// => true, otherwise false

isFile.isModel(["model.glb", "model.gltf"])
// => true, otherwise false
