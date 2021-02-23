//Variables
const btnEnviar = document.querySelector('#enviar');
//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('#enviar-mail');


eventListeners();
function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //validando el formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    
}




//Funciones
function iniciarApp(){
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }

//valida el formulario
 function validarFormulario(e){
     if (e.target.value.length > 0) {
        
     } else {
         e.target.classList.add('border', 'border-red-500');

         mostrarError('Todos los campos deben ser diligenciados');
         }
    if (e.target.type === 'email') {

        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (er.test(e.target.value)) {
            console.log('Email valido')
            //mostrarError('El email no es valido');
        } else{
            console.log('Email no valido');
        }
        
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    const errores = document.querySelectorAll('.error');
        
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
    
}