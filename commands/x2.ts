import { ICommand } from 'wokcommands';
import doublesHandler from '../handlers/doublesHandler';

export default {
    category: 'Misc',
    description: 'Слова, обозначающие количество 2 (-Аим)',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => doublesHandler(args),
} as ICommand