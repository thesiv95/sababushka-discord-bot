import { ICommand } from 'wokcommands';
import wordsHandler from '../handlers/wordsHandler';

export default {
    category: 'Misc',
    description: 'Случайное слово недели',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => wordsHandler(args),
} as ICommand