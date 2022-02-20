import { Client } from 'discord.js';
import nodeSchedule from 'node-schedule';
import logger from './utils/logger';

const phraseTemplate = (activity: string) => {
    return `Привет! Я понимаю, что ты очень устал, но пожалуйста, удели 5 минут ${activity}, ты мне еще спасибо скажешь! ;)`;
}

const getActivity = (day: number) => {
    if (day === 0) return phraseTemplate('письму');
    if (day === 1) return phraseTemplate('словарному запасу');
    if (day === 2) return phraseTemplate('аудированию');
    if (day === 3) return 'Пожалуйста, приди на сегодняшний разговорный клуб!';
    if (day === 4) return phraseTemplate('чтению');
    if (day === 5) return phraseTemplate('произношению');
    return 'Сегодня выходной! Отдыхай! :)'
}

export const cronsInit = (client: Client) => {
    // каждый день с вс по пт в 20 часов
    logger.info('Cron: init');
    nodeSchedule.scheduleJob('0 20 * * 0-5', function(){
        const day = new Date().getDay();
        const message = getActivity(day);
        
    });
};
