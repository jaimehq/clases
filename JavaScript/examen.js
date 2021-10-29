class Persona{
    constructor(nom,dir,tel){
        this.nombre=nom;
        this.direccion=dir;
        this.telefonos=tel;
    }
}
class Agenda{
    constructor(){
        this.personas=[];
    }
    agregarPersona(per){
        this.personas.push(per);
    }
    buscar(){
        let nombre=document.getElementById("nombre").value;
        let visor=document.getElementById("visor");
        let cadena="<table><th>NOMBRE</th><th>CALLE</th><th>POBLACION</th><th>PROVINCIA</th><th>TEL:movil</th><th>TEL:casa</th><th>TEL:trabajo</th>";
        for (let i=0;i<this.personas.length;i++){
            if(nombre==this.personas[i].nombre){
                cadena+=`<tr><td>${this.personas[i].nombre}</td><td>${this.personas[i].direccion.calle}</td><td>${this.personas[i].direccion.poblacion}</td><td>${this.personas[i].direccion.provincia}</td><td>${this.personas[i].telefonos.movil}</td><td>${this.personas[i].telefonos.casa}</td><td>${this.personas[i].telefonos.trabajo}</td></tr>`

            }
            debugger
        }
        cadena+="</table>";
        visor.innerHTML=cadena;
    }
}
function Direccion(calle,poblacion,provincia) {
    this.calle=calle;
    this.poblacion=poblacion;
    this.provincia=provincia;
}
let telefono ={
    movil: "",
    casa: "",
    trabajo:""
}
let agregar= document.getElementById("btnAgregar");
let buscar=document.getElementById("btnBuscar");
let dir;
let persona;
let agenda=new Agenda();
buscar.onclick=function(){
    agenda.buscar();
}
agregar.onclick=function(){
    let name=document.getElementById("nombre").value;
    let street=document.getElementById("calle").value;
    let poblacion=document.getElementById("pobl").value;
    let provincia=document.getElementById("prov").value;
    telefono.movil=document.getElementById("movil").value;
    telefono.casa=document.getElementById("casa").value;
    telefono.trabajo=document.getElementById("trabajo").value;
    //debugger
    //let persona=()
    //dir=Direccion(street,poblacion,provincia);
    persona= new Persona(name,new Direccion(street,poblacion,provincia),telefono);
    //debugger
    agenda.agregarPersona(persona);
}
function validar(){
    
}

