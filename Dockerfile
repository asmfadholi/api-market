FROM node:12.19

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm i

COPY . /app

RUN npm run build

CMD ["npm", "start"]
