const mongoose = require('mongoose');
const path = require("path");
const dotenv =require('dotenv').config({path:'../.env'});

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  fini: {type: Boolean, required:true}
});
mongoose.connect("mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_HOST+"/?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée !'+error));

module.exports = mongoose.model('Thing', thingSchema);

