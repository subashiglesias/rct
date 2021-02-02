const router = require('express').Router();


const projectInfo = require('./project-info');


router.use('/api', projectInfo);


module.exports = router;
