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

export type InputTp = typeof isBrowser extends true
  ? Web.TypeInput
  : Node.TypeInput;
export type TypeFn = typeof isBrowser extends true
  ? typeof Web.type
  : typeof Node.type;

export default {
  isApplication: <T extends InputTp | InputTp[]>(
    input: T,
    options?: IsOptions
  ) => isApplication(typeFn as TypeFn, input, options),
  isImage: <T extends InputTp | InputTp[]>(input: T, options?: IsOptions) =>
    isImage(typeFn as TypeFn, input, options),
  isVideo: <T extends InputTp | InputTp[]>(input: T, options?: IsOptions) =>
    isVideo(typeFn as TypeFn, input, options),
  isAudio: <T extends InputTp | InputTp[]>(input: T, options?: IsOptions) =>
    isAudio(typeFn as TypeFn, input, options),
  isModel: <T extends InputTp | InputTp[]>(input: T, options?: IsOptions) =>
    isModel(typeFn as TypeFn, input, options),
  isText: <T extends InputTp | InputTp[]>(input: T, options?: IsOptions) =>
    isText(typeFn as TypeFn, input, options),
  isFont: <T extends InputTp | InputTp[]>(input: T, options?: IsOptions) =>
    isFont(typeFn as TypeFn, input, options),
  /**
   *
   * @param input - input path
   * @param me - mime or extension
   * @returns - is valid or not
   */
  isCustom: <T extends InputTp | InputTp[]>(
    input: T,
    me: string,
    options?: IsOptions
  ) => isCustom(typeFn as TypeFn, input, me, options),
} as const;

export type * from "./types.js";
