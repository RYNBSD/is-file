import type { IsOptions } from "./types.js";
import * as Node from "./node.js";
import * as Web from "./web.js";
declare const isBrowser: boolean;
export declare const typeFn: typeof Web.type | typeof Node.type;
export type InputTp = typeof isBrowser extends true ? Web.TypeInput : Node.TypeInput;
export type TypeFn = typeof isBrowser extends true ? typeof Web.type : typeof Node.type;
declare const _default: {
    readonly isApplication: <T extends Node.TypeInput | Node.TypeInput[]>(input: T, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    readonly isImage: <T_1 extends Node.TypeInput | Node.TypeInput[]>(input: T_1, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    readonly isVideo: <T_2 extends Node.TypeInput | Node.TypeInput[]>(input: T_2, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    readonly isAudio: <T_3 extends Node.TypeInput | Node.TypeInput[]>(input: T_3, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    readonly isModel: <T_4 extends Node.TypeInput | Node.TypeInput[]>(input: T_4, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    readonly isText: <T_5 extends Node.TypeInput | Node.TypeInput[]>(input: T_5, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    readonly isFont: <T_6 extends Node.TypeInput | Node.TypeInput[]>(input: T_6, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
    /**
     *
     * @param input - input path
     * @param me - mime or extension
     * @returns - is valid or not
     */
    readonly isCustom: <T_7 extends Node.TypeInput | Node.TypeInput[]>(input: T_7, me: string, options?: IsOptions) => Promise<boolean | import("./types.js").Return<Node.TypeInput>[]>;
};
export default _default;
export { Node, Web };
export type * from "./types.js";
//# sourceMappingURL=index.d.ts.map