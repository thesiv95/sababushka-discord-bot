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
    const isDevMode = process.env.NODE_ENV === 'dev';
    const cmdsPath = isDevMode ? 'commands' : 'dist/commands';
    
    new WOKCommands(client, {
        // 1 file = 1 command
        commandsDir: path.join(__dirname, cmdsPath),
        // we use ts only in dev mode. otherwise cmds will not be registered
        typeScript: isDevMode,
        // ids are a single line separated with commas in env, here we need to convert it to array
        testServers: process.env.TEST_DISCORD_SERVERS_IDS!.split(','),
        // mongodb is used for wokcommands params, and for words as well
        mongoUri: process.env.MONGO,
    });
    

});


client.login(process.env.BOT_TOKEN);
