export class Invoker {
    constructor() {
        this.history = [];
    }

    run(cmd) {
        this.history.push(cmd);
        cmd.run();
        console.log(`Comando ejecutado: `, cmd.serialize());
    }

    delay(cmd, delay) {
        setTimeout(() => {
            console.log(`Comando ejecutado con delay: `, cmd.serialize());
            this.run(cmd);
        }, delay);
    }

    undo() {
        const cmd = this.history.pop();
        cmd.undo();
        console.log(`Comando deshecho, `, cmd.serialize());
    }
}