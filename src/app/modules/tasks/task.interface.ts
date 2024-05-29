import { Types } from "mongoose";

type TaskStatus = 'completed' | 'pending';

export type TaskType = {
    project: Types.ObjectId;
    title: string;
    description?: string;
    dueDate?: String;
    priority: 'low' | 'medium' | 'high';
    status: TaskStatus;
}
