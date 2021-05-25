function validaciones() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    let firstNameRGEX = /^[a-zA-Z]/;
    let lastNameRGEX = /^[a-zA-Z]/;
    let emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let firstNameResult = firstNameRGEX.test(firstName);
    let lastNameResult = lastNameRGEX.test(lastName);
    let emailResult = emailRGEX.test(email);
        

    if(firstNameResult == false)  {
     window.alert('Por favor indica un nombre válido');
    return false;
    }

    if(lastNameResult == false)  {
     window.alert('Por favor indica un apellido válido');
    return false;
    }

    if(emailResult == false)  {
     window.alert('Por favor indica un email válido');
    return false;
    }


    if (password.length < 6) {
        window.alert("Por favor indica una contraseña de 6 o mas caracteres");
        return false;
    }

    if(password==repeatPassword){  
        return true;  
    }  
    else{  
    window.alert("Las contraseñas deben coincidir!");  
    return false;  
    }  

    return true;
}