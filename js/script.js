$(document).ready(function () {
             var a;
   
       
           
                $('.showSingle').click(function() {
              $('.targetDiv').hide();
             a=$(this).attr('value');
            
              $('#div'+$(this).attr('value')).show();
              console.log(a);
    
               });
              $('#su').on('click', function(){
               
                               var w= document.createElement("li");
            w.innerHTML = "pp";           
                $('#div'+a).append(w);
                
       
             
        });
});