import * as Node from "./node.js";
import * as Web from "./web.js";
import { isApplication, isAudio, isCustom, isFont, isImage, isModel, isText, isVideo, } from "./fn.js";
const isBrowser = typeof window !== "undefined";
export const typeFn = isBrowser ? Web.type : Node.type;
export default {
    isApplication: (input, options) => isApplication(typeFn, input, options),
    isImage: (input, options) => isImage(typeFn, input, options),
    isVideo: (input, options) => isVideo(typeFn, input, options),
    isAudio: (input, options) => isAudio(typeFn, input, options),
    isModel: (input, options) => isModel(typeFn, input, options),
    isText: (input, options) => isText(typeFn, input, options),
    isFont: (input, options) => isFont(typeFn, input, options),
    /**
     *
     * @param input - input path
     * @param me - mime or extension
     * @returns - is valid or not
     */
    isCustom: (input, me, options) => isCustom(typeFn, input, me, options),
};
export { Node, Web };
//# sourceMappingURL=index.js.map