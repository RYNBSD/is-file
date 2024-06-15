import type { IsOptions, Return } from "./types.js";
import type { InputTp } from "./config.js";
export declare function isCustom<T extends InputTp | InputTp[], O extends boolean>(input: T, me: string, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isApplication<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isImage<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isVideo<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isAudio<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isModel<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isText<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
export declare function isFont<T extends InputTp | InputTp[], O extends boolean>(input: T, options?: IsOptions<O>): Promise<O extends true ? Return<T>[] : boolean>;
//# sourceMappingURL=fn.d.ts.map