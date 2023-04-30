
const formulario = document.querySelector('#formu');

let pacienteRegistro = JSON.parse(localStorage.getItem("dataPacient")) || [];
//console.log(pacienteRegistro);

formulario.addEventListener("submit", (e) => {
    const nombre = formulario['nombre'].value;
    const apellido = formulario['apellido'].value;
    const cedula = formulario['cedula'].value;
    const edad = formulario['edad'].value;
    let cont=(pacienteRegistro.length)+1000;
    const id = cont;
    
        let datos={ 
            nombre: nombre, 
            apellido: apellido,
            cc:cedula,
            edad: edad,
            id:id};

            pacienteRegistro.push(datos);

            localStorage.setItem("dataPacient", JSON.stringify(
                pacienteRegistro
            ))
            console.log(pacienteRegistro);
    //e.preventDefault();
});


