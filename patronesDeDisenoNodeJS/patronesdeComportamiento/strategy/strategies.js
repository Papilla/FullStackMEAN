import ini from "ini";
import yaml from "yaml";

export const jsonStrategy = {
    deserialize: (data) => JSON.parse(data),
    serialize: (data) => JSON.stringify(data, null, "    "),
}

export const iniStrategy = {
    deserialize: (data) => ini.parse(data),
    serialize: (data) => ini.stringify(data, true, "    "),
}

export const yamlStrategy = {
    deserialize: (data) => yaml.parse(data),
    serialize: (data) => yaml.stringify(data, true, "    "),
}