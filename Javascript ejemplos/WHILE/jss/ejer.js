var numarticulo,prearticulo, total;
/*Este es el equivalente en while, he usado menos variables porque pone menos:
numarticulo: El número de artículos totales que el comprador va a querer
prearticulo: El precio de cada artículo
total: la suma de los precios de todos los artículos
*/
numarticulo=1;
total=0;
numarticulo=parseFloat(prompt("Introduzca el número de artículos. Si no quiere introducir ninguno, escriba 0 o no ponga nada"));
if (isNaN(numarticulo)) {
	numarticulo=0;
}
//Este if convierte en "0" el número de artículos si se introduce algo que no sea un número

if (numarticulo!=0) {
	prearticulo=parseFloat(prompt("Introduzca el precio individual del artículo"));
}
//Este if salta cuando se ha introducido como número de artículo un valor distinto de 0
if (isNaN(prearticulo) || prearticulo<0) {
	prearticulo=0;
}
//Este if establece que el precio de artículo sea 0 si se introduce un precio no válido
if (prearticulo<=0) alert("Ha introducido un numero no valido como precio del articulo, esta compra no se tendra en cuenta");
//Este if avisa de que el artículo no se tendrá en cuenta si se ha introducido un 0 o menor
while (numarticulo!=0) {
	//Entramos en el bucle para repetir lo mismo hasta que el usuario deje de introducir números de artículo o ponga 0
	total=total+(numarticulo*prearticulo);
	numarticulo=parseFloat(prompt("Introduzca el número de artículos. Si no quiere introducir ninguno, escriba 0 o no ponga nada"));
	if (isNaN(numarticulo)) {
		numarticulo=0;
	}
	if (numarticulo!=0){
		prearticulo=parseFloat(prompt("Introduzca el precio individual del artículo"));
			if (isNaN(prearticulo) || prearticulo<0) {
				prearticulo=0;
			}
			if (prearticulo<=0) alert("Ha introducido un numero no valido como precio del articulo, esta compra no se tendra en cuenta");
	}
}
document.write("El total de sus articulos es de " + total + " €"); 
//Finalmente saca el total