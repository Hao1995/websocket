var socket = io.connect('http://localhost:3000');
var btn = document.querySelector("#btn1");
var img = document.getElementById("photo1");
var imgDB = ["https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg",
    "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg",
    "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"];
var imgIdx = 0;
socket.on('news', function (data) {
    console.log("Connected to Server !");
});
// socket.on("client2Change", function(imgIdx) {
//     img.src = imgDB[imgIdx];
//     console.log("Client img : "+ imgIdx);
// });
socket.on("client2Change", function (data) {
    imgIdx = data.imgIdx;
    img.src = imgDB[imgIdx];
    console.log("Client img : " + imgIdx);
});
