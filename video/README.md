
# # Video

Para el desarrollo de la comunicación entre la aplicación y los dispositivo del video se dividió el trabajo en 3 espacios distintos:

  

<ul>

<li>Backend: Es el servidor que es el intermediario entre la aplicación y los dispositivos de video. Se conecta con el Mqtt broker para hacer esta comunicación.</li>

<li>Raspberry: Es el script que debería estar corriendo en raspberry conectado a un dispositivo de grabación, además de hacer las conversiones de video y subirlas a la nube.Se comunica con el backend. </li>

<li>Wifi: Script que sirve para conectar el raspberry con una red inalámbrica. Una documentación más a detalle se encuentra en la carpeta.</li>

</ul>