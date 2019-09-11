const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills')

//Get all skills
//skills on the left maps to the skills.ejs the skills on the right side of the colon maps to the skills 
//constant that we've mapped above
//if the skills on the left is already mapped to the skillse.sjs then you dont' have to defined the right side so it would jsut be skills
//Get one skill
router.get('/', skillsController.index );
//add a new skill
router.get('/new', skillsController.new)
//this router is already mounted ot the /skills path
router.get('/:id', skillsController.show);
router.post('/', skillsController.addSkill)
// router.post('/', skillsController.create);
// router.put('/:id', skillsController.update);
router.delete('/:id', skillsController.deleteSkill);
module.exports = router;
  