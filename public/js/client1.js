// var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://safe-eyrie-36173.herokuapp.com');

var btn_1 = document.querySelector("#btn_1");
var btn_2 = document.querySelector("#btn_2");
var btn_3 = document.querySelector("#btn_3");
var btn_4 = document.querySelector("#btn_4");

var btnGroup = document.getElementById("btnGroup");
var btn = document.querySelectorAll(".btn");
var btn_010301 = document.getElementById("btn_010301");
var btn_010401 = document.getElementById("btn_010401");
var btn_030101 = document.getElementById("btn_030101");

var img = document.getElementById("photo1");
var imgDB_1 = 
    ["/image/1-1-1.jpg","/image/1-2-1.jpg","/image/1-3-1.jpg","/image/1-4-1.jpg","/image/1-5-1.jpg","/image/1-6-1.jpg"];
var imgDB_2 =
    ["/image/2-1-1.jpg","/image/2-2-1.jpg","/image/2-3-1.jpg"];
var imgDB_3 = 
    ["/image/3-1-1.jpg","/image/3-2-1.jpg"];
var imgDB_4 = 
    ["/image/4-1-1.jpg"];

btnSetting();

function btnSetting(){
    console.log("btnSetting ...");
    //Home Page Btn Setting
    btnGroup.style.width = img.width*0.423 + "px";
    btnGroup.style.height = img.height*0.488 + "px";
    btnGroup.style.top = img.height*0.372 + "px";
    console.log("img.width = " + img.width);
    console.log("img.height = " + img.height);
    console.log("btnGroup.style.width = " + btnGroup.style.width);
    console.log("btnGroup.style.height = " + btnGroup.style.height);
    for(var i = 0 ; i < btn.length ; i++){
        btn[i].style.marginBottom = img.height*0.014 + "px";
    }
    // btn_010301 Setting
    btn_010301.style.top = img.height*0.41 + "px";
    btn_010301.style.left = img.width*0.84 + "px";
    var temp010301 = 0.125;
    btn_010301.style.width = img.width*temp010301 + "px";
    btn_010301.style.height = img.width*temp010301*0.38 + "px";
    // btn_010401 Setting
    btn_010401.style.top = img.height*0.405 + "px";
    btn_010401.style.left = img.width*0.482 + "px";
    var temp010401 = 0.125;
    btn_010401.style.width = img.width*temp010401 + "px";
    btn_010401.style.height = img.width*temp010401*0.38 + "px";
    // btn_030101 Setting
    btn_030101.style.top = img.height*0.672 + "px";
    btn_030101.style.left = img.width*0.5787 + "px";
    btn_030101.style.width = img.width*0.2036 + "px";
    btn_030101.style.height = btn_030101.style.width;
}

//Loading Time
var delayTime = 1000;

socket.on('news', function (data) {
    console.log("Connected to Server !");
    console.log(data);
    console.log(data.hello);
});

socket.on("client1Change", function (data) {
    var idx = data.idx;
    var img_idx = data.img_idx;
    switch (img_idx) {
        case 1:
            btnMenu(img_idx,idx);
            img.src = imgDB_1[idx];
            if(idx == 0){
                setTimeout(function(){
                    img.src = imgDB_1[1];
                },delayTime);
            }else if(idx == 2){
                btn_010301.style.display = "block";
            }
            break;
        case 2:
            btnMenu(img_idx,idx);
            img.src = imgDB_2[idx];
            if(idx == 0){
                setTimeout(function(){
                    img.src = imgDB_2[1];
                },delayTime);
            }
            break;
        case 3:
            btnMenu(img_idx,idx);
            img.src = imgDB_3[idx];
            // console.log("idx = " + data.idx);
            // console.log("img_idx = " + data.img_idx);
            btn_030101.style.display = "block";
            break;
        case 4:
            img.src = imgDB_4[data.idx];
            break;
    }
});

btn_1.addEventListener("click",function(){
    var idx = 0;
    var img_idx = 1;
    btnMenu(img_idx,idx);
    img.src = imgDB_1[idx];
    setTimeout(function(){
        img.src = imgDB_1[idx+1];
        // console.log("Waiting ... img.src = " + img.src);   
    },delayTime);
});

btn_2.addEventListener("click",function(){
    var idx = 0;
    var img_idx = 2;
    btnMenu(img_idx,idx);
    img.src = imgDB_2[idx];
    setTimeout(function(){
        img.src = imgDB_2[idx+1];
    },delayTime);
});
btn_3.addEventListener("click",function(){
    var idx = 0;
    var img_idx = 3;
    btnMenu(img_idx,idx); //all btn disappear
    img.src = imgDB_3[idx];
    btn_030101.style.display = "block";
});
btn_4.addEventListener("click",function(){
    var idx = 0;
    var img_idx = 4;
    btnMenu(img_idx,idx);
    img.src = imgDB_4[idx];
});

btn_010301.addEventListener("click",function(){
    var idx = 3;
    var img_idx =1;

    img.src = imgDB_1[idx];
    disappear();
    btnMenu(img_idx,idx);
    btn_010401.style.display = "block";
});
btn_010401.addEventListener("click",function(){
    var idx = 4;
    var img_idx =1;

    img.src = imgDB_1[idx];
    disappear();
    btnMenu(img_idx,idx);
    setTimeout(function(){
        img.src = imgDB_1[idx+1];
    },delayTime);
});
btn_030101.addEventListener("click",function(){
    var idx = 1;
    var img_idx =3;

    img.src = imgDB_3[idx];
    btnMenu(img_idx,idx);
});


function btnMenu(img_idx,idx){
    // console.log("imgDB_1[idx] = "+ imgDB_1[idx]);
    // console.log("img.src = " + img.src);
    disappear();
    socket.emit('make2change',{idx:idx,img_idx:img_idx});
}
function disappear(){
    btn_010301.style.display = "none";
    btn_010401.style.display = "none";
    btn_030101.style.display = "none";
}
function sleep(ms) {
    var starttime = new Date().getTime();
    do {
    } while ((new Date().getTime() - starttime) < ms)
}

{/*<script src="https://safe-eyrie-36173.herokuapp.com/socket.io/socket.io.js"></script>*/}
{/*<img id="photo1" src="https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg" alt="">;*/}