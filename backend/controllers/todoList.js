const path = require("path");
const bdd = require('../models/bdd');


exports.insertElement=(req,res)=>{
  const thing = new bdd({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => {console.log(error);res.status(400).json({ error })});
};
exports.getAllElement=(req,res,)=>{
    bdd.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};
exports.deleteElement=(req,res)=>{
    bdd.deleteOne({ name: req.body.name })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.changeEtat=(req,res)=>{
  bdd.updateOne({ name: req.body.name }, { ...req.body, name: req.body.name })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};