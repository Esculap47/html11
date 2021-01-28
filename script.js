$(document).ready(function(){
  $( function() {
    $( "#accordion" ).accordion();
  } );
   let z= true 
  $('.popo').click(function(){
    if (z){
      $(this).prepend('David & ');
      $(this).append(' & Ana');
      z= !z;
    }
    else{
      $(this).before('Ana & ');
      $(this).after(' & David');
      z= !z;
    }
  });



  $(document).dblclick(function(){
    toastr["info"]("информация", "вы нажали пкм два раза");
  });

   toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };

  $('.intro').click(function(){
    $(this).addClass('lol');
  });


  let v = true;
  $('.up__arrow').hover(function asd(){
    
    if (v){
      $('.down__arrow').hide();
      v= !v;
    }
    else {
      $('.down__arrow').show();
      v= !v;
    }
  });


 $('.button').click(function(){
   let name = $('#name').val();
   let surname = $('#surname').val();
   let guests = $('#guests').val();
   let events = $('#events').val();
   let mes = $('#mes').val();
   alert(`Вас зовут: ${name} ${surname}\nКоличество гостей: ${guests}\nзаписаны на: ${events}\nваше сообщение: ${mes}`);
 });

});



$('a[href^="#"]').click(function(){ // #1
  let anchor = $(this).attr('href');  // #2
  $('html, body').animate({           // #3
  scrollTop:  $(anchor).offset().top  // #4
  }, 600);                            // #5
  });
