class Database {
    constructor(dbName, connectionDataBase) {}
}

export const dbConnection = new Database('mongoDB', {
    url: '123.456.789:5434',
    username: 'admin',
    password: 'pwd',
});

global.dbConnection = new Database('mongoDB', {
    url: '123.456.789:5434',
    username: 'admin',
    password: 'pwd',
});