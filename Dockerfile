FROM node:lts as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY nginx.config /etc/nginx/nginx.conf 

COPY --from=node /app/dist/newsletter-app /usr/share/nginx/html