const Models = require('../models');

const getAllProjects = async() => {

  const projects = await Models.projects
    .find({})
    .exec();

  return projects;
};




const postNewProject = async (body) => {
  try {
    console.log(body)
    const asset = new Models.projects(body);
    try {
      await asset.save();
      return { status : 'success'};
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
