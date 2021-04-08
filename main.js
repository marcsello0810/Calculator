function add(item){
    document.getElementById("resultth").innerText += item;
    
}
function solve(){
    let data = document.getElementById("resultth").innerText;
    let result = eval(data);
    document.getElementById("resultth").innerText = result;
}
function clearresult(){
    document.getElementById("resultth").innerText = "";
}