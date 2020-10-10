# Note-Keeper
## Description 
This application provides an easy method of taking notes. App retrieves note data from a JSON file and displays on dashboard unless removed. User is able to navigate to different routes which include the home html page, notes page, api JSON object data, and specified notes when requested by id. Path routes are listed below. 

* `/notes` - Notes page where user records note Title and not text.
* `*` - Will return the user to home page id no route is specified.
* `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON. Path also receives new notes saved an updated JSON stored data.

## Video Demonstration

### Saving Notes
<img src="public\assets\images\SaveNotes.gif" alt="gif of readme generator">

### API stored notes
<img src="public\assets\images\SavedJsonNote.gif" alt="gif of readme generator">

### Issues/Improvement Suggestions
Currently note taker will delete a note when user clicks on trash icon; however, note is not removed until user visits api/routs. Each note is given an id using the index of stored data future development will allow for unwanted notes to be removed. 

