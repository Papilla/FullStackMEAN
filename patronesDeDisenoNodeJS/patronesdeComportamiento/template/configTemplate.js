import { promises as fs } from 'fs';
import objectPath from 'object-path';

export class ConfigTemplate {
    async load(file) {
        console.log(`Deserealizando: ${file}`);
        this.data = this._deserialize(await fs.readFile(file, 'utf8'));
    }

    async save(file) {
        console.log(`Serializando: ${file}`);
        await fs.writeFile(file, this._serialize(this.data));
    }

    get(path) {
        return objectPath.get(this.data, path);
    }

    set(path, value) {
        return objectPath.set(this.data, path, value);
    }

    _serialize() {
        throw new Error('metodo no implementado: _serialize()');
    }

    _deserialize() {
        throw new Error('metodo no implementado: _deserialize()');
    }
}