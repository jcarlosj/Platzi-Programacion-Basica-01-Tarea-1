//-> FUNCIONES
//   Genero un número aleatorio entre un rango de enteros.
function aleatorio( minimo, maximo ) {
 	return Math .floor( Math .random() * ( maximo - minimo + 1 ) - minimo );
} //-> Finaliza aleatorio( minimo, maximo )


//-> INICIO
//   Variables Globales.
var opciones = [ 'Piedra', 'Papel', 'Tijera' ], 	//: Opciones existentes para jugar.
	opcionUsuario = 0;								//: Valor por defecto del usuario.

//-> Capturo elección del usuario.
opcionUsuario = prompt( '¿Qué eliges?\n Piedra: 0\nPapel: 1\nTijera: 2', 0 );

//-> Valido elección del usuario (en el rango de 0 hasta la cantidad de opciones del arreglo) .
if( parseInt( opcionUsuario ) > 0 && parseInt( opcionUsuario ) < opciones .length ) {

	var mensaje = '';
	alert( 'Elegiste: ' + opciones[ parseInt( opcionUsuario ) ] );

	//-> Capturo la elección aleatoria. 
	var opcionMaquina = aleatorio( 0, ( opciones .length - 1 ) );		
	alert( 'La máquina eligió: ' + opciones[ opcionMaquina ] );

	//-> Comparo elecciones y se ditamina un Ganador.
	if( opciones[ opcionUsuario ] == opciones[ opcionMaquina ] ) {
		mensaje += 'Empate!';
	}
	else {
		//-> Tres únicas condiciones con que hacen a un usuario ganador.
		if( opciones[ opcionUsuario ] == 'Piedra' && opciones[ opcionMaquina ] == 'Papel' ) {
			mensaje += 'Ganaste!';
		}
		else {
			if( opciones[ opcionUsuario ] == 'Tijera' && opciones[ opcionMaquina ] == 'Papel' ) {
				mensaje += 'Ganaste!';
			}
			else {
				if( opciones[ opcionUsuario ] == 'Papel' && opciones[ opcionMaquina ] == 'Piedra' ) {
					mensaje += 'Ganaste!';
				}
				else {
					mensaje += 'Perdiste!';
				}
			}	
		}
	}
	//-> Mensaje: Ditamen final.
	alert( mensaje );	
}
else {
	//-> Mensaje de error al usuario
	alert( 'No elegiste ninguna de las opciones\n Piedra: 0\nPapel: 1\nTijera: 2' );
} 

//-> FINAL