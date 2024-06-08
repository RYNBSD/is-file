import fileType from "file-type";
import { Readable } from "stream";
import { isBuffer, isString } from "./util.js";
import {
  isApplication,
  isAudio,
  isCustom,
  isFont,
  isImage,
  isModel,
  isText,
  isVideo,
} from "./fn.js";

function isStream(value: unknown): value is Readable {
  return value instanceof Readable;
}

type TypeInput = string | Uint8Array | ArrayBuffer | Buffer | Readable;

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

export default {
  isApplication: (input: TypeInput) => isApplication(type, input),
  isImage: (input: TypeInput) => isImage(type, input),
  isVideo: (input: TypeInput) => isVideo(type, input),
  isAudio: (input: TypeInput) => isAudio(type, input),
  isModel: (input: TypeInput) => isModel(type, input),
  isText: (input: TypeInput) => isText(type, input),
  isFont: (input: TypeInput) => isFont(type, input),
    /**
   * 
   * @param input - input path
   * @param me - mime or extension
   * @returns - is valid or not
   */
  isCustom: (input: TypeInput, me: string) => isCustom(type, input, me),
};
