$(document).ready(function () {
    const form = document.getElementById("task-register");
    let lines = '';
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
    
        const task = document.getElementById('task');
       
        let line = '<tr>';
        line += `<td><input type="checkbox" id="scales" name="scales">
        <label for="scales">${task.value}</label></td>`;
        line += `</tr>`
    
        lines += line;
    
        const tableBody = document.querySelector('tbody');
    
        tableBody.innerHTML = lines;
    
    })
    
});