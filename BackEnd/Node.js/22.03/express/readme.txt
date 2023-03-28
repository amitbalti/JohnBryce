For using express with it's all sub modules, we need the following command:
    npm install express body-parser cors @types/express-fileupload @types/morgan loadash 


express
=======
Popular web framework on top of node.js, we shell use it for development of REST API.

body-parser
===========
node.js requesr body parsing middleware parses the incoming request body before we will handle 
and makes it available under the 'request.body' in short, simplifies incoming request...

{data:{name: "zeev"}} => middleware => {name: "zeev"} =>

cors 
=======
another express middleware for enabling CORS (Cross Origin Resource Sharing) requests.

express-fileupload
====================
simple express middleware for uploading files, it parses 'multipart/form-data' requests.
extracts the files if available, and makes them available under req.files property.

morgan (Yorgan)
====================
node.js middleware for loggin http requests.

loadash 
=========
JavaScript library that provides utility functions for arrays, numbers, objects, string, etc....


&&&&&&&&&&&&&&&&

The create all this neccasery files and docs:
    Files: 
        - Logic.
        - MiddleWare.
        - Models.
        - Routes.
        - Utils - inside:
            - Config file. 
    Docs:
        - Dockerfile
        - .gitignore - which will include: node_modules.
        - server.ts