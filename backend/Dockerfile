FROM node:20-slim AS base
RUN apt-get update && apt-get install -y procps
RUN apt-get update -y && apt-get install -y openssl
RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app/api
# Copy package.json and package-lock.json to the container
COPY package*.json ./
COPY .env ./

RUN pnpm install

COPY . .


FROM base AS build
WORKDIR /app/api
COPY . .
COPY --from=dependencies /app/api/node_modules ./node_modules
RUN pnpm build
RUN pnpm prune --prod

FROM base AS deploy
WORKDIR /app/api
COPY --from=build /app/api/dist/ ./dist/
COPY --from=build /app/api/node_modules ./node_modules
CMD [ "node", "dist/main.js" ]


FROM base AS dev
WORKDIR /app/api
COPY --from=build /app/api/dist/ ./dist/
COPY --from=build /app/api/node_modules ./node_modules
CMD ["pnpm",  "start:dev"]