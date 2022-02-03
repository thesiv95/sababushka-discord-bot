require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_EMOJIS_AND_STICKERS"
    ]
});

const joke = `
להגיד לאדם בדיכאון להתעוד זה כמו להגיד לאדם עם אסטמה לנשום נורמלי

леагИд ле адАм бэ дикаОн леитодЭд, зэ кмо леагИд ле адАм им Астма линшОм нормАли

сказать человеку с депрессией приободриться, это как сказать человеку с астмой дышать нормально
`;

client.on('ready', () => {
    console.log(`logged: ${client.user.tag}`);
});

client.on('message', (message) => {
    if (message.author.bot) return; // prevent accident msgs
    if (message.content === 'joke') {
        message.channel.send(joke);
    }
})


client.login(process.env.BOT_TOKEN);