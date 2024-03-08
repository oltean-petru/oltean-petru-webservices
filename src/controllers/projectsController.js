import projectService from "../services/projectsService.js"

const projectController = {
  allProjects: async (req, res) => {
    const allProjects = await projectService.findAllProjects();
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