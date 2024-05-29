import { Types } from "mongoose";
import { TaskType } from "../tasks/task.interface";

export type ProjectType = {
    id: number;
    name: string;
    tasks?: Types.ObjectId[];
}