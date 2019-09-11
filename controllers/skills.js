const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    addSkill,
    new: newSkill,
    deleteSkill
    
}

function index(req,res){
    res.render('skills/index', {
      skills: Skill.getAll()
    });
}

function show(req,res){
    let id = req.params.id;
    //if you add /skills/show then it would basically be a double slash
    res.render('skills/show', {
        skill: Skill.getOne(id)
    });
}

function newSkill(req,res){
    res.render('skills/new');
}


function addSkill(req,res){
    //get Skill model - request body from the form, then issue a response
    Skill.create(req.body);
    ///skills is mounted first in the server so when we go to skills router and just find the index route the slash then redirect will send a 
    //request to the route and then eeventually to the controller where we are going to render out the skills index page
    res.redirect('/skills');
}

function deleteSkill(req,res){
    Skill.deleteOne(req.params.skill)
    res.redirect('/skills')
}

