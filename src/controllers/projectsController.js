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

  threeRecentProjects: async (req, res) => {
    try {
      const projects = await Project.find().sort({ createdAt: -1 }).limit(3);
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createProject: async (req, res) => {
    const { body } = req;
    try {
      const newProject = await projectService.createProject(body);
      return res.json(newProject);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  updateProject: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedProject = await projectService.updateProject(id, body);
      return res.json(updatedProject);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  deleteProject: async (req, res) => {
    const { id } = req.params;
    try {
      await projectService.deleteProject(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(400);
    }
  },
};

export default projectController;