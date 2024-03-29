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

  findAllProjectsByUser: async (userId) => {
    try {
      const allProjects = await Projects.find({ users: { $in: userId } });
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

  updateProject: async (id, rawData) => {
    try {
      const updatedProject = await Projects.findByIdAndUpdate(id, rawData, { new: true });
      return updatedProject;
    } catch (error) {
      throw error;
    }
  },

  deleteProject: async (id) => {
    try {
      const deletedProject = await Projects.findByIdAndDelete(id);
      return deletedProject;
    } catch (error) {
      throw error;
    }
  },
};

export default exposeServices;
