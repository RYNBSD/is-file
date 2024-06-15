import * as Web from "./web.js";
import * as Node from "./node.js";
export const isBrowser = typeof window !== "undefined";
export const typeFn = isBrowser ? Web.type : Node.type;
export { Web, Node };
//# sourceMappingURL=config.js.map