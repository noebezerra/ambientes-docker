FROM node:16.14.2

WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
COPY . .
RUN yarn install
# expose port 3333 or 3000
EXPOSE 3333
EXPOSE 3000
# Start app using yarn dev
CMD yarn dev