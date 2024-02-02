FROM node:20.11 as builder
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install
COPY . /app
RUN yarn run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]