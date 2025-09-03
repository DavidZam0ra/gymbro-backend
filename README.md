GymBroApp - Backend
===================

Descripción
-----------
Backend de GymBroApp desarrollado en Node.js con arquitectura hexagonal, siguiendo principios DDD y SOLID.  
Gestiona la autenticación vía Supabase (correo/password y Google OAuth) y la persistencia de datos de entrenamientos en MongoDB.

Tecnologías
-----------
- Node.js 18+
- Express.js
- MongoDB (Docker)
- Supabase Auth
- Docker / Docker Compose
- dotenv
- JSDoc para documentación
- Jest (próximamente para pruebas unitarias)
- Git / GitHub

Estructura de Carpetas
----------------------
/gymbro-backend
├─ /domain
│  ├─ /entities
│  └─ /interfaces
├─ /infrastructure
│  ├─ /database
│  └─ /supabaseClient.js
├─ /services
│  └─ /auth/AuthService.js
├─ /controllers
│  └─ /authController.js
├─ /routes
│  └─ /authRoutes.js
├─ .env
├─ Dockerfile
├─ docker-compose.yml
├─ Makefile
└─ index.js

Instalación
-----------
1. Clonar el repositorio:
   git clone <URL_DEL_REPO>
   cd gymbro-backend

2. Instalar dependencias:
   npm install

3. Crear archivo `.env` en la raíz del proyecto:

   PORT=3000
   MONGO_URI=mongodb://mongo:27017/gymbro-app
   SUPABASE_URL=<TU_SUPABASE_URL>
   SUPABASE_KEY=<TU_SUPABASE_ANON_KEY>

4. Levantar MongoDB y backend con Docker:
   make up

5. Ejecutar backend:
   make run

   Nota: `make down` detiene los contenedores.

Endpoints Disponibles
--------------------

### Auth
- POST /auth/register
  - Body:
    {
      "email": "usuario@example.com",
      "password": "miSuperPassword123"
    }

- POST /auth/login
  - Body:
    {
      "email": "usuario@example.com",
      "password": "miSuperPassword123"
    }

- POST /auth/google
  - Recibe `access_token` generado desde el front tras login con Google.
  - Backend valida el token con Supabase y devuelve información del usuario.

### Training Info
- POST /user_training_info
- POST /data_training_day
- GET /training_info_by_day?userId=<ID>&trainingDay=<DIA>

Testing
-------
- Se recomienda usar Postman para probar endpoints.
- Para autenticación Google, generar `access_token` desde el front y enviarlo al endpoint `/auth/google`.

Notas Adicionales
-----------------
- Backend está preparado para trabajar con Docker, lo que permite levantar MongoDB y Node.js de manera aislada.
- Arquitectura hexagonal y DDD aplicada:
  - `domain/` → entidades y contratos.
  - `services/` → lógica de negocio.
  - `infrastructure/` → clientes externos (Mongo, Supabase).
  - `controllers/` → reciben requests y llaman a servicios.
  - `routes/` → definición de endpoints.
- Para producción, configurar variables de entorno y secretos de Supabase de manera segura.
- Se recomienda cerrar sesión y tokens de Supabase correctamente en el front.

Autor
-----
David Zamora Pérez
