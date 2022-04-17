import { ICommand } from 'wokcommands';
import nsfwHandler from '../handlers/nsfwHandler';

export default {
    category: 'Misc',
    description: 'Слова на тему 18+ ;) Если не ввести слово в качестве параметра в команде, то будет показано случайное слово',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => nsfwHandler(args),
} as ICommand