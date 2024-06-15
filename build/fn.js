import { typeFn } from "./config.js";
const APPLICATION_MIME = "application/";
const IMAGE_MIME = "image/";
const VIDEO_MIME = "video/";
const AUDIO_MIME = "audio/";
const MODEL_MIME = "model/";
const TEXT_MIME = "text/";
const FONT_MIME = "font/";
// me = mime | extension
async function checkInput(input, me) {
    // @ts-ignore
    const type = await typeFn(input);
    return typeof type === "undefined"
        ? false
        : type.mime.startsWith(me) || type.ext === me;
}
async function checkInputs(inputs, me) {
    const promises = await Promise.allSettled(inputs.map((input) => checkInput(input, me)));
    return promises.map((promise, i) => ({
        valid: promise.status === "fulfilled" && promise.value,
        value: inputs[i],
    }));
}
export async function isCustom(input, me) {
    return Array.isArray(input) ? checkInputs(input, me) : checkInput(input, me);
}
export async function isApplication(input) {
    // @ts-ignore
    return isCustom(input, APPLICATION_MIME);
}
export async function isImage(input) {
    // @ts-ignore
    return isCustom(input, IMAGE_MIME);
}
export async function isVideo(input) {
    // @ts-ignore
    return isCustom(input, VIDEO_MIME);
}
export async function isAudio(input) {
    // @ts-ignore
    return isCustom(input, AUDIO_MIME);
}
export async function isModel(input) {
    // @ts-ignore
    return isCustom(input, MODEL_MIME);
}
export async function isText(input) {
    // @ts-ignore
    return isCustom(input, TEXT_MIME);
}
export async function isFont(input) {
    // @ts-ignore
    return isCustom(input, FONT_MIME);
}
//# sourceMappingURL=fn.js.map