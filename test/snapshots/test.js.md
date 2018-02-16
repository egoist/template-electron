# Snapshot report for `test/test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://ava.li).

## defaults

> Snapshot 1

    [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      'LICENSE',
      'README.md',
      'app/config.js',
      'app/index.js',
      'app/menu.js',
      'app/package.json',
      'app/renderer/index.html',
      'app/renderer/js/app.js',
      'package.json',
    ]

## parcel

> Snapshot 1

    [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      'LICENSE',
      'README.md',
      'app/config.js',
      'app/index.js',
      'app/menu.js',
      'app/package.json',
      'package.json',
      'src/index.html',
      'src/main.js',
    ]

> package.json

    `{␊
      "private": true,␊
      "name": "output",␊
      "description": "mock",␊
      "version": "0.0.0-this-does-not-matter",␊
      "license": "MIT",␊
      "scripts": {␊
        "postinstall": "cd app && npm install && rm -rf package-lock.json",␊
        "test": "echo lol",␊
        "build": "parcel build src/index.html --target electron -d app/renderer --public-url ./",␊
        "renderer": "parcel src/index.html --target electron --port 4000",␊
        "dev": "concurrently \\"npm run main\\" \\"npm run renderer\\" -k",␊
        "main": "electron app/index.js",␊
        "dist": "npm run dist:mac && npm run dist:deb && npm run dist:win",␊
        "dist:mac": "build --mac",␊
        "dist:linux": "build --linux deb tar.xz",␊
        "dist:win": "build --win --ia32"␊
      },␊
      "build": {␊
        "appId": "com.egoist.output",␊
        "productName": "Output",␊
        "asar": true,␊
        "mac": {␊
          "category": "public.app-category.developer-tools"␊
        },␊
        "win": {␊
          "target": "nsis"␊
        },␊
        "nsis": {␊
          "oneClick": false␊
        },␊
        "linux": {␊
          "category": "public.app-category.developer-tools"␊
        }␊
      },␊
      "devDependencies": {␊
        "concurrently": "^3.5.0",␊
        "electron": "^1.6.10",␊
        "electron-builder": "^18.0.1",␊
        "electron-builder-squirrel-windows": "^18.0.0",␊
        "parcel-bundler": "^1.6.0"␊
        ␊
      }␊
    }␊
    `

## poi

> Snapshot 1

    [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      'LICENSE',
      'README.md',
      'app/config.js',
      'app/index.js',
      'app/menu.js',
      'app/package.json',
      'package.json',
      'poi.config.js',
      'src/App.vue',
      'src/index.js',
    ]