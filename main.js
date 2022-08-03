const list_user=[];
//ocultando los elementos
document.getElementById("tabla").style.display="none";

const submit = document.getElementById("submit");
//escuchando el evento del elemento input del html
submit.addEventListener('click', validar);
//otra via para escuchar el evento
/*window.onload = function () {
    document.getElementById("submit").onclick = validar;
}*/

//creando varable donde voy a guarar
function cleanForm(){
    document.getElementById('name').value="";
    document.getElementById('lastname').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    document.getElementById('password1').value="";
}

function validar(elEvento) {
    //elEvento se obtiene de manera magica y el window.event solo para funcione bien en internet explore
    var event = elEvento || window.event; 
    //para evitar la accion por default del event
    event.preventDefault();
    //obteniendo los datos proporcionado por el usuario
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById('email').value;
    var contra = document.getElementById('password').value;
    var contra1 = document.getElementById('password1').value;
    //expresion regular para el correo
    let expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)(\.zw{2,3,4})+$/;

    //validando que los campos no esten vacios
    if (nombre == "" || apellido == "" || email == "" || contra == "" || contra1 == "") {
        alert('no se puede dejar los campos vacios');
    }
    //validando que no entren letras en el nombre
    else if (nombre.match(/[0-9]/g) || nombre.lenght <= 3) {
        alert('El nombre no puede contener digitos y su longitud tiene que ser mayor de 3 caracteres');
        document.getElementById('name').focus();
        cleanForm();
    }
    //validando que no entren letras en el apellido
    else if (apellido.match(/[0-9]/g) || apellido.length <= 3) {
        alert('El apellido no puede contener digitos y su longitud tiene que ser mayor de 3 caracteres');
        document.getElementById('lastname').focus();
        cleanForm();
    }
    //validando el correo con el metodo .test() return true o false si cumple o no con el formato
    else if (expr.test(email)) {
        alert("el email debe  de cumplir con la estructura ejemplo abc@example.com");
        document.getElementById('email').focus();
        cleanForm();
    }
    //validando que las cotraseñas sean identicas
    else if (contra !== contra1) {
        alert('las contraseña no coinciden');
        document.getElementById('password').focus();
        cleanForm();
    }
    //que cumplan con tener letras, digitos y que tengas mas de 8 caracteres 
    else if (contra.length <= 8 || contra.search(/\w/)) {
        alert('su contraseña debe de tener al menos 8 caracteres, mayuscula, minuscula y numeros');
        cleanForm();
    }
    //en caso de que no se cumplan las condiciones anteriores 
    //guardo los elementos en un objeto y lo muestro en una tabla
    else {
        //creo el objeto y lo inicializo con los datos
        let user={
            name:nombre,
            lastname:apellido,
            email: email,
            password:contra
        }
        //añado el objeto a un lista
        list_user.push(user);
        if(list_user.length!=0){
            document.getElementById("tabla").style.display=""
        }
        //muestro los elementos en la tabla
        //utilizo el metodo map para modificar el arreglo y mostrar los elementos
        let table_list= list_user.map(u=>`<tr><td>${u.name}</td><td>${u.lastname}</td><td>${u.email}</td></tr>`).join("")
        document.getElementById('tbody').innerHTML=table_list;
        //limpio todos los campos
        cleanForm();

        

        
    }
    
    
}
