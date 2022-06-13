import { ICommand } from 'wokcommands';
import lessonHandler from '../handlers/lessonHandler';

export default {
    category: 'Misc',
    description: 'Найти урок по номеру/слову. Если параметров нет, то отобразится последний урок',
    slash: 'both',
    expectedArgs: '<title>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => lessonHandler(args),
} as ICommand
