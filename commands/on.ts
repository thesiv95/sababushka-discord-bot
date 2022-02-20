import { ICommand } from 'wokcommands';

export default {
    category: 'Reminder Controls',
    description: 'Включить напоминалку',
    slash: 'both',
    testOnly: true,
    callback: () => 'on'
} as ICommand