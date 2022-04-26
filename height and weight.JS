function calheight(){
    var height=parseInt(document.getElementById("H").value);
    let actualheight=height*0.01;
    document.getElementById("height").innerHTML=actualheight;
}
function calweight(){
    var weight=parseInt(document.getElementById("W").value);
    let actualweight=weight*0.453;
    document.getElementById("Weight").innerHTML=actualweight;
}