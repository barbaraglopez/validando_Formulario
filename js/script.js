// # Ejercicio
// - Crear un formulario con email, password, repeatPassword y un checkbox de aceptar terminos y condiciones.
// - Debe hacer una validacion de que ningun campo este vacio y que las contrasenas coincidan.
// - Si la validacion falla, se debe impedir que el usuario se registre.
// - Si la validacion es correcta, mostrar un mensaje de exito.
// - Los mensajes de fallo o exito no pueden verse al mismo tiempo.
// - Al hacer click en registrarse, no se debe recargar la pagina.

const email = document.querySelector('#exampleInputEmail1')
const password = document.querySelector('#exampleInputPassword1')
const repeatPassword = document.querySelector('#exampleInputPassword2')
const check = document.querySelector('#exampleCheck1')
const btn = document.querySelector('#btn')
const box = document.querySelector('#print')
const form = document.querySelector('#form')


    const validatePassword = () => {
        if(password.value == repeatPassword.value){
            box.classList.remove('d-none')
            box.classList.add('success')
            box.classList.remove('error')
            box.innerText=('Sus contraseñas coinciden')
            return true
        }else{
            box.classList.remove('d-none')
            box.classList.add('error')
            box.classList.remove('success')
            box.innerText=(' Sus contraseñas no coinciden')
            return false
        }}

    repeatPassword.addEventListener('change', (e)=>{
        e.preventDefault;
        validatePassword();
    })

    const validateImput = () => {
        if(email.value.length >=1 && password.value.length >=1 && repeatPassword.value.length >=1 && check.checked == true && validatePassword() == true){
            btn.removeAttribute('disabled')
        }else{
            btn.setAttribute('disabled', '')
        }
    }
    
    form.addEventListener('change',(e)=>{
        e.preventDefault;
        validateImput();
    })             

