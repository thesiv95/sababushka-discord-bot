import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Самый важный пункт',
    slash: 'both',
    callback: () => `
        Автор бота хоть родом из РФ, но сейчас полноценный израильтянин.
        Он категорически не поддерживает войну России против Украины (на момент добавления этой команды в бот она длится МЕСЯЦ!!!).
        Если ты, сейчас читающий эти строки, считаешь, что россияне освобождают украинцев от "нацистов", или что все не так однозначно, или что тебя это не касается - ты мудак.
        Информация о помощи Украине: https://supportukrainenow.org/
        Благотворительный перевод: https://www.comebackalive.in.ua/donate
        P.S. Русский военный корабль, лех ле зайн :)
        https://www.golosameriki.com/a/pentagon-confirms-moskva-cruiser-was-hit-by-ukrainian-missiles/6531356.html
    `
} as ICommand