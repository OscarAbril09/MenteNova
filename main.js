class MainSintomas extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

render(){
    this.innerHTML=/*html*/`
    <main class="d-flex">
        <aside class="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-5">
                    <img class="rounded-circle" src="../img/logo.jpg" alt="" width="120rem">
                </div>
                <div class="col-6">
                    <h2 class="text-white fw-bold">Nombre Paciente</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center mt-5">
                    <a href="./sintomas.html" style="background: #EE5645;" class="color-a btn btn-warning rounded-pill text-white fw-bold btn-lg w-75 active"
                        role="button" aria-disabled="false">SINTOMAS</a>
                </div>
                <div class="col-12 d-flex justify-content-center mt-3">
                    <a href="../Paciente/medicina.html"
                        class="color-a btn btn-warning rounded-pill text-white fw-bold btn-lg w-75" role="button"
                        aria-disabled="false">MEDICINA</a>
                </div>
                <div class="col-12 d-flex justify-content-center mt-3">
                    <a href="../Paciente/cita.html" class="color-a btn btn-warning rounded-pill text-white fw-bold btn-lg w-75"
                        role="button" aria-disabled="false">CITA</a>
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-12 mt-5">
                    <a href="../Paciente/loginUsuario.html" class="btn btn-danger btn-lg rounded-pill fw-bold" 
                        role="button" aria-disabled="false">SALIR</a>
                </div>
            </div>
        </aside>
        <section class="d-flex justify-content-center flex-column align-items-center w-100">
            <div class="row w-100 ">
                <div class="col-10">
                    <h1 class="text-white fw-bold align-self-start ">Sintomas</h1>
                </div>
            </div>
            <div class="row row-cols-3 contenedor d-flex align-items-center">
                <div class="col">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-warning" for="option1">
                        <img src="../img/dolor-muscular.png" width="110%" height="110%" alt="">
                    </label>
                </div>
                <div class="col">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-warning" for="option2">
                        <img class="rounded" src="../img/mareado.png" width="110%" height="110%" alt="">
                    </label>
                </div>
                <div class="col">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-warning" for="option3">
                        <img src="../img/vomitos.png" width="110%" height="110%" alt="">
                    </label>
                </div>
                <div class="col">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-warning" for="option4">
                        <img src="../img/fiebre.png" width="110%" height="110%" alt="">
                    </label>
                </div>
                <div class="col">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-warning" for="option4">
                        <img src="../img/diarrea.png" width="110%" height="110%" alt="">
                    </label>
                </div>
                <div class="col">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-warning" for="option4">
                        <img src="../img/nausea.png" width="110%" height="110%" alt="">
                    </label>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <label for="">Otros: </label>
                    <input type="text" placeholder="Otro sintoma">
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button type="button" class="btn btn-warning">Enviar</button>
                </div>
            </div>
        </section>
    </main>
    `
}}

// Asociar
customElements.define("main-sintomas",MainSintomas);