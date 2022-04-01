import { ICommand } from 'wokcommands';
import { ReminderToggleEnum } from '../enums/reminder-toggle.enum';
import remindersHandler from '../handlers/remindersHandler';

export default {
    category: 'Reminder Controls',
    description: 'Включить напоминалку',
    slash: 'both',
    callback: ({ user }) => remindersHandler(ReminderToggleEnum.ON, user.id),
} as ICommand