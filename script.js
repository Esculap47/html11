$(document).ready(function(){
  $( function() {
    $( "#accordion" ).accordion();
  } );
   



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
  }
});



