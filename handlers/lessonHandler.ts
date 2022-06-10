import { CommandsEnum } from '../enums/commands.enum';
import logger from '../utils/logger';
import * as Http from '../utils/http';

const lessonHandler = async (args: string[]) => {
    try {
        let query: URLSearchParams | null;
        
        if (args.length !== 0) {
            let urlSearchParams = {};
            if (args[0]) urlSearchParams = { index: args[0] };
            if (args[1]) urlSearchParams = { title: args[1] };

            query = new URLSearchParams(urlSearchParams);
        } else {
            query = null;
        }
        
        const apiResponse = await Http.doAPIRequest(CommandsEnum.youtube, query);

        // If empty array (nothing was found)
        if (apiResponse.length === 0) return 'Такого номера еще нет';
 
        if (!query) {
            return `
                Последний опубликованный ролик
                Внимание, ссылка доступна только участникам клуба!
                #${apiResponse.index}: ${apiResponse.title}
                ${apiResponse.url}
            `
        }

        const msgArray = apiResponse.map((el: any) => `
            #${el.index}: ${el.title}
            ${el.url}
        `);

        return `
            Внимание, ссылки доступны только участникам клуба!
            ${msgArray}
        `;

    } catch (error) {
        logger.error(error);
        return `Произошла ошибка: ${error}`;
    }
}

export default lessonHandler;