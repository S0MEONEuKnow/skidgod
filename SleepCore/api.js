const express = require("express")
const app = express()
const fs = require('fs');
var currentcheck = 1

app.get("/", (req, res) => {
    res.send("Why are you here, skid ?")
})
app.use(require('body-parser').urlencoded({ extended: false }));
app.post('*', (req, res) => {
var reqbody = req.body
fs.writeFile(reqbody.jobid, JSON.stringify({ name: reqbody.cmd, data: reqbody.data, checkid: currentcheck}))
});
fs.writeFile("blahblahblah","hahahakjsqkfqslsf")
app.listen(3000)
