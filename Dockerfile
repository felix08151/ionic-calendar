FROM nginx:alpine
ENTRYPOINT ["sh", "/usr/src/app/docker-entrypoint.sh"]
RUN rm -rf /usr/share/nginx/html/*
RUN apk add --no-cache git
RUN git clone https://github.com/felix08151/ionic-calendar.git /usr/share/nginx/html
COPY docker-entrypoint.sh /docker-entrypoint.sh
EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
