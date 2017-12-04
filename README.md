# fb-persistent-menu 
CLI tool that adds or removes "Persistent menu" (on Messenger) from Facebook page


### Requirements
* The person must be running Messenger v106 or above on iOS or Android.
* The Facebook Page the Messenger bot is subscribe to must be published.
* The Messenger bot must be set to "public" in the app settings.
* The Messenger bot must have the pages_messaging permission.
* "Get started" button must be set


### Installation
    npm install -g fb-persistent-menu


### Usage 
    fb-persistent-menu --token <PAGE_ACCESS_TOKEN> [options]
#### options
*   `--settings '<MENU>'` settings (json format) for menu
*   `-r, --remove` remove menu


### Examples
    fb-persistent-menu --token <PAGE_ACCESS_TOKEN> --settings '<MENU>'
    fb-persistent-menu --token <PAGE_ACCESS_TOKEN> --remove 


### Demo
```
fb-persistent-menu --token <PAGE_ACCESS_TOKEN> --settings '{
    "persistent_menu":[{
        "locale": "default",
        "call_to_actions": [{
            "type": "postback",
            "title": "Test",
            "payload": "TEST_PAYLOAD"
        },{
        "type": "web_url",
        "title": "Latest News",
        "url": "https://news.ycombinator.com/",
        "webview_height_ratio": "full"
        }]
    }]
}'
```
![addedPersistentMenu](https://github.com/zsevic/fb-persistent-menu/blob/master/images/add.png)
