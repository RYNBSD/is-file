import { isApplication, isAudio, isCustom, isFont, isImage, isModel, isText, isVideo, } from "./fn.js";
export default {
    isApplication,
    isImage,
    isVideo,
    isAudio,
    isModel,
    isText,
    isFont,
    /**
     *
     * @param input - file
     * @param me - mime or extension
     * @returns - is valid or not
     */
    isCustom,
};
export * from "./config.js";
//# sourceMappingURL=index.js.map