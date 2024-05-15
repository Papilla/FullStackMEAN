export default class Url {
    constructor(
        protocol,
        username,
        password,
        hostname,
        port,
        pathname,
        search,
        hash,
    ) {
        this.protocol = protocol;
        this.username = username;
        this.password = password;
        this.hostname = hostname;
        this.port = port;
        this.pathname = pathname;
        this.search = search;
        this.hash = hash;

        this.validate();
    }

    validate() {
        if (!this.protocol || !this.hostname) {
            throw new Error('El protocolo y el hostname son requeridos');
        }
    }

    toString() {
        let url = "";
        url += `${this.protocol}://`;

        if (this.username && this.password) {
            url += `${this.username}:${this.password}@`;
        }

        url += `${this.hostname}`;

        if (this.port) {
            url += `${this.port}`;
        }

        if (this.pathname) {
            url += `${this.pathname}`;
        }

        if (this.search) {
            url += `?${this.search}`;
        }

        if (this.hash) {
            url += `#${this.hash}`;
        }

        return url;
    }
}