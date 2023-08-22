"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@listagem_tarefas");
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefa() {
    listElement.innerHTML = "";
    tarefas.map(item => {
        let toDoElement = document.createElement("li");
        let tarefasText = document.createTextNode(item);
        toDoElement.appendChild(tarefasText); //colocar dentro do li, as tarefas
        listElement.appendChild(toDoElement); // colocar os tópicos dentro da div 
    });
}
listarTarefa();
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listarTarefa();
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
