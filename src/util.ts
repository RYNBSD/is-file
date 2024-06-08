export function isBuffer(
  value: unknown
): value is Uint8Array | ArrayBuffer | Buffer {
  return (
    value instanceof Uint8Array ||
    value instanceof ArrayBuffer ||
    Buffer.isBuffer(value)
  );
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}
