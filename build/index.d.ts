import { isApplication, isAudio, isCustom, isFont, isImage, isModel, isText, isVideo } from "./fn.js";
declare const _default: {
    readonly isApplication: typeof isApplication;
    readonly isImage: typeof isImage;
    readonly isVideo: typeof isVideo;
    readonly isAudio: typeof isAudio;
    readonly isModel: typeof isModel;
    readonly isText: typeof isText;
    readonly isFont: typeof isFont;
    /**
     *
     * @param input - file
     * @param me - mime or extension
     * @returns - is valid or not
     */
    readonly isCustom: typeof isCustom;
};
export default _default;
export * from "./config.js";
//# sourceMappingURL=index.d.ts.map