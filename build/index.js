var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fileType from "file-type";
import { Readable } from "stream";
import { isBuffer, isString } from "./util.js";
import { isApplication, isAudio, isCustom, isFont, isImage, isModel, isText, isVideo, } from "./fn.js";
function isStream(value) {
    return value instanceof Readable;
}
/**
 * @param input - File path
 * @returns ext and mime
 */
export function type(input) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isString(input))
            return fileType.fromFile(input);
        else if (isBuffer(input))
            return fileType.fromBuffer(input);
        else if (isStream(input))
            return fileType.fromStream(input);
        throw new TypeError("Input must be of type (string | Uint8Array | ArrayBuffer | Buffer | Readable)");
    });
}
export default {
    isApplication: (input) => isApplication(type, input),
    isImage: (input) => isImage(type, input),
    isVideo: (input) => isVideo(type, input),
    isAudio: (input) => isAudio(type, input),
    isModel: (input) => isModel(type, input),
    isText: (input) => isText(type, input),
    isFont: (input) => isFont(type, input),
    /**
   *
   * @param input - input path
   * @param me - mime or extension
   * @returns - is valid or not
   */
    isCustom: (input, me) => isCustom(type, input, me),
};
//# sourceMappingURL=index.js.map