import { ICommand } from 'wokcommands';
import nsfwHandler from '../handlers/nsfwHandler';

export default {
    category: 'Misc',
    description: 'Слова на тему 18+ ;) Если не ввести параметры поиска, будет показано случайное слово',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => nsfwHandler(args),
} as ICommand