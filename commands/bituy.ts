import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Случайная поговорка на иврите',
    slash: 'both',
    testOnly: true,
    callback: () => 'bituy'
} as ICommand