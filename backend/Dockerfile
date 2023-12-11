# Usa la imagen oficial de Node como base
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]