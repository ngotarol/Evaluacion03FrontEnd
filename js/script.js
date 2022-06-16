function revisar() {
    return revisarEmail() && revisarPass() && postal() && revisaCiudad() && revisaTelefonos() && revisarComuna() && revisarPasatiempos();
}

function revisaTelefonos() {
    return revisaFono("fono1", "fonofijo") || revisaFono("fono2", "fonomovil")
}

function revisaFono(fono, fonodiv) {
    console.log("Validando teléfono");
    var input = document.getElementById(fono);
    var div = document.getElementById(fonodiv);
    var fono = input.value;
    div.innerHTML = "";
    result = false;

    if (!esVacio(fono) && largoNum(fono, 9)) {
        result = true;
    }
    else {
        div.innerHTML = "Completar número";
    }
    return result
}

function esVacio(input) {
    return input.length == 0
}

function revisarComuna() {
    console.log("Validando comuna");
    var input = document.getElementById("comuna");
    var div = document.getElementById("comunadiv");
    div.innerHTML = "";
    if (input.selectedOptions[0].value != 0) {
        return true;
    }
    else {
        div.innerHTML = "Seleccione una comuna";
        return false;
    }
}


function revisarEmail() {
    console.log("Validando correo");
    var input = document.getElementById("email");
    var div = document.getElementById("emaildiv");
    var email = input.value;
    div.innerHTML = "";
    var result = false;
    if (!esVacio(email)) {
        var partes = email.split("@");
        if (partes.length == 2) {
            let user = partes[0];
            let dorime = partes[1];
            if (user.length != 0 && dorime.includes(".") && !dorime.endsWith(".")) {
                result = true;
            }
            else {
                div.innerHTML = "Ingrese un email válido";
            }
        }
        else {
            div.innerHTML = "Ingrese un email válido";
        }
    } else {
        div.innerHTML = "Complete el campo Email";
    }
    return result;
}

function revisaCiudad() {
    console.log("Validando Ciudad");
    var input = document.getElementById("city");
    var div = document.getElementById("ciudad");
    var ciudad = input.value;
    div.innerHTML = "";
    var result = false;
    if (!esVacio(ciudad)) {
        result = true;
    }
    else {
        div.innerHTML = "Complete el campo ciudad";
    }
    return result
}

function revisarPass() {
    console.log("Validando Contraseña");
    var div1 = document.getElementById("pass1div");
    var input1 = document.getElementById("pass1");
    var pass1 = input1.value;
    var div2 = document.getElementById("pass2div");
    var input2 = document.getElementById("pass2");
    var pass2 = input2.value;
    var result = false;
    div1.innerHTML = "";
    div2.innerHTML = "";

    if (largoPass(pass1)) {
        if (espacioPass(pass1)) {
            if (letraPass(pass1)) {
                if (numeroPass(pass1)) {
                    if (passIguales(pass1, pass2)) {
                        result = true;
                    }
                    else {
                        div1.innerHTML = "Contraseñas no coinciden";
                        div2.innerHTML = "Contraseñas no coinciden";
                    }
                }
                else {
                    div1.innerHTML = "La contraseña debe tener al menos un número"
                }
            }
            else {
                div1.innerHTML = "La contraseña debe tener al menos una letra"
            }
        }
        else {
            div1.innerHTML = "La contraseña no puede contener espacios"
        }
    }
    else {
        div1.innerHTML = "Contraseña debe tener entre 3 y 6 caracteres, al menos un dígito y una letra";
    }

    return result;
}

function passIguales(pass1, pass2) {
    return pass1 == pass2;
}

function largoPass(pass1) {
    return pass1.length >= 3 && pass1.length <= 6;
}

function espacioPass(pass1) {
    return pass1.indexOf(" ") == -1;
}

function letraPass(pass1) {
    let letra = false;
    for (let i = 0; i < pass1.length; i++) {
        let passCharCode = pass1.charCodeAt(i);
        if ((passCharCode >= 65 && passCharCode <= 90) || (passCharCode >= 97 && passCharCode <= 122)) {
            i = pass1.length;
            letra = true;
        }
    }
    return letra;
}

function numeroPass(pass1) {
    let num = false;
    for (let i = 0; i < pass1.length; i++) {
        let passCharCode = pass1.charCodeAt(i);
        if ((passCharCode >= 48 && passCharCode <= 57)) {
            i = pass1.length;
            num = true;
        }
    }
    return num;
}

function postal() {
    console.log("Validando código postal");
    var input = document.getElementById("code");
    var div = document.getElementById("postal");
    var code = input.value;
    div.innerHTML = "";
    result = false;

    if (largoNum(code, 7)) {
        result = true;
    }
    else {
        div.innerHTML = "Ingrese un código postal válido";
    }
    return result;
}

function largoNum(num, length) {
    return !Number.isNaN(Number(num)) && (num.length == length)
}

function revisarPasatiempos() {
    console.log("Validando pasatiempos");
    var checkboxes = document.getElementsByClassName("inputPasatiempo");
    var div = document.getElementById("pasatiemposdiv");
    div.innerHTML = "";
    var marcados = 0
    var result=false;

    for (let index = 0; index < checkboxes.length; index++) {
        let element = checkboxes[index];
        if (element.checked) {
            marcados++;
        }
    }
    if (marcados >= 2) {
        result= true;
    }
    else{
        div.innerHTML = "Seleccione al menos dos pasatiempos";
    }
    return result;
}