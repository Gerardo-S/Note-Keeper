const path = require("path");

module.exports = function (app) {
  // Below code handles when users navigate to a page. (e.g. follow a link or
  // enter a url in the address bar) The client receives an HTML document to
  // show the user as a response for each of these routes.
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

   // If no matching route is found default to the home page.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
