const modalBicicleta = new bootstrap.Modal(document.getElementById('modalBiclicleta'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    marca_editar.value = fila.children[1].innerHTML
    tipo_editar.value = fila.children[2].innerHTML
    color_editar.value = fila.children[3].innerHTML
    modalBicicleta.show() 
})