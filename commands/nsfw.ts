import axios from 'axios';
import { config } from 'dotenv';
import { ICommand } from 'wokcommands';
import getRandomInt from '../utils/getRandomInt';
import logger from '../utils/logger';

if (process.env.NODE_ENV!.startsWith('dev')) config();

const nsfwHandler = async (args: string[]) => {

    try {
        // define if we should search by word
        const query = args.length !== 0 && args[0] ? `/${args[0]}` : null; 

        const response = await axios.get(
            `${process.env.SERVER_URL}/nsfws/search${query ? query : ''}`,
            {
                headers: { 'x-api-key': process.env.API_KEY!.toString() }
            }
        );
        const data = await response.data.data;
        let msg;

        if (query) {
            // If empty array (nothing was found)
            if (data.length === 0) return 'Бот ничего не нашел!';
            // Otherwise, create one big message from results
            const msgParts = data.map((item: any) => `
                ${item.he}
                ${item.translit}
                ${item.ru}
            `);

            return `
                https://sababushka.com/sex
                ${msgParts.join('\n')}
            `;

        } else {
            // random word in case no query provided
            const index = getRandomInt(0, data.length - 1);

            msg = `
                https://sababushka.com/sex
                ${data[index].he}
                ${data[index].translit}
                ${data[index].ru}
            `

        }

        return msg;
    } catch (error) {
        logger.error(error);
        return `Произошла ошибка: ${error}`;
    }
}

export default {
    category: 'Misc',
    description: 'Слова на тему 18+ ;) Если не ввести параметры поиска, будет показано случайное слово',
    slash: 'both',
    // testOnly: true,
    callback: ({ args }) => nsfwHandler(args)
} as ICommand