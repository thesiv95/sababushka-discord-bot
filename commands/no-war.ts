import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Самый важный пункт!',
    slash: 'both',
    callback: () => `
        Информация о помощи Израилю: https://t.me/goldenberg_g/4612
        Информация о помощи Украине: https://supportukrainenow.org
        ХРЕН ВОЙНАМ!
        Слава Україні!
        עם ישראל חי!
    `
} as ICommand
