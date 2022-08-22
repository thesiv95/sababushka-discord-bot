import { ICommand } from 'wokcommands';
import lessonHandler from '../handlers/lessonHandler';

export default {
    category: 'Misc',
    description: 'Найти урок по номеру/слову. Если параметров нет, то отобразится последний урок',
    slash: 'both',
    expectedArgs: '<password> <title>',
    minArgs: 1,
    maxArgs: 2,
    callback: ({ args }) => lessonHandler(args),
} as ICommand
