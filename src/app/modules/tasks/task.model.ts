import { Document, Schema, Types, model } from "mongoose";
import { TaskType } from "./task.interface";

// Extend the interface to include Mongoose document properties
interface TaskDocument extends Document, TaskType { }

const taskSchema = new Schema<TaskDocument>({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    dueDate: {
        type: Date,
        // required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high']
    },
    status: {
        type: String,
        enum: ['completed', 'pending']
    }
}, {
    timestamps: true
})

export const Task = model<TaskType>('Task', taskSchema)