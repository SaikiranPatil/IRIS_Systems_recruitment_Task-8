FROM node:16-alpine

ENV MONGO_DB_USERNAMEQ=admin \
    MONGO_DB_PASSWORDQ=password

RUN mkdir -p /home/app  

COPY . /home/app

CMD ["node","/home/app/app.js"]
