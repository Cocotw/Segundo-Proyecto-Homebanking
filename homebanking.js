//Declaración de variables
var saldoDeLaCuenta = 50000;

var limiteExtraccion = 30000;

var contra = "1234";

var logueado = true;

var nombreUsuario = 'Cloe TW';
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Ingrese Nuevo Limite De Extraccion");
    var limite = parseInt(nuevoLimite);
    limiteExtraccion = limite;
    if(limite==null || limite==='-' || limite<=0){
        alert('No Ingreso Nuevo Monto De Limite');
    }
    actualizarLimiteEnPantalla();
    alert('Tu Nuevo Limite De Extraccion es: $' + limite);
    return(limite);
}

function extraerDinero() {
    var sacar = prompt("Ingrese Monto A Extraer");
    var sacarDinero = parseInt(sacar);
        if (sacarDinero > limiteExtraccion){
            alert("Se Excedio de su limite permitido");
        }else if(sacarDinero==null || sacarDinero== "" || sacarDinero<=0){
            alert('No Ingreso Monto A Extraer');
        }else if(sacarDinero % 100 === 0) {
            alert("Tu Saldo Anterior Es: $" + saldoDeLaCuenta);
            saldoDeLaCuenta = (saldoDeLaCuenta - sacarDinero);
            actualizarSaldoEnPantalla();
            alert("Usted Va A Extraer: $" + sacarDinero);
            alert("Tu Saldo Actual Es: $" + saldoDeLaCuenta)
            return(saldoDeLaCuenta);
        }else if(sacarDinero % 100 !== 0){
            alert('Solo Se Puede Extraer Billetes De $100');
        } 
        }
    

function depositarDinero() {
    var deposito = prompt('Ingrese Monto Que Quiere Depositar');
    var dineroADepositar = parseInt (deposito);
    if(dineroADepositar==null || dineroADepositar == "" || dineroADepositar<=0){
        alert('No Ingreso Monto A Depositar');
    }else{
    alert('Tu Saldo Anterior es: $' + saldoDeLaCuenta);
    saldoDeLaCuenta = (saldoDeLaCuenta + dineroADepositar);
    actualizarSaldoEnPantalla();
    alert("Tu Deposito Es De: $" + dineroADepositar);
    alert("Tu Saldo Actual Es: $" + saldoDeLaCuenta);
    return (saldoDeLaCuenta);
    }
}

function pagarServicio() {
    var servicioAPagar =  prompt("Ingrese Servicio A Pagar : 1 - Agua, 2 - Luz, 3 - Internet, 4 - Telefono");
    var MontoAgua = 2546;
    var montoLuz = 1120;
    var montoInternet = 905;
    var montoTelefono = 4153;
    switch (servicioAPagar){
        case "1":
            alert ("Tu Monto A Pagar Es De: $" + MontoAgua);
            saldoDeLaCuenta = (saldoDeLaCuenta - MontoAgua);
            actualizarSaldoEnPantalla();
            alert('Tu Servicio Fue Abonado');
            return (saldoDeLaCuenta);
        break;
        
        case "2":
            alert('Tu Monto A Pagar Es De: $' + montoLuz);
            saldoDeLaCuenta = (saldoDeLaCuenta - montoLuz);
            actualizarSaldoEnPantalla();
            alert('Tu Servicio Fue Abonado');
            return(saldoDeLaCuenta);
        break;

        case "3":
            alert('Tu Monto A Pagar Es De: $' + montoInternet);
            saldoDeLaCuenta = (saldoDeLaCuenta - montoInternet);
            actualizarSaldoEnPantalla();
            alert('Tu Servicio Fue Abonado');
            return(saldoDeLaCuenta);
        break;

        case "4":
            alert('Tu Monto A Pagar Es De: $' + montoTelefono);
            saldoDeLaCuenta = (saldoDeLaCuenta - montoTelefono);
            actualizarSaldoEnPantalla();
            alert('Tu Servicio Fue Abonado');
            return(saldoDeLaCuenta);
        break;
        default:
            alert('Ese Servicio No Esta Disponible Para Abonar Actualemte, Disculpe Las Molestias');
        break;    
    }
          if( MontoAgua > saldoDeLaCuenta){
        alert('Tu Saldo Es Insuficiente Para Abonar El Servicio');
    }else if (montoLuz > saldoDeLaCuenta){
        alert('Tu Saldo Es Insuficiente Para Abonar El Servicio');
    }else if (montoInternet > saldoDeLaCuenta){
        alert('Tu Saldo Es Insuficiente Para Abonar El Servicio');
    }else if (montoTelefono > saldoDeLaCuenta){
        alert('Tu Saldo Es Insuficiente Para Abonar El Servicio');}

}

function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;
    var transferencia = prompt('Ingrese Monto A Transferir');
    var montoATransferir = parseInt(transferencia);
    var cuentaATransferir =prompt('Ingrese Numero De Cuenta Amiga A Transferir');
    var numeroDeCuentaAmiga =  parseInt(cuentaATransferir);
         if(montoATransferir>saldoDeLaCuenta){
            alert('No Tienes Saldo Disponible En Estos Momentos');   
        }else if(montoATransferir==null || montoATransferir<=0){
            alert('No Ingreso Monto A transferir');
        }else if((numeroDeCuentaAmiga===cuentaAmiga1)||(numeroDeCuentaAmiga===cuentaAmiga2)){
            saldoDeLaCuenta = (saldoDeLaCuenta - montoATransferir);
            alert('Se Han Transferido: $'+montoATransferir);
            alert('Cuenta Destino: '+numeroDeCuentaAmiga);
            actualizarSaldoEnPantalla();
            return(saldoDeLaCuenta);
        }else if(numeroDeCuentaAmiga==null || numeroDeCuentaAmiga==""){
            alert('No Ingreso Numero De Cuenta Amiga');
        } else{
            alert('Solo Se Puede Transferir A Cuentas Amigas');
            }
    }

function consultaDeSaldo(){
    alert('Tu Saldo Actual Es: $' + saldoDeLaCuenta);
}

function iniciarSesion() {
    var inicioSesion = prompt('Bienvenido a Tu Cuent De M&& Cloe TW\N Ingrese Su Contraseña Para Continuar:');
    if  (inicioSesion === contra) {
        logueado = true;
        alert('Bienvenida/o A M&& \n Tu Banco De Confianza ');
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }else if(inicioSesion===null || inicioSesion==='' || inicioSesion !== contra) {
        alert('Ingreso Mal La Contraseña\n Por Rasones De Seguridad Retendremos Todo su dinero\n Comuniquese Con Nuestros Operadores Para El Desbloqueo\n 0800 000-0000')
        nombreUsuario = "";
        saldoDeLaCuenta = 0;
        limiteExtraccion = 0;
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
    
}
iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoDeLaCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}