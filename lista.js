function CriarBotaoSave(){ 
    const botao_save =  document.createElement('button') 
    botao_save.classList.add("btn","btn-success") 
    botao_save.innerHTML = "Salvar Alteração" 
    botao_save.type = "button"
    botao_save.addEventListener("click", SaveItem) 
    return botao_save
}
function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}
function EditItem(){
    var valor_atual_item_lista = this.parentElement.innerText.replace("DeletarEditar","")
    const item_lista = this.parentElement
    const campo_entrada_para_editar = document.createElement("input") 
    campo_entrada_para_editar.value = valor_atual_item_lista
    item_lista.innerHTML = ''
    item_lista.appendChild(campo_entrada_para_editar) 
    item_lista.appendChild(CriarBotaoDelete()) 
    item_lista.appendChild(CriarBotaoSave()) 
    campo_entrada_para_editar.select() 
}
function CriarBotaoEdit(){
    const botao_edit =  document.createElement('button') 
    botao_edit.classList.add("btn", "btn-warning") 
    botao_edit.innerHTML = "Editar" 
    botao_edit.type = "button" 
    botao_edit.addEventListener("click", EditItem) 
    return botao_edit
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Deletar"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}
function SaveItem(){
    const novo_valor_item_lista = this.parentElement.firstChild 
    const item_lista = this.parentElement 
    item_lista.innerHTML = novo_valor_item_lista.value 
    item_lista.appendChild(CriarBotaoDelete()) 
    item_lista.appendChild(CriarBotaoEdit()) 
}
function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    lista.appendChild (novo_item_lista)
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild (novo_item_lista)
    document.getElementById("item").value = " "
}
