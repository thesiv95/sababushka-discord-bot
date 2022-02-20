import getRandomInt from '../utils/getRandomInt';
import Joke from '../models/Joke';
import { JokeType } from '../Types';

// todo wok integration...
const jokesHandler = async (message: any) => {
    try {
        const jokesLength = await Joke.countDocuments({});
        console.log('Jokes length = ' + jokesLength);

        if (jokesLength === 0) {
            await message.channel.send('No jokes :(');
            return;
        }

        // codes start from 1
        const jokeIndex = getRandomInt(1, jokesLength);
        const joke = await Joke.findOne({ code: jokeIndex }) as JokeType;

        const jokeStr = `
            https://www.instagram.com/explore/tags/цхоким/
            ${joke.he}
            ${joke.translit}
            ${joke.ru}
        `

        await message.channel.send(jokeStr);
        return;
    } catch (error) {
        const isProd = process.env.NODE_ENV!.startsWith('prod');
        await message.channel.send(`Произошла ошибка... ${isProd ? error : ''}`);
        return;
    }

};

export default jokesHandler;