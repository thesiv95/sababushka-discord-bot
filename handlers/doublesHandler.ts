import { CommandsEnum } from '../enums/commands.enum';
import getRandomInt from '../utils/getRandomInt';
import logger from '../utils/logger';
import * as Http from '../utils/http';

const doublesHandler = async (args: string[]) => {
    try {
        // define if we should search by word
        let query: URLSearchParams | null;
        
        if (args.length !== 0) {
            query = new URLSearchParams({
                q: args[0]
            })
        } else {
            query = null;
        }
        
        const apiResponse = await Http.doAPIRequest(CommandsEnum.x2, query);
        let msg;
        // If empty array (nothing was found)
        if (apiResponse.length === 0) return 'Бот ничего не нашел!';

        if (query) {
            // Otherwise, create one big message from results
            const msgParts = apiResponse.map((item: any) => `
${item.ru}
${item.single}
**${item.double}**
            `);

            return `
                ${msgParts.join('\n')}
            `;

        } else {
            // random word in case no query provided
            const index = getRandomInt(0, apiResponse.length - 1);

            msg = `
${apiResponse[index].ru}
${apiResponse[index].single}
**${apiResponse[index].double}**
            `
        }

        return msg;
    } catch (error) {
        logger.error(error);
        return `Произошла ошибка: ${error}`;
    }
}

export default doublesHandler;