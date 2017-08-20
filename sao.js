const superb = require('superb')

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
    webpack: {
      message: 'Do you want to use webpack to bundle renderer process',
      default: false,
      type: 'confirm'
    },
    isLoadURL: {
      message: 'Use this app to load a URL instead of local file',
      default: false,
      type: 'confirm',
      when: answers => !answers.webpack
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
  move: {
    gitignore: '.gitignore'
  },
  filters: {
    'app/renderer/**': '!isLoadURL && !webpack',
    'poi.config.js': 'webpack',
    'src/**': 'webpack'
  },
  async post(ctx) {
    ctx.gitInit()
    ctx.yarnInstall()
    ctx.showTip()
  }
}
