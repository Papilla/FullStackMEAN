import { Timer } from "./sessionHandler.js";

const createTimer = (timerLabel) => new Timer(timerLabel);

export default createTimer;