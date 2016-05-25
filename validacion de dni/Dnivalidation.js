$(document).ready(function(){
 $("#NOSE8").addClass('ocultar');
document.getElementById('dni').addEventListener('input', function() {
    campo = event.target;
   
        
    coso = /\d{2}.\d{3}.\d{3}/
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (coso.test(campo.value)) {
       
            $("#dni").removeClass('resaltar');
            $("#NOSE8").addClass('ocultar');


    } else {
     
      $("#dni").addClass('resaltar');
       $("#NOSE8").addClass('mostrar');
     


    }
     });
          // $("#correo").click(function(){
              
          //   $("#correo").removeClass('resaltar');
            
          
          //   });



            $("#dni").click(function(){
              
                   $("#NOSE8").removeClass('mostrar');   
                 // return false;
            
           // // return false;   

             });
              
                 
           
              





          // $("#correo").click(function(){
          //    $("#NOSE8").addClass('ocultar');
          
             

          //   });  
            
       // return false; 


});
            



 

   