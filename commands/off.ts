import { ICommand } from 'wokcommands';
import { ReminderToggleEnum } from '../enums/reminder-toggle.enum';
import remindersHandler from '../handlers/remindersHandler';

export default {
    category: 'Reminder Controls',
    description: 'Отключить напоминалку',
    slash: 'both',
    callback: ({ user }) => remindersHandler(ReminderToggleEnum.OFF, user.id, user.username),
} as ICommand