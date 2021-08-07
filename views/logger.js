import pkg from 'winston';
const { createLogger, format, transports } = pkg;
const { combine, timestamp, label, prettyPrint } = format;
import { existsSync, mkdirSync } from 'fs';
import 'winston-daily-rotate-file';

if (!existsSync('views/logs')) {
    mkdirSync('views/logs');
}
var transportsLogger = [];

transportsLogger.push(
    new transports.DailyRotateFile({
        level: 'info',
        datePattern: 'YYYY-MM-DD',
        filename: 'views/logs/%DATE%.log',
        handleExceptions: true,
        json: true,
        maxSize: '1g',
        maxFiles: '3d'
    })
);

// transportsLogger.push(
//     new transports.DailyRotateFile({
//         level: 'error',
//         datePattern: 'YYYY-MM-DD',
//         filename: `public/logs/userError-%DATE%.log`,
//         handleExceptions: true,
//         json: true,
//         maxSize: '1g',
//         maxFiles: '1d'
//     })
// );

var logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: transportsLogger,
    exitOnError: false
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};

export default logger;

