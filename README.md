# TransVoca FrontEnd

## Environment variables (in .env or served via CLI)
| Key                  | Description/Usage                         | Default                | Mandatory  |
| :------------------: |:-----------------------------------------:| :---------------------:| :---------:|
| REACT_APP_SERVER_URL | 'http(s)://a.com' address of server       | http://localhost:8080  | yes        |
| UI.PORT              | Port on which production build should run | 3000                   | yes        |


## Running development build
1. Install app by running `npm install`
2. Run app on webpack's dev server `npm run dev`

## Running production build
1. Install app by running `npm install`
2. Build app `npm run build`
2. Run app on express server `npm run start`