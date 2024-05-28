import { z } from "zod";

const taskSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string().optional(),
    dueDate: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high']),
    status: z.enum(['completed', 'pending'])
})

export { taskSchema }