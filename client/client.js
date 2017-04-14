var socket = io.connect('http://localhost:3000');
socket.emit('my other event', { my: 'data' });
socket.on('news', function (data) {
    var img = document.getElementById("photo1");
    console.log("Client : "+ data);
    // socket.emit('my other event', { my: 'data' });
});