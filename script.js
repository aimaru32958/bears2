$(function(){

    $('#nextBtn').click(function(){
      $('#nextBtn').css('color','blue');
    });
  
    function slideBtnMove(){
      var slideIndex = $('.op1').index($('.opActive'));
      $('.slideBtn').show();
      if(slideIndex===0){
        $('.prevBtn').hide();
      }else if(slideIndex===4){
        $('.nextBtn').hide();
      }
    }

    $('.index-btn').click(function(){
      $('.opActive').removeClass('opActive');
      var indexNonber = $('.index-btn').index($(this));
      $('.op1').eq(indexNonber).addClass('opActive');

      slideBtnMove();

    });
    
    $('.slideBtn').click(function(){
      var $displaySlide = $('.opActive');
      $displaySlide.removeClass('opActive');
      if($(this).hasClass('nextBtn')){
        $displaySlide.next().addClass('opActive');
      }else{
        $displaySlide.prev().addClass('opActive');
      }
      
      slideBtnMove();

    });
    
    $('.Q').click(function(){
      var $answer = $(this).find('.answer');
      if($answer.hasClass('answer-show')){
        $answer.removeClass('answer-show');
        $answer.slideUp();
        $(this).find('span').text('＋');
      }else{
        $answer.addClass('answer-show');
        $answer.slideDown();
        $(this).find('span').text('－');
      }
    });
    
    $('.love-p').click(function(){
      $('.love-p').html('<p>ありがとうございます！</p><p>とても嬉しいです！</p><p>皆様も素敵な１日になりますように！</p>');
      $('.love-p').css('width','500px');
    });
    

    

});
