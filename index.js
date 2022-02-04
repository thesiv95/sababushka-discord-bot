require('dotenv').config();
const { Client } = require('discord.js');
const jokes = require('./jokes');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_EMOJIS_AND_STICKERS"
    ]
});


client.on('ready', () => {
    console.log(`logged: ${client.user.tag}`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;

    if (message.content === 'joke') {
        if (message.author.bot) return;
        const jokeIndex = getRandomInt(0, jokes.length);
        const joke = jokes[jokeIndex];
        await message.channel.send(joke)
    }
})


client.login(process.env.BOT_TOKEN);