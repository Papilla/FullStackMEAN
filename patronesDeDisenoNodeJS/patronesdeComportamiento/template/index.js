import { IniConfig } from "./iniConfig.js";
import { JsonConfig } from "./jsonConfig.js";
import { YamlConfig } from "./yamlConfig.js";

async function storeMongoConfig() {
    const iniConfig = new IniConfig();
    await iniConfig.load('config/config.ini');
    iniConfig.set('mongodb.port', '33452');
    iniConfig.set('mongodb.url', '12.342.545');
    iniConfig.set('mongodb.user', 'adminSystem');
    iniConfig.set('mongodb.password', 'hgst563rwah');
    await iniConfig.save('config/config.ini');
}

async function readMongoConfig() {
    const iniConfig = new IniConfig();
    await iniConfig.load('config/config.ini');
    console.log(`mongodb port: ${iniConfig.get('mongodb.port')}`);
    console.log(`mongodb url: ${iniConfig.get('mongodb.url')}`);
    console.log(`mongodb user: ${iniConfig.get('mongodb.user')}`);
    console.log(`mongodb password: ${iniConfig.get('mongodb.password')}`);
}

async function storePostresConfig() {
    const jsonConfig = new JsonConfig();
    await jsonConfig.load('config/config.json');
    jsonConfig.set('postres.port', '33452');
    jsonConfig.set('postres.url', '12.342.545');
    jsonConfig.set('postres.user', 'adminSystem');
    jsonConfig.set('postres.password', 'hgst563rwah');
    await jsonConfig.save('config/config.json');
}

async function readPostresConfig() {
    const jsonConfig = new JsonConfig();
    await jsonConfig.load('config/config.json');
    console.log(`postres port: ${jsonConfig.get('postres.port')}`);
    console.log(`postres url: ${jsonConfig.get('postres.url')}`);
    console.log(`postres user: ${jsonConfig.get('postres.user')}`);
    console.log(`postres password: ${jsonConfig.get('postres.password')}`);
}

async function storeDockerConfig() {
    const yamlConfig = new YamlConfig();
    await yamlConfig.load('config/docker-compose.yaml');
    yamlConfig.set('version', '33452');
    yamlConfig.set('services.nodejs.image', 'nodejs:18');
    yamlConfig.set('services.nodejs.ports', ['80:8080']);
    yamlConfig.set('services.nodejs.restart', 'always');
    await yamlConfig.save('config/docker-compose.yaml');
}

async function readDockerConfig() {
    const yamlConfig = new YamlConfig();
    await yamlConfig.load('config/docker-compose.yaml');
    console.log(`Docker version: ${yamlConfig.get('version')}`);
    console.log(`Docker image: ${yamlConfig.get('services.nodejs.image')}`);
    console.log(`Docker ports: ${yamlConfig.get('services.nodejs.ports')}`);
    console.log(`Docker restart: ${yamlConfig.get('services.nodejs.restart')}`);
}


storeMongoConfig();
readMongoConfig();

storePostresConfig();
readPostresConfig();


storeDockerConfig();
readDockerConfig();