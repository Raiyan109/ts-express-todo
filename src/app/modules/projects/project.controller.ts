import { Request, Response } from "express";
import { projectSchema } from "./project.validation";
import { ProjectServices } from "./project.service";

const createProject = async (req: Request, res: Response) => {
    try {
        const zodParsedData = projectSchema.parse(req.body);
        const result = await ProjectServices.createProjectIntoDB(zodParsedData)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        })
    }
}

export const ProjectController = {
    createProject
}