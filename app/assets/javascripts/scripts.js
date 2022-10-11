
var kp = 0;
//url of IHTTC dashboard
var dburl = 'https://ihttcuat.powerappsportals.com/dashboard';
$('#6code').keypress(function() {
  kp++;
  if (kp == 6) {
    var delay = 10;
    setTimeout(function(){ window.location = dburl; }, delay);
  }
});


$(document).ready(function(){

//
var kp = 0;
//url of IHTTC dashboard 
var dburl = '';
$('#ihttpw').keypress(function() {
  kp++;
  if (kp == 4) {
    var delay = 10;
    setTimeout(function(){ window.location = dburl; }, delay);
  }
});

$('input[name=transition-date-check]').change(function(){
  if ($(this).is(':checked')) {
    var transCheck = $(this).val();
    //alert(transCheck);
    switch(transCheck) {
      case 'pearson':
        $('form').attr('action','https://wsr.theorytest.dvsa.gov.uk/testtaker/signin/SignInPage/DSA?locale=en_GB');
        break;
      case 'dvsa':
        $('form').attr('action','do-you-need-support');
        break;
      default:
        // code block
    }
  }
});

  $('#date-of-booking a.govuk-button').click(function(){
    var cutoffdate = new Date('04/09/2021');
    var day = $('#date-of-booking #select-year').val();
    var month = $('#date-of-booking #select-month').val();
    var year = $('#date-of-booking #select-day').val();

    var selecteddate = new Date(day+'/'+month+'/'+year);

    //alert(selecteddate);
    if( selecteddate > cutoffdate){
      window.location.assign('candidate-details');
    }
    if( selecteddate < cutoffdate){
      window.location.assign('https://wsr.theorytest.dvsa.gov.uk/testtaker/signin/SignInPage/DSA?locale=en_GB');
    }
  });

  $('#date-of-booking-2 a.govuk-button').click(function(){
    var cutoffdate = new Date('08/09/2021');
    var day = $('#date-of-booking-2 #select-year').val();
    var month = $('#date-of-booking-2 #select-month').val();
    var year = $('#date-of-booking-2 #select-day').val();

    var selecteddate = new Date(day+'/'+month+'/'+year);

    //alert(selecteddate);
    if( selecteddate > cutoffdate){
      window.location.assign('do-you-need-support');
    }
    if( selecteddate < cutoffdate){
      window.location.assign('https://wsr.theorytest.dvsa.gov.uk/testtaker/signin/SignInPage/DSA?locale=en_GB');
    }
  });

//manage-trans
$('.manage-trans a.govuk-button').submit(function(){
  var cutoffdate = new Date('08/09/2021');
  $('.manage-trans').blur(function(){
    var day = $('#date-of-booking-2 #select-year').val();
    var month = $('#date-of-booking-2 #select-month').val();
    var year = $('#date-of-booking-2 #select-day').val();

    var selecteddate = new Date(day+'/'+month+'/'+year);
  });

});

  $('#order-reference-number a.govuk-button').click(function(){
    var orderRefNo = $('#order-reference-number input').val();
    //alert(orderRefNo);
    orderRefNo = orderRefNo.charAt(0);
    switch(orderRefNo) {
      case 'b':
        //$('#order-reference-number form').attr('action','candidate-details');
        window.location.assign('candidate-details');
        break;
      default:
        window.location.assign('https://wsr.theorytest.dvsa.gov.uk/testtaker/signin/SignInPage/DSA?locale=en_GB');
    }
  });
  $('.govuk-notification-banner__link-back').click(function(){
    window.history.back();
  });
  $('.hidden-cookie').hide();
  $('.submit-cookies').click(function(){
    $('.hidden-cookie').show();
    $(window).scrollTop(0);
  });
  if (document.location.href.indexOf('pay-1') > -1 ) {
    $('.govuk-header__logo svg, .govuk-header__logotype-text, .govuk-header__link--service-name, footer .govuk-width-container ').css("display","none");
  }

  if (document.location.href.indexOf('pay-2') > -1 ) {
    $('.govuk-header__logo svg, .govuk-header__logotype-text, .govuk-header__link--service-name, footer .govuk-width-container').css("display","none");
  }

  if (document.location.href.indexOf('pay-3') > -1 ) {
    $('.govuk-header__logo svg, .govuk-header__logotype-text, .govuk-header__link--service-name, footer .govuk-width-container').css("display","none");
  }

  $('.print-page').click(function(){
    window.print();
  });

  $('#phonenumberadded2').blur(function(e){
    //var phoneval2 = $('#phonenumberadded2');
    if($(this).val().length > 0) {
      //e.preventDefault();
      $('form').attr('action','ok-to-contact');
    }
  });

  $('#headphone').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','select-vo-lang');
      //alert('select-support-lang');
    }
  });

  $('#voctest').change(function(){
    if ($(this).is(':checked')) {
      $('.govuk-radios__conditional').show();
    }
  });
  $('#type-bike').change(function(){
    if ($(this).is(':checked')) {
      $('.govuk-radios__conditional').hide();
    }
  });

  if(window.location.href === "https://candidate-booking.herokuapp.com/support-journeys/ns-journey-v6/cya"){
    window.location.replace("https://candidate-booking.herokuapp.com/support-journeys/ns-journey-v7/cya");
  }
  if(window.location.href === "https://candidate-booking.herokuapp.com/support-journeys/ns-journey-v6/index"){
    window.location.replace("https://candidate-booking.herokuapp.com/support-journeys/ns-journey-v7/index");
  }
  //$("#phonenumberadded").on("focus", function() {
  $('#checknumberadded').click(function(){
    var phonenoadded = $('#phonenumberadded').val();
    if(phonenoadded.length > 0) {
      console.log($('#phonenumberadded').val());
      $('form').attr('action','ok-to-contact');
    }
  });

  $('#nophonenumber').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','cya');
    }
  });
  $('#foreign-language-translator').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','flt');
    }
  });

  $('#contact-by-phone').change(function(){
    if($(this).val().length > 0) {
      $('form').attr('action','ok-to-contact')
    }
    if($(this).val().length === 0) {
      $('form').attr('action','cya')
    }
  });
  //
  if (window.location.href.indexOf("tb-v2") != -1) {
    console.log("tb-v2");
    $('.govuk-header__link.govuk-header__link--service-name').attr('href','/tb-v2/index-2').text('Trainer bookers');
  }

  if (window.location.href.indexOf("tb-v2/index-2") != -1) {
    console.log("tb-v2");
    $('.govuk-header__link.govuk-header__link--service-name').attr('href','/tb-v2/index-2').text('Trainer bookers');
    $('header').before('<div class="govuk-cookie-banner " role="region" aria-label="Use of cookies"><div class="govuk-cookie-banner__message govuk-width-container"><div class="govuk-grid-row"><div class="govuk-grid-column-two-thirds"><h2 class="govuk-cookie-banner__heading govuk-heading-m">Use of cookies</h2><div class="govuk-cookie-banner__content"><p>We use some essential cookies to make this service work.</p><p>We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p></div></div></div><div class="govuk-button-group"><button id="acceptcookies" value="accept" type="button" name="cookies" class="govuk-button govuk-!-margin-right-3" data-module="govuk-button">Accept cookies</button><a class="govuk-link govuk-!-margin-top-1" href="cookie-policy">View cookies</a></div></div></div>');
  }

  if (window.location.href.indexOf("nsa/do-you-need-support") != -1) {
    //console.log("tb-v2");
    //$('.govuk-header__link.govuk-header__link--service-name').attr('href','/tb-v2/index-2').text('Trainer bookers');
    $('.govuk-header__link.govuk-header__link--service-name').attr('href','/tb-v2/index-2').text('Trainer bookers');
    $('header').before('<div class="govuk-cookie-banner " role="region" aria-label="Use of cookies"><div class="govuk-cookie-banner__message govuk-width-container"><div class="govuk-grid-row"><div class="govuk-grid-column-two-thirds"><h2 class="govuk-cookie-banner__heading govuk-heading-m">Use of cookies</h2><div class="govuk-cookie-banner__content"><p>We use some essential cookies to make this service work.</p><p>We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p></div></div></div><div class="govuk-button-group"><button id="acceptcookies" value="accept" type="button" name="cookies" class="govuk-button govuk-!-margin-right-3" data-module="govuk-button">Accept cookies</button><a class="govuk-link govuk-!-margin-top-1" href="cookie-policy">View cookies</a></div></div></div>');
  }

  if (window.location.href.indexOf("nsa/do-you-need-support-no-js") != -1) {
    //console.log("tb-v2");
    //$('.govuk-header__link.govuk-header__link--service-name').attr('href','/tb-v2/index-2').text('Trainer bookers');
    $('header').before('<div class="govuk-cookie-banner " role="region" aria-label="Use of cookies"><div class="govuk-cookie-banner__message govuk-width-container"><div class="govuk-grid-row"><div class="govuk-grid-column-two-thirds"><h2 class="govuk-cookie-banner__heading govuk-heading-m">Use of cookies</h2><div class="govuk-cookie-banner__content"><p>We use some essential cookies to make this service work.</p><p>We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p></div></div></div><div class="govuk-button-group"><a class="govuk-button govuk-!-margin-top-1" href="cookie-policy-no-js">View cookies</a></div></div></div>');
  }

  $('#acceptcookies').click(function(){
    $('.govuk-cookie-banner').remove();
  });

  $('.removemodal').click(function(){
      $('#modal, #modal-inset').hide();
  });

  $('#cont-nsa-3').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','/prototype-v4/008-candidate-details')
    }
  });

  $('#cont-nsa-4').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','../008-candidate-details')
    }
  });

  $('#bsl-int').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','select-bsl-interpreter')
    }
  });

  $('#qlogic').each(function(){
    var qvo = $(this).find('.vo');
    var qnsao = $(this).find('.nsa');
    $(qvo).change(function(){
      if ($(this).is(':checked') && $(qnsao).is(':checked')) {
        $('form').attr('action','select-vo-lang');
      }
    });
    $(qnsao).change(function(){
      if ($(this).is(':checked') && $(qvo).is(':checked')) {
        $('form').attr('action','select-vo-lang');
      }
    });
  });
  //nsa-bsl
  $('#nsa-bsl').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','leaving-nsa');
    }
  });

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 182) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    var sticky2 = $('.sticky2'),
        scroll2 = $(window).scrollTop();

    if (scroll2 >= 182) sticky2.addClass('fixed2');
    else sticky2.removeClass('fixed2');
  });

  $('.goback').click(function(e){
    e.preventDefault();
    window.history.back();
  });

  $('#tb-search-results td').each(function(){
    var str = $(this).text();
    console.log(str);
    str.replace("LGV-CPC-conversion", "LGV-Con");
  });

  $('#payment-screen-new').parent().css('padding-top','20px');

  $('.date-select-buttons a.govuk-button--secondary').click(function(e){
    e.preventDefault();
  });
  $('.basket tr a').each(function(){
    $(this).click(function(e){
      e.preventDefault();
      $(this).parent().parent().hide();
    });
  });
  var chCount = 0;
  $('.checkchecks input').each(function(){
    var chCh = $(this);
    $(chCh).change(function(){
      if ($(this).is(':checked')) {
        console.log(chCount++);
      }
      if (!$(this).is(':checked')) {
        console.log(chCount--);
      }
      if(chCount > 3) {
        console.log('>> '+chCount+' <<');

        currentURL = window.location.pathname;
        var curl = currentURL.split("/")[3];
        //console.log(curl);
        if(curl == 'select-lgv') {
          $('.govuk-button').attr('href','select-lgv-2');
        }
        if(curl == 'select-pcv') {
          $('.govuk-button').attr('href','select-pcv-2');
        }

      }
      if(chCount < 3) {
        $('.govuk-button').attr('href','../date-unselected-appointment-see-slots');
      }
    });
  });

  $('#exam-type-selected input').each(function(){
    $('#exam-type-selected a.govuk-button').attr('href','');
    $(this).change(function(){
      var rVal = $(this).val();
      switch(rVal) {
        case 'car':
          $('#exam-type-selected a.govuk-button').attr('href','../date-unselected-appointment-see-slots');
          break;
        case 'pcv':
          $('#exam-type-selected a.govuk-button').attr('href','select-pcv');
          break;
        case 'LGV':
          $('#exam-type-selected a.govuk-button').attr('href','select-lgv');
          break;
        case 'bike':
          $('#exam-type-selected a.govuk-button').attr('href','../date-unselected-appointment-see-slots');
          break;
        default:
          // code block
      }
    });
  });

  $('#choose-test-type').each(function(){
    $(this).find('.govuk-error-summary').hide();
    var nextButton = $(this).find('a.govuk-button');
    window.errorCode = 0;
    window.checkLimit = 0;
    var appendErrorMsg = '';
  /*
    # Context
     _  ____________________
     1|	cant add bike to car
     2|	cant add bike to LGV
     3|	cant add bike to PVC
     4|	Cant add car to bike
     5|	Cant add car to LGV
     6|	Cant add car to PVC
     7|	cant add LGV to car
     8|	cant add LGV to bike
     9|	cant add LGV to PVC
    10|	cant add PVC to bike
    11|	cant add PVC to car
    12|	cant add PVC to LGV
    13|	To many exxams selected
    _ _____________________
  */

    $('input[name=consec1]').change(function(){
      window.checkLimit++;
      checkLimit();
      $('input[name=consec2]').change(function(){
        var errorMsg = 'You cannot add a PCV test to an LGV test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 12;
      });
      $('input[name=single]').change(function(){
        var errorMsg = 'You cannot add a car test to an LGV test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 5;
      });
      $('input[name=single2]').change(function(){
        var errorMsg = 'You cannot add a bike test to an LGV test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 2;
      });
    });

    $('input[name=consec2]').change(function(){
      window.checkLimit++;
      checkLimit();
      $('input[name=consec1]').change(function(){
        var errorMsg = 'You cannot add an LGV test to a PCV test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 9;
      });
      $('input[name=single]').change(function(){
        if ($(this).is(':checked')) {
          var errorMsg = 'You cannot add a car test to a PCV test';
          $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
          window.errorCode = 6;
        }
      });
      $('input[name=single2]').change(function(){
        if ($(this).is(':checked')) {
          var errorSet = 'error';
          var errorMsg = 'You cannot add a bike test to a PCV test';
          $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
          window.errorCode = 3;
        }
      });
    });

    $('input[name=single]').change(function(){
      window.checkLimit++;
      checkLimit();

      $('input[name=consec1]').change(function(){
        var errorMsg = 'You cannot add an LGV test to a car test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 7;
      });
      $('input[name=consec2]').change(function(){
        var errorMsg = 'You cannot add a PCV test to a car test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 11;
      });
      $('input[name=single2]').change(function(){
        var errorMsg = 'You cannot add a bike test to a car test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 1;
      });
    });
    $('input[name=single2]').change(function(){
      window.checkLimit++;
      checkLimit();

      $('input[name=consec1]').change(function(){
        var errorMsg = 'You cannot add an LGV test to a bike test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 8;
      });
      $('input[name=consec2]').change(function(){
        var errorMsg = 'You cannot add an PCV test to a bike test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 10;
      });
      $('input[name=single]').change(function(){
        var errorMsg = 'You cannot add a car test to a bike test';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
        window.errorCode = 4;
      });
    });

    function checkLimit() {
      if (window.checkLimit > 3) {
        window.errorCode = 13;
        var errorMsg = 'You can only select 3 exams';
        $('.govuk-error-summary__list').append('<li><a href="#passport-issued-error">'+errorMsg+'</a></li>');
      }
      console.log('Error code = ' + errorCode);
    }

    //if (window.errorCode > 0) {
      $(nextButton).click(function(e){
        e.preventDefault();
        $(this).find('.govuk-error-summary').show();
      });
    //}

  });

  $('.show-validation-error').hide();
  $('.find-dl-number').click(function(){
    var dlno = $('#find-dl-number').val();
    if ($('#find-dl-number').val().length < 16) {
      $('.show-validation-error').show();
      $('.wrap-find').parent().find('.hidethis').append('<p class="error-message-text">You must enter a valid driver licence number (DHILL787FTT8RT89)</p>');
      $('.wrap-find').parent().addClass('validation-error-message');
    }
    if ($('#find-dl-number').val().length > 16) {
      $('.show-validation-error').show();
      $('.wrap-find').parent().find('.hidethis').append('<p class="error-message-text">You must enter a valid driver licence number (DHILL787FTT8RT89)</p>');
      $('.wrap-find').parent().addClass('validation-error-message');
    }
    if ($('#find-dl-number').val().length == 16) {
      if ($('#find-dl-number').val() == 'DHILL787FTT8RT89') {
        window.location = 'assign-v2-found';
      }
      if ($('#find-dl-number').val() !== 'DHILL787FTT8RT89') {
        window.location = 'assign-v2-error';
      }
    }
  });

  $('#dvla-results, .setdlnumber').hide();
  $('#dashboad-search').each(function(){
    //get dln
    var dvsaDLNumber = $(this).find('#dl-number').val();
    //fire off search
    var submitSearch = $(this).find('.find-dl');
    //update text value
    var updateDLtext = $(this).find('.dvla-licence-number');
    var dlRemove = $(this).find('remove');

    $('.find-dl').click(function(){
      if($('#dl-number').val().length > 0){
        $('#dvla-results').show();
        $('.dvla-licence-number').text($('#dl-number').val());
        $('.setdlnumber').text($('#dl-number').val());
        $('#dashboad-search').parent().removeClass('validation-error-message');
      }
      if($('#dl-number').val().length < 1){
        $('#dvla-results').hide()
        $('#dashboad-search').parent().addClass('validation-error-message');
        $('#dashboad-search').parent().find('h2').append('<p class="error-message-text">error</p>');
      }
    });
  });

  $('.remove').click(function(e){
    e.preventDefault();
    $('#dvla-results').hide();
    $('#dl-number').val('');
    $('.dvla-licence-number').text('');
  });

  $('#dvla-results .govuk-button').click(function(e){
    e.preventDefault();
    $('.setdlnumber').show().after('<a href="" class"govuk-body chnage-candidiate-dl">change</a>');
    $('#dashboad-search, .hidethis').hide();
  });

  $('.overlay').hide();
  $('#open-modal').click(function(e){
    e.preventDefault();
    $('.overlay').show();
    $('#modal').click(function(){
      $('.overlay').hide();
    });
  });


  $('.tb-notification').hide();
  $('.test-sub').click(function(e){
    e.preventDefault();

    var val = $('.test-val').val();
    //alert(val);
    var oldVal = parseInt($('.old-val').text());
    $('.old-val').text(oldVal - parseInt(val));

    //check
    var checkVal = parseInt($('.test-new').text());
    $('.test-new').text(checkVal - parseInt(val));
  });
  $('.test-other-sub').click(function(e){
    e.preventDefault();
    var otherVal = parseInt($('.test-new').text());
    if ($(otherVal > 5)) {
      $('.hide-slot').css('background','red');
    }
  });

  $('.print-this-page').click(function(){
    window.print()
  });

  var dateslist = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"];
  //var monthslist =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var monthslist =["1","2","3","4","5","6","7","8","9","10","11","12"];

  $("#days").autocomplete({
    source: dateslist
  });
  $("#months").autocomplete({
    source: monthslist
  });
  $('.ui-menu-item-wrapper').on('click', function(){
    console.log($(this).text());
  });

  $('.scroll-1').click(function (){
    $('html, body').animate({
        scrollTop: $("#scroll-1").offset().top
    }, 0);
  });
  $('.scroll-2').click(function (){
    $('html, body').animate({
        scrollTop: $("#scroll-2").offset().top
    }, 0);
  });

  $('#yesno input[name=yesno]').change(function(){
    var yesno = $(this).attr('value');
    //$('form').attr('action','i-dont-know-what-support-i-need');
    if (yesno == "yes") {
      $('form').attr('action','select-where-v2');
    }
    if (yesno == "no") {
      $('form').attr('action','how-to-contact-you');
    }
  });

  $('#change-test input[name=change-what]').change(function(){
    var changeScreen = $(this).attr('value');
    //$('form').attr('action','i-dont-know-what-support-i-need');
    if (changeScreen == "start-time") {
      $('form').attr('action','appointment');
    }
    if (changeScreen == "start-day") {
      $('form').attr('action','select-date');
    }
    if (changeScreen == "start-location") {
      $('form').attr('action','004-search-for-test-centre');
    }
    if (changeScreen == "start-time-change") {
      $('form').attr('action','appointment-change');
    }
    if (changeScreen == "start-day-change") {
      $('form').attr('action','select-date-change');
    }
    if (changeScreen == "start-location-change") {
      $('form').attr('action','004-search-for-test-centre-change');
    }
  });




  $('.ns').change(function(){
    if($(this).prop('checked')){
      $('.wsf').attr('action','tell-us-what-support');
    } else {
      //$('.ns').prop('disabled',false);
    }
  });



  $('#don-know-what-support').change(function(){
    $('form').attr('action','i-dont-know-what-support-i-need');
  });

  $('.govuk-back-link').each(function(){
    //window.history.back();
    $(this).attr('href','');
  });
  $('.govuk-back-link').click(function(e){
    e.preventDefault();
    window.history.back();
  });
