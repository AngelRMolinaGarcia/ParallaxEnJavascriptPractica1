for (let i = 0; i < 2; i++) 
{
    alert("Haz click para actualizar: " + i);
} 
    
let temperatura = prompt("Agrega una temperatura")
console.log("Grados" + temperatura)

if (temperatura > 30) 
{
    alert("Pusiste una temperatura muy alta, has acabado con la vida existente")
    console.log("Hace mucho calor.");
} 
else if (temperatura > 20) 
{
    alert("Tmperatura optima, la vida prospera")
    console.log("La temperatura es agradable.");
} 
else 
{
    alert("Temperatura baja, la vida corre peligro")
    console.log("Hace frío.");
}

for (let i = 0; i < 2; i++) 
{
    alert("Haz click para actualizar otra vez: " + i);
}
 
let fruta = "Manzana";
fruta = prompt("Agrega una 'Manzana' o una 'Pera'")
 
switch (fruta) 
{
    case "Pera":
        alert("Elegiste Pera, mejor espera")
        console.log("Opción uno");
        break;
    case "Manzana":
        alert("Elegiste Manzana, vas por buen camino")
        console.log("Opción dos"); // This will execute
        break;
    default:
        alert("404 Has desestabilizado al universo entero, se tendrá que reiniciar")
        console.log("Error");
}