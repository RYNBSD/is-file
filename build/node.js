import fileType from "file-type";
import { Readable } from "stream";
import { isBuffer, isString } from "./util.js";
function isStream(value) {
    return value instanceof Readable;
}
/**
 * @param input - File path
 * @returns ext and mime
 */
export async function type(input) {
    if (isString(input))
        return fileType.fromFile(input);
    else if (isBuffer(input))
        return fileType.fromBuffer(input);
    else if (isStream(input))
        return fileType.fromStream(input);
    throw new TypeError("Input must be of type (string | Uint8Array | ArrayBuffer | Buffer | Readable)");
}
//# sourceMappingURL=node.js.map