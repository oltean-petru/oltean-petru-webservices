import skillsService from "../services/skillsService.js"

const exposeController = {

  allSkills: async (req, res) => {
    const allSkills = await skillsService.findAllSkills()
    return res.json(allSkills)
  },

  createSkill: async (req, res) => {
    const { body } = req
    try {
      const newSkill = await skillsService.createSkill(body)
      return res.json(newSkill)
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}

export default exposeController;