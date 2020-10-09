const noteData = require("../db/db");

module.exports = function (app) {
    // This code will display all notes saved to db.json file
    app.get("/api/notes", (req, res) => {
      res.json(noteData);
    });
  
    app.post("/api/notes", (req, res) => {
        console.log(req.body);
      
        noteData.push(req.body);
        res.json(noteData);
       
    });
  
    
  };
  