import findRegex from "./findRegex.function.js";
import FindRegex from "./findRegex.class.js";

const regex = /[A-Z]+/g;

const regexEmitter = findRegex(['../readFile/file.txt', '../readFile/file.json'], regex);

regexEmitter
    .on('error', (error) => console.error(error))
    .on('fileRead', (file) => console.log(`${file} se ha leído correctamente`))
    .on('found', (file, elemento) => console.log(`Se encontró: "${elemento}" en ${file}`))
    ;

const findRegexInstance = new FindRegex(regex);

const errorHandler = (error) => console.error(error);
const fileReadHandler = (file) => console.log(`${file} se ha leído correctamente`);
const foundHandler = (file, elemento) => console.log(`Se encontró: "${elemento}" en ${file}`);
const removeListenersHandler = (eventsNames) => {
    console.log('-----------------------------------------------')
    eventsNames.forEach(eventName => {
        findRegexInstance
            .removeAllListeners(eventName)
            .checkListeners(eventName, listeners => console.log(`Listeners de ${eventName}: ${listeners}`))
            ;
    })
}

findRegexInstance
    .addFile('../readFile/file.txt')
    .addFile('../readFile/file.json')
    .findRegex()
    .on('error', errorHandler)
    .on('fileRead', fileReadHandler)
    .on('found', foundHandler)
    .on('done', removeListenersHandler)
    .checkListeners('error', listeners => console.log(`Listeners de error: ${listeners}`))
    .checkListeners('fileRead', listeners => console.log(`Listeners de fileRead: ${listeners}`))
    .checkListeners('found', listeners => console.log(`Listeners de found: ${listeners}`))
    ;