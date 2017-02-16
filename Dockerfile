FROM node:7.5.0
MAINTAINER yc-zhang <turalyon.zhangyc@gmail.com>

# install api
RUN mkdir /api
WORKDIR /api
ADD package.json /api/package.json
RUN npm install --production
ADD server.js /api/server.js

CMD ["npm", "start"]

EXPOSE 8000
