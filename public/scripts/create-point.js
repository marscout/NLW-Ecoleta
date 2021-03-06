function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {
            for( state of states ){
                ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
            }

        })
}
populateUFs();

function getCities() {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option>Selecione uma Cidade</option>"
    citySelect.disabled = true
    fetch(url)
        .then( res => res.json() )
        .then( cities => {
            for( city of cities ){
                citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false;
        })
}

document.querySelector("select[name=uf]")
        .addEventListener("change", getCities)


//Itens de coleta

const itensToCollect = document.querySelectorAll(".itens-grid li")

for(let item of itensToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems =   document.querySelector("input[name=itens] ")
let selectedItens = []


function handleSelectedItem(event) {
    const itemLi = event.target

    //adicionar ou remover uma classe com Js

    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id    

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados

    const alreadySelected = selectedItens.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })
    
    //se ja estiver selecionado, tirar da seleção
    if(alreadySelected >= 0){
        //tirar da seleção
        const filteredItens = selectedItens.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItens = filteredItens
    }
    else{
        //se não estiver selecionado, adcionar à seleção
        selectedItens.push(itemId)

    }
    console.log(selectedItens)


    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItens
    
}