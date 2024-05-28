import { z } from "zod";
import { taskSchema } from "../tasks/task.validation";

const projectSchema = z.object({
    id: z.string(),
    name: z.string(),
    tasks: z.array(taskSchema)
})

export { projectSchema }