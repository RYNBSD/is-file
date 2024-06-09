import type fileType from "file-type";
export type ReadableStreamWithFileType = fileType.ReadableStreamWithFileType;
export type MimeType = fileType.MimeType;
export type FileExtension = fileType.FileExtension;
export type FileTypeResult = fileType.FileTypeResult;
export type Return<T> = {
    valid: boolean;
    value: T;
};
export type IsOptions = Partial<{
    returns: boolean;
}>;
//# sourceMappingURL=types.d.ts.map