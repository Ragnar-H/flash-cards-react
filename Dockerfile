FROM node:boron
MAINTAINER Ragnar <ragnarhardarson90@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

RUN npm run deploy:prod
CMD ["npm", "start"]
