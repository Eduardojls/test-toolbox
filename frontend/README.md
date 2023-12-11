
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
