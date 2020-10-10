// noteData links to data json file
const noteData = require("../db/db");
const fs = require("fs");

module.exports = function (app) {

  // Api  notes route established and data presented in jSON format
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });


  // This code will retrieve new note and post to data file
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    // newNote.id =noteData.indexOf(newNote);
    // console.log(newNote.id);
    // console.log("newNote data " + newNote.id);
    noteData.push(newNote);
    res.json(noteData);
    // console.log(noteData.indexOf(newNote));
    let index = noteData.indexOf(newNote);
    newNote.id = JSON.stringify(index + 1);
    console.log(newNote.id);
    console.log("New note: " + newNote.title)
  });


  // Established route to specified note by id 
  app.get("/api/notes/:id", function(req,res){
    const id = req.params.id;
    console.log(id);
    res.json(noteData[id])
  });

  
  // Delete note
  app.delete("/api/notes/:id", function (req,res) {
    noteData.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id " + req.params.id);

  })

  function updateDb(){
    // Updates JSON text 
    fs.writeFile("db/db.json", JSON.stringify(noteData), err =>{
      if (err) {
        // stop execution if there is an error
        console.log(err)
        return console.log(err);
      }
      return true;
    })
  };
  
};
