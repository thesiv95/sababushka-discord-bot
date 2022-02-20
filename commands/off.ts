import { ICommand } from 'wokcommands';

export default {
    category: 'Reminder Controls',
    description: 'Отключить напоминалку',
    slash: 'both',
    testOnly: true,
    callback: () => 'off'
} as ICommand