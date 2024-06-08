type TypeInput = ReadableStream | Blob;
export declare function type(input: TypeInput): Promise<import("file-type/core.js").FileTypeResult | undefined>;
declare const _default: {
    readonly isApplication: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    readonly isImage: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    readonly isVideo: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    readonly isAudio: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    readonly isModel: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    readonly isText: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    readonly isFont: (input: TypeInput | TypeInput[]) => Promise<boolean>;
    /**
     *
     * @param input - input path
     * @param me - mime or extension
     * @returns - is valid or not
     */
    readonly isCustom: (input: TypeInput | TypeInput[], me: string) => Promise<boolean>;
};
export default _default;
export type * from "./types/index.js";
//# sourceMappingURL=web.d.ts.map