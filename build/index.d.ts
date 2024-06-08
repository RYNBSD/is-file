/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Readable } from "stream";
type TypeInput = string | Uint8Array | ArrayBuffer | Buffer | Readable;
/**
 * @param input - File path
 * @returns ext and mime
 */
export declare function type(input: TypeInput): Promise<import("file-type/core.js").FileTypeResult | undefined>;
declare const _default: {
    isApplication: (input: TypeInput) => Promise<boolean>;
    isImage: (input: TypeInput) => Promise<boolean>;
    isVideo: (input: TypeInput) => Promise<boolean>;
    isAudio: (input: TypeInput) => Promise<boolean>;
    isModel: (input: TypeInput) => Promise<boolean>;
    isText: (input: TypeInput) => Promise<boolean>;
    isFont: (input: TypeInput) => Promise<boolean>;
    /**
   *
   * @param input - input path
   * @param me - mime or extension
   * @returns - is valid or not
   */
    isCustom: (input: TypeInput, me: string) => Promise<boolean>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map