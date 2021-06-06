# MERN-starter
A starter kit for MERN stack
It includes a business oriented multi role starter kit with postgres ORM included.
Other than the common stack we are following we have made few things as a must needed to do a project right,

- Use theme always
- Use a code in a pattern always
- Use a middleware properly
- Configure the code to have a modularity
- Write test cases for all the unit coverage

## Folder structure
Here you can find more exhaustive coverage for the folder structures

### Docs
This folder will have a parent level documentation for your code base

### .github
This folder will store all your workflows which require automation

### Server
- .vscode - for common vscode patches
- bin - To seperate out your application entry point with the other starter loaders like db connection
- config - All the project level configurations will be here
    - logger - Environment specific loggers can be found here
    - database - MongoDB and Postgresql setting are here, you can change to whatever you want
- constant - To store your server level constant variables
- controllers - To store your actual business logic, you can change this into more modular based on your project
- lib - A Bigger utility where you can actually impacting a part of a feature
- middlwares - To store your middlewares
- routes - To store your api routes
- app.js - Entry point of your server application
- .sequelizerc - config file for sequelizer ORM
- Dockerfile - starter file incase wants to wrap code in docker
- test - To store testcases for your project
- ...rest of the utility files
### Client
- .vscode - for common vscode patches
- public - To place your static media files and favicons
- src - Your main wrapper
    - mocks - To store your mocked data
    - common - To store common components and uielements
    - components - To store page level components to handle the UX logic
    - constant - To store your constant variables
    - icon - To use custom and self created icons [Please put .image in your public folder and custom icons here]
    - layout - To create a common layout for multiple pages
    - pages - A complete collection of your routes and pages will be here
    - routes - Route setting and types will be residing here
    - store - redux configuration will takes place
    - theme - your theme packages will be stored here
    - utils - other than your component logic, common methods will stored here
    - test - a folder containing every test scripts
    - App.js - entry point of your app
    - index.js - wrapper for App.js
    - ...rest are utility files

You can find more details in the below links,
- [Project Details](docs/project.md)
- [Getting started](docs/getting-started.md)
- [Client Getting started](docs/client-getting-started.md)
- [Server Getting started](docs/server-getting-started.md)
- [Add new Seeder](docs/add-new-seeder.md)
- [Middlewares](docs/middlewares.md)
- [Workflow](docs/workflow.md)