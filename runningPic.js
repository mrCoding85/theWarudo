var images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];

var myTimeOut;

function go() {
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
    congratulation();
}

function congratulation() {
    if (document.pic1.src === document.pic2.src && document.pic2.src === document.pic3.src) {
        alert("Damn bro, you won. The code is MIDV-037");
    }
}
function getRandomInt(max) {
    return Math.floor(Math. random() * max);
}
