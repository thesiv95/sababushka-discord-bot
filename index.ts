import dotenv from 'dotenv';
import { Client } from 'discord.js';
import jokesHandler from './handlers/jokesHandler';
import { CMD_PREFIX, CMD_JOKES } from './utils/constants';
dotenv.config();

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_EMOJIS_AND_STICKERS"
    ]
});


client.on('ready', () => {
    console.log(`logged: ${client.user!.tag}`);
});

client.on('messageCreate', async (message) => {

    // this is not a command
    if (message.content[0] !== CMD_PREFIX) return;

    if (message.author.bot) return;

    if (message.content === CMD_JOKES) await jokesHandler(message);
})


client.login(process.env.BOT_TOKEN);