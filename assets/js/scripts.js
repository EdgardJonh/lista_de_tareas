const listaTareas = [
    { id: 12344211, nombre: "Jugar Futbol", completada:false},
    { id: 23232323, nombre: "Salir a Correr",completada:false},
    { id: 23223232, nombre: "Andar en moto",completada:false},
    { id: 23323223, nombre: "Estudiar", completada:false},
];
let table = document.querySelector("#vistaTabla");
let realizadas = document.querySelector('.totalRealizadas')
// Funcion agregar un objeto al array
function AgregarTarea(txtTareas) {
    if (txtTareas.value ==='') {
        alert('Debes ingresar un dato')
    } else {
        let lasTareas = txtTareas.value

        listaTareas.push({id: Date.now() , nombre:lasTareas,completada:false})
        console.log(lasTareas) 
    }

}
// ingresa datos al array
let btnTareas = document.querySelector('#btnTareas')
btnTareas.addEventListener('click', ()=>{
    let txtTareas = document.querySelector('#txtTareas')
   AgregarTarea(txtTareas)
   txtTareas.value = ''
   
   Contador()
//    Llama a la funcion para actuslizar la tabla
  Actualizar(listaTareas)

})
function renderizaCheck(vista) {
    realizadas.innerHTML = vista
}

// total tareas
function Contador() {
    let totalTareas = document.querySelector(".totalTareas")
let listaTotal = listaTareas.length
totalTareas.innerHTML = listaTotal
console.log(listaTotal)
}


function Borrar(id) {
    const index = listaTareas.findIndex((ele)=>ele.id==id)
    listaTareas.splice(index, 1)
    Actualizar(listaTareas)
    Contador()
}
// Funcion para marcar una tarea completada
function cotadordeCheck(id) {
  const laTarea = listaTareas.find((tareasss)=>{return tareasss.id===id})

  laTarea.completada= !laTarea.completada
  Actualizar(listaTareas)

}

//hago click en el check va a la array pregunta cuantos de los check que estn en array estan en true 
  
 

// Recoore el arreglo para renderizarlo en el html
function Actualizar(tareas) {
  
    let html = "";
    let tareasRealizadas = 0
  for (const eliterador of tareas) {
    html += ` <tr>
        <th scope="row">${eliterador.id}</th>
        <td>${eliterador.nombre}</td>
        <td>
          <input onClick="cotadordeCheck(${eliterador.id})" class="form-check-input" type="checkbox" value="" id="${eliterador.id}" ${eliterador.completada?'checked':''} />
        </td>
        <td>
          <button type="button" onClick="Borrar(${eliterador.id})" class="btn btn-danger">x</button>
        </td>
      </tr>`;
      if (eliterador.completada) {
        tareasRealizadas++
      }
  }
    table.innerHTML = html;
    Contador()
   renderizaCheck(tareasRealizadas)

    
}
// Actualiza la tabla al recargar la pagina

Actualizar(listaTareas)
//Actualiza el contador
Contador()