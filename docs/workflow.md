# Workflows

Whenever a change happens it will be deployed over a creadentials provided in the github repo to path `github.com/[project-path]/setting/actions`. You can find the credentials for deployment there and can add/edit secrets to change in deployments

## Client deployment
For deploying to client, you can read/edit the deployment file present in 
`.github/workflows/frontend.yml`
This either way get the system verified with the heroku and then deploy on the app. You can find the deployment URL on the heroku dashboard. This app is connected with backend app[description below]
By default any change in `main` branch and `client` folder will trigger the pipeline to run and will deploy the code to provided server

## Server deployment
For deploying to server, you can read/edit the deployment file present in 
`.github/workflows/frontend.yml`
This either way get the system verified with the heroku and then deploy on the app. You can find the deployment URL on the heroku dashboard
By default any change in `main` branch and `server` folder will trigger the pipeline to run and will deploy the code to provided server

## Pull request
For any pull request to `main` branch will trigger this workflow present in `.github/workflows/pull_reqeuest.yml`. It will check the testcases for both `frontend` and `backend` to be passed. However, you will still get the option to merge the code. You can configure that while going into,
`setting > branches > rules` and add a new rule correspond to pull request for `main`