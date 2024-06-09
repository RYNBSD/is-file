const APPLICATION_MIME = "application/";
const IMAGE_MIME = "image/";
const VIDEO_MIME = "video/";
const AUDIO_MIME = "audio/";
const MODEL_MIME = "model/";
const TEXT_MIME = "text/";
const FONT_MIME = "font/";
// me = mime | extension
async function checkInput(typeFn, input, me) {
    const type = (await typeFn(input)) ?? { mime: "", ext: "" };
    return type.mime.startsWith(me) || type.ext === me;
}
async function checkInputs(typeFn, inputs, me, options) {
    const { returns = false } = options || {};
    const returnIndicator = [];
    const promises = await Promise.allSettled(inputs.map((input) => checkInput(typeFn, input, me)));
    for (const i in promises) {
        const promise = promises[i];
        if ((promise.status === "rejected" || !promise.value) && !returns)
            return false;
        returnIndicator.push({
            valid: promise.value,
            value: inputs[i],
        });
    }
    return returns ? returnIndicator : true;
}
export async function isCustom(typeFn, input, me, options) {
    return Array.isArray(input)
        ? checkInputs(typeFn, input, me, options)
        : checkInput(typeFn, input, me);
}
export async function isApplication(typeFn, input, options) {
    return isCustom(typeFn, input, APPLICATION_MIME, options);
}
export async function isImage(typeFn, input, options) {
    return isCustom(typeFn, input, IMAGE_MIME, options);
}
export async function isVideo(typeFn, input, options) {
    return isCustom(typeFn, input, VIDEO_MIME, options);
}
export async function isAudio(typeFn, input, options) {
    return isCustom(typeFn, input, AUDIO_MIME, options);
}
export async function isModel(typeFn, input, options) {
    return isCustom(typeFn, input, MODEL_MIME, options);
}
export async function isText(typeFn, input, options) {
    return isCustom(typeFn, input, TEXT_MIME, options);
}
export async function isFont(typeFn, input, options) {
    return isCustom(typeFn, input, FONT_MIME, options);
}
//# sourceMappingURL=fn.js.map