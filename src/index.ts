import type { IsOptions } from "./types.js";
import * as Node from "./node.js";
import * as Web from "./web.js";
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

const isBrowser = typeof window !== "undefined";
export const typeFn = isBrowser ? Web.type : Node.type;

export type InputTp = typeof isBrowser extends true ? Web.TypeInput : Node.TypeInput;
export type TypeFn = typeof isBrowser extends true ? typeof Web.type : typeof Node.type

export default {
  isApplication: (input: InputTp | InputTp[], options?: IsOptions) =>
    isApplication(typeFn as TypeFn, input, options),
  isImage: (input: InputTp | InputTp[], options?: IsOptions) =>
    isImage(typeFn as TypeFn, input, options),
  isVideo: (input: InputTp | InputTp[], options?: IsOptions) =>
    isVideo(typeFn as TypeFn, input, options),
  isAudio: (input: InputTp | InputTp[], options?: IsOptions) =>
    isAudio(typeFn as TypeFn, input, options),
  isModel: (input: InputTp | InputTp[], options?: IsOptions) =>
    isModel(typeFn as TypeFn, input, options),
  isText: (input: InputTp | InputTp[], options?: IsOptions) =>
    isText(typeFn as TypeFn, input, options),
  isFont: (input: InputTp | InputTp[], options?: IsOptions) =>
    isFont(typeFn as TypeFn, input, options),
  /**
   *
   * @param input - input path
   * @param me - mime or extension
   * @returns - is valid or not
   */
  isCustom: (input: InputTp | InputTp[], me: string, options?: IsOptions) =>
    isCustom(typeFn as TypeFn, input, me, options),
} as const;

export type * from "./types.js";
