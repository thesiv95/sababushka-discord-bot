import { Request, Response, NextFunction } from 'express';
import Joke from './models/Joke';

const addToSababushka = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { type, code, he, translit, ru } = req.body;

        const bodyOK = type && code && he && translit && ru;

        if (req.body.length === 0 || !bodyOK) {
            return res.status(400).json({error: 'Not enough args'});
        }
    

        // type:
        // 1 - joke
        // 2 - dictatura
        if (type !== 1 && type !== 2) {
            return res.status(400).json({error: 'Type is incorrect (1, 2 only)'});
        }

        if (type === 1) await Joke.create({code, he, translit, ru});
        if (type === 2) return res.status(400).json({error: 'todo'});

        return res.status(201).json({ info: `Type ${type} added successfully` });
        
    } catch (error) {
        return next(res.status(400).json({ error: `add ${error}` }));   
    }

}

export default addToSababushka;