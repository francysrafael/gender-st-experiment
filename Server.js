var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var uuid = require('uuid');
const baseURL = '/francys';


app.use(express.static("webapp"));

app.get('/pre(/:respId)?', function (req, res) {
    var respId = req.params.respId;
    if (respId != undefined) {
        respId = respId.replace(/\s/g,'');
    }
    if (respId == undefined || respId == '' || !respId) {
        respId = uuid.v1();
    }
    res.redirect('https://form.jotform.com/211267880856667?respId='+respId);
});

app.get('/pos(/:respId)?', function (req, res) {
    var respId = req.params.respId;
    if (respId != undefined) {
        respId = respId.replace(/\s/g,'');
        if (respId != '' && respId) {
            res.redirect('https://form.jotform.com/211267678195668?respId='+respId);
        } else {
            console.log('Empty respId');
            res.redirect(baseURL+'/pre');
        }
    } else {
        console.log('Missing :respId in /pos/:respId');
        res.redirect(baseURL+'/pre');
    }
});

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/save-response/:respId', function(req, res, next) {
    var respId = req.params.respId;
    if (respId == undefined || respId.replace(/\s/g,'') == '' || !respId) {
        console.log('Missing '+baseURL+'/save-response/:respId');
        res.redirect(baseURL+'/pre');
    }
    
    // data to be saved (participant's response)
    var row = [respId, req.body.stType, req.body.startTime, req.body.endTime, req.body.activityPoints];
    row = row.join(",");
    fs.stat('responses.csv', function (err, stat) {
        if (err == null) {
            // write the actual data and end with newline
            fs.appendFile('responses.csv', "\n"+row, function (err) {
                if (err) throw err;
                console.log('The response was saved!');
            });
        } else {
            // write the headers and newline
            console.log('First answer, adding headers');
            var headers = ["respId","stType","startTime","endTime","points"].join(",") + "\n" + row
            fs.writeFile('responses.csv', headers, function (err) {
                if (err) throw err;
                console.log('Response saved!');
            });
        }
    });
    res.end();
});

app.listen(8092, 'localhost');
console.log("This project is listening on port 8092");
