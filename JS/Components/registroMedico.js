class RegistroMedico extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/`
        <div class="container-fluid row padre">
        <h1 class="col-6 h-25 w-100 d-flex justify-content-center mt-5 ">REGISTRO</h1>
            <form class="row h-50 p-0 d-flex justify-content-center" id="formu">
                <input class="inputs form-control col-12 mt-4 w-50" type="number" id="codigoEmpresa" placeholder="Codigo empresa:" required>
                <div class="w-100"></div>
                <input class="inputs form-control col-12 mt-4 w-50" type="text" id="nombre" placeholder="Nombre:" required>
                <div class="w-100"></div>
                <input class="inputs form-control col-12 mt-4 w-50" type="text" id="apellido" placeholder="Apellido:" required>
                <div class="w-100"></div>
                <input class="inputs form-control col-12 mt-4 w-50" type="number" id="cedula" placeholder="Ingresar CC:" required>
                <div class="w-100"></div>
                <input class="submit mt-4" href="" type="submit"  id="btnFormulario" value="Enviar">
            </form>    
        </div>
    `
    }
}

customElements.define("main-registro-medico",RegistroMedico)