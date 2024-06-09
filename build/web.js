import fileType from "file-type/browser.js";
function isBlob(value) {
    return value instanceof Blob;
}
function isReadableStream(value) {
    return value instanceof ReadableStream;
}
export async function type(input) {
    if (isBlob(input))
        return fileType.fromBlob(input);
    else if (isReadableStream(input))
        return fileType.fromStream(input);
    throw new TypeError("Input must be of type (ReadableStream | Blob)");
}
//# sourceMappingURL=web.js.map