// sistema de turnos en el cual se ingresa nombre y apellido, numero de celular , que tiene que estar en base de datos y si no esta, salta un alert diciendo "ingrese un nombre valido".
// si estas condiciones cumplen puede ingresar al sistema para obtener la fecha del turno con un switch. Luego de haber elegido se laza un alert diciendo "registro su turno con exito"
// por consola queda registrado los datos
// tiene 5 intentos para ingresar los datos sino lo saca del sistema y lanza un alert diciendo "supero el limite de intentos".

function sacarturno(){

    let turnos = true
    let intentos = 1
    
    do {
        let nombreyapellido = prompt ("Ingrese su nombre y apellido").toLowerCase()
        console.log("Nobre y Apellido:" + " " + nombreyapellido)
        if (nombreyapellido === null){
            break
        }
        if (nombreyapellido === "cristina gonzalez" && intentos <=5){
            let numerodetelefono = prompt("Ingrese su numero de telefono") 
            console.log("Numero de telefono:" + " " + numerodetelefono)
            if (turnos === true){
                let fechas = prompt ("Elija la fecha deseada del turno")
                switch (fechas) {
                    case "16/11":
                        alert ("tenemos turno disponible para"+ " " + fechas)
                        fechas = confirm ("¿Desea confirmar el turno?")
                        alert ("El turno a sido asignado.")
                        console.log("Turno asignado para el dia:" + " " + fechas)
                        break
                    case "17/11":
                        alert ("tenemos turno disponible para"+ " " + fechas)
                        fechas = confirm ("¿Desea confirmar el turno?")
                        alert ("El turno a sido asignado.")
                        console.log("Turno asignado para el dia:" + " " + fechas)
                        break
                    case "18/11":
                        alert ("tenemos turno disponible para"+ " " + fechas)
                        fechas = confirm ("¿Desea confirmar el turno?")
                        alert ("El turno a sido asignado.")
                        console.log("Turno asignado para el dia:" + " " + fechas)
                        break
                    case "19/11":
                        alert ("tenemos turno disponible para"+ " " + fechas)
                        fechas = confirm ("¿Desea confirmar el turno?")
                        alert ("El turno a sido asignado.")
                        console.log("Turno asignado para el dia:" + " " + fechas)
                        break
                    default:
                        alert("No hay turnos disponibles para esa fecha")
                        break
                }
                turnos = false
            }
        }else{
            alert ("El nombre que introdujo no esta registrado.")
            ++intentos
            if(intentos >5){
                alert("supero el limite de intentos, por favor intente mas tarde.")
                console.error ("No se ecuentra el usuario ingresado")
                break
            }
        }
        
    }while (turnos)


}


sacarturno ()