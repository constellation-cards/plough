FROM node:14 AS build
RUN mkdir /build
WORKDIR /build
COPY *.json *.js *.ts /build/
COPY src /build/src
RUN npm ci
RUN npm run build:all

FROM node:14
RUN mkdir /app
WORKDIR /app
COPY --from=build /build/node_modules /app/node_modules
COPY --from=build /build/public /app/public
COPY --from=build /build/dist /app/dist
COPY entrypoint.sh /app
EXPOSE 3000
ENTRYPOINT ["/app/entrypoint.sh"]
