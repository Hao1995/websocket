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
    socket.emit('news', { hello:"test"});
    socket.on('make2change', function (data) {
        //bordcast to everyone
        //傳遞的資料永遠會在data底下
        console.log("----------make2change------------");
        console.log("Data.idx = " + data.idx);
        console.log("Data.img = " + data.img_idx);
        io.sockets.emit("client2Change",{img_idx:data.img_idx, idx:data.idx});
        // console.log("imgIdx : "+data.imgIdx);
    });
    socket.on('make1change', function (data) {
        console.log("----------make1change------------");
        console.log("Data.idx = " + data.idx);
        console.log("Data.img = " + data.img_idx);
        io.sockets.emit("client1Change",{img_idx:data.img_idx, idx:data.idx});
    });
});

http.listen(port, function () {
    console.log("Server Started!!!");
})