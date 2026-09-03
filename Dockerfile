FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:alpine

RUN apk update && apk upgrade

COPY --from=builder /app/dist /usr/share/nginx/html

# Configure NGINX for non-root execution
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf \
    && sed -i 's/listen \[::\]:80;/listen [::]:8080;/' /etc/nginx/conf.d/default.conf \
    && sed -i 's|pid.*\/run\/nginx\.pid;|pid /tmp/nginx.pid;|' /etc/nginx/nginx.conf \
    && mkdir -p /var/cache/nginx /var/run \
    && chown -R nginx:nginx /var/cache/nginx /var/run /usr/share/nginx/html

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
