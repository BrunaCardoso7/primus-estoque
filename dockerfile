FROM node:latest

WORKDIR /app

COPY . .

COPY ./.env.production .env

RUN npm install -g @nestjs/cli
RUN npm install --quiet --no-fund --loglevel=error

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start:prod" ]
