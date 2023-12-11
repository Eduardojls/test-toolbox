<<<<<<< HEAD

## Instrucciones previas

Para garantizar el levantamiento exitoso del aplicativo frontend se debe seguir
los siguientes pasos en el orden en el que se describen debajo:

### `1. nvm use 16.0.0`

Principalmente, se requiere tener la versión v16 de node, de lo contrario
deberás instalar `nvm` y ejecutar el comando que arriba se describe. Esto
en vista de que este proyecto fue desarrollado con la versión de node v16,
por lo tanto, es requerido que el node_modules sea contruido con esta versión
al momento de ejecutar el comando `npm install`.


### `2. npm install`

Este comando lo que hará es reconstruir los node_modules basado en las dependencias
que se encuentran instaladas en el package.json 

### `3. npm run build`

Una vez instaladas las dependencias del proyecto, se procede a contruir el build con las
configuraciones descritas en el archivo webpack.config.js


### `4. npm start`

Ahora que tenemos el proyecto compilado con webpack, procedemos a ejecutar el comando `npm start`
el cual levantará el proyecto en modo de desarrollo en la url [http://localhost:3000](http://localhost:3000)
de tu navegador.

### `npm test`

Se automatizó el comando `npm test` para ser ejecutado con Jest, el cual servirá para ejecutar
las tests unitarios de este proyecto
=======
## Levantamiento con docker

- Para ejecutar este proyecto deberás abrir una terminal (Powershell, cmd, etc..)
y posicionarte en el directorio donde se encuentra el archivo docker-compose.yml.
- Ejecutar el comando `docker-compose up`
- Una vez instalados los contenedores del frontend y el backend podrás ya utilizar 
ambos aplicativos
  - Frontend [http://localhost:3000](http://localhost:3000)
  - Backend [http://localhost:8081/files/data](http://localhost:8081/files/data)
        [http://localhost:8081/files/data?fileName=test2.csv](http://localhost:8081/files/data?test2.csv)


## Levantamiento indepentiente - Frontend

Ver las instrucciones de levantamiento frontend en el path `./frontend/README.md`

## Levantamiento indepentiente - Backend

Ver las instrucciones de levantamiento backend en el path `./backend/README.md`
>>>>>>> 23bb5f4b9d3987a85deeae7f887d3e9121f31077
