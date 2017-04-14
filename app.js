var express = require('express'),
    app = express(),
    http = require("http").Server(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname +"/public"));

app.get('/client1', function (req, res) {
    res.render("client1.ejs");
});
app.get('/client2', function (req, res) {
    res.render("client2.ejs");
});

io.on('connection', function (socket) {
    // var i = 1;
    socket.emit('news', { hello:"test"});
    socket.on('change', function (data) {
        //bordcast to everyone
        //傳遞的資料永遠會在data底下
        io.sockets.emit("client2Change",{imgIdx:data.imgIdx});
        console.log("imgIdx : "+data.imgIdx);
    });
});

http.listen(port, function () {
    console.log("Server Started!!!");
})