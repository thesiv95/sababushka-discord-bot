import getRandomInt from '../utils/getRandomInt';
import jokes from './jokes';

const jokesHandler = async (message: any) => {
    const jokeIndex = getRandomInt(0, jokes.length);
    const joke = jokes[jokeIndex];
    return await message.channel.send(joke);
};

export default jokesHandler;