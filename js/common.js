$(function(){
    //轮播初始化
    $('#Carousel').carousel({
        interval: 4000
    });
    //从左到右循环轮播项目。
    $('#Carousel').carousel('cycle');
    $('.navver .list-banner').mouseover(function(){
        $(this).find('.boxL').css('display','none');
        $(this).find('.boxF').css('display','none');
        $(this).find('.boxT').css('display','none');
        $(this).find('span').css('top','5px');
        $(this).css('color','#fff');
        var index = $(this).index();
        if(index == 0){
            $(this).css('background','#f3ac04');
        }
        else if(index == 1){
            $(this).css('background','#f53901');
        }
        else{
            $(this).css('background','#b2944a');
        }
        $(this).find('.list').css('display','block');
    })
    $('.navver .list-banner').mouseout(function(){
        $(this).css('background','#ebf2f8');
        $(this).find('.boxL').css('display','block');
        $(this).find('.boxF').css('display','block');
        $(this).find('.boxT').css('display','block');
        $(this).find('span').css('top','-15px');
        $(this).css('color','#93989c');
        $(this).find('.list').css('display','none');
    })
});