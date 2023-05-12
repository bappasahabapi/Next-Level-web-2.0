First run the command in terminal: ` brew services start mongodb-community@6.0`

Second runt the mongodb compass shell.

then: `npm run dev`   



`Read this must:` https://mongoosejs.com/docs/typescript.html
`Read this must:`https://mongoosejs.com/docs/typescript/statics-and-methods.html

**Break down code**
📁app

  /📁modules

    /📁user

-    1. interfce -> interfce.ts
-    2. Schema,model ->model.ts
-    route 
-    4. route function(api-route-controller-function) ->controller.ts
-    5. Database Query Functions ->service.ts


`todo: calling pattern`

    Route calling --> controller calling -->service



**Here we learn how Interface make .And Form the interface how to make Schema.And form Schema we make model**


---


-    Install package.json file : `npm init`
-    Install typescript: got to-> https://www.typescriptlang.org/download
        
            npm install typescript --save-dev
    
- install express : npm install express --save
- install mongoose : npm install mongoose --save

**npm i ts-node-dev**
- 

  "scripts": {
    "dev":"ts-node-dev --respawn --transpile-only src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

`npm run dev`   


-    Install cors: ` npm install cors`
 
- `npm i --save-dev @types/cors`

- `npm i --save-dev @types/express`