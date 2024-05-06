import { readFile } from "fs";

const cache = new Map();

function fileReaderWithCache(fileName, callback) {
    if (cache.has(fileName)) {
        callback(cache.get(fileName));
    }
    readFile(fileName, 'utf-8', (error, data) => {
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