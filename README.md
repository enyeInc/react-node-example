# React + Node Starter

## OVERVIEW
This is a simple starter to get you up and running for React projects. This is intended to provide:

* a lightweight Webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild

## UP & RUNNING
Install dependencies:
```
$ npm i
```

Fire up a development server:
```
$ npm run dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ npm run lint
```

To run the watch task:
```
$ npm run lint:watch
```

## Production Build

To build your production assets and run the server:
```
$ npm run start
```
