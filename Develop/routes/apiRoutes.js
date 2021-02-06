
//path package 
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const dbJson = require("../db/db.json");

//routing
module.exports = (app) => {

    app.get('/api/notes', (req,res) =>{  
      fs.readFile("./Develop/db/db.json","utf8",(err,data) => {
if (err) throw err;
res.send(data);
console.log(data);


      });
    });
  
  let po =  [];
    app.post("/api/notes", (req, res) => {
      let newpo = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4() //Will add unique ID to each new note
      };
      fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let parData = JSON.parse(data);
        noteArray = parData;
        noteArray.push(newpo);

        fs.writeFile("./Develop/db/db.json", JSON.stringify(noteArray, null, 2), (err) => {
          if (err) throw err;
          console.log("Notes saved");
          res.json(dbJson); //sends content as JSON
      });
    });
  });
};
