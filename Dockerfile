FROM node:boron
MAINTAINER Ragnar <ragnarhardarson90@gmail.com>


RUN curl -sS http://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
RUN apt-get install yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app



COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile

COPY . /usr/src/app

EXPOSE 8080

RUN npm run deploy:prod

ENV NODE_ENV production

CMD ["npm", "start"]
