import { readFile, readFileSync } from "fs";
import { EventEmitter } from "events";

export default class FindRegex extends EventEmitter {
    constructor(regex) {
        super();
        this.regex = regex;
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
        return this;
    }

    findRegex() {
        const totalFiles = this.files.length;
        for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i];
            readFile(file, 'utf-8', (err, content) => {
                if (err) {
                    return this.emit('error', err);
                }

                this.emit('fileRead', file);

                const match = content.match(this.regex);
                if (match) {
                    match.forEach(elemento => this.emit('found', file, elemento));
                }

                if (i + 1 == totalFiles) {
                    this.emit('done', ['error', 'fileRead', 'found']);
                }
            });
        }
        return this;
    }

    checkListeners(eventName, callback) {
        callback(this.listenerCount(eventName));
        return this;
    }
}