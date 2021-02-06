const path = require("path");

module.exports = (app) => {
// HTML GET Requests

//return from notes.html
    app.get("/notes", function (_req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
//return from index.html
    app.get("*", (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};