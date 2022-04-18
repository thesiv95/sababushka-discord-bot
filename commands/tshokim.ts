import { ICommand } from 'wokcommands';
import tshokimHandler from '../handlers/tshokimHandler';

export default {
    category: 'Misc',
    description: 'Современный бытовой юмор израильтян из раздела #цхоким',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => tshokimHandler(args),
} as ICommand
