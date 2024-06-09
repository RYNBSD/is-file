import fileType from "file-type";
import { Readable } from "stream";
import { isBuffer, isString } from "./util.js";

function isStream(value: unknown): value is Readable {
  return value instanceof Readable;
}

export type TypeInput = string | Uint8Array | ArrayBuffer | Buffer | Readable;

/**
 * @param input - File path
 * @returns ext and mime
 */
export async function type(input: TypeInput) {
  if (isString(input)) return fileType.fromFile(input);
  else if (isBuffer(input)) return fileType.fromBuffer(input);
  else if (isStream(input)) return fileType.fromStream(input);
  throw new TypeError(
    "Input must be of type (string | Uint8Array | ArrayBuffer | Buffer | Readable)"
  );
}
