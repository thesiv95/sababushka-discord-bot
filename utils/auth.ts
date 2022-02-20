import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import logger from './logger';
if (process.env.NODE_ENV === 'dev') dotenv.config();

const adminCheck = (req: Request, res: Response, next: NextFunction) => {
    try {
        const adminKey = process.env.ADMIN_KEY;
        const header = req.headers['x-api-key'];
        if (adminKey !== header) {
            logger.warning(`key ${header} is not correct`);
            return next(res.status(401).json({ error: 'Unauthorized'}));
        }

        logger.info('admin check passed');
        return next();


    } catch (error) {
        logger.error(`admin check error: ${error}`);
        return next(res.status(400).json({ error }));
    }
};

export default adminCheck;