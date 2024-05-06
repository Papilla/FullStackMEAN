import fileReader from "./readFile/fileReader-v1.js";
import createFileReaderWithCache from "./readFile/fileReader-v2.js";
import readJSON from "./readFile/jsonReader.js";

// fileReader('./readFile/file.txt', (fileContent) => console.log(fileContent));
// fileReaderWithCache('./readFile/file.txt', (fileContent) => console.log(fileContent));

const fileReaderWithCache = createFileReaderWithCache("./readFile/file.txt");
fileReaderWithCache.onFileReady(fileContent => {
    console.log(`Primera lectura:`, fileContent);

    const fileReaderWithCache2 = createFileReaderWithCache("./readFile/file.txt");
    fileReaderWithCache2.onFileReady(fileContent => {
        console.log(`Segunda lectura:`, fileContent);
    })
});

readJSON('./readFile/file.json', (err, jsonData) => {
    if (err) {
        console.error(err);
    } else {
        console.log(jsonData);
    }
});