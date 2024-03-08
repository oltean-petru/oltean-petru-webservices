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
      // Normalize the skill name by removing spaces and converting to lower case
      const normalizedSkillName = rawData.name.replace(/\s/g, '').toLowerCase();

      // Find if a skill with the same name already exists
      const existingSkill = await Skills.findOne({
        name: new RegExp('^' + normalizedSkillName + '$', 'i')
      });

      if (existingSkill) {
        throw new Error('A skill with this name already exists');
      }

      const toSave = new Skills(rawData);
      const newSkill = toSave.save();
      return newSkill;
    } catch (error) {
      throw error;
    }
  },

  updateSkill: async (id, rawData) => {
    try {
      const updatedSkill = await Skills.findByIdAndUpdate(id, rawData, { new: true });
      return updatedSkill;
    } catch (error) {
      throw error;
    }
  },

  deleteSkill: async (id) => {
    try {
      const deletedSkill = await Skills.findByIdAndDelete(id);
      return deletedSkill;
    } catch (error) {
      throw error;
    }
  },
};

export default exposeServices;