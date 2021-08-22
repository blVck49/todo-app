FROM node:14.17.5
WORKDIR /

COPY package*.json ./

RUN npm install

RUN npm test

COPY . .

EXPOSE 1012

CMD [ "npm", "run", "start" ]
