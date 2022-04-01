import { ICommand } from 'wokcommands';
import tshokimHandler from '../handlers/tshokimHandler';

export default {
    category: 'Misc',
    description: 'Случайная шутка из раздела #цхоким',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => tshokimHandler(args),
} as ICommand