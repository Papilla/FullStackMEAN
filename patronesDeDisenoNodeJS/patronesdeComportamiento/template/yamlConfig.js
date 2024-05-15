import { ConfigTemplate } from "./configTemplate.js";
import yaml from "yaml";

export class YamlConfig extends ConfigTemplate {
    _serialize(data) {
        return yaml.stringify(data);
    }

    _deserialize(data) {
        return yaml.parse(data)
    }
}