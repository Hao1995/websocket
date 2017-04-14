var socket = io.connect('http://localhost:3000');
// io.connect("ws://localhost:3000");
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});