import { CommandsEnum } from '../enums/commands.enum';
import getRandomInt from '../utils/getRandomInt';
import logger from '../utils/logger';
import * as Http from '../utils/http';

const bituyHandler = async (args: string[]) => {
    try {
        // define if we should search by word
        const query = args.length !== 0 && args[0] ? `?q=${args[0]}` : null; 
        const apiResponse = await Http.doAPIRequest(CommandsEnum.bituys, query);
        let msg;

        if (query) {
            // If empty array (nothing was found)
            if (apiResponse.length === 0) return 'Бот ничего не нашел!';
            // Otherwise, create one big message from results
            const msgParts = apiResponse.map((item: any) => `
                ${item.he}
                ${item.translit}
                ${item.ru}
            `);

            return `
                https://sababushka.com/sayings
                ${msgParts.join('\n')}
            `;

        } else {
            // random word in case no query provided
            const index = getRandomInt(0, apiResponse.length - 1);

            msg = `
                https://sababushka.com/sayings
                ${apiResponse[index].he}
                ${apiResponse[index].translit}
                ${apiResponse[index].ru}
            `
        }

        return msg;
    } catch (error) {
        logger.error(error);
        return `Произошла ошибка: ${error}`;
    }
}

export default bituyHandler;