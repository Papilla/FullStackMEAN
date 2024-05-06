import os from 'node:os';

export const ARCH = os.arch();
export function getArch() {
    console.log(`CPU Architecture: ${os.arch()}`)
}
export const getInfoCores = () => {
    console.log(`CORES info:`, os.cpus());
}

export class SystemInfo {
    getOSType() {
        console.log(`OS Type: ${os.type()}`);
    }
}