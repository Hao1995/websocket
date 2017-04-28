// var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://safe-eyrie-36173.herokuapp.com');

var btn = document.querySelector("#btn1");
var btn_010202 = document.getElementById("btn_010202");
var btn_010302 = document.getElementById("btn_010302");
var btn_010602 = document.getElementById("btn_010602");
var btn_020202 = document.getElementById("btn_020202");
var btn_020302 = document.getElementById("btn_020302");
var btn_040102 = document.getElementById("btn_040102");


var img = document.getElementById("photo1");
var imgDB_1 =
    ["/image/1-1-2.jpg", "/image/1-2-2.jpg", "/image/1-3-2.jpg", "/image/1-4-2.jpg", "/image/1-5-2.jpg", "/image/1-6-2.jpg"];
var imgDB_2 =
    ["/image/2-1-2.jpg", "/image/2-2-2.jpg", "/image/2-3-2.jpg"];
var imgDB_3 =
    ["/image/3-1-2.jpg", "/image/3-2-2.jpg"];
var imgDB_4 =
    ["/image/4-1-2.jpg"];

setTimeout(function(){
    btnSetting();
},500);

function btnSetting(){
    // btn_010202 Setting
    btn_010202.style.top = img.height*0.604 + "px";
    btn_010202.style.left = img.width*0.039 + "px";
    btn_010202.style.width = img.width*0.202 + "px";
    btn_010202.style.height = btn_010202.style.width;
    // btn_010402 Setting
    btn_010402.style.top = img.height*0.87 + "px";
    btn_010402.style.left = img.width*0.838 + "px";
    var temp010402 = 0.125;
    btn_010402.style.width = img.width*temp010402 + "px";
    btn_010402.style.height = img.width*temp010402*0.39 + "px";
    // btn_010602 Setting
    btn_010602.style.top = img.height*0.818 + "px";
    btn_010602.style.left = img.width*0.852 + "px";
    var temp010602 = 0.125;
    btn_010602.style.width = img.width*temp010602 + "px";
    btn_010602.style.height = img.width*temp010602*0.39 + "px";
    // btn_020202 Setting
    btn_020202.style.top = img.height*0.604 + "px";
    btn_020202.style.left = img.width*0.039 + "px";
    btn_020202.style.width = img.width*0.202 + "px";
    btn_020202.style.height = btn_020202.style.width;
    // btn_020302 Setting
    btn_020302.style.top = img.height*0.858 + "px";
    btn_020302.style.left = img.width*0.85 + "px";
    var temp020302 = 0.125;
    btn_020302.style.width = img.width*temp020302 + "px";
    btn_020302.style.height = img.width*temp020302*0.39 + "px";
    // btn_040102 Setting
    btn_040102.style.top = img.height*0.285 + "px";
    btn_040102.style.left = img.width*0.012 + "px";
    btn_040102.style.width = img.width*0.275 + "px";
    btn_040102.style.height = btn_040102.style.width;
}


//Loading Time
var delayTime = 1000;

socket.on('news', function (data) {
    console.log("Connected to Server !");
});

socket.on("client2Change", function (data) {
    var img_idx =  data.img_idx;
    var idx = data.idx;
    disappear();
    switch (img_idx) {
        case 1:
            img.src = imgDB_1[idx];
            if(idx == 0|| idx == 4){
                setTimeout(function(){
                    img.src = imgDB_1[idx+1];
                    console.log("Waiting ... idx = " +(idx+1));
                    if(idx == 0){
                        btn_010202.style.display = "block";
                    }else if(idx == 4){
                        btn_010602.style.display = "block";
                    }
                },delayTime);
            }else if(idx == 3){
                btn_010402.style.display = "block";
            }
            break;
        case 2:
            img.src = imgDB_2[idx];
            if(idx == 0){
                setTimeout(function(){
                    img.src = imgDB_2[idx+1];
                    btn_020202.style.display = "block";
                },delayTime);
            }else if(idx == 2){
                btn_020302.style.display = "block";
            }
            break;
        case 3:
            img.src = imgDB_3[idx];
            break;
        case 4:
            img.src = imgDB_4[idx];
            btn_040102.style.display = "block";
            break;
    }
});

// 1th
btn_010202.addEventListener("click",function(){
    idx = 2;
    img_idx = 1;
    socket.emit('make1change',{idx:idx,img_idx:img_idx});
});
btn_010402.addEventListener("click",function(){
    idx = 0;
    img_idx = 1;
    socket.emit('make1change',{idx:idx,img_idx:img_idx});
});
btn_010602.addEventListener("click",function(){
    idx = 2;
    img_idx = 1;
    socket.emit('make1change',{idx:idx,img_idx:img_idx});
});
// 2th
btn_020202.addEventListener("click",function(){
    idx = 2;
    img_idx = 2;
    socket.emit('make1change',{idx:idx,img_idx:img_idx});
});
btn_020302.addEventListener("click",function(){
    idx = 0;
    img_idx = 2;
    socket.emit('make1change',{idx:idx,img_idx:img_idx});
});
// 4th
btn_040102.addEventListener("click",function(){
    idx = 0;
    img_idx = 3;
    socket.emit('make1change',{idx:idx,img_idx:img_idx});
});

function disappear(){
    btn_010202.style.display = "none";
    btn_010402.style.display = "none";
    btn_010602.style.display = "none";
    btn_020202.style.display = "none";
    btn_020302.style.display = "none";
    btn_040102.style.display = "none";
}

function sleep(ms) {
    var starttime = new Date().getTime();
    do {
    } while ((new Date().getTime() - starttime) < ms)
}