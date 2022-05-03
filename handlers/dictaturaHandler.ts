import { DictaturaDescEnum } from "../enums/dictatura-desc.enum";
import logger from "../utils/logger";

const getDictaturaCommandDescription = () => `
    Ссылки на телеграм работают только для участников клуба!
    ${DictaturaDescEnum.write} = день письма
    ${DictaturaDescEnum.words} = день словарного запаса
    ${DictaturaDescEnum.listen} = день восприятия на слух
    ${DictaturaDescEnum.speak} = день языкового барьера
    ${DictaturaDescEnum.read} = день чтения
    ${DictaturaDescEnum.pronounce} = день произношения
`;

const getDictaturaTelegramLink = (key: DictaturaDescEnum) => {
    switch (key) {
        case DictaturaDescEnum.write:
            return 'https://t.me/c/1507462472/861';
        case DictaturaDescEnum.words:
            return 'https://t.me/c/1507462472/866';
        case DictaturaDescEnum.listen:
            return 'https://t.me/c/1507462472/878';
        case DictaturaDescEnum.speak:
            return 'https://t.me/c/1507462472/884';
        case DictaturaDescEnum.read:
            return 'https://t.me/c/1507462472/889';
        case DictaturaDescEnum.pronounce:
            return 'https://t.me/c/1507462472/894';
        default:
            return 'Параметр введен неверно!';
    }
}

const dictaturaHandler = async (args: string[]) => {
    try {
        const key = args[0] as DictaturaDescEnum;
        logger.info(`Dictatura handler key: ${key ? key : '(no key)'}`);
        if (!key) return getDictaturaCommandDescription();

        return `
            Ссылка на телеграм работает только для участников клуба!
            ${getDictaturaTelegramLink(key)}
        `;        
    } catch (error) {
        logger.error(error);
        return `Произошла ошибка: ${error}`;
    }
};

export default dictaturaHandler;