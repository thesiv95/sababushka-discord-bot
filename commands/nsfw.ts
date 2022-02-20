import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Слова на тему 18+ ;)',
    slash: 'both',
    testOnly: true,
    callback: () => 'nsfw'
} as ICommand