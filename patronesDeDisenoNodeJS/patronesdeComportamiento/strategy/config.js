import objectPath from "object-path";
import { promises as fs } from "fs";

export class Config {
    constructor(formatStrategy) {
        this.data = {};
        this.formatStrategy = formatStrategy;
    }

    get(configPath) {
        return objectPath.get(this.data, configPath);
    }

    set(configPath, value) {
        return objectPath.set(this.data, configPath, value);
    }

    async load(filePath) {
        console.log(`Deserealizando: ${filePath}`);
        this.data = this.formatStrategy.deserialize(
            await fs.readFile(filePath, 'utf-8')
        );
    }

    async save(filePath) {
        console.log(`Serializando: ${filePath}`);
        await fs.writeFile(filePath, this.formatStrategy.serialize(this.data));
    }
}