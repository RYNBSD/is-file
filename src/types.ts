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
  // return the element with a mark to indicate if valid or not, in case of array only, default: false
  returns: boolean;
}>;