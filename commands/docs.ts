import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Ссылка на таблицы для новых слов',
    slash: 'both',
    callback: () => 'https://drive.google.com/drive/folders/1FGoemsRhoj_PErHkZG1XXWhCFkcCOItU?usp=sharing'
} as ICommand