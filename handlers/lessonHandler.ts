import { CommandsEnum } from '../enums/commands.enum';
import logger from '../utils/logger';
import * as Http from '../utils/http';

const lessonHandler = async (args: string[]) => {
    try {
        let query: URLSearchParams | null;
        
        if (args.length !== 0) {

            // password argument is mandatory
            if (args[0] !== process.env.LESSON_ROUTE_PASS) {
                logger.warn('attempt to enter incorrect lesson pass: ' + args[0])
                return 'Нужен пароль - его может получить только участник клуба. Пароль неверный';
            }

            let urlSearchParams = {};
            
            if (args[1]) {
                urlSearchParams = { title: args[1] };
                query = new URLSearchParams(urlSearchParams);
            } else { // if no lesson argument
                query = null; // send no query and get the latest lesson
            }

        } else {
            query = null;
        }
        
        const apiResponse = await Http.doAPIRequest(CommandsEnum.youtube, query);

        // If nothing was found
        if (!apiResponse || apiResponse.length === 0) return 'Урок не найден';
 
        if (!query) {
            return `
                Последний опубликованный ролик
                Внимание, ссылка доступна только участникам клуба!
                #${apiResponse.index}: ${apiResponse.title}
                ${apiResponse.url}
            `
        }

        logger.debug(JSON.stringify(apiResponse))

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