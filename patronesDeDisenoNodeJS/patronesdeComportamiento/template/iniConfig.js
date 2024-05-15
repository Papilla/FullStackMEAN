import { ConfigTemplate } from "./configTemplate.js";
import ini from "ini";

export class IniConfig extends ConfigTemplate {
    _serialize(data) {
        return ini.stringify(data);
    }

    _deserialize(data) {
        return ini.parse(data)
    }
}