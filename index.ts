import dotenv from 'dotenv';
import { Client } from 'discord.js';
import jokes from './jokes';
import getRandomInt from './utils/getRandomInt';
import { CMD_PREFIX } from './utils/constants';
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
    if (message.author.bot) return;

    // If bot command starts with prefix
    if (message.content[0] === CMD_PREFIX && message.content === '!joke') {
        if (message.author.bot) return;
        const jokeIndex = getRandomInt(0, jokes.length);
        const joke = jokes[jokeIndex];
        await message.channel.send(joke)
    }
})


client.login(process.env.BOT_TOKEN);