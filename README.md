## Getting Started

Getting the project:

```bash
$ git clone https://jacksondawson.visualstudio.com/IS_JD_AppStore/_git/IS_JD_AppStore2
```

Installing dependencies:

```bash
$ npm install
```

Running the project locally:

```bash
$ npm run serve
```

Building a distribution package:

```bash
$ npm run build
```
You can define additional build environments by creating new .env files
in the root of the vue project (the same level as the package.json).
Need a preprod build? Just create a .env.preprod file and define your variables, prefaced with VUE_APP_ to expose them to the application. In our case, the pertinent vars are API_URL and BASE_URL. To access these vars within the application, use process.env.VUE_APP_*VARNAME*.
Now create a new script in the package.json named build-preprod, which performs the action
```bash
vue-cli-service build --mode=preprod
```

The package will be build out to the dist folder at the root of the project.

## Deploying to Staging

To deploy to staging, copy the contents of the dist folder to the FE folder on the staging server and overwrite any prompted files.
