$(document).ready(function () {
    const form = document.getElementById("form-register");
    let lines = '';


    //masks

    $('#email').mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });

  

    $('#cellphone').mask('(00) 00000-0000');

   
    $('#form-register').validate({
        rules: {
            name: {
                required: true
                
            },
            email: {
                required: true,
                email: true
            },
            cellphone: {
                required: true
            },
        },
        messages: {
            name: "Insira seu nome completo",
            email: "Insira um email válido",
            cellphone: "Insira o seu telefone",
        },
        submitHandler: function (form) {
           
            register();
        },
        invalidHandler: function (form, validator) {
            let invalidFields = validator.numberOfInvalids();

            if (invalidFields) {
                alert('Existem '+invalidFields+' campos incorretos');
            }
        }
    });

    function register() {

        

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const cellphone = document.getElementById('cellphone');
        const cpf = document.getElementById('cpf');
        const postal_code = document.getElementById('postal_code');




        let line = '<tr>';
        line += `<td>${name.value}</td>`;
        line += `<td>${email.value}</td>`;
        line += `<td>${cellphone.value}</td>`;
        line += `</tr>`

        lines += line;

        const tableBody = document.querySelector('tbody');

        tableBody.innerHTML = lines;

    };

});