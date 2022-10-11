//$( document ).ready(function() {
/*
  //create results canvas
  var totalerrors = 0;
  $('main').after("<div class='resultscanvas'><h2>There are <span id='toterrs'></span> validation errors</h2><ul></ul></div>");
  $('.resultscanvas').hide();

  //images
  $('img').each(function(){
    counterror = 0;
    var imagerror = 0;
    var errorclass = 'er'+ Math.random().toString(36).substring(7);
    $(this).attr('id',errorclass).addClass('val-error');
    if (!$(this).attr("alt")){
      console.log('Alt tag missing');
      $('.resultscanvas').append('<li class="'+errorclass+'">ALT tag is missing</li><div>To understand why you need to add an AlT tag, <a target="_blank" href="https://www.w3.org/TR/WCAG20-TECHS/H37.html">click here</a></div>');
      var imagerror = 1;
      counterror++;
      totalerrors++;
      $('.resultscanvas').show();
      $(this).append('<li class="'+errorclass+'">ALT tag is missing</li><div><a target="_blank" href="https://www.w3.org/TR/WCAG20-TECHS/H37.html">Review</a></div>');
      if (!$(this).hasClass("a11y-error")) {
        $(this).addClass("a11y-error");
      }
    }
    if(!$(this).parent().attr('aria-label')) {
      var errorclass = 'er'+ Math.random().toString(36).substring(7);
      $(this).attr('id',errorclass).addClass('val-error');
      console.log('Image missing ARIA label (labelby)');
      $('.resultscanvas').append('<li class="'+errorclass+'">Image parent element is missing ARIA labelby</li><div><a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/act/rules/image-non-empty-accessible-name-23a2a8/">Review</a></div>');
      var imagerror = 1;
      counterror++;
      totalerrors++;
      $('.resultscanvas').show();
      $(this).append('<li class="'+errorclass+'">ALT tag is missing</li><div><a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/act/rules/image-non-empty-accessible-name-23a2a8/">Review</a></div>');
      if (!$(this).hasClass("a11y-error")) {
        $(this).addClass("a11y-error");
      }
    }
    if(!$(this).parent().attr('role')) {
      var errorclass = 'er'+ Math.random().toString(36).substring(7);
      $(this).attr('id',errorclass).addClass('val-error');
      console.log('Image role (type of image)');
      $('.resultscanvas').append('<li class="'+errorclass+'">Image parent element is missing ROLE label</li><div><a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/act/rules/image-non-empty-accessible-name-23a2a8/#semantic-role">Review</a></div>');
      var imagerror = 1;
      counterror++;
      totalerrors++;
      $('.resultscanvas').show();
      $(this).append('<li class="'+errorclass+'">ALT tag is missing</li><div><a target="_blank" href="https://www.w3.org/TR/WCAG20-TECHS/F65.html">Review</a></div>');
      if (!$(this).hasClass("a11y-error")) {
        $(this).addClass("a11y-error");
      }
    }
    //
    if(!$(this).parent().attr('aria-label')) {
      var errorclass = 'er'+ Math.random().toString(36).substring(7);
      console.log('ARIA label missing');
      $('.resultscanvas').append('<li class="'+errorclass+'">Image parent element is missing ROLE label</li><div><a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/act/rules/image-non-empty-accessible-name-23a2a8/">Review</a></div>');
      var imagerror = 1;
      counterror++;
      totalerrors++;
      $('.resultscanvas').show();
      $(this).append('<li class="'+errorclass+'">ALT tag is missing</li><div><a target="_blank" href="https://www.w3.org/TR/WCAG20-TECHS/F65.html">Review</a></div>');
      if (!$(this).hasClass("a11y-error")) {
        $(this).addClass("a11y-error");
          $(this).attr('id',errorclass).addClass('val-error');
      }
    }
    if (imagerror == 1){
      $(this).before('<div class="img-error error-heading">Errors: '+counterror+'</div></div>');
    }
  });
  $('input').each(function(){

    //var formerror = 0;
    counterror = 0;
    if(!$(this).attr('name')) {
      //var errorclass = 'er'+ Math.random().toString(36).substring(7);
      $(this).attr('id',errorclass).addClass('val-error');
      console.log('This input has no NAME');
      $('.resultscanvas').append('<li class="'+errorclass+'">This input has no NAME</li><div><a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/act/rules/form-field-non-empty-accessible-name-e086e5/">Review</a></div>');
      var formerror = 1;
      counterror++;
      totalerrors++;
      $(this).append('<li class="'+errorclass+'">ALT tag is missing</li><div><a target="_blank" href="">Review</a></div>');
      if (!$(this).hasClass("a11y-error")) {
        $(this).addClass("a11y-error");
      }
    } else {
      var name = $(this).attr('name');
      if ($('body').find($('label').attr('for',name))) {
      } else {
        var errorclass = 'er'+ Math.random().toString(36).substring(7);
        $(this).attr('id',errorclass).addClass('val-error');
        console.log('Label missing for input with name of "'+name+'"');
        $('.resultscanvas').append('<li class="'+errorclass+'">Label missing for input with name of "'+name+'"</li><div><a target="_blank" href="">Review</a></div>');
        //var formerror = 1;
        counterror++;
        totalerrors++;
        $(this).append('<li class="'+errorclass+'">ALT tag is missing</li><div><a target="_blank" href="">Review</a></div>');
        if (!$(this).hasClass("a11y-error")) {
          $(this).addClass("a11y-error");
        }
      }
    }
    if (formerror == 1){
      $(this).before('<div class="form-error error-heading">'+counterror+' errors<li class="'+errorclass+'"></li></div>');
    }
  });


  $('.erroritem p').hide();
  $('.clicktoshow').css("background-color", "red").css('width','20px').css('height','20px').css('margin-right','5px').css('cursor','pointer');
  $('.clicktoshow').click(function(){
    $(this).parent().find('p').show();
  });

  $('#toterrs').text(totalerrors).css('text-decoration','underline');

  //class
  $('.a11y-error').css('border','4px solid red').css('padding','5px');
  $('.error-heading').css(
      {
      "background": "red",
      "width": "14%",
      "padding": "4px",
      "color": "white",
      "text-align": "center"
    }
  );

  $('.resultscanvas').css({
    "width":"250px",
    "height":"auto",
    "background":"red",
    "position":"absolute",
    "top":"71px",
    "right":"29px",
    "color":"white"
  });

  $('.resultscanvas li').click(function(){
    var liclass = $(this).attr('class');
    $('.a11y-error').removeClass('error-heading');
    $(this).addClass('flagerror');
    var scrooltarget = '#'+liclass;
    document.getElementById("liclass").scrollIntoView();
  });


  $('.flagerror').css({
    "border":"5px yellow 5px",
    "background":"yellow"
  });

  $('.resultscanvas').css({
    'background':"white",
    "border":"#f11313 2px solid",
    "color":"#333",
    "padding":"5px"
  });

  $('.resultscanvas li').css({
    'list-style':"none",
    "text-decoration":"underline",
    "font-family": "GDS Transport",
    "font-weight": "bold",
    'margin-bottom':"5px",
  });

  $('.resultscanvas div').css({
    'margin-bottom':"20px",
  });

  $('.resultscanvas h2').css({
    "margin": "0",
    "background": "#f11313",
    "color": "white",
    "padding": "13px",
    "font-family": "GDS Transport"
  });
  //button
/*  $('button').each(function(){
    var buttonRole = $(this).attr('role');
    var ariaPressed = $(this).attr('aria-pressed');
  }); */
//});
