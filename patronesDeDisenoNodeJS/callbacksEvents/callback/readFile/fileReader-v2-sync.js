import { readFileSync } from "fs";

const cache = new Map();

function fileReaderWithCache(fileName, callback) {
    if (cache.has(fileName)) {
        callback(cache.get(fileName));
    } else {
        const fileData = readFileSync(fileName, 'utf-8');
        cache.set(fileName, fileData);
        callback(fileData);
    }
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