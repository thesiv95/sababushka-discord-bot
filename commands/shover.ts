import { ICommand } from 'wokcommands';
import shoversHandler from '../handlers/shoversHandler';

export default {
    category: 'Misc',
    description: 'Скороговорки на иврите',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => shoversHandler(args),
} as ICommand