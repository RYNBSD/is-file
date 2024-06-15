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
    const type = (await typeFn(input)) ?? { mime: "", ext: "" };
    return type.mime.startsWith(me) || type.ext === me;
}
async function checkInputs(inputs, me, options) {
    const { returns = false } = options || {};
    const returnIndicator = [];
    const promises = await Promise.allSettled(inputs.map((input) => checkInput(input, me)));
    for (const i in promises) {
        const promise = promises[i];
        if (promise.status === "rejected" || !promise.value)
            return false;
        if (!returns)
            continue;
        returnIndicator.push({
            valid: promise.value,
            value: inputs[i],
        });
    }
    return returns ? returnIndicator : true;
}
export async function isCustom(input, me, options) {
    return Array.isArray(input)
        ? // @ts-ignore
            checkInputs(input, me, options)
        : checkInput(input, me);
}
export async function isApplication(input, options) {
    return isCustom(input, APPLICATION_MIME, options);
}
export async function isImage(input, options) {
    return isCustom(input, IMAGE_MIME, options);
}
export async function isVideo(input, options) {
    return isCustom(input, VIDEO_MIME, options);
}
export async function isAudio(input, options) {
    return isCustom(input, AUDIO_MIME, options);
}
export async function isModel(input, options) {
    return isCustom(input, MODEL_MIME, options);
}
export async function isText(input, options) {
    return isCustom(input, TEXT_MIME, options);
}
export async function isFont(input, options) {
    return isCustom(input, FONT_MIME, options);
}
//# sourceMappingURL=fn.js.map