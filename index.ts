import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import WOKCommands from 'wokcommands';
import { Client } from 'discord.js';
import { cronsInit } from './crons';
import logger from './utils/logger';
import adminCheck from './utils/auth';
import addToSababushka from './addToSababushka';
if (process.env.NODE_ENV === 'dev'){
    logger.warn('dev mode');
    dotenv.config();
}


const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});


// HTTP route for adding info
const app = express();
app.use(express.json());

app.post('/addToSababushka', adminCheck, addToSababushka);

const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => logger.info(`HTTP server started @ ${SERVER_PORT}`));


// Discord bot init
client.on('ready', () => {
    logger.info(`logged: ${client.user!.tag}`);
    
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['938850851810865264'],
        mongoUri: process.env.MONGO,
    })
    

    cronsInit(client);
});


client.login(process.env.BOT_TOKEN);
