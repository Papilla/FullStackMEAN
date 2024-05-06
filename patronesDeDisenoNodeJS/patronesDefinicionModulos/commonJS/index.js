require('./customLogger');
const logger = require('./logger');
const upperCase = require('./keysConvertion');
const Logger = require('./logger.class');
const dbLogger = require('./dbLogger');

const mensaje = 'mensaje genérico';

logger.info(mensaje);
logger.error(mensaje);
logger.debug(mensaje);
logger.info(upperCase(mensaje));
logger.customLog();

const apiLogger = new Logger('API');
apiLogger.info(mensaje);
apiLogger.error(mensaje);
apiLogger.debug(mensaje);
apiLogger.verbose(mensaje);

dbLogger.info(mensaje);
dbLogger.error(mensaje);
dbLogger.debug(mensaje);
dbLogger.verbose(mensaje);