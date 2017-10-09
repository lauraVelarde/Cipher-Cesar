
function cipher (string){
    //Creamos una variable vacia para almacenar el string encriptado
    var newString = ' ';
    //Iteramos cada caracter del string
    for(var i =0;i<word.length;i++){
      //Almacenamos el codigo ASCII de cada caracter
      var one = word.charCodeAt(i);
      //Aplicamos la formula para obtener el codigo ASCII encriptada
      var two = (one-65+33)%26+65;
      //Convertimos el codigo ASCII en letra
      var newStringCode = String.fromCharCode(two);
      //Concatenamos con el string vacio
      var three=newString+newStringCode;
      //Mostramos en la web 
      document.write(three);
    }
}
//Declaramos el valor que pasaremos como argumento
var word=(prompt('Escribe tu palabra debajo')).toUpperCase();
//Llamamos a la funcion
cipher('word');

