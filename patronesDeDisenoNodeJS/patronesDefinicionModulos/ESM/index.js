import * as osModule from "./os.js";
osModule.getArch();
osModule.getInfoCores();

const systemInfo = new osModule.SystemInfo();
systemInfo.getOSType();

import { ARCH, getArch, getInfoCores, SystemInfo } from "./os.js";
console.log(ARCH);
getArch();
getInfoCores();
new SystemInfo().getOSType();

import { ARCH as ARCHITECTURE } from "./os.js";
console.log(`Arquitectura del sistema: ${ARCHITECTURE}`);

import OSInfo, { ARCH as arch } from "./os.class.js";
const osInfo = new OSInfo('Nombre');
osInfo.getUpTime();
osInfo.getKernelVersion();
osInfo.getTotalMemory();
console.log(`Arquitectura del sistema: ${arch}`);