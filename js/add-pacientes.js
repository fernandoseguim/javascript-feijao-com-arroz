let botaoAdicionar = document.querySelector('#adicionar-paciente');
var novoRegistro = document.querySelector('form');
var listaErros = document.querySelector('#mensagens-erro');

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault();
        
    adicionarNovoRegistroNaTabela(novoRegistro);
    
})

function adicionarNovoRegistroNaTabela(novoRegistro){
    
    var paciente = obterDadosDoFormulario(novoRegistro);

    if(validaPaciente(paciente) == false){
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    novoRegistro.reset();

    listaErros.innerHTML = "";
}

function adicionaPacienteNaTabela(paciente) {
    
    var tabela = document.querySelector("#tabela-pacientes");

    var novoPaciente = criarNovaLinha(paciente)
    
    tabela.appendChild(novoPaciente);

}

function criarNovaLinha(paciente){
    
    var novaLinha = document.createElement('tr'); 
    
    var pacienteTD = criarPacienteTD(paciente);
            
    novaLinha.appendChild(pacienteTD.nome);
    novaLinha.appendChild(pacienteTD.peso);
    novaLinha.appendChild(pacienteTD.altura);
    novaLinha.appendChild(pacienteTD.gordura);
    novaLinha.appendChild(pacienteTD.imc);

    return novaLinha;
}

function obterDadosDoFormulario(novoRegistro){
    
    var paciente = {
        nome: novoRegistro.nome.value,
        peso: novoRegistro.peso.value,
        altura: novoRegistro.altura.value,
        gordura: novoRegistro.gordura.value,
        imc: calculadora(novoRegistro.peso.value, novoRegistro.altura.value)
    }
    return paciente;
}

function criarPacienteTD(paciente){

    var pacienteTD = {
        nome: document.createElement('td'),
        peso: document.createElement('td'),
        altura:document.createElement('td'),
        gordura: document.createElement('td'),
        imc: document.createElement('td')
    }

    pacienteTD.nome.textContent = paciente.nome;
    pacienteTD.peso.textContent = paciente.altura;
    pacienteTD.altura.textContent = paciente.peso;
    pacienteTD.gordura.textContent = paciente.gordura;
    pacienteTD.imc.textContent = paciente.imc;

    return pacienteTD;
}

function validaPaciente(paciente){
    
    var result = true;
    var erros = [];
    
    if(validaPeso(paciente.peso) == false){
        result = false;
        erros.push('Peso inválido');
    }

    if(validaAltura(paciente.altura) == false){
        result = false;
        erros.push('Altura inválida');
    }
    
    exibeMensagensDeErro(erros);

    return result;
}

function exibeMensagensDeErro(erros) {
    listaErros.innerHTML = '';

    erros.forEach(erro => {
        var erroItem = document.createElement('li');
        erroItem.textContent = erro;
        listaErros.appendChild(erroItem);
    })
}
