import axios, { AxiosResponse } from 'axios';
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

export const cronsInit = async () => {
    logger.info('Cron: init');
    nodeSchedule.scheduleJob(process.env.CRON_TIME!, async () => {
        try {
            // Check which users are active via endpoint
            const url = `${process.env.SERVER_URL!}/reminders/activeUsers`
            const response = await axios.get(url, {
                headers: { 'x-api-key': process.env.API_KEY! }
            }) as AxiosResponse;

            const data = await response.data.data;

            if (response.status === 200 && data.length === 0) {
                return logger.warn(`Cron: status is 200 but no data found/no active users`);
            }

            const users = data.map((user: { userId: string; }) => user.userId);

            const day = new Date().getDay();
            const message = getActivity(day);
            const msgEvents = [];
            for (let i = 0; i <= users.length - 1; i++) {
                msgEvents.push(axios.post(process.env.CRON_WEBHOOK_URL!, {
                    "content": `<@${users[i]}> ${message}`
                }));
            }
            await Promise.all(msgEvents);
        } catch (error) {
            logger.error(`Cron init error ${error}`)
        }
    });
};
