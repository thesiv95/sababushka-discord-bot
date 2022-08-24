import { CmdArgsEnum } from "../enums/cmdArgs.enum";
import { CommandsEnum } from "../enums/commands.enum";
import getBinyanHelp from "../utils/getBinyanHelp";
import * as Http from '../utils/http';

const binyanHandler = async (args: string[]) => {
    
    if (args[0] === CmdArgsEnum.HELP) return getBinyanHelp();

    const query: URLSearchParams = new URLSearchParams({
        q: args[0]
    });

    const apiResponse = await Http.doAPIRequest(CommandsEnum.binyans, query);
    if (apiResponse.length === 0) return 'Бот ничего не нашел!';

    const response = apiResponse[0];
    const responseTimePresent = response.timePresent;
    const responseTimePast = response.timePast;

    const message = `
        **${response.ru}** [${response.translit}]
-----------------------------------------
Биньян: *${response.binyanType}*
Корень: ${response.root}
-----------------------------------------
Настоящее время:
${responseTimePresent.maleSingle}/${responseTimePresent.femaleSingle}/${responseTimePresent.malePlural}/${responseTimePresent.femalePlural}
-----------------------------------------
Прошедшее время:
я - ${responseTimePast.me}
ты (м) - ${responseTimePast.youMaleSingle}
ты (ж) - ${responseTimePast.youFemaleSingle}
он - ${responseTimePast.he}
она - ${responseTimePast.she}
мы - ${responseTimePast.we}
вы (м) - ${responseTimePast.youMalePlural}
вы (ж) - ${responseTimePast.youFemalePlural}
они (м) - ${responseTimePast.theyMalePlural}
они (ж) - ${responseTimePast.theyFemalePlural}
    `

    return message;
}

export default binyanHandler;