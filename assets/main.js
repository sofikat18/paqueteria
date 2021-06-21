/* Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. 
Suele hacer venta por correo y la empresa de logística les cobra por peso de 
cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán
en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. 
Escribir un programa que lea el número de payasos y muñecas vendidos en el 
último pedido y calcule el peso total del paquete que será enviado.

Imprimir cuántos paquetes se requieren para el envío
Máximo 1 kg por paquete
*/

/*Se definen las variables de muñeca y payaso, en prompt para que el usuario
pueda ingresar los datos desde el html
*/
let muneca = parseFloat(prompt('Ingresa el numero de muñecas'));
let payaso = parseFloat(prompt('ingresa el numero de payasos'));

/*Se definen las variables con los pesos de payasos y muñecas.
Se define la variable del peso máximo por paquete.
Se define una variable que lance el peso Total del paquete, es decir:
Cantidad de muñecas por su peso, más cantidad de payasos por su peso.
*/

let pesomuneca = 75;
let pesopayaso = 112;
let pesomaximo = 1000;

let pesoTotal = muneca * pesomuneca + payaso * pesopayaso;

/*Se usa una condicional que revisa si el resultado del pesoTotal es mayor
al peso máximo. Si esto es así, entonces se crea una variable que se llama
paquetes, que define cuántos paquetes se necesitan de acuerdo al peso. Para
esto, se divide el pesoTotal entre el peso máximo por paquete.
La función Math.ceil se usa para redondear hacia arriba.
En console.log se imprime el peso total en gramos y la cantidad de paquetes.
Si el peso total NO ES mayor al peso máximo por paquete, se imprime que sólo
se necesita una caja para el pedido. 
*/

if (pesoTotal > pesomaximo) {
  let paquetes = Math.ceil(pesoTotal / pesomaximo);
  alert(
    `El peso de tu pedido es de ${pesoTotal} gramos. Necesitarás ${paquetes} cajas para enviar tu pedido.`
  );
} else {
  alert(`Tu pedido cabe en una caja.`);
}

/*
Este era el código original, lo dejo como compartiva, para localizar
las diferencias y la lógica detrás de ambas opciones.


if(pesoTotal > pesomaximo)

     alert("Tu paquete rebasa el peso establecido")
     
     else 
     alert("Tu paquete puede ser enviado, tiene el peso establecido");
     if(payaso > pesomaximo)
     alert("Tu paquete no puede ser enviado");

    else 
    alert("Tu paquete esta dentro del limite de peso establecido");
    */
