# AdminPro - Backend

1. First Step `npm install`
2. Start the app `npm run start:dev`


###
1. Inicializa un proyecto node `npm install -y`
2. Instala el modulo de express en el proyecto  `npm install express`
3. Start the project `npm index.js`
4. Para detectar cambios automáticos en la aplicaciones node `npm install -g nodemon`
5. Add to package.json the script for nodemon
```json
  "scripts": {
    "start:dev": "nodemon index.js"
  },
```
6. Start the project with nodemon `npm run start:dev`
7. Configure your mongo atlass
8. Install mongoose `npm i mongoose`
9. Configure mongoose, see database/config.js

### Configure enviroments properties
1. Install `npm i dotenv`
2. Create **.env** file and add the variables `<VARIABLE NAME>=<VARIABLE VALUE>`
3. Add `require('dotenv').config();` to **index.js** file
4. Now you can use `process.env.<VARIABLE NAME>` for read the property

### Configure CORS
1. Install `npm i cors`
2. Add the require `const cors = require('cors')`
3. Add the line `app.use(cors())`