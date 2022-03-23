import { Client } from 'discord.js';
import axios from 'axios';
import nodeSchedule from 'node-schedule';
import logger from './utils/logger';
import { response } from 'express';

const discordWebhook = 'https://discord.com/api/webhooks/945244452711174194/6y42orAarcLI0Uuwn1dk-Oz7cyDYQvMtsWmCh4SRjDs1lb-G81pW5W_PebQi_EWPXkkW'

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
    nodeSchedule.scheduleJob('0 21 * * *', async () => {
        

        try {
            // Check which users are active via endpoint
            const response = await axios.get('http://localhost:900/reminders/activeUsers', {
                headers: { 'x-api-key': '1149c713-3a9e-4a13-9171-e250da21bd7e' }
            });

            const data = await response.data.data;

            const users = data.map((el: { userId: string; }) => el.userId);

            const day = new Date().getDay();
            const message = getActivity(day);
            for (let i = 0; i < users.length - 1; i++) {
                await axios.post('https://discord.com/api/webhooks/945244452711174194/6y42orAarcLI0Uuwn1dk-Oz7cyDYQvMtsWmCh4SRjDs1lb-G81pW5W_PebQi_EWPXkkW', {
                    "content": `<@${users[0]}> ${message}`,
                    "allowed_mentions": {
                        "users": [users[0]]
                  }
                });
            }
        } catch (error) {
            console.log(error);
        }
    });
};
