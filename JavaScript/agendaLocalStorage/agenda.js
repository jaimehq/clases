let direccion={
    calle:"",
    poblacion:"",
    provincia:""
}
let telefonos=[];
function agregar(){
    let nombre=document.getElementById("nombre").value;
    direccion.calle=document.getElementById("calle").value;
    direccion.provincia=document.getElementById("provincia").value;
    direccion.poblacion=document.getElementById("poblacion").value;
    let movil=document.getElementById("movil").value;
    let casa=document.getElementById("casa").value;
    let trabajo=document.getElementById("trabajo").value;
    telefonos=[movil,casa,trabajo];
    localStorage.setItem(nombre,JSON.stringify({direccion,telefonos}));
    document.getElementById("nombre").value="";
    document.getElementById("calle").value="";
    document.getElementById("provincia").value="";
    document.getElementById("poblacion").value="";
    document.getElementById("movil").value="";
    document.getElementById("casa").value="";
    document.getElementById("trabajo").value="";


}
function buscar(){
    let nombre=document.getElementById("nombre").value;
    let contacto=JSON.parse(localStorage.getItem(nombre));
    let salida=document.getElementById("salidaTexto");
    let cadena=`<table cellspacing="0" width="60%">
    <tr>
        <th colspan="3">INFORMACION PERSONAL</th>
    </tr>
    <tr>
        <td colspan="3">Nombre:</td>
    </tr>
    <tr>
        <td colspan="3">
            ${nombre}
        </td>
    </tr>
    <tr>
        <th colspan="3">DOMICILIO</th>
    </tr>
    <tr>
        <td>Calle, nº, piso</td>
        <td>Población</td>
        <td>Provincia</td>
    </tr>
    <tr>
        <td>${contacto.direccion.calle}</td>
        <td>${contacto.direccion.poblacion}</td>
        <td>${contacto.direccion.provincia}</td>
    </tr>
    <tr>
        <th colspan="3">TELEFONOS</th>
    </tr>
    <tr>
        <td>Movil</td>
        <td>Casa</td>
        <td>Trabajo</td>
    </tr>
    <tr>
        <td>${contacto.telefonos[0]}</td>
        <td>${contacto.telefonos[1]}</td>
        <td>${contacto.telefonos[2]}</td>
    </tr>
</table>`;
document.getElementById("nombre").value="";
salida.innerHTML=cadena;
}
document.getElementById("agregar").onclick = agregar;
document.getElementById("buscar").onclick = buscar;