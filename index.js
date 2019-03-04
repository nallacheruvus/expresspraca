var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    res.send('This is an express web page welcome to express!');
});

app.get('/about', function (req, res) {
    res.send('This is about us web page!');
});

app.get('/sat/:name/:email', function (req, res) {
    var aa1 = req.params.name;
    var aa2 = req.params.email;
    res.send('The values entered are ' + aa1 + '&nbsp;&nbsp;' + aa2)
});

app.post('/sat2/:emails/:mobiles', function (req, res) {

    if (req.method === 'POST') {
        var a1 = req.params.emails;
        var a2 = req.params.mobiles;
        //res.send(req.method);
        res.send(a1 + ' ' + a2);
    }
    else {
        res.send('Not a valid request');
    }
});

class BankAccount {
    constructor(bname, bbranch) {
        this.bname = bname;
        this.bbranch = bbranch;
    }
}

app.post('/sat3', function (req, res) {
    var obj = new BankAccount('Bank Of New York', 'Chennai Central');
    var obj1 = new BankAccount('Bank Of Chicago', 'Banglore');
    var obj2 = new BankAccount('Bank Of Baroda', 'Ahmedabad');
    var obj3 = new BankAccount('Bank Of China', 'Delhi');
    var obj4 = new BankAccount('Bank Of Maldives', 'Surat');
    var arr = [obj, obj1, obj2, obj3, obj4];
    //var a = JSON.stringify(obj);
    //res.send(a);
    res.json(arr);
});


app.post('/test1', function (req, res) {
    res.send('This is post method');
});

app.put('/test2', function (req, res) {
    res.send('This is Put Method of the express');
});

app.delete('/test3', function (req, res) {
    res.send('This is the delete method of the express');
});

app.listen(3000);