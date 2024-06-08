export function isBuffer(value) {
    return (value instanceof Uint8Array ||
        value instanceof ArrayBuffer ||
        Buffer.isBuffer(value));
}
export function isString(value) {
    return typeof value === "string";
}
//# sourceMappingURL=util.js.map