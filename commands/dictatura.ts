import { ICommand } from 'wokcommands';
import dictaturaHandler from '../handlers/dictaturaHandler';

export default {
    category: 'Misc',
    description: 'Показать ссылку на день диктатуры (то, с чем связана напоминалка)',
    slash: 'both',
    expectedArgs: '<type>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => dictaturaHandler(args),
} as ICommand