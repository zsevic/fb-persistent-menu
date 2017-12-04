const FB = require('facebook-node')
const chalk = require('chalk')

const addPersistentMenu = (accessToken, settings) => {
  settings.access_token = accessToken
  FB.api('/me/messenger_profile', 'post', settings,
    res => {
      if (res.error) {
        handleError(res.error.message)
      } else {
        if (res.result === 'success') {
          handleSuccess(`Persistent menu is successfully added`)
        }
      }
    })
}

const removePersistentMenu = access_token => {
  FB.api('/me/messenger_profile', 'delete', {
    fields: [
      'persistent_menu'
    ],
    access_token
  }, res => {
    if (res.error) {
      handleError(res.error.message)
    } else {
      if (res.result === 'success') {
        handleSuccess(`Persistent menu is successfully removed`)
      }
    }
  })
}

const handleSuccess = msg => {
  console.log(chalk.blue(msg))
}

const handleError = msg => {
  console.log(chalk.red(msg))
}

const usage = () => {
  console.log(`
CLI tool that adds or removes "Persistent menu" (on Messenger) from Facebook page

Usage: fb-persistent-menu --token <PAGE_ACCESS_TOKEN> [options]

Options:
          
    --settings '<MENU>'     settings (json format) for menu
    -r, --remove            remove menu`)
}

module.exports = {
  addPersistentMenu,
  removePersistentMenu,
  handleError,
  usage
}
