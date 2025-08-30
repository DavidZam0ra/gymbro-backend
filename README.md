src/
 ├── domain/                 # Entidades y reglas de negocio (puro JS/TS, sin librerías externas)
 │   ├── user/User.js
 │   ├── training/TrainingDay.js
 │   └── exercise/Exercise.js
 │
 ├── application/            # Casos de uso (coordinan dominio + puertos)
 │   ├── user/CreateUserTrainingInfo.js
 │   ├── training/CreateTrainingDay.js
 │   └── training/GetTrainingInfoByDay.js
 │
 ├── infrastructure/         # Implementaciones concretas de puertos
 │   ├── db/
 │   │   └── MongoUserRepository.js
 │   │   └── MongoTrainingRepository.js
 │   ├── auth/
 │   │   └── SupabaseAuthService.js
 │   ├── api/
 │   │   └── express/
 │   │       ├── controllers/
 │   │       │   └── userController.js
 │   │       └── routes.js
 │   └── config/
 │       └── database.js
 │
 └── index.js                # Punto de entrada (infra principal: Express)