type TaskStatus = 'completed' | 'pending';

export type Task = {
    id: number;
    title: string;
    description?: string;
    dueDate?: Date;
    priority: 'low' | 'medium' | 'high';
    status: TaskStatus;
}
