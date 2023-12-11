# Usa la imagen oficial de Node como base
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY . .

# Instala las dependencias
RUN npm install

# Ejecuta el comando de construcción
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
