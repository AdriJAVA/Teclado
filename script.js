

window.onload = function(){
    
     var mayuscula = false;
    
     var shift = false;
    
     var letras = document.getElementsByName("letra");
    
     var pantalla = document.getElementById("pantalla");
    
     var btnMay = document.getElementById("may");
            
     var lista = [];
    
     var ind = 0;
    
     var func = false;

     for(var i = 0; i < letras.length; i++){
         mostrar(letras[i]);
        }
    
    
    
      function mostrar(boton){
            boton.onclick = function(){
                if(boton.value == "Shift"){
                    mayuscula = true; 
                    shift = true;
                }else if(boton.value == "ESPACIO"){
                    pantalla.value += " ";
                }
                else if(boton.id == "borrar"){
                    pantalla.value = pantalla.value.substr(0,pantalla.value.length-1);
                    
                    if(func == true){
                        pantalla.value = "";
                    }
                }else if (mayuscula == false){
                    pantalla.value +=  boton.value.toLowerCase();
                }else if(mayuscula == true){
                     pantalla.value +=  boton.value;
                }
                
                 if(shift == true && boton.value != "Shift"){
                    mayuscula = false;
                    shift = false;
                     
                }
               
             }
                
     }
    
       btnMay.onclick = function(){
          if(!mayuscula){
            mayuscula = true;
              btnMay.style.backgroundColor = "black";
              btnMay.style.color = "white";
          }else{
              mayuscula = false;
              btnMay.style.backgroundColor = "white";
              btnMay.style.color = "black";
          }
      }
       
       document.getElementById("guardar").onclick = function(){
           lista.push(pantalla.value);
           pantalla.value = "";
      }
       
       document.getElementById("mostrar").onclick = function(){
          
           pantalla.value = lista[ind];
           
           func = true;
           
      }
       
       document.getElementById("flechader").onclick = function(){

           if(ind>=lista.length-1){
               ind = 0;
           }else{
            ind++;
           }
           pantalla.value = lista[ind];
       }
       
       document.getElementById("flechaizq").onclick = function(){

           if(ind<1){
               ind = lista.length-1;
           }else{
            ind--;
           }
           pantalla.value = lista[ind];
       }
    
       document.getElementById("prin").onclick = function(){

           ind = 0;
           pantalla.value = lista[ind];
       }
       
       document.getElementById("fin").onclick = function(){

           ind = lista.length-1;
           pantalla.value = lista[ind];
       }
       
       document.getElementById("eliminar").onclick = function(){
           lista.splice(ind,1);
           pantalla.value = "";
            
       }
}
             

    
