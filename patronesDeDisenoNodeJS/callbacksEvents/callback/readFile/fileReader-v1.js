import { readFile } from "fs";

export default function fileReader(fileName, callback) {
    readFile(fileName, 'utf-8', (error, data) => {
        callback(data);
    });
}