import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Случайное слово недели',
    slash: 'both',
    // testOnly: true,
    callback: () => 'word'
} as ICommand