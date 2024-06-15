import * as Web from "./web.js";
import * as Node from "./node.js";

export const isBrowser = typeof window !== "undefined";
export const typeFn = isBrowser ? Web.type : Node.type;

export type InputTp<T = typeof isBrowser> = T extends true
  ? Web.TypeInput
  : Node.TypeInput;
export type TypeFn<T = typeof isBrowser> = T extends true
  ? typeof Web.type
  : typeof Node.type;

export { Web, Node };
