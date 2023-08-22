let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagem_tarefas")
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || []

function listarTarefa(){
    listElement.innerHTML = "";
    tarefas.map(item =>{
        let toDoElement = document.createElement("li");
        let tarefasText = document.createTextNode(item);
        toDoElement.appendChild(tarefasText); //colocar dentro do li, as tarefas
        listElement.appendChild(toDoElement);  // colocar os tópicos dentro da div 
    })
}
listarTarefa();

function adicionarTarefa(): boolean | void{
    if(inputElement.value === ""){
        alert("Digite alguma tarefa!")
        return false;
    }
    else{
        let tarefaDigitada:string = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";

        listarTarefa();
        salvarDados();
        
    }
}

buttonElement.onclick = adicionarTarefa

function salvarDados(){
    localStorage.setItem("@listagem_tarefas",JSON.stringify(tarefas))
}

