import * as Web from "./web.js";
import * as Node from "./node.js";
export declare const isBrowser: boolean;
export declare const typeFn: typeof Web.type | typeof Node.type;
export type InputTp<T = typeof isBrowser> = T extends true ? Web.TypeInput : Node.TypeInput;
export type TypeFn<T = typeof isBrowser> = T extends true ? typeof Web.type : typeof Node.type;
export { Web, Node };
//# sourceMappingURL=config.d.ts.map