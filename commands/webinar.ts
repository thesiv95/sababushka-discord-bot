import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Ссылка на вебинар "Почему не идет иврит?"',
    slash: 'both',
    testOnly: true,
    callback: () => 'https://youtu.be/oGUQeO5DdYc'
} as ICommand