import type { InputTp } from "./config.js";
import { typeFn } from "./config.js";

const APPLICATION_MIME = "application/";
const IMAGE_MIME = "image/";
const VIDEO_MIME = "video/";
const AUDIO_MIME = "audio/";
const MODEL_MIME = "model/";
const TEXT_MIME = "text/";
const FONT_MIME = "font/";

type CheckInputsReturn = Awaited<ReturnType<typeof checkInputs>>;

// me = mime | extension

async function checkInput<T extends InputTp>(input: T, me: string) {
  // @ts-ignore
  const type = await typeFn(input);
  return typeof type === "undefined"
    ? false
    : type.mime.startsWith(me) || type.ext === me;
}

async function checkInputs<T extends InputTp>(inputs: T[], me: string) {
  const promises = await Promise.allSettled(
    inputs.map((input) => checkInput(input, me))
  );
  return promises.map((promise, i) => ({
    valid: promise.status === "fulfilled" && promise.value,
    value: inputs[i]!,
  }));
}

export async function isCustom<T extends InputTp>(
  input: T,
  me: string
): Promise<boolean>;
export async function isCustom<T extends InputTp[]>(
  input: T,
  me: string
): Promise<CheckInputsReturn>;
export async function isCustom<T extends InputTp | InputTp[]>(
  input: T,
  me: string
) {
  return Array.isArray(input) ? checkInputs(input, me) : checkInput(input, me);
}

type CustomReturn<T> = T extends InputTp
  ? boolean
  : T extends InputTp[]
  ? CheckInputsReturn
  : never;

export async function isApplication<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, APPLICATION_MIME) as Promise<CustomReturn<T>>;
}

export async function isImage<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, IMAGE_MIME) as Promise<CustomReturn<T>>;
}

export async function isVideo<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, VIDEO_MIME) as Promise<CustomReturn<T>>;
}

export async function isAudio<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, AUDIO_MIME) as Promise<CustomReturn<T>>;
}

export async function isModel<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, MODEL_MIME) as Promise<CustomReturn<T>>;
}

export async function isText<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, TEXT_MIME) as Promise<CustomReturn<T>>;
}

export async function isFont<T extends InputTp | InputTp[]>(input: T) {
  // @ts-ignore
  return isCustom(input, FONT_MIME) as Promise<CustomReturn<T>>;
}
