import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['PENDING', 'IN-PROGESS', 'COMPLETED'], default: 'PENDING' },

});

export default model('Task', TaskSchema);