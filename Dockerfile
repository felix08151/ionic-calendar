FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY .https://github.com/felix08151/ionic-calendar
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
