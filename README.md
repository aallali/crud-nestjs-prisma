
### What
- play around nestjs/prisma/docker combo
- understand in-depth modular architecture
- database: PostgreSQL
---
#### Docker:
- run containers: `docker-compose down`
- destroy containers: `docker-compose down`
- re-build containers: `docker-compose up --build`
#### Backend:
- `pnpm start:dev`
- exposed at port: `3000`
#### Database:
- Init DB for first time: `pnpx prisma init`
- Migration: `pnpx prisma migrate dev --name {{MIGRATION_NAME}}`

#### PGAdmin:
- dashboard: `http://localhost:5050`
- username: `admin`
- password: `password`
- database exposed at port: `5432`