FROM node:14.16.1 as build
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:1.21.0-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/qisim /usr/share/nginx/html
