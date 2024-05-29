import mongoose from "mongoose";
import { z } from "zod";

const taskSchema = z.object({
    project: z.string().refine((val) => {
        return mongoose.Types.ObjectId.isValid(val)
    }),
    title: z.string(),
    description: z.string().optional(),
    dueDate: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high']),
    status: z.enum(['completed', 'pending'])
})

export { taskSchema }