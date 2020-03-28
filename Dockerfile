# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/header

# Tell your container where your app's source code will live
WORKDIR /src/header

# What source code do you want to copy, and where to put it?
COPY . /src/header

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3001

ENV MYSQL_DATABASE="movies_db"
ENV MYSQL_USER="root"
ENV MYSQL_HOST="database"
ENV MYSQL_ROOT_PASSWORD="root"

# How do you start your app?
# RUN node seed.js
CMD [ "npm", "start" ]

