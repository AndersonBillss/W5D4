$('.navItem').each(function(){
    $(this).css ('color','white');
});

$('#nav').css('background-color','#135');
let i = 0
$('li').each(function(){
    if(i % 2 == 0){
        $(this).css ('background-color','#ccc');
    }
    else {
        $(this).css ('background-color','#aaa');
    };


    i++
});

$('input').val("Anderson")
