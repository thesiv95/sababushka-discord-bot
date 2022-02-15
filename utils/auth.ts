import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
if (process.env.NODE_ENV === 'dev') dotenv.config();

const adminCheck = (req: Request, res: Response, next: NextFunction) => {
    try {
        const adminKey = process.env.ADMIN_KEY;
        const header = req.headers['x-api-key'];
        if (adminKey !== header) {
            console.log(`key ${header} is not correct`);
            return next(res.status(401).json({ error: 'Unauthorized'}));
        }

        console.log('admin check passed');
        return next();


    } catch (error) {
        return next(res.status(400).json({ error }));
    }
};

export default adminCheck;