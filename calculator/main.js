let results = document.querySelector(".results");

function number(e){
    results.innerHTML += e.innerHTML;
    if(results.innerHTML.length >= 13){
        document.getElementsByTagName("i")[0].style.visibility = "visible"
        results.style.overflowX = "scroll";
    }
    if(results.innerHTML.length <= 13){
        document.getElementsByTagName("i")[0].style.visibility = "hidden"
    }
}
function Clear(){
    results.innerHTML = "";
}
function remove(){
    let num = results.innerHTML;
    var remove = num.replace(num.slice(-1), "");
    results.innerHTML = remove;
    if(results.innerHTML.length <= 13){
        document.getElementsByTagName("i")[0].style.visibility = "hidden"
    }
}
function division(e){
    results.innerHTML += e.innerHTML;
}
function multiplication(e){
    results.innerHTML += "&times;";
}
function subtraction(){
    results.innerHTML += "-";
};
function plus(){
    results.innerHTML += "+";
}
function amount(){
    let operator = {
        "×" : "*"
    }
    let sort = results.innerHTML.replace(/×/gi, function(matched){
        return operator[matched]
    })
    try{
        results.innerHTML = eval(sort);
    }catch(err){
        alert(err.message)
    }
}