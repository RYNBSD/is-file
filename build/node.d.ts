/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Readable } from "stream";
export type TypeInput = string | Uint8Array | ArrayBuffer | Buffer | Readable;
/**
 * @param input - File path
 * @returns ext and mime
 */
export declare function type(input: TypeInput): Promise<import("file-type/core.js").FileTypeResult | undefined>;
//# sourceMappingURL=node.d.ts.map