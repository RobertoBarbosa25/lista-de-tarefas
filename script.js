function adicionarTarefa(event) {
    const campoTexto = document.querySelector('input');
    const ul = document.querySelector('ul');

    if (event.code == 'Enter') {
        let texto = campoTexto.value;
        let novoItem = document.createElement('li')
        novoItem.innerText = texto;
        ul.appendChild(novoItem);

        campoTexto.value = '';
    }
}

const input = document.querySelector('input');
input.addEventListener('keypress', adicionarTarefa);