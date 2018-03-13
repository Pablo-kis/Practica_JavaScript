function createtable () {
    document.write("<table border=1><tr><td>Producto</td><td>Precio Unidad</td><td>Cantidad</td><td>Subtotal</td></tr>");
} 
//he puesto una función para crear la tabla pero se puede escribir en el html

function addfila (nomart, preart, cantart, subart) {
    document.write("<tr><td>" + nomart + "</td><td>" + preart + "</td><td>" + cantart + "</td><td>" + subart + "</td><tr>");
}
//he puesto una función para añadirle una fila a la tabla pero se puede poner en el bucle
var sum, nombre, numarticulos, preciounidad, cantidad, subtotal, total, descontado, iva, pretotal;
/* Las variables son bastantes pero supongo que habrá gente que ponga menos
sum: acumulador para asegurarnos que el bucle acaba cuando no haya más artículos
nombre: nombre del artículo
numarticulos: número de artículos totales comprados
preciounidad: el precio unitario del articulo
cantidad: la cantidad comprada del artículo
subtotal: el total del artículo individual
total: acumulador que suma los subtotales
descontado: calcula el 5%
iva: calcula el iva
pretotal: el total con el descuento y el iva
*/
total=0; //como siempre, declaramos primero el total para poder ir sumando
numarticulos=prompt("Introduzca el número de artículos que ha comprado en total");
//pedimos el numero de articulos totales
createtable();
//creamos la tabla
sum=0;
//declaramos que va por la ronda 0
while(sum<numarticulos) { //comenzamos el bucle
    sum=(sum + 1); //indica que va por la ronda siguiente
    nombre=prompt("Introduzca el nombre del artículo");
    preciounidad=prompt("Introduzca el precio de cada");
    cantidad=prompt("Introduzca la cantidad que ha comprado");
    //pide los valores
    subtotal=(preciounidad*cantidad);
    //calcula el subtotal
    addfila(nombre, preciounidad, cantidad, subtotal);
    //lo mete en una fila nueva
    total=(total + subtotal);
    //lo mete con el total definitivo
}
document.write("</table>");
//al acabar el bucle hay que cerrar la tabla
document.write("<br>El importe total es de " + total);
//escribe lo que sea

if (total>50){
    descontado=((total*5)/100);
    document.write("<br>Se le aplicará un descuento del 5% por superar 50 euros");
}
else {
    descontado=0;
}
//aplica el descuento si es necesario
if (descontado!=0){
    iva=(((total-descontado)*21)/100);
}
else {
    iva=((total*21)/100);
}
//calcula el iva dependiendo de si se ha aplicado descuento.
//Este if lo podemos ahorrar si restamos el descuento al total antes
document.write("<br>IVA: " + iva);
pretotal=((total-descontado)+iva);
//calcula el precio total quitando el descuento (no se pone -descontado si se ha restado antes)
document.write("<br>TOTAL: " + pretotal);