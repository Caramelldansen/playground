FROM node:8.10.0-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["yarn", "start"]
