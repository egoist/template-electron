# Webpack

By default we don't use a bundler, so files for renderer process are populated at `app/renderer` folder. If you enabled webpack support, that folder will be automatically generated from `src` folder using webpack:

- poi.config.js
- src/App.vue
- src/index.js

[Poi](https://github.com/egoist/poi) is a webpack wrapper that abstracts away a lot of boilerplate code.

And you will get 3 addtional npm scripts:

- `npm run dev`: Run the dev server which will be available at `http://localhost:4000` by default.
- `npm run build`: Bundle `src/index.js` into `app/renderer` folder.
- `npm run both`: Run `npm run dev` and `npm run app` concurrently.

In development, you only need to run `npm run app` and `npm run dev` side by side. Or do yourself a favor using `npm run both` which uses `concurrenly` so that you only need to open one terminal tab.

**Note that you need to re-run `npm run app` or `npm run both` after update the code of main process.**

If you're running `npm run both`, you may need to refresh the opened window when `npm run dev` is ready since it will take seconds to start.
