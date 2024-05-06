import os from 'node:os';

export default class OS {
    constructor(nombre) {
        this.nombre = nombre;
    }

    getUpTime() {
        console.log(`[${this.nombre}] - UPTIME: ${os.uptime()}`)
    }

    getKernelVersion() {
        console.log(`[${this.nombre}] - VERSION: ${os.version()}`)
    }

    getTotalMemory() {
        console.log(`[${this.nombre}] - MEMORY: ${os.totalmem()}`)
    }
}

export const ARCH = os.arch();