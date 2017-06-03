const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my ${superb()} project`
    },
    distribute: {
      message: 'Do you want to distribute the app using electron-builder?',
      default: true,
      type: 'confirm'
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
  showTip: true,
  gitInit: true,
  installDependencies: true
}
