const FB = require('facebook-node')
const chalk = require('chalk')

const addPersistentMenu = (accessToken, settings) => {
  settings.access_token = accessToken
  FB.api('/me/messenger_profile', 'post', settings,
    async res => {
      if (res.error) {
        if (res.error.message === '(#100) You must set a Get Started button if you also wish to use persistent menu.') {
          let res = await setGetStartedButton(accessToken)
          if (res.result === 'success') {
            handleSuccess('Get Started button is added')
            addPersistentMenu(accessToken, settings)
          } else {
            handleError(res.error.message)
          }
        } else {
          handleError(res.error.message)
        }
      } else {
        if (res.result === 'success') {
          handleSuccess(`Persistent menu is successfully added`)
        }
      }
    })
}

const removePersistentMenu = accessToken => {
  FB.api('/me/messenger_profile', 'delete', {
    fields: [
      'persistent_menu'
    ],
    access_token: accessToken
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

const setGetStartedButton = accessToken => {
  let settings = {
    get_started: {
      payload: 'GET_STARTED_PAYLOAD'
    },
    access_token: accessToken
  }
  return new Promise((resolve, reject) => {
    FB.api('/me/messenger_profile', 'post', settings,
        res => {
          resolve(res)
        })
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
