import type { FileTypeResult } from "./types/index.js";
type TypeFn<T> = (input: T) => Promise<FileTypeResult | undefined>;
export declare function isApplication<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isImage<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isVideo<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isAudio<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isModel<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isText<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isFont<T>(typeFn: TypeFn<T>, input: T | T[]): Promise<boolean>;
export declare function isCustom<T>(typeFn: TypeFn<T>, input: T | T[], me: string): Promise<boolean>;
export {};
//# sourceMappingURL=fn.d.ts.map