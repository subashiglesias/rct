const Models = require('../models');

const getAllProjects = async() => {

  const projects = await Models.projects
    .find({})
    .exec();

  return projects;
};

const postNewProject = async (body) => {
  try {
    // Will enable check when new endpoint for update is created
    // const checkDuplicateName = await Models.projects.findOne({ name: body.name }).exec();
    // if (checkDuplicateName)
    // return { values : [], error: 'Duplicate project name exists. Please enter a unique project name' }

    const asset = new Models.projects(body);
    try {
      await asset.save();
      return { values : await Models.projects.find({}).exec(), error: ''};
    } catch (e) {
      return { status: `error: ${e}` };
    }
  } catch (e) {
    console.log( "Error while saving project: ", e );
  }
};



module.exports = {
  getAllProjects,
  postNewProject,
};
