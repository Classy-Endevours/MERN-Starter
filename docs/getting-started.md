
## Technology Stack
This project will majorly focused on MERN stack but It will also have some out of the box technologies
- Development Stack
  - MongoDB
  - Express
  - ReactJS
  - NodeJs
- DevOps Stack
  - Docker
  - GitHub AutoDevOps
- Test & Workflow
  - Jest
  - Mocha
  - Husky
  - ESLINT

### Installation
To keep this project running on your local system you need to
- Go to `client` folder
- run `yarn` to install all the dependencies
- Update the `.env` file
- Come out to parent
- Go to `server` folder
- run `yarn` to install all the dependencies
- Update the `.env` file

### Environment variables
**Client**
- REACT_APP_SECRET_KEY - To hash your password
- REACT_APP_DEFAULT_AXIOS_URL - To store your backend url

**Server**
- PORT - port number
- NODE_ENV - development/testing/production
- DATABASE_URL - URI for postgres database
- ADMIN_EMAIL_ID - Seed admin email Id
- ADMIN_PASSWORD - Seed admin password
- ADMIN_PHONE - Seed admin phone number
- ADMIN_NAME - Seed admin name
- ADMIN_ADDRESS - Seed admin address
- MAIL_SERVICE_ID - Mail service id
- MAIL_SERVICE_PASSWORD - Mail service password
- MONGODB_URL - MongoDB URI
- SECRET_KEY - To hash your password

Note: Seed data wil run whenever the server starts

### Command
**Client**
- Start - `yarn start`
- Build - `yarn build`
- Test - `yarn test`
- Eject - `yarn eject`

**Server**
- Start - `yarn start`
- Test - `yarn test`
- Start development server - `yarn dev`
- Postgres migration create - `yarn migration:create`
- Postgres migration up - `yarn migration:create`
- Postgres migration down - `yarn migration:up`
- Postgres migration down all - `yarn migration:down`
- Postgres migration reset - `yarn migration:down:all`
- Postgres seeder create - `yarn seeder:create`
- Postgres seeder up - `yarn seeder:up`
- Postgres seeder down - `yarn seeder:down`
- Postgres seeder down all - `yarn seeder:down:all`
- Postgres seeder reset - `yarn migration:reset`
  
