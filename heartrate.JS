function calculateBPM(){
    var pulse=parseInt(document.getElementById("jk").value);
    let BPM=pulse*6;
    document.getElementById("BPM").innerHTML=BPM;
}