import type { FileTypeResult, IsOptions, Return } from "./types.js";

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
  const type = (await typeFn(input)) ?? { mime: "", ext: "" };
  return type.mime.startsWith(me) || type.ext === me;
}

async function checkInputs<T>(
  typeFn: TypeFn<T>,
  inputs: T[],
  me: string,
  options?: IsOptions
): Promise<boolean | Return<T>[]> {
  const { returns = false } = options || {};

  const returnIndicator: Return<T>[] = [];

  const promises = await Promise.allSettled(
    inputs.map((input) => checkInput<T>(typeFn, input, me))
  );
  for (const i in promises) {
    const promise = promises[i]!;

    if ((promise.status === "rejected" || !promise.value) && !returns)
      return false;

    returnIndicator.push({
      valid: (promise as PromiseFulfilledResult<boolean>).value,
      value: inputs[i]!,
    });
  }

  return returns ? returnIndicator : true;
}

export async function isCustom<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  me: string,
  options?: IsOptions
) {
  return Array.isArray(input)
    ? checkInputs(typeFn, input, me, options)
    : checkInput(typeFn, input, me);
}

export async function isApplication<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, APPLICATION_MIME, options);
}

export async function isImage<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, IMAGE_MIME, options);
}

export async function isVideo<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, VIDEO_MIME, options);
}

export async function isAudio<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, AUDIO_MIME, options);
}

export async function isModel<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, MODEL_MIME, options);
}

export async function isText<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, TEXT_MIME, options);
}

export async function isFont<T>(
  typeFn: TypeFn<T>,
  input: T | T[],
  options?: IsOptions
) {
  return isCustom(typeFn, input, FONT_MIME, options);
}
