const mongoose = require('mongoose');
const path = require("path");
const dotenv =require('dotenv').config({path:'../.env'});

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  fini: {type: Boolean, required:true}
});
const user=process.env.DB_USER;
const pass=process.env.DB_PASSWORD;
const host=process.env.DB_HOST;
mongoose.connect("mongodb+srv://"+user+":"+pass+"@"+host+"/?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée !'+error));

module.exports = mongoose.model('Thing', thingSchema);

