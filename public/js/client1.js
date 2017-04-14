// var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://safe-eyrie-36173.herokuapp.com');
var btn = document.querySelector("#btn1");
var img = document.getElementById("photo1");
var imgDB = ["https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg", "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg", "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"];
var imgIdx = 0;

socket.on('news', function (data) {
    console.log("Connected to Server !");
    console.log(data);
    console.log(data.hello);
});
btn.addEventListener("click",function(){
    if(imgIdx>=2){
        imgIdx = 0;
    }else{
        imgIdx++;
    }
    console.log("Image : " + imgIdx);
    img.src = imgDB[imgIdx];
    socket.emit('change', {imgIdx });
});

function sleep(ms) {
    var starttime = new Date().getTime();
    do {
    } while ((new Date().getTime() - starttime) < ms)
}