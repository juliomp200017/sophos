# sophos_Reto
## Por JULIO MANUEL PEREZ SUAREZ
*********
## Descripcion:
Este se trata de una apilicacion web que administra una tienda en la cual se alquilan videojugos, se pueden registrar clientes, alquileres o juegos tambien se pueden realizar distintos tipos de consulatn  como :
- Las ventas un dia.
- El cliente mas frecuente.
- El juego mas rentado.
- El los juegos en distintos orden.
- El cliente por su identificacion.
## Uso:
La aplicacion fue desarrollada con SQL server, visual studio code y visual studio 2022 por esto deben tener estas aplicaciones. En SQL server se deben correr los scripts que crean la base de datos, las tablas y los scripts de insecion de datos, en visual studio 2022 se debe abrir la solucion y en caso de no tener los modelos y el contexto con la base de datos correr el script "Scaffold-DbContext "Server=(servidor); DataBase=(basedatos);Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models" en el terminal  y en visual studio code se debe abrir el terminal y escribir npm start lo que dara inicio a la parte visual de nuestra aplicacion y con la cual podremos empezar a trabajar.
## Funcionamiento:
La interfaz grafica es sumamente intuitiva, cuenta con 3 ventanas dropdown que son cliente, juego y alquiler cada vez que ponemos el mouse sobre una de estas nos muestra las distintas funcionalidades que ecisten con respecto a ese tema. Una vez ingresemos a alguna de las ventanas podremos ver botonos que nos serviran para ingresar o buscar cosas de acuerdo a la ventana en la q nos encontremos.
## Requerimientos
- Visual Studio 2022
 - MySQL
 - .Net Core 6.0
 - Entity Framework Core 6.0
 - Entity Framework Core Tools 6.0
 - Entity Framework Core SqlServer 6.0
 - React 18.2.0
 - Reactstrap 9.1.1

