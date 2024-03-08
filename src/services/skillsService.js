import Skills from '../models/skills.js';

const exposeServices = {
  findOneSkillByName: async ({ name }) => {
    try {
      const findSkill = await Skills.findOne({ name });
      return findSkill;
    } catch (error) {
      throw error;
    }
  },

  findAllSkills: async () => {
    try {
      const allSkills = await Skills.find();
      return allSkills;
    } catch (error) {
      throw error;
    }
  },

  createSkill: async (rawData) => {
    try {
      const toSave = new Skills(rawData);
      const newSkill = toSave.save();
      return newSkill;
    } catch (error) {
      throw error;
    }
  },
};

export default exposeServices;