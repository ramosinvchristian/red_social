# red_social
Práctica 02: Librerías del Lado del Cliente (jQuery y Bootstrap)
Luis Roberto Flores
•
11 feb
100 puntos
Objetivo

Demostrar competencia básica en el uso de las librerías del lado del cliente jQuery y Bootstrap para solución de problemas de front-end.

Desarrollo

Le piden desarrollar el front-end de una aplicación web la cual va a ser un tipo red social para compartir imagenes y videos (tipo Instagram). Para esto se le pide un prototipo y template en HTML para las siguientes pantallas:

Página de inicio (para usuarios sin registro)

En esta página solo se mostrará la descripción breve de la red social, se pide que se muestren también alguas fotos/imágnes/videos de algunos de los usuarios que tienen su perfil público, esto para dar más visibilidad a lo que la aplicación hace y en contenido que tendrá.

Para esto debe realizar un diseño en la cual muestre una descripción breve pero con el realice de las fotos/imagenes, mostrando el nombre del username, la foto/imágen/video, el caption (descripción) y la cantidad de likes que tiene. En esta página debe estar como un botón (para que se distinga y tenga más realce) el link para el Login.

Login

En esta página solo se mostrarán dos campos, el username y el password, ademá  del botón de entrar, un checkbox de recordar usuario, un link de recuperar contraseña y un link para el registro.

También para esto debe implementar validaciones básicas: esto quiere decir que si al darle al botón entrar no se ha puesto uno de los dos campos (username o password) avisar al usuario que faltan datos. 

También se quiere que se simule un login exitoso con un usuario demo, el cual lo llevará a la página de timeline.

Registro de nuevo usuario

Este será un formulario de registro normal, en el cual se pidan los siguientes datos: username*, password*, confirmar password*, email*, nombre*, apellidos, genero* y fecha de nacimiento*. De los datos antes mencionados los que están marcados con * son obligatorios y deben validarse del lado del cliente que se ingresen estos datos, si faltan datos, mostrar qué datos le faltan para completar el registro.

El campo de email se debe validar que sea un valor válido de una dirección de correo electrónico, es decir que tenga un char '@' y antes de este un valor username y después del @ un nombre de dominio con una extensión (o que tenga cuando menos un '.' 

En el dato de genero, este debe ser un select-option con los siguientes valores: [Seleccione], Hombre, Mujer, No Aplica, Prefiero no Decirlo y Otro; en el cual cuando se seleccione la opción de Otro, se debe mostrar un input-text para que especifique; esta input text solo debe aparecer cuando se selecciona la opción de Otro y debe desaparecer cuando se selecciona otra opción. Para las validaciones, si se selecciona la primara opción "[Seleccione]", este se tratará como valor no ingresado.

El campo de fecha de nacimiento puede ser un input date. Pero debe tener una validación para que el usuario tenga cuando mínimo 18 años.

Perfil

En esta página se mostrarán las fotos/imagenes/videos del usuario. Estos para demostración pueden ser fijos.

Aquí se muestra la foto/video, la cantidad de likes y los controles para dar like o quitar el like. También al principio mostrar los datos del usuario, como la imagen de perfil, la descripción, los seguidores, seguidos... 

Timeline 

Aquí se mostrarán las fotos/imagenes/videos de otros usuarios. Para cada imagen se debe mostrar el username, el nombre completo del usuario, la imagen, el caption(descripción), la cantidad de likes, un botón para dar like y si ya tiene like para quitar el like.

Consideraciones Generales

Es necesario que el diseño sea responsivo, que se adapte a los diferentes tamaños de pantallas. Para esto debe usar bootstrap.

Por el momento no se requiere funcionalidad back-end (o del lado del servidor), solo se necesitan los archivos HTML para el demo.

Es necesario implementar un diseño, aunque este sea sencillo, con colores acorde a su gusto o propuesta.

Para las validaciones y funcionamiento dinámico de las páginas, es necesario usar jQuery.

Debe usar la última versión de Bootstrap disponbile.

Para mostrar imagenes de ejemplo, puede usar un servicio como el de Picsum (https://picsum.photos/)
