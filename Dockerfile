FROM node:20.11 as builder
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install
COPY . /app
RUN yarn run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/conf /etc/nginx/conf.d
COPY --from=builder /app/conf/certbot /usr/share/nginx/certbot
#RUN apt-get update && apt-get install certbot -y apt-get install python3-certbot-nginx -y
#RUN certbot --nginx --email "alexander.nikiforov.02@yandex.ru" -d "storysphere.ru"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]