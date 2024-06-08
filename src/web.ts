import fileType from "file-type/browser.js";
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

function isBlob(value: unknown): value is Blob {
  return value instanceof Blob;
}

function isReadableStream(value: unknown): value is ReadableStream {
  return value instanceof ReadableStream;
}

type TypeInput = ReadableStream | Blob;

export async function type(input: TypeInput) {
  if (isBlob(input)) return fileType.fromBlob(input);
  else if (isReadableStream(input)) return fileType.fromStream(input);
  throw new TypeError("Input must be of type (ReadableStream | Blob)");
}

export default {
  isApplication: (input: TypeInput | TypeInput[]) => isApplication(type, input),
  isImage: (input: TypeInput | TypeInput[]) => isImage(type, input),
  isVideo: (input: TypeInput | TypeInput[]) => isVideo(type, input),
  isAudio: (input: TypeInput | TypeInput[]) => isAudio(type, input),
  isModel: (input: TypeInput | TypeInput[]) => isModel(type, input),
  isText: (input: TypeInput | TypeInput[]) => isText(type, input),
  isFont: (input: TypeInput | TypeInput[]) => isFont(type, input),
  /**
   *
   * @param input - input path
   * @param me - mime or extension
   * @returns - is valid or not
   */
  isCustom: (input: TypeInput | TypeInput[], me: string) =>
    isCustom(type, input, me),
} as const;

export type * from "./types/index.js";
