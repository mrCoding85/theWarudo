function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
            alert("fuiyohhh");
            return true;
        }
    }
    alert("The value should be equal and not blank!");
    return false;
}