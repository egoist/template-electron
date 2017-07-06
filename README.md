# template-electron

[![NPM version](https://img.shields.io/npm/v/template-electron.svg?style=flat-square)](https://npmjs.com/package/template-electron) [![NPM downloads](https://img.shields.io/npm/dm/template-electron.svg?style=flat-square)](https://npmjs.com/package/template-electron) [![Build Status](https://img.shields.io/circleci/project/egoist/template-electron/master.svg?style=flat-square)](https://circleci.com/gh/egoist/template-electron) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)


 <img src="https://ooo.0o0.ooo/2017/06/04/5932e1555343c.gif" width="600" />

## Features

- Run app in background, i.e. click `x` will only hide the window and reopen it will not trigger reloading.
- No build process, made simple (webpack support is optional)

## Usage

Install [SAO](https://github.com/egoist/sao) first.

```bash
yarn global add sao
# or
npm i -g sao
```

### From git

```bash
sao egoist/template-electron my-project
```

### From npm

```bash
sao electron my-project
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
