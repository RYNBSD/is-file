import type { FileTypeResult } from "./types/index.js";

const APPLICATION_MIME = "application/";
const IMAGE_MIME = "image/";
const VIDEO_MIME = "video/";
const AUDIO_MIME = "audio/";
const MODEL_MIME = "model/";
const TEXT_MIME = "text/";
const FONT_MIME = "font/";

type TypeFn<T> = (input: T) => Promise<FileTypeResult | undefined>;

// me = mime | extension

async function checkInput<T>(typeFn: TypeFn<T>, input: T, me: string) {
  const type = (await typeFn(input)) ?? { mime: "", ext: "" }
  return type.mime.startsWith(me) || type.ext === me;
}

async function checkInputs<T>(typeFn: TypeFn<T>, inputs: T[], me: string) {
  const promises = await Promise.allSettled(
    inputs.map((input) => checkInput<T>(typeFn, input, me))
  );
  for (const promise of promises) {
    if (promise.status === "rejected") return false;
    if (!promise.value) return false;
  }
  return true;
}

export async function isApplication<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, APPLICATION_MIME)
    : checkInput(typeFn, input, APPLICATION_MIME);
}

export async function isImage<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, IMAGE_MIME)
    : checkInput(typeFn, input, IMAGE_MIME);
}

export async function isVideo<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, VIDEO_MIME)
    : checkInput(typeFn, input, VIDEO_MIME);
}

export async function isAudio<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, AUDIO_MIME)
    : checkInput(typeFn, input, AUDIO_MIME);
}

export async function isModel<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, MODEL_MIME)
    : checkInput(typeFn, input, MODEL_MIME);
}

export async function isText<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, TEXT_MIME)
    : checkInput(typeFn, input, TEXT_MIME);
}

export async function isFont<T>(typeFn: TypeFn<T>, input: T | T[]) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, FONT_MIME)
    : checkInput(typeFn, input, FONT_MIME);
}

export async function isCustom<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  me: string
) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, me)
    : checkInput(typeFn, input, me);
}
