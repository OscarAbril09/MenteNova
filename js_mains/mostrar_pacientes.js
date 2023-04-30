const tabla = document.querySelector('#tabla');
let data =(JSON.parse(localStorage.getItem("dataPacient")));

console.log((JSON.parse(localStorage.getItem("dataPacient"))), "sin dentrar");
console.log(data)
console.log(tabla);
let campos = "";
data.forEach(e=> {
    campos+=`
    <tr>
        <th scope="row">${e.id}</th>
        <td>${e.nombre}</td>
        <td>${e.apellido}</td>
        <td>${e.edad}</td>
    </tr>`
});

tabla.innerHTML = campos;

