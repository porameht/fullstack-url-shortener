# fullstack-url-shortener

this project using

- typescript
- nodejs
- express
- reactjs
- mongodb

**_1. backend_**

- restapi with express
- connect to a mongodb instance
- validate requests with yup
- containerize with docker
- build with typescript

  _1.1 Setup application_

  ```
  1.1.1 Initialize project yarn init

  1.1.2 Initialize TypeScript npx typescript --init
    - yarn add express cors body-parser config mongoose yup nanoid
    - yarn add @types/express @types/cors @types/body-parser @types/config @types/mongoose @types/yup @types/nanoid @types/node typescript ts-node -D
  1.1.3 Create required files

  1.1.4 Setup nodemon

  1.1.5 Install required packages

  1.1.6 Setup config
  ```

  _1.2 Add create route_

  ```
  1.2.1 Add model

  1.2.2 Add route

  1.2.3 Add controller
  ```

  _1.3 Add analytics_

  ```
  1.3.1 Create analytics model

  1.3.2 Add to route
  ```

  _1.4 Containerize with Docker_

  ```
  1.4.1 Add Dockerfile

  1.4.2 Add docker-compose
  ```

**_2. fronend_**

- bootstrap a react application with create react app
- make requests to the server with axios
- build with typescript

**_3. deployment_**

- create a digitalocean droplet
- create the build scripts
- configure and ssl certificate
- configure nginx web server
