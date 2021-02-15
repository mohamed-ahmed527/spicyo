import $ from "../../node_modules/jquery/dist/jquery.min";
$(document).ready(function(){
$("header >img:last-of-type").click(function(){
    /***************header****************************/
  var width = parseInt($(this).parent().find('ul li').css('width') );
  var max_width = width * 1 ;
  if( parseInt($(this).parent().find('ul').css('right')) < max_width) {
    $(this).parent().find('ul').animate({
      right:'+='+width
    });
  }else{
    $(this).parent().find('ul').animate({
      right:'0'
    });
  }
});

$("header >img:first-of-type").click(function(){
  var width = parseInt($(this).parent().find('ul li').css('width') );
  var max_width = width * 1 ;
  if( parseInt($(this).parent().find('ul').css('right')) > 0) {
    $(this).parent().find('ul').animate({
      right:'-='+width
    });
  }else{
    $(this).parent().find('ul').animate({
      right:max_width
    });
  }
});
  /*********timing***********/
/*
  setInterval(function(){  
  var width = parseInt($('header').find('ul li').css('width')); //Integer
  var max_width = width * 1;
  if(parseInt($('header').find('ul').css('right')) < max_width){
     $('header').find('ul').animate({
     right:'+='+width
  });            
  }else{
     $('header').find('ul').animate({
      right:'0'                                
  });        
}
},5000);
*/
/**************************slider********************/
$(".slider >img:first-of-type").click(function(){
var width = parseInt($(this).parent().find('ul li').css('width')) ;
var max_width = width * 5 ;
if( parseInt($(this).parent().find('ul').css('right')) < max_width){
  $(this).parent().find('ul').animate({
    right:'+='+width
  });
  }
else{
  $(this).parent().find('ul').animate({
    right:'0'
  });
}
});
$(".slider >img:last-of-type").click(function(){
  var width = parseInt($(this).parent().find('ul li').css('width')) ;
  var max_width = width * 5 ;
  if( parseInt($(this).parent().find('ul').css('right')) > 0){
    $(this).parent().find('ul').animate({
      right:'-='+width
    });
  }
  else{
    $(this).parent().find('ul').animate({
      right:max_width
    })
  }
});
 /***********timing***********/

 setInterval(function(){
  var width = parseInt($(".slider").find('ul li').css('width')); //Integer
  var max_width = width * 5;
  if(parseInt($(".slider").find('ul').css('right')) < max_width){
     $(".slider").find('ul').animate({
     right:'+='+width
  });            
  }else{
     $(".slider").find('ul').animate({
      right:'0'                                
  });        
}
},4000);

/***************menu******/
$(".menu").click(function(){
  $(this).parent().find("nav .rightnav ").slideToggle();
});

});