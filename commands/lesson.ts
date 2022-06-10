import { ICommand } from 'wokcommands';
import lessonHandler from '../handlers/lessonHandler';

export default {
    category: 'Misc',
    description: 'Найти урок по номеру. Если параметров нет, то отобразится последний урок',
    slash: 'both',
    expectedArgs: '<index>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => lessonHandler(args),
} as ICommand