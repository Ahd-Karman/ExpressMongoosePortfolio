/*

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var personSchema = new Schema({
  name: String,
  image: Buffer,
  skills: [{type: Schema.Types.ObjectId , ref:'Skills'}],
  services: [{type: Schema.Types.ObjectId , ref:'Services'}],
  experience:[{type: Schema.Types.ObjectId , ref:'Experience'}],
  previous_work:[{type: Schema.Types.ObjectId , ref:'Pre_works'}],
  
});

var skillsSchema = Schema({
  person : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : Array
});

var servicesSchema = Schema({
  person : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : String
});

var experienceSchema = Schema({
  person : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : String
});

var preWorksSchema = Schema({
  person : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : String
});

var Person  = mongoose.model('Person', personSchema);
var Skills = mongoose.model('Skills', skillsSchema);
var Services = mongoose.model('Services', servicesSchema);
var Experience = mongoose.model('Experience', experienceSchema);
var Pre_works = mongoose.model('Pre_works', preWorksSchema);

var me = new Person({ name: 'Ahd Karman' });

me.save(function (err) {
  if (err) return handleError(err);
});

/*Bob now exists, so lets create a story
var skills = new Skills({
  title: ["Leadership" , "Writing & Content creation" , " Documentation"],
  person: me._id    // assign the _id from our author Bob. This ID is created by default!
});

skills.save(function (err) {
    if (err) return handleError(err);
});*/

/*
for(var i= 0 ; i < skills.title.length ; i++) {
  console.log(me.skills.title[i]);
}
*/


/* To see the name result in Portfolio */

/*
console.log(me.name) ;
const express = require ("express");

const app = express();
app.set ("view engine" , "ejs") ;

app.listen("2000") ;
console.log("server started at port 2000 ... ") ;

app.use(express.static("views"));
app.use(express.static("views")) ;

app.get("/" , (req,res)=>{

    res.render("portfolio" ,{ name: me.name});
});

*/