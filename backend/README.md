## Instrucciones previas

Para garantizar el levantamiento exitoso del aplicativo backend es necesario seguir
las instrucciones a continuación descritas:

Pd: Es importante tener en cuenta que se requiere contar con la versión v14 de node
para la correcta ejecución de este proyecto.

### `1. npm install`

Este comando lo que hará es reconstruir los node_modules basado en las dependencias
que se encuentran instaladas en el package.json

### `2. npm start`

La aplicación por defecto levanta en el puerto ``PORT: 8081``, a continuación se describirán
los endpoints a probar con la siguiente url:
  - [http://localhost:8081/files/data](http://localhost:8081/files/data)
  - [http://localhost:8081/files/data?fileName=test2.csv](http://localhost:8081/files/data?test2.csv)


### `npm test`

Se automatizó el comando `npm test` para ser ejecutado con Mocha, el cual servirá para ejecutar
las tests unitarios de este proyecto.