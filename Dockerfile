# STAGE 1
FROM node:16 as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -g rimraf
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

# STAGE 2
FROM node:16
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
USER node

RUN npm install --production
COPY --chown=node:node .env ./
COPY --from=builder /home/node/app/build ./build

ARG PORT=3000
ENV PORT=$PORT

EXPOSE $PORT
CMD [ "npm", "run", "start" ]