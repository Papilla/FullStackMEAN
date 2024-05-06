import { readFile } from 'fs';

export default function readJSON(fileName, callback) {
    let parsed;
    readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }
        try {
            parsed = JSON.parse(data);
        } catch (error) {
            return callback(err);
        }
        callback(null, parsed);
    });
}