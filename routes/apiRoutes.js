// noteData links to data json file
const noteData = require("../db/db");

module.exports = function (app) {

  // This code will display all notes saved to db.json file
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });


  // This code will retrieve new note and post to data file
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    noteData.push(newNote);
    res.json(noteData);
    console.log("New note: " + newNote.title)
  });


};
