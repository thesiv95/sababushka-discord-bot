import getRandomInt from '../utils/getRandomInt';
import Joke from '../models/Joke';
import { JokeType } from '../Types';

const jokesHandler = async (message: any) => {
    try {
        const jokesLength = await Joke.countDocuments({});
        console.log('Jokes length = ' + jokesLength);

        if (jokesLength === 0) {
            return await message.channel.send('No jokes :(');
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

        return await message.channel.send(jokeStr);
    } catch (error) {
        return await message.channel.send(`error: ${error}`)
    }

};

export default jokesHandler;