import Dictatura from "../models/Dictatura";
import { DictaturaType } from "../Types";
import getRandomInt from "../utils/getRandomInt";

const dictaturasHandler = async (message: any) => {
    try {
        const dictaturasLength = await Dictatura.countDocuments({});
        console.log(`Dictaturas length = ${dictaturasLength}`)
        if (dictaturasLength === 0) {
            await message.channel.send('No dictatura records :(');
        }

        // codes start from 1
        const dictaturaIndex = getRandomInt(1, dictaturasLength);
        const dictatura = await Dictatura.findOne({ code: dictaturaIndex }) as DictaturaType;
        const actionCode = getRandomInt(1, 5);


        const dictaturaStr = `
        #диктатура  
        ${dictatura.header}
        ${dictatura.actions[actionCode].body}
    `

        return await message.channel.send(dictaturaStr);
    } catch (error) {
        return await message.channel.send(`error: ${error}`);
    }


}

export default dictaturasHandler;