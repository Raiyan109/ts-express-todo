import { ProjectType } from "./project.interface";
import { ProjectModel } from "./project.model";

const createProjectIntoDB = async (project: ProjectType) => {
    const result = await ProjectModel.create(project)
    return result
}

export const ProjectServices = {
    createProjectIntoDB
}