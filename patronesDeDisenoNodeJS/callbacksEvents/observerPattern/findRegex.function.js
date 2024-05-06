import { readFile } from "fs";
import { EventEmitter } from "events";

export default function findRegex(files, regex) {
    const emitter = new EventEmitter();
    for (const file of files) {
        readFile(file, 'utf-8', (err, content) => {
            if (err) {
                return emitter.emit('error', err);
            }

            emitter.emit('fileRead', file);

            const match = content.match(regex);
            if (match) {
                match.forEach(elemento => emitter.emit('found', file, elemento));
            }
        });
    }

    return emitter;
}