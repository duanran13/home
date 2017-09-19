$(function(){
    //轮播初始化
    $('#Carousel').carousel({
        interval: 4000
    });
    //从左到右循环轮播项目。
    $('#Carousel').carousel('cycle');
    $('.navver li').mouseover(function(){
        $(this).find('i').css('display','none');
        $(this).find('span').css('top','0');
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
    })
    $('.navver li').mouseout(function(){
        $(this).find('i').css('display','inline');
        $(this).css('background','#ebf2f8');
        $(this).find('span').css('top','-15px');
        $(this).css('color','#93989c');
    })
});