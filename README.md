# Proyecto Grupal Final
## Find me a home
        "react-redux": "^7.2.6"
# Proyecto Grupal Final
## Find me a home
       <!-- "react-redux": "^7.2.6" -->

Find me a Home es un proyecto de voluntariado de adopción de mascotas en donde las distintas protectoras en servicio pueden publicar sus perros o gatos en adopción, permitiendo al usuario poder adoptarlos según sus necesidades, ya sea por tamaño, edad o raza, a su vez el usuario podrá hacer donaciones si quisiera a diferentes refugios registrados. 

El proyecto cuenta con un pequeño e-commerce para poder comprar artículos básicos para mascotas, un login en donde los usuarios se podran registrar para hacer compras o adoptar, un perfil de admin, donde se pueden ver las ventas realizadas, agregar, editar, borrar productos, usuarios o mascotas.

## Tecnologías

- [ ] __Frontend__:
  - HTML
  - CSS
  - JavaScript
  - React / Redux
- [ ] __Backend__:
  - NodeJS
  - Express
  - Sequelize
  - JWT
  - Nodemailer
  - Cloudinary
- [ ] __Base de datos__:
  - Postgres

## Levantar el proyecto

- Clonar el repositorio

- Hay una carpeta llamada `api` en donde hay que crear un archivo llamado: `.env` que tenga la siguiente forma:

DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost

MAILING_EMAIL=findmeahome2022@gmail.com
MAILING_PASSWORD=hbtttqlykibdasja

Debe reemplazar postgres user y postgres password con sus propias credenciales para conectarse a la base de datos de postgres. Github ignorará este archivo, ya que contiene información confidencial (las credenciales).

- Crear desde psql una base de datos llamada `pf_pets`

- En las dos carpetas: `api` y `client`, se debe realizar el comando npm install, y luego npm start.

