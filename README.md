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

  1.1.2 Initialize TypeScript
    - npx typescript --init
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

**_2. frontend_**

- bootstrap a react application with create react app
- make requests to the server with axios
- build with typescript

  _2.1 Booststrap react application_

  ```
  2.1.1 create application
    - npx create-react-app ui --template typescript

  2.1.2 cleanup files

  2.1.3 install required packages
    - yarn add @chakra-ui/react axios @emotion/react @emotion/styled framer-motion

  2.1.4 add configuration (server endpoint)
  ```

  _2.2 Network request_

  ```
  2.2.1 make request to server

  2.2.2 display new short URL
  ```

  _2.3 Fix backend bugs_

  ```
  2.3.1 validate destination as a url

  2.3.2 enable cors Cross-Origin Resource Sharing
  ```

  _2.4 Background image_

  ```
  2.4.1 get the background image from unsplash

  2.4.2 resize the image on window size change
  ```

  _2.5 Router_

  ```
  2.5.1 setting router in app
    - yarn add @types/react-router-dom@5.2.3
  ```

**_3. deployment_**

- create a digitalocean droplet
- create the build scripts
- configure and ssl certificate
- configure nginx web server

  _3.1 Add env to backend_

  ```
  3.1.1 install dotenv

  3.1.2 add custom-environment-variables.ts
  ```

  _3.2 configuration_

  ```
  3.2.1 add env_file to docker-compose

  3.2.2 configuration caddyfile

  3.2.3 create build script
  ```

  _3.3 deployment_

  ```
  3.3.1 push code to github

  3.3.2 create digitalocean droplet

  3.3.3 configure domain

  3.3.4 install git on droplet `apt-get update && apt-get install git`

  3.3.5 pull repository

  3.3.6 build and deploy
  ```

  _3.4 deploy ui_

  ```
  3.4.1 deploy Ui on Vercel
  ```
