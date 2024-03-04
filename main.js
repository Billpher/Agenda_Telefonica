const form = document.getElementById('agenda');

let linhas = '';
let nomes = [];
let telefones = []

form.addEventListener('submit', function(e) {

    e.preventDefault();

    adiconarContato();

})


function adiconarContato() {

    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const telefoneAtual = telefone.value;

    if(nomes.includes(nome.value) && telefones.includes(telefoneAtual)) {
        alert(`Ja exsite o telefone ${telefoneAtual} para o nome ${nome.value}`)
    }if (telefoneAtual.length < 11) {
        alert(`O numero de telefone deve conter pelo menos 11 numeros`)
    }else {

        nomes.push(nome.value);
        telefones.push(telefone.value);

        const telefoneParte1 = telefoneAtual.slice(0,2)
        const telefoneParte2 = telefoneAtual.slice(2,7)        
        const telefoneParte3 = telefoneAtual.slice(7,11)
        const telefoneMascara = `(${telefoneParte1}) ${telefoneParte2}-${telefoneParte3}`

        let linha = `<tr>`;
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefoneMascara}</td>`;
        linha += `</tr>`;

        linhas += linha;   

        atualizaTabela();
    }
    
    nome.value = ''
    telefone.value = ''

}

function atualizaTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}