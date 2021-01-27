FROM node:latest
WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1010

CMD [ "npm", "run", "start" ]