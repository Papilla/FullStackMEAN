class Logger {
    constructor(nombre) {
        this.nombre = nombre;
    }

    info(mensaje) {
        console.info(`[INFO] - ${this.nombre}: ${mensaje}`);
    }

    error(mensaje) {
        console.error(`[ERROR] - ${this.nombre}: ${mensaje}`);
    }

    debug(mensaje) {
        console.debug(`[DEBUG] - ${this.nombre}: ${mensaje}`);
    }

    verbose(mensaje) {
        console.log(`[VERBOSE] - ${this.nombre}: ${mensaje}`);
    }
}

module.exports = Logger;