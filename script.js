$(document).ready(function () {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", validate);

    function validate(e) {
        const a_field = document.getElementById("a_field").value;
        const b_field = document.getElementById("b_field").value;
        let valid = true;

        
        if (a_field < b_field) {
            alert("Números validados!")
        } else {
            alert("Número inválido! O segundo número deve ser maior do que o primeiro")
        }
    }
});