# Webpack

By default we don't use a bundler, so files for renderer process are populated at `app/renderer` folder. If you enabled webpack support, that folder will be automatically generated from `src` folder using webpack:

- poi.config.js
- src/App.vue
- src/index.js

[Poi](https://github.com/egoist/poi) is a webpack wrapper that abstracts away a lot of boilerplate code.

And you will get 4 addtional npm scripts:

- `npm run renderer`: Run the dev server then your renderer process will be available at `http://localhost:4000`. (You can't visit it directly via browser though, instead we load this URL in the Electron main process during development)
- `npm run build`： Build the source files of renderer process to `app/renderer` directory.
- `npm run main`: Run Electron app (main process) to load `http://localhost:4000` in development or `app/renderer/index.html` in production.
- `npm run dev`: Run `npm run main` and `npm run renderer` concurrently.

In development, you only need to run `npm run main` and `npm run renderer` side by side. Or do yourself a favor using `npm run dev` which runs the above npm scripts `concurrenly` so that you only need to open one terminal tab.

**Note that you need to re-run `npm run main` or `npm run dev` after update the code of main process.**

If you're running `npm run dev`, you may need to refresh electron window when `npm run renderer` is ready since webpack might take seconds or more to finish bundling for the first time.

## Packaging

Before packaging your app, you need to run `npm run build` to build the code of renderer process to `app/renderer` directory.
