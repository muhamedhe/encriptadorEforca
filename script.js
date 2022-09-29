
function verify(){
    var radioButtonGroup = document.getElementsByName("encript");
    var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked).value;
    var text =  document.getElementById("key").value;

    console.log("opc: ",checkedRadio,"  texto: ",text)
    if(checkedRadio=="encriptar"){
        cipher(text);
    } else {
        decipher(text);
    }
}

function setDisplay(opc,value){
    var display = document.getElementById("display");
    display.value=(opc + value);
}

//Coleta o texto do input
function cipher(text){
    var resultArray = "";
    //codifica e gera chave aleatória
    Array.prototype.forEach.call(
      text.slice(0,text.length), function(child,index){
        var mult = Math.floor(Math.random()*9)+1;
        
        resultArray += ((child.charCodeAt(0) * mult).toString(16)).length;
        resultArray += mult;
        resultArray += (child.charCodeAt(0) * mult).toString(16);
      }
    );
    //console.log("Encriptado: ", resultArray);

    //Escreve chave encriptada
    
    setDisplay("Encriptado: ",resultArray);
    
    
    //Chama método para ler chave encriptada
    //decipher(resultArray,0);
  }
  
  //Reverte o valor extraido da função 'decipher' ao original
  function revert(aux,mult){
    return String.fromCharCode(
      parseInt(
        (
          parseInt(aux,16)  / parseInt(mult)
        ).toString(16) , 16
      )
    );
  }
  
  //Verifica onde está o valor necessário à ser revertido e encaminha para 'revert'
  function decipher(key,start,value) {
   
    var increase = 2;
    var aux = "";
    if (value == undefined){value=""};
    if (start == undefined){start=0};
    
    //Inicia/Verifica fase de percurso da chave
    if(start<key.length){
      var mult = key[start+1];
      Array.prototype.forEach.call(
        key.slice(
          start + increase,
          parseInt(start) + parseInt(increase) + parseInt(key[start+increase-2])
        ), function(child,index){
          aux += child;
        }
      );
      value += revert(aux,mult);
      //Chama novamente a função
      return decipher(
          key,
          parseInt(start) + parseInt(increase) + parseInt(key[start+increase-2]),
          value
        );
    } else {
        //Retora o valor "desconvertido" da chave
        return setDisplay("Desencriptado: ",value);
      //console.log("Desencriptado: ",value);
    }
    
  }
  
  
  /*
  cipher("1");
  */
  /*
  decipher("3936933123372a72161");
  */