import projectService from "../services/projectsService.js"
import QueryBuilder from "../utils/querryBuilder.js";
import Project from "../models/Projects.js";

const projectController = {
  allProjects: async (req, res) => {
    const builder = new QueryBuilder(Project);
    if (req.query.userId) {
      builder.filterByField('userId', req.query.userId);
    }
    if (req.query.sortBy) {
      builder.sortByField(req.query.sortBy);
    }
    if (req.query.fields) {
      builder.limitFields(req.query.fields);
    }
    if (req.query.page && req.query.limit) {
      builder.paginate(req.query.page, req.query.limit);
    }
    const allProjects = await builder.execute();
    return res.json(allProjects);
  },

  allProjectsByUser: async (req, res) => {
    const { id } = req.params;
    const allProjectsByUser = await projectService.findAllProjectsByUser(id);
    return res.json(allProjectsByUser);
  },

  createProject: async (req, res) => {
    const { body } = req;
    try {
      const newProject = await projectService.createProject(body);
      return res.json(newProject);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
};

export default projectController;