// Your code here!
function myFunction(a,b) {

    return a+b;
}
function arrays() {
    var pens;
    /*pens = ["red", "orange", "green", "blue", "purple"];
    console.log(pens);
    var i;
    for (i = 0; i < pens.length; i++) {
        alert(pens[i]);  
    }
    alert("Length of array is : "+i);
    */
    pens = new Array("red", "orange", "green", "blue", "purple");
    //markers = pens;
    console.log(pens);
    console.log(pens[0]);
    var i;
    for (i = 0; i < pens.length; i++) {
        alert(pens[i]);
    }
    alert("Length of array is : " + i);
}