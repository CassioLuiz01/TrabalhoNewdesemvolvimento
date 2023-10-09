function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var Telefone = document.getElementById("Telefone").value;
    var mensagem = document.getElementById("mensagem");
  
    if (nome === "" || email === ""|| Telefone === "") {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      return false;
    } else {
      mensagem.textContent = "Formulário enviado com sucesso!";
      return true;
    }
  }
  