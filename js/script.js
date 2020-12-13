$(function(){
  $('.menu-button > a').on("click", function(e){
    e.preventDefault();
    $('.sp-menu').slideToggle();
  });
});
