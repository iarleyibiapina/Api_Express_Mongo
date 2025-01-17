FROM node:latest
# Criando diretório do app
WORKDIR /usr/src/app
# Expondo a porta
EXPOSE 3333
# Executando como desenvolvimento
FROM base AS dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER root
COPY . .
CMD npm run dev

# Executando como produção
FROM base AS prod
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
USER root
COPY . .
CMD npm start