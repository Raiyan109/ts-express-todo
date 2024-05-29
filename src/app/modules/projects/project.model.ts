import { Schema, Types, model } from "mongoose";
import { ProjectType } from "./project.interface";
import { Task } from "../tasks/task.model";

const projectSchema = new Schema<ProjectType>({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    tasks: [{
        type: Types.ObjectId,
        ref: 'Task' // Reference to the Task model
    }]
})

export const ProjectModel = model<ProjectType>('Project', projectSchema)