### Create a typescript environment Step by step
NVM- node version management
------------------------------------------------------------

install nvm from github (nvm windows)

-   `nvm - - v` (to check the version)
-   `nvm install 18.16.0`(to install a specific node version not NVM version)
-   `nvm list `(to check the installed node versions)
-  ` nvm use 19.05.02`(to use specific node version)
TypeScript
-------------------------------------------------------------------------
-   `npm install -g typescript`
-   `tsc - - v` (tsc is a typescript compiler)
-   `tsc - - init` (to initilalized a typescript configuration file)
Nodemon
---------------------------------------------------------------------
`npm init -y` (to create a package json file and package json lock file will be initialized)
-   `npm i -D nodemon` (set nodemon as a dev dependency)
-   Add a script to package.json file “start” : `“nodemon index.ts”`
-   SO NOW WE NEED TO CONVERT A TS FILE TO JS FILE
-   THEN NODEMON WILL AUTOMATICALLY COMPILE THE PROJECT
-   Two terminal need to be opened at the same time
-   We can simplify this process with ts-node-dev package
--------------------------------------------------------------
-   Ts-node-dev (this package can typescript file in node environment)
-  ` npm i ts-node-dev` (install the ts-node-dev package)
-   Add this script to the package.json "start": `"ts-node-dev --respawn --transpile-only index.ts"`,
**In Typescript config file activate this two line and target the input and -   outpur folder**
-   rootdir (src)
-   outdir(dist)
Command to run specific file
--------------------------------------------------------------
-   `npx ts-node-dev - -respawn ./src/function.ts`
