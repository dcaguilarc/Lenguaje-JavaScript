# Usar la imagen oficial de Nginx como base
FROM nginx:alpine

# Establecer el directorio de trabajo
WORKDIR /usr/share/nginx/html

# Copiar los archivos HTML, CSS y JS al contenedor
COPY index.html style.css script.js /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
