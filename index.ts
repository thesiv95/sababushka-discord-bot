import path from 'path';
import dotenv from 'dotenv';
import WOKCommands from 'wokcommands';
import { Client } from 'discord.js';
import { cronsInit } from './crons';
import logger from './utils/logger';
if (process.env.NODE_ENV === 'dev'){
    logger.warn('dev mode');
}
dotenv.config();

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.BOT_TOKEN', process.env.BOT_TOKEN);
console.log('process.env.MONGO', process.env.MONGO);
console.log('process.env.API_KEY', process.env.API_KEY);
console.log('process.env.SERVER_URL', process.env.SERVER_URL);
console.log('process.env.CRON_WEBHOOK_URL', process.env.CRON_WEBHOOK_URL);
console.log('process.env.CRON_TIME', process.env.CRON_TIME);



const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

// Discord bot init
client.on('ready', async () => {
    logger.info(`logged: ${client.user!.tag}`);
    await cronsInit();
    
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['938850851810865264'],
        mongoUri: process.env.MONGO,
    });
    

});


client.login(process.env.BOT_TOKEN);
