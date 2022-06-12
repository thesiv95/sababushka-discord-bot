import { ICommand } from 'wokcommands';
import lessonHandler from '../handlers/lessonHandler';

export default {
    category: 'Misc',
    description: 'Найти урок по ключевым словам. Если параметров нет, то отобразится последний урок',
    slash: 'both',
    expectedArgs: '<query>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => lessonHandler(args),
} as ICommand
