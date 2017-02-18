FROM node:7.5.0
MAINTAINER yc-zhang <turalyon.zhangyc@gmail.com>

# install api
RUN mkdir /api
WORKDIR /api
ADD package.json /api/package.json
RUN npm install --production
ADD config /api/config
ADD controller /api/controller
ADD migration /api/migration
ADD server.js /api/server.js
ADD run.sh /api/run.sh

CMD ["sh", "./run.sh"]

EXPOSE 8000
