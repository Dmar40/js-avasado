

  
var age = prompt("Digite su Edad:" );
var count = 1;
    while ( count <= age ){
        document.write("Año Cumplido ", count, "<br>");
        count = count + 1;
        }



    var tabla = prompt("Digite la Tabla a Imprimir:" );
    for (var numberB = 1; numberB <= 10; numberB++){
        const tableResult = numberB * tabla;
        document.write(tabla, "* ", numberB, "=", tableResult, "<br>");}


        //punto3

var invertir = parseInt(prompt("Ingresar el total a invertir"))
var meses = parseInt(prompt("Ingresar los meses"))

totalInversion = 0

for (let mes = 1; mes<= meses; mes++) {
    totalInversion += invertir;
    document.write("Mes" + mes + ": $" + totalInversion + "<br>");
    
}
document.write("Fin, total a ahorrar $" + totalInversion);

