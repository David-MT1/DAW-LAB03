
function ejer01(){
    const date = new Date();
    let dia = parseInt(prompt("Ingresa el día del mes (1-31):"));

    const semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    if (dia >= 1 && dia <= 31) {
        date.setDate(dia);
        let diaSemana = date.getDay();
        alert("Ese día es " + semana[diaSemana]);
    } else {
        alert("Número inválido");
    }
}
function ejer02(){
    const divEjer02 = document.getElementById("ejer02");
    divEjer02.innerHTML =
    `
    <input type = "text" id = "palabra" placeholder = "Ingresa la palabra a voltear">
    <button onclick = "voltear()">Voltear</button>
    <p id = "resultado"></p>
    `;
    
}
function voltear(){
        const palabra = document.getElementById("palabra").value;
        let palabraVolteada = "";
        for (let i = palabra.length - 1; i >= 0; i--){
            palabraVolteada += palabra[i];
        }
        document.getElementById("resultado").innerHTML = "La palabra volteada es: " + palabraVolteada;
}

function ejer03() {
    const hoy = new Date();
    const año = hoy.getFullYear();

    let fechaArequipa = new Date(año, 7, 15);    
     
    const divEjer03 = document.getElementById("ejer03");
    divEjer03.innerHTML = 
    `
    <p>La fecha de hoy es: ${hoy.toLocaleDateString()}</p>
    <p>La fecha de Arequipa es: ${fechaArequipa.getDate()}</p>
    <P>Faltan ${Math.ceil((fechaArequipa - hoy) / (1000 * 60 * 60 * 24))} días para el aniversario de Arequipa</P>
    `;
}
function ejer04() {
    const divEjer04 = document.getElementById("ejer04");
    divEjer04.innerHTML = 
    `
    <input type=text id="url" placeholder="Ingresa la URL meet">
    <button onclick="extraerID()">Extraer ID</button>
    <p id="idResultado"></p>

    `
    ;
}
function extraerID() {  
    const url = document.getElementById("url").value;
    let codigo = url.split("/").pop();
    codigo = codigo.replace(/-/g, "");
    document.getElementById("idResultado").innerHTML = "El ID de la reunión es: " + codigo;
}
