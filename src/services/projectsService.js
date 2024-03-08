import Projects from '../models/Projects.js';

const exposeServices = {

  findOneProjectByName: async ({ name }) => {
    try {
      const findProject = await Projects.findOne({ name });
      return findProject;
    } catch (error) {
      throw error;
    }
  },

  findAllProjects: async () => {
    try {
      const allProjects = await Projects.find();
      return allProjects;
    } catch (error) {
      throw error;
    }
  },

  fintAllProjectsByUserId: async (userId) => {
    try {
      const allProjects = await Projects.find({ userId });
      return allProjects;
    } catch (error) {
      throw error;
    }
  },

  createProject: async (rawData) => {
    try {
      const toSave = new Projects(rawData);
      const newProject = toSave.save();
      return newProject;
    } catch (error) {
      throw error;
    }
  },
};

export default exposeServices;
