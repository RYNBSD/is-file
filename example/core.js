// Core //

import { type } from "../build/index"

// This is the core function for the library you can import it like this,
// and use it, If it detect the file format if return an object
// otherwise undefined

type("image.png")
// => { mime: "image/png", ext: png }, otherwise undefined