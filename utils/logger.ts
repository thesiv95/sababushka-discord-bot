import path from 'path';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const logPath = path.resolve(__dirname, '..', 'logs', 'app.log');
const logErrPath = path.resolve(__dirname, '..', 'logs', 'errors.log');

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp.slice(0, -5).replace('T', ' ')} [${level}] ${message}`;
  });
  
  const logger = createLogger({
    format: combine(
      timestamp(),
      myFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: logErrPath, level: 'error' }),
        new transports.File({ filename: logPath }),
    ]
  });



export default logger;