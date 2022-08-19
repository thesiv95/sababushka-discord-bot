import { ICommand } from 'wokcommands';
import { CmdArgsEnum } from '../enums/cmdArgs.enum';
import binyanHandler from '../handlers/binyanHandler';

export default {
    category: 'Misc',
    description: 'Биньян - некоторые глаголы со всеми склонениями по запросу. Для справки введите ' + CmdArgsEnum.HELP,
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 1,
    maxArgs: 1,
    callback: ({ args }) => binyanHandler(args),
} as ICommand