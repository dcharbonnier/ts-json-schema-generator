import type { Definition } from "../Schema/Definition.js";
import type { SubTypeFormatter } from "../SubTypeFormatter.js";
import type { BaseType } from "../Type/BaseType.js";
import { UnknownType } from "../Type/UnknownType.js";

export class UnknownTypeFormatter implements SubTypeFormatter {
    public supportsType(type: BaseType): boolean {
        return type instanceof UnknownType;
    }
    public getDefinition(type: UnknownType): Definition {
        return {};
    }
    public getChildren(type: UnknownType): BaseType[] {
        return [];
    }
}
