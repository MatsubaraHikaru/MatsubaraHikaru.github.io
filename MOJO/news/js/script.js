// js-NEWS
$(function(){
  console.log('getStarted');

  $('#dateNav li').on('click',function(){
    console.log('click');
    $('#dateNav li').removeClass('current');
    $(this).addClass('current');

    var indexNum = $('#dateNav li').index(this);
    console.log(indexNum);
    $('#articles article').removeClass('current');
    $('#articles article').eq(indexNum).addClass('current');
  });


});
