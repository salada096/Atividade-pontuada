
document.addEventListener("DOMContentLoaded", function() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if(nome == "" || email == "" || senha == "" || senha2 == ""){
        alert("Preencha todos os campos necessários!");
        return false;
    }

  else{  
     alert("Mensagem enviada com sucesso!");  
      }
});

