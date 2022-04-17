import { ICommand } from 'wokcommands';
import wordsHandler from '../handlers/wordsHandler';

export default {
    category: 'Misc',
    description: 'Слово недели на любую тему. Если не ввести слово в качестве параметра в команде, то будет показано случайное слово',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => wordsHandler(args),
} as ICommand