Limpiaval - Landing Page de Servicios de Limpieza
Este repositorio contiene el código fuente completo para "Limpiaval", un proyecto de landing page para una empresa de servicios de limpieza. Incluye tres partes principales: un frontend estático, un frontend moderno con React y un backend con Node.js que sirve los datos.

Estructura del Proyecto
limpiaval/
├─ README.md                # Este archivo
├─ package.json             # Scripts para ejecutar todo el proyecto
├─ frontend-static/         # Versión estática (HTML, CSS, JS)
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
├─ frontend-react/          # Versión con React + Vite + TailwindCSS
│  ├─ package.json
│  └─ src/
├─ backend/                 # API con Node.js + Express + Prisma
│  ├─ package.json
│  ├─ .env.example
│  ├─ prisma/
│  └─ src/
└─ scripts/
   └─ curl-demo.sh         # Script para probar la API

Requisitos Previos
Node.js (v18 o superior)

npm (v9 o superior)

jq (opcional, para formatear la salida de los tests con cURL)

🚀 Instalación y Puesta en Marcha
Sigue estos pasos para levantar el proyecto completo en tu máquina local.

1. Clonar el Repositorio
git clone <URL_DEL_REPOSITORIO>
cd limpiaval

2. Instalar Dependencias
Desde la carpeta raíz (limpiaval/), instala las dependencias para el orquestador, el backend y el frontend de React.

npm install

Este comando instalará concurrently en la raíz y luego ejecutará npm install en las carpetas backend y frontend-react.

3. Configurar el Backend y la Base de Datos
a. Navega a la carpeta del backend:

cd backend

b. Crea tu archivo de variables de entorno a partir del ejemplo:

cp .env.example .env

No necesitas modificar el archivo .env si vas a usar la base de datos SQLite por defecto.

c. Ejecuta la migración de Prisma para crear la base de datos y sus tablas:

npx prisma migrate dev

Cuando te pregunte por un nombre para la migración, puedes poner "init".

d. Siembra la base de datos con los datos de ejemplo:

npx prisma db seed

e. Vuelve a la carpeta raíz:

cd ..

4. Ejecutar el Proyecto
Desde la carpeta raíz (limpiaval/), puedes usar los siguientes comandos:

Para levantar el backend y el frontend de React simultáneamente (recomendado):

npm run dev

La API estará disponible en http://localhost:3000

El sitio de React estará disponible en http://localhost:5173

Para levantar solo el backend:

npm run dev:api

Para levantar solo el frontend de React:

npm run dev:react

Para ver la versión estática:
Simplemente abre el archivo frontend-static/index.html en tu navegador.

🧪 Probando la API
Puedes verificar que todos los endpoints de la API funcionan correctamente usando el script curl-demo.sh.

# Asegúrate de que el script tenga permisos de ejecución
chmod +x ./scripts/curl-demo.sh

# Ejecuta el script
./scripts/curl-demo.sh

Endpoints de la API
La API base se encuentra en http://localhost:3000/api.

Método

Endpoint

Descripción

GET

/plans

Obtiene la lista de planes de precios.

GET

/services

Obtiene la lista de servicios ofrecidos.

GET

/gallery

Obtiene la lista de imágenes para la galería.

GET

/testimonials

Obtiene la lista de testimonios de clientes.

POST

/contact

Envía un formulario de contacto.

POST

/quote

Envía una solicitud de cotización.