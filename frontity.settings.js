const settings = {
  "name": "demo-submenus",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Nature',
              href: '/category/nature/',
            },
            {
              name: 'Technology',
              href: '/category/technology/',
            },
            {
              name: 'Music',
              href: '/category/music/',
              submenu: [
                {
                  name: 'Rock',
                  href: '/category/music/rock'
                },
                {
                  name: 'Jazz',
                  href: '/category/music/jazz'
                },
                {
                  name: 'Country',
                  href: '/category/music/country'
                }
              ]
            }
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://app-5e78b3c5f911c80ca0fe610b.closte.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
