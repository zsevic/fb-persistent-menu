const FB = require('facebook-node');

const addPersistentMenu = ((accessToken, settings) => {
    settings.access_token=accessToken;
    FB.api('/me/messenger_profile','post',settings,
         res => console.log(res) );
    });

module.exports={
    addPersistentMenu
};
