$(document).ready(function () {
    const form = document.getElementById("form-register");
    let lines = '';


    //full name validation
    let er = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;

    $("#name").on("input", function () {
        if (er.test($(this).val())) {
            $(this).removeClass("invalido");
        } else {
            $(this).addClass("invalido");
        }
    });

    //masks

    $('#email').mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });

    $('#cellphone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#postal_code').mask('00000-000');

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
            cpf:
            {
                required: true
            },
            postal_code: {
                required: true
            }
        },
        messages: {
            name: "Insira seu nome completo",
            email: "Insira um email válido",
            cellphone: "Insira o seu telefone",
            cpf: "Insira o seu cpf",
            postal_code: "Insira o seu CEP"
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
        line += `<td>${cpf.value}</td>`;
        line += `<td>${postal_code.value}</td>`;
        line += `</tr>`

        lines += line;

        const tableBody = document.querySelector('tbody');

        tableBody.innerHTML = lines;

    };

});