/*  $('#happy-path, #no-support').change(function(){
    $('form').attr('action','004-search-for-test-centre');
  }); */
  $('#yes-support, #yes-support-2').change(function(){
    $('form').attr('action','/support-journeys/ns-journey-v5/select-support-type');
  });

  $('#dont-know-support').change(function(){
    $('form').attr('action','004-search-for-test-centre');
  });


  $('.nsar').change(function(){
    $('form').attr('action','is-there-anything-else');
  });
  $('.snl').change(function(){
    $('form').attr('action','i-dont-know-what-support-i-need');
  });

/*  $('#need-support-2').change(function(){
    $('form').attr('action','state-other-support');
  });

  $('#read-the-questions, #simple-questions').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','non-standard');
    }
  });
  $('#more-time').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','non-standard');
    }
  });
  $('#interpreter').change(function(){
    if ($(this).is(':checked')) {
      $('form').attr('action','non-standard-bsl');
    }
  }); */
  //tabs__tab
  //$(window).on('resize', function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('#map-left .append-distance').prependTo('.title-distance').css('float','left').css('margin','5% 0px 2% 4%');
      $('#map-left #test-centre-name').prependTo('.title-distance').css('width','20%').css('float','left').css('margin','5% 0px 2% 0');
      $('#map-left .govuk-button--secondary').appendTo('#map-right');
    } else {
      $('.govuk-list-map-content').parent().parent().parent().parent().css('height','100%');
      $('#map-right #test-centre-name').prependTo('#map-left');
    }
  //});

  $('#tab1').click(function(){
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('#list-of-centres').addClass('active-content').removeClass('hidden-content');
    $('#map-of-centres').removeClass('active-content').addClass('hidden-content');
    $('.govuk-list-map-content').parent().parent().parent().parent().css('height','100%');
  });
  $('#tab2').click(function(){
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('#list-of-centres').removeClass('active-content').addClass('hidden-content');
    $('#map-of-centres').addClass('active-content').removeClass('hidden-content');
    $('.govuk-list-map-content').parent().parent().parent().parent().css('height','150vh');
  });

  var cleantimeslot = $('.timeslot').text();
  console.log(cleantimeslot);
  cleantimeslot = cleantimeslot.split('timeslot')[0];
  $('.timeslot').text(cleantimeslot);

  $('#select-ready-date').each(function(){
    var lastspage =  document.referrer;
    console.log(lastspage);
    if (lastspage.indexOf("appointment") > 0) {
      $('#select-date-form').attr('action',lastspage);
    }//support-check-answers
    if (lastspage.indexOf("support-check-answers") > 0) {
      $('#select-date-form').attr('action',lastspage);
    }
  });

  $('.govuk-summary-list__value').each(function(){
    if (!$(this).text().trim().length) {
      $(this).parent().hide();
    }
  });

  $('.show-this').show();

  $('iframe').contents().find('.i4ewOd-pzNkMb-haAclf').hide();
  //radio validatation
  $('.validate-error').hide();
  $('.validate-btn').click(function(){
    if (!$(".validate:checked").val()) {
      event.preventDefault();
      $('.validate-error').show();
      $('.govuk-radios').addClass('adderror');
      $('.govuk-error-summary__list').append('<li><a href="">You need to select an option</a></li>');
    } else {
      $('.validate-error').hide();
      $(this).parent().removeClass('adderror');
    }
  });
  /////////

  //additional support branching
  $(function(){
    $('#support-needed').click(function() {
      $(this).parent().parent().parent().attr('action', 'bsl');
      //alert('none');
    });
    $('#no-support-needed').click(function() {
      $(this).parent().parent().parent().attr('action', 'select-date');
    //  alert('not needed');
    });
  });

  //anothr other support
  $(function(){
    $('#yes-other-support').click(function() {
      $(this).parent().parent().parent().attr('action', 'state-other-support');
      //alert('none');
    });
    $('#no-other-support').click(function() {
      $(this).parent().parent().parent().attr('action', 'select-date');
      //alert('other support needed');
    });
  });

  var valdl = $('#candidate-details #dl-number').val();

  $('#candidate-details .govuk-error-summary').hide();
  $('#candidate-details').each(function(){
    var valfn = $('#candidate-details #first-second-names');
    var valln = $('#candidate-details #last-names');
    var valdl = $('#candidate-details #dl-number');
    var valdobd = $('#candidate-details #dob-day');
    var valdobm = $('#candidate-details #dob-month');
    var valdoby = $('#candidate-details #dob-year');
    var nextbtn = $('#candidate-details .govuk-button');

    $(nextbtn).click(function(){
    //validate DL
      if($(valdl).val().length == 0) {
      //$(nextbtn).click(function(){
        event.preventDefault();
        //$(valdl).parent().find('.govuk-error-message').show();
        $(valdl).parent().addClass('adderror');
        console.log($(valdl).val().length);
        $('#candidate-details .govuk-error-summary').show();
        $('.govuk-error-summary__list').append('<li><a href="#first-second-names">You need to select an option</a></li>');
      }

      //validate last name
      if($(valln).val().length == 0) {
        event.preventDefault();
        //$(valln).parent().find('.govuk-error-message').show();
        $(valln).parent().addClass('adderror');
        console.log($(valln).val().length);
        $('.govuk-error-summary__list').append('<li><a href="#first-second-names">The name you entred isn\'t correct</a></li>');
        $('#candidate-details .govuk-error-summary').show();
      }
      if($(valln).val().length > 1) {
        $(valln).parent().removeClass('adderror');
      }

      if($(valdl).val() != 'DHILL787FTT8RT89') {
        $(valdl).parent().addClass('adderror');
        event.preventDefault();
        $('.govuk-error-summary__list').append('<li><a href="#dl-number">The drivers licence number you entred isn\'t correct</a></li>');
        $('#candidate-details .govuk-error-summary').show();
      }

      //validate first name
      if($(valfn).val().length == 0) {
        event.preventDefault();
        //$(valfn).parent().find('.govuk-error-message').show();
        $(valfn).parent().addClass('adderror');
        console.log($(valfn).val().length);
        $('.govuk-error-summary__list').append('<li><a href="#first-name">The first number you entred isn\'t correct</a></li>');
        $('#candidate-details .govuk-error-summary').show();
        $('html,body').scrollTop(0);
      }
      if($(valfn).val().length > 1) {
        $(valfn).parent().removeClass('adderror');
      }

      //dob
      if($(valdobd).val().length == 0) {
        event.preventDefault();
        //$(valfn).parent().find('.govuk-error-message').show();
        $(valdobd).parent().parent().parent().addClass('adderror');
        console.log($(valdobd).val().length);
        $('.govuk-error-summary__list').append('<li><a href="#dob">The date of birth you entred isn\'t correct</a></li>');
        $('#candidate-details .govuk-error-summary').show();
        $('html,body').scrollTop(0);
      }
      if($(valdobm).val().length == 0) {
        event.preventDefault();
        //$(valfn).parent().find('.govuk-error-message').show();
        $(valdobm).parent().parent().parent().addClass('adderror');
        $('.govuk-error-summary__list').append('<li><a href="#dob">The date of birth you entred isn\'t correct</a></li>');
        $('#candidate-details .govuk-error-summary').show();
        $('html,body').scrollTop(0);
        console.log($(valdobm).val().length);
      }
      if($(valdoby).val().length == 0) {
        event.preventDefault();
        //$(valfn).parent().find('.govuk-error-message').show();
        $(valdoby).parent().parent().parent().addClass('adderror');
        $('.govuk-error-summary__list').append('<li><a href="#dob">The date of birth you entred isn\'t correct</a></li>');
        $('#candidate-details .govuk-error-summary').show();
        $('html,body').scrollTop(0);
        console.log($(valdoby).val().length);
      }
      if($(valdobd).val().length > 1) {
        $(valdobd).parent().parent().parent().removeClass('adderror');
      }
      if($(valdobm).val().length > 1) {
        $(valdobm).parent().parent().parent().removeClass('adderror');
      }
      if($(valdoby).val().length > 1) {
        $(valdoby).parent().parent().parent().removeClass('adderror');
      }
    });
  });



  $('#select-ready-date .govuk-error-summary').hide();
  //validation on ready date select
  $('#select-ready-date .govuk-button').click(function(e){
    var valrday = $('#select-ready-date #select-day');
    var valrmonth = $('#select-ready-date #select-month');
    var valreadyyear = $('#select-ready-date #select-year');
    var selectReadyDateBtn = $('#select-ready-date .govuk-button');

    if($(valrday).val().length == 0) {
    //$(nextbtn).click(function(){
      e.preventDefault();
      //$(valdl).parent().find('.govuk-error-message').show();
      $(valrday).parent().parent().parent().addClass('adderror');
      $('#select-ready-date .govuk-error-summary__list').append('<li><a href="#select-day">Yon need to entre a day</a></li>');
      $('#select-ready-date .govuk-error-summary').show();
    }
    if($(valrmonth).val().length == 0) {
    //$(nextbtn).click(function(){
      e.preventDefault();
      //$(valdl).parent().find('.govuk-error-message').show();
      $(valrday).parent().parent().parent().addClass('adderror');
      $('#select-ready-date .govuk-error-summary__list').append('<li><a href="#select-month">Yon need to entre a month</a></li>');
      $('#select-ready-date .govuk-error-summary').show();
    }
    if($(valreadyyear).val().length == 0) {
    //$(nextbtn).click(function(){
      e.preventDefault();
      //$(valdl).parent().find('.govuk-error-message').show();
      $(valreadyyear).parent().parent().parent().addClass('adderror');
      $('#select-ready-date .govuk-error-summary__list').append('<li><a href="#select-year">Yon need to entre a year</a></li>');
      $('#select-ready-date .govuk-error-summary').show();
    }
  });

  //location search
  $("#submit-location").hide();
  $('.results-meta, #convertdistance').hide();
  $('#see-map').hide();
  $('.mobile-hide').hide();
  $(".find-test-centre").click(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.mobile-hide').show();
      //alert('mobile');
    }
    //validation
    if($('#location-val').val().length == 0) {
      $('#location-val').parent().addClass('adderror');
    }
    if($('#location-val').val().length > 0) {
      $('#location-val').parent().removeClass('adderror');
    }

    $('#results .search-result').remove();
    var location = $('#location-val').val();

    //post codes
    if(location.startsWith('SA')){
      var location = 'Swansea';
    }
    if(location.startsWith('CF')){
      var location = 'Cardiff';
    }
    if(location.startsWith('b1')){
      var location = 'Birmingham';
    }
    if(location.startsWith('B1')){
      var location = 'Birmingham';
    }
    if(location.startsWith('B2')){
      var location = 'Birmingham';
    }
    if(location.startsWith('b2')){
      var location = 'Birmingham';
    }
    if(location.startsWith('B3')){
      var location = 'Birmingham';
    }
    if(location.startsWith('Sutton')){
      var location = 'Birmingham';
    }
    if(location.startsWith('b3')){
      var location = 'Birmingham';
    }
    if(location.startsWith('B4')){
      var location = 'Birmingham';
    }
    if(location.startsWith('b4')){
      var location = 'Birmingham';
    }
    if(location.startsWith('E1')){
      var location = 'London';
    }
    if(location.startsWith('e1')){
      var location = 'London';
    }
    if(location.startsWith('EC')){
      var location = 'London';
    }
    if(location.startsWith('ec')){
      var location = 'London';
    }
    if(location.startsWith('wc')){
      var location = 'London';
    }
    if(location.startsWith('WC')){
      var location = 'London';
    }
    if(location.startsWith('SW')){
      var location = 'London';
    }
    if(location.startsWith('sw')){
      var location = 'London';
    }
    if(location.startsWith('Croydon')){
      var location = 'London';
    }
    if(location.startsWith('SE')){
      var location = 'London';
    }
    if(location.startsWith('se')){
      var location = 'London';
    }
    switch(location) {
      case 'Swansea':
        var area = 1;
        break;
      case 'Cardiff':
        var area = 2;
        break;
      case 'Bridgend':
        var area = 2;
        break;
      case 'Merthyr Tydfil':
        var area = 2;
        break;
      case 'Merthyr':
        var area = 2;
        break;
      case 'Newport':
        var area = 3;
        break;
      case 'Birmingham':
        var area = 4;
        break;
      case 'London':
        var area = 5;
        break;
      default:
        // code block
    }

    $(function() {
      var json = {
          "locations": {
              "testcentres": [
                {
                  "name": "Birmingham",
                  "postcode": "B4 7NJ",
                  "area": [
                    {
                      "value": "4",
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "Birmingham,<br>38 Dale End,<br>Birmingham,<br>B4 7NJ<br>",
                  "phonenumber":"0300 200 1122",
                  "distance":"2",
                  "mobilelink":"appointment?birmingham",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:52.48214287858255%2C-1.8921852945469655&ll=52.48214287858255%2C-1.8921852945469655"
                },
                {
                  "name": "Sutton Coldfield",
                  "postcode": "B4 7NJ",
                  "area": [
                    {
                      "value": "4",
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "31-33 Birmingham Road,<br>Sutton Coldfield,<br>B72 1QE<br>",
                  "phonenumber":"0300 200 1122",
                  "distance":"7",
                  "mobilelink":"appointment?sutton",
                  "maplink":"https://www.google.com/maps?z=16&ie=UTF8&q=loc:52.558550665047086,-1.826226539540537&ll=52.558550665047086,-1.826226539540537"
                },
                {
                  "name": "Redditch",
                  "postcode": "B97 4DL",
                  "area": [
                    {
                      "value": "4",
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "2nd Floor, <br>Grosvenor House, <br>Prospect Hill,<br>Redditch,<br>B97 4DL",
                  "phonenumber":"0300 200 1122",
                  "distance":"15",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:52.309126336909706%2C-1.9397312561069089&ll=52.309126336909706%2C-1.9397312561069089"
                },
                {
                  "name": "Dudley",
                  "postcode": "DY2 8PE",
                  "area": [
                    {
                      "value": "4",
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "Trafalgar House, <br>47-49 Kings Street,<br>Dudley",
                  "phonenumber":"0300 200 1122",
                  "distance":"10",
                  "mobilelink":"appointment?dudley",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:52.50855608488533%2C-2.084173847886824&ll=52.50855608488533%2C-2.084173847886824"
                },
                {
                  "name": "Swansea",
                  "postcode": "SA3TUS",
                  "area": [
                    {
                      "value": "1",
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "Grove House, <br>3 Grove Pl, <br>Swansea <br>SA1 5DF",
                  "phonenumber":"0161 855 7499",
                  "mobilelink":"appointment?swansea",
                  "maplink":""
                },
                {
                  "name": "Cardiff",
                  "postcode": "CF5676767",
                  "area": [
                    {
                      "value": "3",
                      "value": "2"
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehfewwofe",
                  "address": "Cardiff,  <br>Limerick House, <br>23 Churchill Way, <br>Cardiff <br>CF10 2HE",
                  "phonenumber":"0161 855 7499",
                  "mobilelink":"appointment?cardiff",
                  "maplink":""
                },
                {
                  "name": "Merthyr Tydfil",
                  "postcode": "BD75575",
                  "area": [
                    {
                      "value": "3",
                      "value": "2",
                      "value": "1"
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "1st Floor, <br>Castle House, <br>Glebeland St, <br>Merthyr Tydfil <br>CF47 8AT",
                  "phonenumber":"0161 855 7499",
                  "mobilelink":"appointment?merthyr",
                  "maplink":""
                },
                {
                  "name": "Bridgend",
                  "postcode": "BD75575",
                  "area": [
                    {
                      "value": "1",
                      "value": "2"
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "Crown Buildings, <br>Angel St, <br>Bridgend <br>CF31 4AD",
                  "phonenumber":"0843 504 7271",
                  "mobilelink":"appointment?bridgend",
                  "maplink":""
                },
                {
                  "name": "Newport",
                  "postcode": "BD75575",
                  "area": [
                    {
                      "value": "3",
                      "value": "2"
                    }
                  ],
                  "location": "log/lat",
                  "description": "fehwofe",
                  "address": "6th Floor, <br>Clarence House, <br>Clarence Pl, <br>Newport <br>NP19 7AA",
                  "phonenumber":"0161 855 7499",
                  "mobilelink":"appointment?newport",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:51.40732798207791%2C-0.30619785536877997&ll=51.40732798207791%2C-0.30619785536877997"
                },
                {
                  "name": "Kingston upon Thames",
                  "postcode": "KT1 2BQ",
                  "area": [
                    {
                      "value": "5",
                    }
                  ],
                  "location": "log/lat",
                  "description": "",
                  "address": "4th Floor, <br>Drapers Court, <br>Kingston Hall Road,<br>Kingston upon Thames<br>KT1 2BQ",
                  "phonenumber":"0300 200 1122",
                  "mobilelink":"appointment?kingston",
                  "distance":"7",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:51.40732798207791%2C-0.30619785536877997&ll=51.40732798207791%2C-0.30619785536877997"
                },
                {
                  "name": "Croydon",
                  "postcode": "CR0 1YD",
                  "area": [
                    {
                      "value": "5",
                    }
                  ],
                  "location": "log/lat",
                  "description": "",
                  "address": "2nd Floor,<br>Central House, <br>27 Park Street Croydon,<br>South London,<br>CR0 1YD",
                  "phonenumber":"0300 200 1122",
                  "distance":"7",
                  "mobilelink":"appointment?croydon",
                  "maplink":"https://www.google.com/maps/place/51%C2%B022'25.3%22N+0%C2%B005'52.8%22W/@51.3736844,-0.097997,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d51.3736844!4d-0.097997"
                },
                {
                  "name": "Southwark",
                  "postcode": "SE1 2EL",
                  "area": [
                    {
                      "value": "5",
                    }
                  ],
                  "location": "log/lat",
                  "description": "",
                  "address": "10 Holyrood Street,<br>Southwark,<br>London,<br>SE1 2EL",
                  "phonenumber":"0300 200 1122",
                  "mobilelink":"appointment?southwark",
                  "distance":"11",
                  "maplink":"https://www.google.com/maps?z=16&ie=UTF8&q=loc:51.50343940641492,-0.08197957889636975&ll=51.50343940641492,-0.08197957889636975"
                },
                {
                  "name": "Southgate",
                  "postcode": "N14 5BP",
                  "area": [
                    {
                      "value": "5",
                    }
                  ],
                  "location": "log/lat",
                  "description": "",
                  "address": "2nd Floor, <br>Crown House, v47 Chase Side, <br>Southgate,<br>Enfield,<br>N14 5BP",
                  "phonenumber":"0300 200 1122",
                  "mobilelink":"appointment?southgate",
                  "distance":"22",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:51.63263023299218%2C-0.12963804880143692&ll=51.63263023299218%2C-0.12963804880143692"
                },
                {
                  "name": "Mile End",
                  "postcode": "E14 7AF",
                  "area": [
                    {
                      "value": "5",
                    }
                  ],
                  "location": "log/lat",
                  "description": "",
                  "address": "3 Quebec Wharf, <br>14 Thomas Road,<br>London<br>E14 7AF",
                  "phonenumber":"0300 200 1122",
                  "mobilelink":"appointment?mile",
                  "distance":"21",
                  "maplink":"https://maps.google.com/maps?z=16&ie=UTF8&q=loc:51.51452845518825%2C-0.027293588204184652&ll=51.51452845518825%2C-0.027293588204184652"
                },
            ]
          }
      };
      var countresults = 1;
      $.each(json.locations.testcentres, function(i, v) {
        if (v.area[0].value == area) {
          $("#submit-location, #convertdistance").show();
          $('#results').append('<div class="search-result"> <div class="sr-left"> <div class="govuk-form-group"> <fieldset class="govuk-fieldset"> <div class="govuk-checkboxes"> <div class="govuk-checkboxes__item"> <input class="govuk-checkboxes__input" name="selecttestcentre" type="checkbox" value="'+ v.name.toLowerCase() +'"> <label class="govuk-label govuk-checkboxes__label"></label></div></div></fieldset> </div></div><div class="sr-right"> <h2 class="govuk-heading-m">'+ v.name +'</h2> <p class="govuk-body">'+ v.address +'</p><p><a href="'+v.maplink+'">View on Google Maps</a></p><p class="govuk-body">Phone '+ v.phonenumber +'</p><details class="govuk-details" data-module="govuk-details"> <summary class="govuk-details__summary"> <span class="govuk-details__summary-text"> About this test centre </span> </summary> <div class="govuk-details__text"> '+ v.description +' </div></details></div><div class="govuk-body distance">'+v.distance+' miles</div></div>');
          $('.results-meta').show();
          $('#see-map').show();
          $('.increment').text(countresults++);
          $('.location-selected').text(location);
          return;
        }
      });
    });
  });

//month-ready
  //var monthready = $('.month-ready').text();
  switch($('.month-ready').text()) {
    case '01':
      $('.month-ready').text('January');
      break;
    case '02':
      $('.month-ready').text('February');
      break;
    case '03':
      $('.month-ready').text('March');
      break;
    case '04':
      $('.month-ready').text('April');
      break;
    case '05':
      $('.month-ready').text('May');
      break;
    case '06':
      $('.month-ready').text('June');
      break;
    case '07':
      $('.month-ready').text('July');
      break;
    case '08':
      $('.month-ready').text('August');
      break;
    case '09':
      $('.month-ready').text('September');
      break;
    case '10':
      $('.month-ready').text('October');
      break;
    case '11':
      $('.month-ready').text('November');
      break;
    case '12':
      $('.month-ready').text('December');
      break;
    default:
      // code block
  }

  var dobformat = $('.dob-format').text();
  switch(dobformat) {
    case '01':
      $('.dob-format').text('January');
      break;
    case '02':
      $('.dob-format').text('February');
      break;
    case '03':
      $('.dob-format').text('March');
      break;
    case '04':
      $('.dob-format').text('April');
      break;
    case '05':
      $('.dob-format').text('May');
      break;
    case '06':
      $('.dob-format').text('June');
      break;
    case '07':
      $('.dob-format').text('July');
      break;
    case '08':
      $('.dob-format').text('August');
      break;
    case '09':
      $('.dob-format').text('September');
      break;
    case '10':
      $('.dob-format').text('October');
      break;
    case '11':
      $('.dob-format').text('November');
      break;
    case '12':
      $('.dob-format').text('December');
      break;
    default:
      // code block
  }

  //date picker
  $( "#datepicker" ).datepicker({
    numberOfMonths: 1,
    showButtonPanel: true,
    buttonImage: '/public/images/calendar.png',
    buttonImageOnly: true,
    showOn: 'button',
    format: 'dd-mm-yy',
    onClose: function(dateText, inst) {
        $("#select-year").val(dateText.split("/")[2]);
        $("#select-month").val(dateText.split("/")[0]);
        $("#select-day").val(dateText.split("/")[1]);
    }
  });
  $( function() {
    $( "#datepicker2" ).datepicker();
  } );
  $('.see-march').click(function(){
    $('#february').hide();
    $('#march').show();
  });
  $('.see-feb').click(function(){
    $('#february').show();
    $('#march').hide();
  });
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     $('.free').click(function(){
       window.location.replace('index');

     });
  } else {

    $('.free').click(function(){
      var parentmonth = $(this).parent().parent('.month-group').find('.govuk-heading-m').text();
      var thisday = $(this).text();
      console.log(thisday);

      $(function() {
        var datejson = {
            "days": {
              "slots": [
                {
                  "month":"February",
                  "day":"5",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
                },
                {
                  "month":"February",
                  "day":"9",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"10",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"16",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"17",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"20",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"22",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"23",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"27",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"29",
                  "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
                },
                {
                  "month":"February",
                  "day":"30",
                  "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
                },
              ]
            },
        };
        $.each(datejson.days.slots, function(i, v) {
          if (v.day == thisday) {
            $('#dresults').html('<div class="search-result"><div class="slot-head"><h2 class="govuk-heading-l">'+ v.centre +'</h3></div>'+v.time+'<span></span></div>');
            return;
          }
        });
      });
    });
  }

  $(function() {
    var appointmentjson = {
        "city": {
          "testcentres": [
            {
              "centre":"london",
              "month":"February",
              "day":"1",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"3",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"9",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"14",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },

            {
              "centre":"london",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"17",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"19",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"20",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"21",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"22",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"23",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"27",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"london",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"2",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"3",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"6",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"9",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"10",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"17",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"18",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"23",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"26",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"birmingham",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"birmingham",
              "month":"February",
              "day":"31",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"Redditch",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"Redditch",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"Redditch",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"6",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"15",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"16",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"Redditch",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"redditch",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"dudley",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"Dudley",
              "month":"February",
              "day":"5",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"24",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"27",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"dudley",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"sutton",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"5",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"24",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"25",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"sutton",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"1",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"3",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"9",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"14",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },

            {
              "centre":"swansea",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"17",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"19",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"20",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"21",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"22",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"23",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"27",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"swansea",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"2",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"3",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"6",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"9",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"10",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"17",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"18",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"23",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"26",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"cardiff",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"cardiff",
              "month":"February",
              "day":"31",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"6",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"15",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"16",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"newport",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"merthyr",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"5",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"24",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"27",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"merthyr",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"bridgend",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"5",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"24",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"25",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"bridgend",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //new join
            {
              "centre":"southwark",
              "month":"February",
              "day":"1",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"3",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"9",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"14",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },

            {
              "centre":"southwark",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"17",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"19",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"20",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"21",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"22",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"23",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"27",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southwark",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"2",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"3",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"6",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"9",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"10",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"17",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"18",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"23",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"26",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"mile",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"mile",
              "month":"February",
              "day":"31",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"5",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"6",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"15",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"16",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"24",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"croydon",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"southgate",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"5",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"24",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"25",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"27",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"southgate",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            }, //break
            {
              "centre":"kingston",
              "month":"February",
              "day":"1",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"2",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"3",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"4",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"5",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"6",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"7",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"8",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"9",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:40</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"10",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"11",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"12",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"13",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"14",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"15",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"16",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"17",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"18",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"19",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"20",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"21",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"22",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"23",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"24",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"25",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>11:30</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>14:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"26",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"27",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"28",
              "time":"<p class='showing-no-results'>There are no appointments available for this day<br /><br />You can either <a href='select-date'>choose another day</a> or <a href='select-test-centre'>choose a different test centre</a>.</p>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"29",
              "time":"<div class='show-slots'> <div id='am'> <h3 class='govuk-heading-m'>Morning</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:45</a> </div><div id='pm'> <h3 class='govuk-heading-m'>Afternoon</h3> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:45</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:30</a> <a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:00</a> </div></div>"
            },
            {
              "centre":"kingston",
              "month":"February",
              "day":"30",
              "time":"<div class='show-slots'><div id='am'><h3 class='govuk-heading-m'>Morning</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>8:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>9:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>10:00</a></div><div id='pm'><h3 class='govuk-heading-m'>Afternoon</h3><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>12:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>13:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>15:30</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>16:00</a><a href='which-language-do-you-want-your-theory-test-in?' class='govuk-button govuk-button--secondary'>17:30</a></div></div>"
            },
          ]
        },
    };

    $('.search-result').hide();
    if (document.location.href.indexOf('swansea') > -1 ) {
      $('#appointment #selected-test-centres').append('Swansea');
      window.locationselected = "swansea";
      console.log(locationselected);
      //$('.result-for0-swansea').show();
    }
    if (document.location.href.indexOf('cardiff') > -1 ) {
      $('#appointment #selected-test-centres').append('Cardiff');
      window.locationselected = "cardiff";
      console.log(locationselected);
    }
    if (document.location.href.indexOf('bridgend') > -1 ) {
      $('#appointment #selected-test-centres').append('Bridgend');
      window.locationselected = "bridgend";
      console.log(locationselected);
    }
    if (document.location.href.indexOf('newport') > -1 ) {
      $('#appointment #selected-test-centres').append('Newport');
      window.locationselected = "newport";
    }
    if (document.location.href.indexOf('merthyr') > -1 ) {
      $('#appointment #selected-test-centres').append('Merthyr');
      window.locationselected = "merthyr";
      console.log(locationselected);
    }
    if (document.location.href.indexOf('birmingham') > -1 ) {
      $('#appointment #selected-test-centres').append('Birmingham');
      window.locationselected = "birmingham";
      console.log(locationselected);
      //$('.result-for0-swansea').show();
    }
    if (document.location.href.indexOf('sutton') > -1 ) {
      $('#appointment #selected-test-centres').append('Sutton Coldfield');
      window.locationselected = "sutton";
      console.log(locationselected);
    }
    if (document.location.href.indexOf('redditch') > -1 ) {
      $('#appointment #selected-test-centres').append('Redditch');
      window.locationselected = "redditch";
      console.log(locationselected);
    }
    if (document.location.href.indexOf('dudley') > -1 ) {
      $('#appointment #selected-test-centres').append('Dudley');
      window.locationselected = "dudley";
    }
    if (document.location.href.indexOf('southwark') > -1 ) {
      $('#appointment #selected-test-centres').append('Southwark');
      window.locationselected = "southwark";
    }
    if (document.location.href.indexOf('mile') > -1 ) {
      $('#appointment #selected-test-centres').append('Mile End');
      window.locationselected = "mile";
    }
    if (document.location.href.indexOf('croydon') > -1 ) {
      $('#appointment #selected-test-centres').append('Croydon');
      window.locationselected = "croydon";
    }
    if (document.location.href.indexOf('southgate') > -1 ) {
      $('#appointment #selected-test-centres').append('Southgate');
      window.locationselected = "southgate";
    }
    if (document.location.href.indexOf('kingston') > -1 ) {
      $('#appointment #selected-test-centres').append('Kingston upon Thames');
      window.locationselected = "kingston";
    }
    //

    var firstday = parseInt($("#dayselected").text(),10);
    firstday = parseInt(firstday);

    //hide 'no results'
    $('#left-toggle').click(function(){
      firstday = firstday - 1;
      $('#appointment-results .search-result').remove();
      $("#dayselected").text(firstday)
      $.each(appointmentjson.city.testcentres, function(i, v) {
        if (v.day == firstday) {
          $('#appointment-results').append('<div class="search-result result-for-'+v.centre+'"><div class="slot-head"><h2 class="govuk-heading-m">'+ v.centre +'</h3></div>'+v.time+'<span></span></div>');
          $('.show-no-results').hide();
          return;
        } else {
        }
      });
    });
    $('#right-toggle').click(function(){
      firstday = firstday + 1;
      $('#appointment-results .search-result').remove();
      $("#dayselected").text(firstday)
      $.each(appointmentjson.city.testcentres, function(i, v) {
        if (v.day == firstday) {
          $('#appointment-results').append('<div class="search-result result-for-'+v.centre+'"><div class="slot-head"><h2 class="govuk-heading-m">'+ v.centre +'</h3></div>'+v.time+'<span></span></div>');
          return;
        } else {
        }
      });
    });
    //
    $.each(appointmentjson.city.testcentres, function(i, v) {
      if (v.day == firstday) {
        //$('#appointment-results .search-result').remove();
        $('#appointment-results').append('<div class="search-result result-for-'+v.centre+'"><div class="slot-head"><h2 class="govuk-heading-m">'+ v.centre +'</h3></div>'+v.time+'<span></span></div>');
        return;
      }
    });
  });

  $('#candidates-email .govuk-error-summary').hide();
  $('#candidates-email .govuk-button').click(function(e){
    var email1 = $('#candidates-email #email-addess').val();
    var email2 = $('#candidates-email #confirm-email-address').val();
    //alert(email1 + email2);

    if (email1 == email2) {
      $(this).parent().removeClass('adderror');
      $('.govuk-error-summary__list li').remove();
    } else {
      e.preventDefault();
      $(this).parent().addClass('adderror');
      $('.govuk-error-summary__list').append('<li><a href="#email-addess">The email address entred dont match</a></li>');
      $('#candidates-email .govuk-error-summary').show();
    }
    if ($(email1) > 0) {
      $(this).parent().removeClass('adderror');
      $('.govuk-error-summary__list li').remove();
    } else {
      e.preventDefault();
      $(this).parent().addClass('adderror');
      $('.govuk-error-summary__list').append('<li><a href="#email-addess">You need to add your email</a></li>');
      $('#candidates-email .govuk-error-summary').show();
    }
    if ($(email2).length > 0) {
      $(this).parent().removeClass('adderror');
    } else {
      e.preventDefault();
      $(this).parent().addClass('adderror');
      $('.govuk-error-summary__list').append('<li><a href="#email-addess">You need to confirm your email here</a></li>');
      $('#candidates-email .govuk-error-summary').show();
    }
  });

  //payment screen body tag hack
  $('#payment-screen').parent().parent().parent().addClass('payment-screen-body');

  //#appointment page
  $('.week2, .week3').hide();

  $('.tomorrow').click(function(){
    $(this).parent().parent('.day-slot').hide();
    $(this).parent().parent('.day-slot').next().show();
    //$('li.date-btn').removeClass('active');
    $('.active').next().addClass('active');
  });
  $('.yesterday').click(function(){
    $(this).parent('.day-slot').hide();
    $('.day-slot').hide();
    $(this).parent().parent('.day-slot').prev().show();
    //$('li.date-btn ').removeClass('active');
    $('.active').prev('.date-btn').addClass('active');
  });
  //toggle days and slots
  $('.day-slot').hide();
  $('.week1-mon').show();
  $('.mon1').click(function(){
    $('.day-slot').hide();
    $('.week1-mon').show();
  });
  $('.tue1').click(function(){
    $('.day-slot').hide();
    $('.week1-tue').show();
  });
  $('.wed1').click(function(){
    $('.day-slot').hide();
    $('.week1-wed').show();
  });
  $('.thu1').click(function(){
    $('.day-slot').hide();
    $('.week1-thu').show();
  });
  $('.fri1').click(function(){
    $('.day-slot').hide();
    $('.week1-fri').show();
  });
  $('.sat1').click(function(){
    $('.day-slot').hide();
    $('.week1-sat').show();
  });

  $('.mon2').click(function(){
    $('.day-slot').hide();
    $('.week2-mon').show();
  });
  $('.tue2').click(function(){
    $('.day-slot').hide();
    $('.week2-tue').show();
  });
  $('.wed2').click(function(){
    $('.day-slot').hide();
    $('.week2-wed').show();
  });
  $('.thu2').click(function(){
    $('.day-slot').hide();
    $('.week2-thu').show();
  });
  $('.fri2').click(function(){
    $('.day-slot').hide();
    $('.week2-fri').show();
  });
  $('.sat2').click(function(){
    $('.day-slot').hide();
    $('.week2-sat').show();
  });

  $('.mon3').click(function(){
    $('.day-slot').hide();
    $('.week3-mon').show();
  });
  $('.tue3').click(function(){
    $('.day-slot').hide();
    $('.week3-tue').show();
  });
  $('.wed3').click(function(){
    $('.day-slot').hide();
    $('.week3-wed').show();
  });
  $('.thu3').click(function(){
    $('.day-slot').hide();
    $('.week3-thu').show();
  });
  $('.fri3').click(function(){
    $('.day-slot').hide();
    $('.week3-fri').show();
  });
  $('.sat3').click(function(){
    $('.day-slot').hide();
    $('.week3-sat').show();
  });


  $('.week-1-next').click(function(){
    $('.week2, .week2-mon').show();
    $('.week1').hide();
    $('li.date-btn ').removeClass('active');
    $('.mon2').addClass('active');
  });
  $('.week-2-next').click(function(){
    $('.week3, .week2-sat').show();
    $('.week2, .week2-mon').hide();
    $('li.date-btn ').removeClass('active');
    $('.mon3').addClass('active');
  });
  $('.week-2-prev').click(function(){
    $('.week1, .week1-mon').show();
    $('.week2').hide();
    $('li.date-btn ').removeClass('active');
    $('.mon1').addClass('active');
  });
  $('.week-3-prev').click(function(){
    $('.week3').hide();
    $('.week2').show();
    $('li.date-btn ').removeClass('active');
    $('.mon2').addClass('active');
  });

  $('li.date-btn ').click(function(){
    $('li.date-btn ').removeClass('active');
    $(this).addClass('active');
  });

  $('.week-jump1').click(function(){
    $('.week2, .week2-mon').show();
    $('.week1').hide();
    $('li.date-btn ').removeClass('active');
    $('.mon2').addClass('active');
  });
  $('.week-jump2').click(function(){
    $('.week3, .week3-mon').show();
    $('.week2').hide();
    $('li.date-btn ').removeClass('active');
    $('.mon3').addClass('active');
  });

  $('.appointment-2 .govuk-button--secondary').click(function(){
    window.location.replace('../change-your-answers');
  });
  $('.appointment-4 .govuk-button--secondary').click(function(){
    window.location.replace('confirm-change-booking');
  });
  $('.appointment-3 .govuk-button--secondary').click(function(){

    var nsa = $('#check-nsa').text();
    if(nsa == 'nsa') {
      window.location.replace('nsa-journey');
    }
    if(nsa == '') {
      window.location.replace('check-your-answers');
    }
  });
});
///page loadeded
var appendurl = 'appointment?';
$(document).on('change', '.screen-search-test-centres .govuk-checkboxes__item input' , function(){
  //console.log($(this).parent().parent().parent().parent().parent().parent().find('h2').text());
  var locationval = $(this).val();
  appendurl = appendurl.concat(locationval+"&");
  $('#submit-location').attr('href',appendurl);
});

$("body").bind("DOMNodeInserted", function() {
  $('#appointment-results .search-result').hide();
  if (document.location.href.indexOf('merthyr') > -1 ) {
    //alert('merthyr');
    $('.result-for-merthyr').show();
  }
  if (document.location.href.indexOf('bridgend') > -1 ) {
    //alert('bridgend');
    $('.result-for-bridgend').show();
  }
  if (document.location.href.indexOf('cardiff') > -1 ) {
    //alert('cardiff');
    $('.result-for-cardiff').show();
  }
  if (document.location.href.indexOf('swansea') > -1 ) {
    //alert('swansea');
    $('.result-for-swansea').show();
  }
  if (document.location.href.indexOf('newport') > -1 ) {
    //alert('newport');
    $('.result-for-newport').show();
  }
  if (document.location.href.indexOf('dudley') > -1 ) {
    //alert('merthyr');
    $('.result-for-dudley').show();
  }
  if (document.location.href.indexOf('sutton') > -1 ) {
    //alert('cardiff');
    $('.result-for-sutton').show();
  }
  if (document.location.href.indexOf('redditch') > -1 ) {
    //alert('swansea');
    $('.result-for-redditch').show();
  }
  if (document.location.href.indexOf('birmingham') > -1 ) {
    //alert('newport');
    $('.result-for-birmingham').show();
  }
  if (document.location.href.indexOf('southwark') > -1 ) {
    $('.result-for-southwark').show();
  }
  if (document.location.href.indexOf('mile') > -1 ) {
    $('.result-for-mile').show();
  }
  if (document.location.href.indexOf('croydon') > -1 ) {
    $('.result-for-croydon').show();
  }
  if (document.location.href.indexOf('southgate') > -1 ) {
    $('.result-for-southgate').show();
  }
  if (document.location.href.indexOf('kingston') > -1 ) {
    $('.result-for-kingston').show();
  }

  $('#appointment-results .govuk-button--secondary').each(function(){

    timeTime = $(this).text();
    //console.log(timeTime);
    //get url of timeslot btns
    appointmentTime = $(this).attr('href');
    //console.log(appointmentTime);
    //sappointmentTime = appointmentTime.concat('timeslot='+timeTime);
    //$(this).attr('href',appointmentTime+timeTime);

    console.log($(this).attr('href') + 'timeslot='+$(this).text());
    $(this).attr('href',$(this).attr('href') + 'timeslot='+$(this).text())
  });

});

$('#convertdistance').click(function(){
  $(document).on('each','.distance' , function(){
    miles = $(this).text();
    console.log(miles);
    //alert($(this).text(miles+' miles away'));
  });
});

$('#tb .govuk-button--secondary').click(function(event){
  //event.preventDefault();
});
$('#tb .govuk-table__row').each(function(){
  var addToBasketBtn = $(this).find('.govuk-button--secondary');
  var seatsSelected = $(this).find('.govuk-input--width-3');
  var seatTotal = $(this).find('.seats');
  var thisrow = $(this);
  //console.log('found');
  $(addToBasketBtn).click(function(event){
    event.preventDefault();

    var newSeatTotal = parseInt($(seatTotal).text()) - parseInt($(seatsSelected).val());

    var seatselcalc = parseInt($(seatsSelected).val());
    var currentseat = parseInt($(seatTotal).text());
    if (seatselcalc > currentseat) {
      $('.tb-notification').show();
      $(seatsSelected).addClass('redbounding');
      $(seatsSelected).parent().append('<div class="small-red">Availability exceeded</div>');
    }
    if (currentseat >= seatselcalc) {
      console.log(newSeatTotal);
      $(seatTotal).text(newSeatTotal);
      //alert($('.baskettotal').text());
      var baskettotal = parseInt($('.baskettotal span').text()) + parseInt($(seatsSelected).val());
      console.log(baskettotal);
      $('.baskettotal span').text(baskettotal);

      $(seatsSelected).find('.small-red').remove();

      var select = $(this).find('select');
      $(select).after('<strong class="govuk-tag govuk-tag--grey">'+seatsSelected+'</strong>');

      var seatallocation = $('.seatallocation span').text();
      //console.log('t'+seatallocation);
      var newseatallocation = parseInt(seatallocation) - parseInt($(seatsSelected).val());
      console.log('t'+newseatallocation);
      $('.seatallocation span').text(newseatallocation);
      //$('.tb-notification').show();
    }


    if ($(seatsSelected).val() < 1) {
      alert('Nothing select ');
      //seatsSelected seatTotal
    }



  });
});

if ($('.new-ref').text().length > 0) {
  $('.old-ref').hide();
}
//select-vo-lang
$('input[name=vo-lang]').change(function(){
  if ($(this).is(':checked')) {
    $('form').attr('action','select-vo-lang-leave-nas');
  }
});

$('input[name=go-to-happy-path]').change(function(){
  if ($(this).is(':checked')) {
    $('form').attr('action','/prototype-v4/004-search-for-test-centre');
  }
});

$('input[name=no-support]').change(function(){
  if ($(this).is(':checked')) {
    $('form').attr('action','/prototype-v4/004-search-for-test-centre');
  }
});
