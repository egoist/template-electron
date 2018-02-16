const { join } = require('path')
const superb = require('superb')
const glob = require('glob')

const rootDir = __dirname

const move = (from, to = '') => {
  const result = {}
  const options = { cwd: join(rootDir, 'template', from), nodir: true, dot: true }
  for (const file of glob.sync(`**`, options)) {
    result[join(from, file)] = join(to, file)
  }
  return result
}

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you describe the new project?',
      default: `my ${superb()} project`
    },
    distribute: {
      message: 'Do you want to distribute the app using electron-builder',
      default: true,
      type: 'confirm'
    },
    bundler: {
      message: 'Do you want to use a bundler',
      default: false,
      choices: [
        {
          name: 'No, move on',
          value: false
        },
        {
          name: 'Poi',
          value: 'poi'
        },
        {
          name: 'Parcel',
          value: 'parcel'
        }
      ],
      type: 'list'
    },
    isLoadURL: {
      message: 'Use this app to load a URL instead of local file',
      default: false,
      type: 'confirm',
      when: answers => answers.bundler === false
    },
    loadURL: {
      message: 'Enter the URL',
      required: true,
      when: answers => answers.isLoadURL
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({ username }) {
        return `github.com/${username}`
      },
      store: true
    }
  },
  move({ bundler }) {
    const src = bundler === 'poi' ? 'src-poi' : 'src-parcel'
    return Object.assign({
      gitignore: '.gitignore'
    }, move(src, 'src'))
  },
  filters: {
    'app/renderer/**': '!isLoadURL && bundler === false',
    'poi.config.js': 'bundler === "poi"',
    'src-parcel/**': 'bundler === "parcel"',
    'src-poi/**': 'bundler === "poi"'
  },
  async post({ gitInit, yarnInstall, log, chalk, pm }) {
    gitInit()
    yarnInstall()
    log.info(`To develop the app: ${chalk.cyan(pm)} run dev`)
    log.info(`To build for production: ${chalk.cyan(pm)} run build`)
    log.info(`To distribute: ${chalk.cyan(pm)} run dist`)
  }
}
