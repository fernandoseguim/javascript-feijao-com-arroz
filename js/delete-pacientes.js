var tabelaPacientes = document.querySelector('#tabela-pacientes');

tabelaPacientes.addEventListener('dblclick', (event) =>{
    event.target.parentNode.classList.add('fadeOut');
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});