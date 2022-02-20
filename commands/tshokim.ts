import { ICommand } from 'wokcommands';

export default {
    category: 'Misc',
    description: 'Случайная шутка из раздела #цхоким',
    slash: 'both',
    // testOnly: true,
    callback: () => 'tshokim'
} as ICommand