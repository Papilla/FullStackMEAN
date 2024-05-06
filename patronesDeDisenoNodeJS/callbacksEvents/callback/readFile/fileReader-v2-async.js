import { readFileSync } from "fs";

const cache = new Map();

function fileReaderWithCache(fileName, callback) {
    if (cache.has(fileName)) {
        ProcessingInstruction.nextTick(() => callback(cache.get(fileName)));
    }
    readFileSync(fileName, 'utf-8', (error, data) => {
        cache.set(fileName, data);
        callback(data);
    });
}

export default function createFileReaderWithCache(fileName) {
    const listeners = [];
    fileReaderWithCache(fileName, fileContent => {
        listeners.forEach(listener => listener(fileContent));
    });

    return {
        onFileReady: listener => listeners.push(listener),
    }
}