var images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];

var resultPic = [
    "result.jpg",
    "sauce.jpg"
];

var playTime = 3;
var myTimeOut;

function go() {
    document.result.src = "white.png";
    var i = getRandomInt(4);
    var j = getRandomInt(4);
    var k = getRandomInt(4);
    document.pic1.src = images[i];
    document.pic2.src = images[j];
    document.pic3.src = images[k];
    myTimeOut = setTimeout("go()", 100);
}

function stop() {
    clearTimeout(myTimeOut);
    //updatePlayTime();
    congratulation();
}

function updatePlayTime() {
    --playTime;
    document.getElementById("playTime").innerHTML = "Play time: " + playTime;
    if (playTime < 1) {
        playTime = 0;
    }
}

function congratulation() {
    if (document.pic1.src === document.pic2.src && document.pic2.src === document.pic3.src) {
        document.result.src = resultPic[1];
    } else {
        document.result.src = resultPic[0];
    }
}
function getRandomInt(max) {
    return Math.floor(Math. random() * max);
}
