import type { FileTypeResult, IsOptions, Return } from "./types.js";
type TypeFn<T> = (input: T) => Promise<FileTypeResult | undefined>;
export declare function isCustom<T>(typeFn: TypeFn<T>, input: T | T[], me: string, options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isApplication<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isImage<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isVideo<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isAudio<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isModel<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isText<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export declare function isFont<T>(typeFn: TypeFn<T>, input: T | T[], options?: IsOptions): Promise<boolean | Return<T>[]>;
export {};
//# sourceMappingURL=fn.d.ts.map