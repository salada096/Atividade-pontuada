
document.addEventListener("submit", function() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome == "" || email == ""|| mensagem == ""){
        alert("Preencha todos os campos necessários!");
        return false;
    }

  else{  
     alert("Mensagem enviada com sucesso!"); 
    form.submit(); 
      }
});

