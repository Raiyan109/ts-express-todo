import { z } from "zod";
import { taskSchema } from "../tasks/task.validation";

const projectSchema = z.object({
    id: z.number(),
    name: z.string(),
    tasks: z.array(taskSchema).optional()
})

export { projectSchema }