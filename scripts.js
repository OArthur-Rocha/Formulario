const form = document.getElementById("form");
const userName = document.getElementById('username');
const email= document.getElementById('email');
const estadoCivil = document.getElementById("estado-civil");
const birthday = document.getElementById("birthday");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const userNameValue = userName.value;
    const emailValue = email.value;
    const birthdayValue = birthday.value;
    

    if (userNameValue.length >= 15) {
        setSuccessFor(userName);
    } else {
        setErrorFor(userName, "Nome curto demais. Mínimo de 15 caracteres."); 
    }
  
    if(emailValue.length >= 10) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, "Email curto demais");
    }
  

    if (estadoCivil.value === "solteiro") {
        const dataNascimento = new Date(birthdayValue);
        const dataLimite = new Date();
        dataLimite.setFullYear(dataLimite.getFullYear() - 15);
    
        if (dataNascimento > dataLimite) {
          alert("Para pessoas solteiras, é necessário ter mais de 15 anos.");
          return false;
        }
    }
    if (!validarFormulario()) {
        return false;
      }
    
    alert("Dados enviados com sucesso!");   

}

function validarFormulario() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checked = false;
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checked = true;
        break;
      }
    }
  
    if (!checked) {
      alert("Selecione pelo menos uma área de interesse");
      return false; 
    }
  
    return true; 
  }



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}