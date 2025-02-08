FROM alpine:latest
ENV PORT=8686

FROM node:21-alpine as build
WORKDIR /usr/src/app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm i -g pnpm
RUN  pnpm i
COPY . .
RUN npm run build

FROM node:18
RUN apt update && apt install libssl-dev dumb-init -y --no-install-recommends
RUN npm i -g pnpm
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/.dist ./dist
COPY --chown=node:node --from=build /usr/src/app/.env .
COPY --chown=node:node --from=build /usr/src/app/package.json .
COPY --chown=node:node --from=build /usr/src/app/pnpm-lock.yaml .
RUN  pnpm i

EXPOSE 8686

CMD ["dumb-init", "node", "dist/src/main"]
