-    Install package.json file : `npm init`
-    Install typescript: got to-> https://www.typescriptlang.org/download
        
            npm install typescript --save-dev
    
- install express : npm install express --save
- install mongoose : npm install mongoose --save
- npm i ts-node-dev

  "scripts": {
    "dev":"ts-node-dev --respawn --transpile-only src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

`npm run dev`   