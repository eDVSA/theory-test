$(document).ready(function(){
   
    $('#qlogic :checkbox').click(function(){
        var formTest = $(this).attr('name');
        if($(this).is(":checked")) {
            console.log('yup');
            sessionStorage.setItem("nsa", formTest);
        }

        if(!$(this).is(":checked")) {
            console.log('nope');
            sessionStorage.removeItem("nsa", formTest);
        }
    });


  });

