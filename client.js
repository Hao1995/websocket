var socket = io.connect('https://safe-eyrie-36173.herokuapp.com');
// io.connect("ws://localhost:3000");
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});