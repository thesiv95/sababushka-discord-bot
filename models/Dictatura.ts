import { model, Schema } from 'mongoose';

const actionSchema = new Schema({
    code: 'number',
    body: 'string'
})

const dictaturaSchema = new Schema({
    code: 'number',
    header: 'string',
    actions: [actionSchema] // description
});

const Dictatura = model('dictaturas', dictaturaSchema);

export default Dictatura;