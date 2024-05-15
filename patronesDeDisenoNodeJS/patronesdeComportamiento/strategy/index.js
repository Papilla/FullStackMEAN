import { Config } from './config.js';
import { iniStrategy, jsonStrategy, yamlStrategy } from './strategies.js';

async function storeMongoConfig() {
    const iniConfig = new Config(iniStrategy);
    iniConfig.set('mongodb.port', "33452");
    iniConfig.set("mongodb.url", '123.456.432');
    iniConfig.set("mongodb.password", '123456789');
    iniConfig.set("mongodb.user", 'adminSystem');
    await iniConfig.save('config/config.ini');
}

async function readMongoConfig() {
    const iniConfig = new Config(iniStrategy);
    await iniConfig.load("config/config.ini");
    console.log(`mongodb port ${iniConfig.get("mongodb.port")}`);
    console.log(`mongodb url ${iniConfig.get("mongodb.url")}`);
    console.log(`mongodb password ${iniConfig.get("mongodb.password")}`);
    console.log(`mongodb user ${iniConfig.get("mongodb.user")}`);
}

async function storePostresConfig() {
    const jsonConfig = new Config(jsonStrategy);
    jsonConfig.set('postres.port', "33452");
    jsonConfig.set("postres.url", '123.456.432');
    jsonConfig.set("postres.password", '123456789');
    jsonConfig.set("postres.user", 'adminSystem');
    await jsonConfig.save('config/config.json');
}

async function readPostresConfig() {
    const jsonConfig = new Config(jsonStrategy);
    await jsonConfig.load("config/config.json");
    console.log(`postres port ${jsonConfig.get("postres.port")}`);
    console.log(`postres url ${jsonConfig.get("postres.url")}`);
    console.log(`postres password ${jsonConfig.get("postres.password")}`);
    console.log(`postres user ${jsonConfig.get("postres.user")}`);
}

async function storeDockerConfig() {
    const yamlConfig = new Config(yamlStrategy);
    yamlConfig.set('version', "3");
    yamlConfig.set('services.nodejs.image', "nodejs:18");
    yamlConfig.set('services.nodejs.ports', ['80:8080']);
    yamlConfig.set('services.nodejs.restart', 'always');
    await yamlConfig.save('config/docker-compose.yaml');
}

async function readDockerConfig() {
    const yamlConfig = new Config(yamlStrategy);
    await yamlConfig.load("config/docker-compose.yaml");
    console.log(`Docker version ${yamlConfig.get("version")}`);
    console.log(`Docker image ${yamlConfig.get("services.nodejs.image")}`);
    console.log(`Docker port ${yamlConfig.get("services.nodejs.ports")}`);
    console.log(`Docker restart ${yamlConfig.get("services.nodejs.restart")}`);
}

storeMongoConfig();
readMongoConfig();

storePostresConfig();
readPostresConfig();

storeDockerConfig();
readDockerConfig();