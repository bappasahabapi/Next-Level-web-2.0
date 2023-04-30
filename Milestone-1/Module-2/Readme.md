**📔 Module-2: Explore basic type of Typescript**

    node -v

#####  node version manager (nvm node)
[1.node-version-manger](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

**For mac:** run the follwing command one by one
    
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    brew install nvm

    touch ~/.zshrc
    
    export NVM_DIR=~/.nvm

    source $(brew --prefix nvm)/nvm.sh
    
    source ~/.zshrc

    nvm --version

📦 **Install Typescript**
[doc-link](https://www.typescriptlang.org/download)

🗂️ TypeScript into your project. `npm install typescript --save-dev`
🗂️ Install local folder `npm i -save-dev typescript`
➡️ Install globally ` npm i -g typescript`
➡️ check version `tsc -v`
➡️ run the code `tsc ./index.ts`
➡️ To make typescript configure file ` tsc --init `
➡️ To create package.json file `npm init -y`
➡️ To see the change automatically `tsc -w`
➡️ or install nodemon `npm i -D nodemon`
➡️ To run the server `npm start`
📦 ts-node-dev `npm i ts-node-dev`
    
add this file to package.json under ` ts-node-dev --respawn --transpile-only server.ts`

    "scripts": {
        "start": "ts-node-dev --respawn --transpile-only index.ts",
        "test": "echo \"Error: no test specified\" && exit 1"
      },

    to run the file:  npm start

💡Configure typeScript compiler `tsconfig.json`

```typescript
 "rootDir": "./src",     
 "outDir": "./dist",    
```