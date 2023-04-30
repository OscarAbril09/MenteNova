

const formulario = document.querySelector('#formu');
let medicoRegistro=[];
medicoRegistro= JSON.parse(localStorage.getItem("dataMedico"));
formulario.addEventListener("submit", (e) => {
    const codigoEmpresa = formulario['codigoEmpresa'].value;
        const nombre = formulario['nombre'].value;
        const apellido = formulario['apellido'].value;
        const cedula = formulario['cedula'].value;
        
        let datos={
            codigo: codigoEmpresa, 
            nombre: nombre, 
            apellido: apellido,
            cc:cedula};
            medicoRegistro.push(datos);
            localStorage.setItem("dataMedic", JSON.stringify({
                medicoRegistro
            }))

            //e.preventDefault();
});



