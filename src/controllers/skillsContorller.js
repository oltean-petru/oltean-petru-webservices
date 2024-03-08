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
  },

  updateSkill: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      const updatedSkill = await skillsService.updateSkill(id, body)
      return res.json(updatedSkill)
    } catch (error) {
      return res.sendStatus(400)
    }
  },

  deleteSkill: async (req, res) => {
    const { id } = req.params
    try {
      const deletedSkill = await skillsService.deleteSkill(id)
      return res.json(deletedSkill)
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}

export default exposeController;