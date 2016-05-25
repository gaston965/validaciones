$(document).ready(function(){
 $("#NOSE8").addClass('ocultar');
document.getElementById('correo').addEventListener('input', function() {
    campo = event.target;
   
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
       
            $("#correo").removeClass('resaltar');
            $("#NOSE8").addClass('ocultar');


    } else {
     
      $("#correo").addClass('resaltar');
       $("#NOSE8").addClass('mostrar');
     


    }
     });
          // $("#correo").click(function(){
              
          //   $("#correo").removeClass('resaltar');
            
          
          //   });



            $("#correo").click(function(){
              
                   $("#NOSE8").removeClass('mostrar');   
                 // return false;
            
           // // return false;   

             });
              
                 
           
              





          // $("#correo").click(function(){
          //    $("#NOSE8").addClass('ocultar');
          
             

          //   });  
            
       // return false; 


});
            



 

   
        
       
          



  
   
     


   