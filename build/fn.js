var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const APPLICATION_MIME = "application/";
const IMAGE_MIME = "image/";
const VIDEO_MIME = "video/";
const AUDIO_MIME = "audio/";
const MODEL_MIME = "model/";
const TEXT_MIME = "text/";
const FONT_MIME = "font/";
// me = mime | extension
function checkInput(typeFn, input, me) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const type = (_a = (yield typeFn(input))) !== null && _a !== void 0 ? _a : { mime: "", ext: "" };
        return type.mime.startsWith(me) || type.ext === me;
    });
}
function checkInputs(typeFn, inputs, me) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = yield Promise.allSettled(inputs.map((input) => checkInput(typeFn, input, me)));
        for (const promise of promises) {
            if (promise.status === "rejected")
                return false;
            if (!promise.value)
                return false;
        }
        return true;
    });
}
export function isApplication(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, APPLICATION_MIME)
            : checkInput(typeFn, input, APPLICATION_MIME);
    });
}
export function isImage(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, IMAGE_MIME)
            : checkInput(typeFn, input, IMAGE_MIME);
    });
}
export function isVideo(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, VIDEO_MIME)
            : checkInput(typeFn, input, VIDEO_MIME);
    });
}
export function isAudio(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, AUDIO_MIME)
            : checkInput(typeFn, input, AUDIO_MIME);
    });
}
export function isModel(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, MODEL_MIME)
            : checkInput(typeFn, input, MODEL_MIME);
    });
}
export function isText(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, TEXT_MIME)
            : checkInput(typeFn, input, TEXT_MIME);
    });
}
export function isFont(typeFn, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, FONT_MIME)
            : checkInput(typeFn, input, FONT_MIME);
    });
}
export function isCustom(typeFn, input, me) {
    return __awaiter(this, void 0, void 0, function* () {
        return Array.isArray(input)
            ? checkInputs(typeFn, input, me)
            : checkInput(typeFn, input, me);
    });
}
//# sourceMappingURL=fn.js.map