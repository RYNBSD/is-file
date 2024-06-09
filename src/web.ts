import fileType from "file-type/browser.js";

function isBlob(value: unknown): value is Blob {
  return value instanceof Blob;
}

function isReadableStream(value: unknown): value is ReadableStream {
  return value instanceof ReadableStream;
}

export type TypeInput = ReadableStream | Blob;

export async function type(input: TypeInput) {
  if (isBlob(input)) return fileType.fromBlob(input);
  else if (isReadableStream(input)) return fileType.fromStream(input);
  throw new TypeError("Input must be of type (ReadableStream | Blob)");
}
