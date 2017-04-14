var app = require('express')(),
    http = require("http").Server(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("TEST");
});
// test
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

http.listen(port, function () {
    console.log("Server Started!!!");
})