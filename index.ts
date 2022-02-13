import dotenv from 'dotenv';
import express from 'express';
import { Client } from 'discord.js';
import jokesHandler from './handlers/jokesHandler';
import dictaturasHandler from './handlers/dictaturasHandler';
import { CMD_PREFIX, CMD_JOKES, CMD_DICTATURA } from './utils/constants';
import adminCheck from './utils/auth';
import addToSababushka from './addToSababushka';
import dbConnection from './utils/dbConnection';
dotenv.config();



const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_EMOJIS_AND_STICKERS"
    ]
});


// HTTP route for adding info
const app = express();
app.use(express.json());

app.post('/addToSababushka', adminCheck, addToSababushka);

const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => console.log(`server started @ ${SERVER_PORT}`));


// Discord bot init
client.on('ready', async () => {
    console.log(`logged: ${client.user!.tag}`);
    
    console.log(`mongo` + process.env.MONGO_URL)
    await dbConnection();
});

client.on('messageCreate', async (message) => {
    

    // this is not a command
    if (message.content[0] !== CMD_PREFIX) return;

    console.log(message.author)
    if (message.author.bot) return;

    if (message.content === CMD_JOKES) await jokesHandler(message);
    if (message.content === CMD_DICTATURA) await dictaturasHandler(message);
})



client.login(process.env.BOT_TOKEN);
