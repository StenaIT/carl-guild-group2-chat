FROM node:latest

# Create app directory
ADD . /src
COPY package.json /usr/src
COPY index.js  /usr/src
COPY index.html  /usr/src

WORKDIR /usr/src

# Install app dependencies
COPY . /src
RUN npm install


EXPOSE 8080

CMD ["node", "/usr/src"]
