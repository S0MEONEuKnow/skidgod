const express = require("express")
const app = express()
const fs = require('fs');

app.get("/", (req, res) => {
    res.send("Why are you here, skid ?")
})
app.use(require('body-parser').urlencoded({ extended: false }));
app.post('*', (req, res) => {
  req.body;
  res.json(req.body);
});

app.listen(3000)
