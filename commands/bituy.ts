import { ICommand } from 'wokcommands';
import bituyHandler from '../handlers/bituyHandler';

export default {
    category: 'Misc',
    description: 'Пословицы и поговорки на иврите',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => bituyHandler(args),
} as ICommand
