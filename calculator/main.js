let results = document.querySelector(".results");

$(document).ready(function(){
    $('.container').click(function (e) { 
        if($(e.target).attr('class') == 'number'){
            $(results).append($(e.target).text());
            if($(results).html().length >= 13){
                $('#warning').css({
                    'visibility' : 'visible'
                });
                $(results).css({
                    'overflowX' : "scroll"
                });
            }else{
                $('#warning').css({
                    'visibility' : 'hidden'
                });
            }
        }
        switch($(e.target).attr('id')){
            case 'clearEntry':
                $(results).html('');
                break;
            case 'remove':
                let ops = $(results).html();
                var remove = ops.replace(ops.slice(-1), "");
                $(results).html(remove);
                if($(results).html().length <= 13){
                    $('#warning').css({
                        'visibility' : 'hidden'
                    });
                }
                break;
            case 'multiplication':
                $(results).append('&times;');
                break;
            case 'subtraction':
                $(results).append('-');
                break;
            case 'plus':
                $(results).append('+');
                break;
            case 'amount':
                let operator = {
                    "×" : "*"
                }
                let sort = results.innerHTML.replace(/×/gi, function(matched){
                    return operator[matched]
                })
                try{
                    $(results).html(eval(sort));
                }catch(err){
                    alert(err.message)
                }
                break;
        }
    });
})
