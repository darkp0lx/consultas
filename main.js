var botonWhatsapp = document.getElementById("boton-whatsapp");

botonWhatsapp.addEventListener("click", enviarMensaje);

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
list_medicinaGeneral = [
  
];
// list_medicinaGeneral = [
//   949759620,
//   920596915,
//   920596915,
//   967777985,
//   933970580,
//   993082414,
//   993082414,
//   974552753,
//   993875545,
//   980845541,
//   982779736,
//   943262658,
//   924385669,
//   930495873,
//   929404140,
//   991750737,
//   963515253,
//   940757493,
//   984526404,
//   994739242
// ];
// list_medicinaGeneral = [
//   949759620,
//   920596915,
//   920596915,
//   967777985,
//   933970580,
//   993082414,
//   993082414,
//   974552753,
//   993875545,
//   980845541,
//   982779736,
//   943262658,
//   924385669,
//   930495873,
//   929404140,
//   991750737,
//   963515253,
//   940757493,
//   984526404,
//   994739242
// ];
// list_medicinaGeneral = [
//   949759620,
//   920596915,
//   920596915,
//   967777985,
//   933970580,
//   993082414,
//   993082414,
//   974552753,
//   993875545,
//   980845541,
//   982779736,
//   943262658,
//   924385669,
//   930495873,
//   929404140,
//   991750737,
//   963515253,
//   940757493,
//   984526404,
//   994739242
// ];

function enviarMensaje() {
  let $name = document.getElementById("name").value;
  let $years = document.getElementById("years").value;
  let $sexo = document.getElementsByClassName("sexo").value;
  let $Dni = document.getElementById("Dni").value;

  let $especialidad = document.getElementById("especialidad").value;
  let $complicateMedic = document.getElementById("complicateMedic").value;
  let $consulta = document.getElementById("consulta").value;
  let url = `https://api.whatsapp.com/send?phone=51943834699&text=*Consulta Medica Online*%0A%0A*Nombre*:  ${$name}%0A*Dni*:  ${$Dni}%0A*Edad*:  ${$years}%0A*Sexo*:  ${$sexo}%0A*Especialidad*:  ${$especialidad}%0A*Complicaciones*:  ${$complicateMedic}%0A*Consulta*:  ${$consulta}`;
    // *Consulta Medica Online*%0A%0A*Nombre*:  ${$name}%0A*Dni*:  ${$years}%0A*Edad*:  ${$years}%0A*Sexo*:  ${$sexo}%0A*Especialidad*:  ${$especialidad}%0A*Complicaciones*:  ${$complicateMedic}%0A*Consulta*:  ${$consulta}
  // switch ($especialidad) {
  //   case "medicina-general":
  //     console.log(list_medicinaGeneral.random());
  //     break;
  //   case "pedriatria":
  //     console.log("pedriatria");
  //     break;
  //   case "cardiologia":
  //     console.log("cardiologia");
  //     break;
  //   case "ginecologia-obstetricia":
  //     console.log("ginecologia-obstetricia");
  //     break;
  //   case "urologo":
  //     console.log("urologo");
  //     break;
  // }
  window.open(url);
}
