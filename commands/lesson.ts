import { ICommand } from 'wokcommands';
import lessonHandler from '../handlers/lessonHandler';

export default {
    category: 'Misc',
<<<<<<< HEAD
    description: 'Найти урок по номеру/слову. Если параметров нет, то отобразится последний урок',
=======
    description: 'Найти урок по ключевым словам. Если параметров нет, то отобразится последний урок',
>>>>>>> 819c90e3d21d2e21ea6c4853b79aaa0697b7b480
    slash: 'both',
    expectedArgs: '<title>',
    minArgs: 0,
    maxArgs: 1,
    callback: ({ args }) => lessonHandler(args),
} as ICommand
