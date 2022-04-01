import { ReminderToggleEnum } from "../enums/reminder-toggle.enum";
import { doApiReminderToggle } from "../utils/http";
import logger from "../utils/logger";

const remindersHandler = async (option: ReminderToggleEnum, userId: string) => {
    try {
        const isRequestDone = await doApiReminderToggle(option, userId);
        if (!isRequestDone) return 'Произошла ошибка на стороне сервера';
        const phrase = option === ReminderToggleEnum.ON ? 'включена' : 'выключена'

        return `Напоминалка ${phrase}!`
        
    } catch (error) {
        logger.error(error);
        return `Произошла ошибка: ${error}`;
    }
};

export default remindersHandler;