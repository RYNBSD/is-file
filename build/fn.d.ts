import type { InputTp } from "./config.js";
type CheckInputsReturn = Awaited<ReturnType<typeof checkInputs>>;
declare function checkInputs<T extends InputTp>(inputs: T[], me: string): Promise<{
    valid: boolean;
    value: T;
}[]>;
export declare function isCustom<T extends InputTp>(input: T, me: string): Promise<boolean>;
export declare function isCustom<T extends InputTp[]>(input: T, me: string): Promise<CheckInputsReturn>;
type CustomReturn<T> = T extends InputTp ? boolean : T extends InputTp[] ? CheckInputsReturn : never;
export declare function isApplication<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export declare function isImage<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export declare function isVideo<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export declare function isAudio<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export declare function isModel<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export declare function isText<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export declare function isFont<T extends InputTp | InputTp[]>(input: T): Promise<CustomReturn<T>>;
export {};
//# sourceMappingURL=fn.d.ts.map