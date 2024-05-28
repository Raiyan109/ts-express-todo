import { Task } from "../tasks/task.interface";

export type Project = {
    id: string;
    name: string;
    tasks: Task[];
}