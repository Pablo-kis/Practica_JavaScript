var i, narticulo, nunidades, punidad, totarticulo, suma, descontado;
/*Las variables se van a usar para lo siguiente:
i: variable para el bucle
narticulo: variable para el número de artículo (no es necesaria)
nunidades: número de unidades que se han comprado del artículo
punidad: el precio unitario de cada artículo
totarticulo: el precio total de un único artículo
suma: variable que se va a usar para acumular las sumas de los artículos
descontado: suma total con el descuento
*/
narticulo=1;
totarticulo=0; //No necesitamos declararla antes pero mejor hacerlo por si acaso
suma=0; // Esta SÍ necesitamos declararla antes
for (i=1;i<=5;i++) //comenzamos el bucle que pedirá 5 artículos
{
	nunidades=parseFloat(prompt("Introduzca el número de unidades vendidas del artículo " + narticulo + ":"));
	//aquí le pedimos el número de unidades compradas
	punidad=parseFloat(prompt("Introduzca el precio del artículo " + narticulo + ":"));
	//aquí le pedimos el precio de cada unidad
	totarticulo=(nunidades*punidad); 
	//y aquí calculamos el total de la compra de este artículo
	document.write("<strong>Artículo:</strong> " + narticulo + "<br> &nbsp;&nbsp;Unidades Vendidas: " + nunidades + "<br> &nbsp;&nbsp;Precio de cada unidad: " + punidad + "€<br><strong> Total de la compra:</strong> " + totarticulo + "€<br><br>");
	//Aquí escribimos en la factura
	narticulo=narticulo + 1;
	suma=totarticulo + suma;
	//metemos en la suma la acumulación
}
//Al acabar el proceso miramos cuánto ha sido el total
if (suma<100){
	document.write("El total de su factura es de: " + suma + "€");
	//Si es menor a 100€ no se lleva el descuento
}
else {
	descontado=suma-((suma*5)/100);
	//Si es 100€ o más, primero calcularemos el valor de la variable descontado (5%)
	document.write("El total de su factura es de: " + descontado + "€<br> Recuerde que ha recibido un descuento de un 5% al haber comprado por un valor igual o superior a 100€. Su compra sin el descuento es de " + suma + "€");
	//Y escribimos en el documento lo que queramos XD
}