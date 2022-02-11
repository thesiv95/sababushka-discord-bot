import { model, Schema } from 'mongoose';

const jokeSchema = new Schema({
    code: 'number',
    he: 'string',
    translit: 'string',
    ru: 'string',
});

const Joke = model('jokes', jokeSchema);

export default Joke;