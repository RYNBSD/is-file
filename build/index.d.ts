/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { IsOptions } from "./types.js";
import * as Node from "./node.js";
import * as Web from "./web.js";
declare const isBrowser: boolean;
export declare const typeFn: typeof Web.type | typeof Node.type;
export type InputTp = typeof isBrowser extends true ? Web.TypeInput : Node.TypeInput;
export type TypeFn = typeof isBrowser extends true ? typeof Web.type : typeof Node.type;
declare const _default: {
    readonly isApplication: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    readonly isImage: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    readonly isVideo: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    readonly isAudio: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    readonly isModel: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    readonly isText: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    readonly isFont: (input: InputTp | InputTp[], options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
    /**
     *
     * @param input - input path
     * @param me - mime or extension
     * @returns - is valid or not
     */
    readonly isCustom: (input: InputTp | InputTp[], me: string, options?: IsOptions) => Promise<boolean | import("./types.js").Return<string | import("stream").Readable | Uint8Array | ArrayBuffer | Buffer>[]>;
};
export default _default;
export type * from "./types.js";
//# sourceMappingURL=index.d.ts.map