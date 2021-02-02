const projectInfoRouter = require('express').Router();
const projectInfoService = require('../service/project-info');

projectInfoRouter.get('/allProjects', async (req, res) => {
  try {
    const body = await projectInfoService.getAllProjects();
    res.send(body);
  } catch (error) {
    res.status(500).send(error);
  }
});



projectInfoRouter.post('/newProject', async (req, res) => {
  try {
    console.log(req.body)
    const body = await projectInfoService.postNewProject(req.body);
    res.send(body);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = projectInfoRouter;
