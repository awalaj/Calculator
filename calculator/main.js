let input = document.querySelector("#input");
let btn = document.querySelectorAll("button")
$(document).ready(function(){
    $(".number").click(function(e){
        $(input).append($(e.target).text());
        if($(input).html().length >= 12){
            $('#warning').css({
                'visibility' : 'visible'
            });
            if($("#warning").css({'visibility' : 'visible'})){
                $("#warning").hover(function () {
                    $("span").css({
                        "visibility" : "visible",
                        "opacity" : "1"
                    })
                }, function(){
                    $("span").css({
                        "visibility" : "hidden",
                        "opacity" : "0"
                    })
                })
            }
            for(let i = 0; i < btn.length; i++){
                btn[i].disabled = true
                btn[1].disabled = false
            }
        }else{
            $('#warning').css({
                'visibility' : 'hidden'
            });
        }
    })
    $('#clearEntry').click(function(){
        $(input).html('');
    })
    $("#remove").click(function(){
        let ops = $(input).html();
        var remove = ops.replace(ops.slice(-1), "");
        $(input).html(remove);
        for(let i = 0; i < btn.length; i++){
            btn[i].disabled = false
            btn[1].disabled = false
        }
        if($(input).html().length <= 12){
            $('#warning').css({
                'visibility' : 'hidden'
            });
        }
    })
    $("#multiplication").click(function(){
        $(input).append("&times;");
    })
    $("#subtraction").click(function(){
        $(input).append("-");
    })
    $("#plus").click(function(){
        $(input).append("+")
    })
    $("#amount").click(function(){
        let operator = {
            "×" : "*"
        };
        let sort = input.innerHTML.replace(/×/gi, function(matched){
            return operator[matched];
        })
        try{
            $(input).html(eval(sort))
        }catch(err){
            alert(err.message);
        }
    })
})

