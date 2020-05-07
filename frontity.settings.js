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
              name: 'Photgraphy',
              href: '/category/photography/',
            },
            {
              name: 'Travel',
              href: '/category/travel/',
              submenu: [
                {
                  name: 'Vietnam',
                  href: '/tag/vietnam/'
                },
                {
                  name: 'Japan',
                  href: '/tag/japan/'
                },
                {
                  name: 'Iceland',
                  href: '/tag/iceland/'
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
          "api": "https://test.frontity.io/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
