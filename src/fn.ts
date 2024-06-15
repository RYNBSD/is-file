import type { IsOptions, Return } from "./types.js";
import type { InputTp } from "./config.js";
import { typeFn } from "./config.js";

const APPLICATION_MIME = "application/";
const IMAGE_MIME = "image/";
const VIDEO_MIME = "video/";
const AUDIO_MIME = "audio/";
const MODEL_MIME = "model/";
const TEXT_MIME = "text/";
const FONT_MIME = "font/";

// me = mime | extension

async function checkInput<T>(input: T, me: string) {
  // @ts-ignore
  const type = (await typeFn(input)) ?? { mime: "", ext: "" };
  return type.mime.startsWith(me) || type.ext === me;
}

async function checkInputs<T>(
  inputs: T,
  me: string,
  options?: IsOptions<false>
): Promise<boolean>;
async function checkInputs<T>(
  inputs: T,
  me: string,
  options?: IsOptions<true>
): Promise<Return<T>[]>;
async function checkInputs<T>(inputs: T[], me: string, options?: IsOptions) {
  const { returns = false } = options || {};
  const returnIndicator: Return<T>[] = [];

  const promises = await Promise.allSettled(
    inputs.map((input) => checkInput<T>(input, me))
  );
  for (const i in promises) {
    const promise = promises[i]!;

    if (promise.status === "rejected" || !promise.value) return false;
    if (!returns) continue;

    returnIndicator.push({
      valid: promise.value,
      value: inputs[i]!,
    });
  }

  return returns ? returnIndicator : true;
}

export async function isCustom<
  T extends InputTp | InputTp[],
  O extends boolean
>(input: T, me: string, options?: IsOptions<O>) {
  return Array.isArray(input)
    ? // @ts-ignore
      (checkInputs<T>(input, me, options) as Promise<
        O extends true ? Return<T>[] : boolean
      >)
    : (checkInput<T>(input, me) as Promise<
        O extends true ? Return<T>[] : boolean
      >);
}

export async function isApplication<
  T extends InputTp | InputTp[],
  O extends boolean
>(input: T, options?: IsOptions<O>) {
  return isCustom<T, O>(input, APPLICATION_MIME, options);
}

export async function isImage<T extends InputTp | InputTp[], O extends boolean>(
  input: T,
  options?: IsOptions<O>
) {
  return isCustom<T, O>(input, IMAGE_MIME, options);
}

export async function isVideo<T extends InputTp | InputTp[], O extends boolean>(
  input: T,
  options?: IsOptions<O>
) {
  return isCustom<T, O>(input, VIDEO_MIME, options);
}

export async function isAudio<T extends InputTp | InputTp[], O extends boolean>(
  input: T,
  options?: IsOptions<O>
) {
  return isCustom<T, O>(input, AUDIO_MIME, options);
}

export async function isModel<T extends InputTp | InputTp[], O extends boolean>(
  input: T,
  options?: IsOptions<O>
) {
  return isCustom<T, O>(input, MODEL_MIME, options);
}

export async function isText<T extends InputTp | InputTp[], O extends boolean>(
  input: T,
  options?: IsOptions<O>
) {
  return isCustom<T, O>(input, TEXT_MIME, options);
}

export async function isFont<T extends InputTp | InputTp[], O extends boolean>(
  input: T,
  options?: IsOptions<O>
) {
  return isCustom<T, O>(input, FONT_MIME, options);
}
