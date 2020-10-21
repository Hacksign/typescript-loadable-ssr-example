# Introduction

This repo is modified from [Here](https://github.com/natterstefan/loadable-components-example)

## Run with bash:

`npm run start:production` to start a production environment.

`npm run dev:development` to start a production environment.

## Run with vscode:

Just open this folder with vscode, then press `F5`

# Directory structure

```
./
├── babel.config.js
├── build
│   ├── webpack.client.js
│   ├── webpack.lib.js
│   └── webpack.server.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── client
│   │   ├── app.tsx
│   │   ├── components
│   │   │   ├── image.tsx
│   │   │   ├── index.tsx
│   │   │   └── layout.tsx
│   │   ├── entry-node.tsx
│   │   ├── entry-web.tsx
│   │   └── pages
│   │       ├── about.tsx
│   │       └── home.tsx
│   └── server
│       └── index.tsx
├── tsconfig.json
└── .vscode
    ├── launch.json
    └── tasks.json
```
