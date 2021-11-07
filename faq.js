// BUSCAR ITENS
const itensPerguntasRespostas = document.querySelectorAll('.item');

// ITEM CLICADO
itensPerguntasRespostas.forEach(function(item) {
    item.addEventListener('click', function() {        
        const estaAtiva = item.classList.contains('ativo')
        
        if(!estaAtiva) {            
            itensPerguntasRespostas.forEach(function(item) {
                item.classList.remove('ativo')
            })
            
            item.classList.add('ativo')
                   
        } else {
            item.classList.remove('ativo')
        }        
    })
})