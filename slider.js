var images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];
var num = 0;
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    slider.height = 110;
    slider.width = 210;
}
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
    slider.height = 110;
    slider.width = 210;
}
