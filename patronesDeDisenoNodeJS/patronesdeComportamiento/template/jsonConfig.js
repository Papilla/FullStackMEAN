import { ConfigTemplate } from "./configTemplate.js";

export class JsonConfig extends ConfigTemplate {
    _serialize(data) {
        return JSON.stringify(data);
    }

    _deserialize(data) {
        return JSON.parse(data, null, "    ")
    }
}