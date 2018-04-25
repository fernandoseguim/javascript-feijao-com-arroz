let pacientes = document.querySelectorAll('.paciente');

calculaIMC(pacientes);

function calculaIMC(pacientes){

    pacientes.forEach(paciente => { 
        
        var peso = paciente.querySelector('.info-peso').textContent;
        var altura = paciente.querySelector('.info-altura').textContent;
        var imc = paciente.querySelector('.info-imc');

        var pesoEhValido = validaPeso(peso);
        var alturaEhValida = validaAltura(altura);
        
        if(pesoEhValido == false){
            imc.textContent = 'Peso inválido!';
            paciente.style.color  = 'red';
            return;
        }

        if(alturaEhValida == false){
            imc.textContent = 'Altura inválida!';
            paciente.style.color  = 'red';
            return;
        }
        paciente.class

        imc.textContent = calculadora(peso, altura);
    });    
}

function validaPeso(peso){    
    
    pesoEhValido = (peso > 0 && peso <= 300);
    return pesoEhValido;
}

function validaAltura(altura){

    var alturaEhValida = (altura > 0 && altura <= 3.00);
    return alturaEhValida;
}

function calculadora(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}