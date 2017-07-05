# iframe-hash-manager
Tiny library to effortlessly sync a window's location hash with the hashes of multiple iframes in the site.

<a target="_blank" href="https://image.ibb.co/mCjPD5/Screen_Shot_2017_05_09_at_14_16_43.png">
  <img src="https://cdn.pbrd.co/images/9IHOGGr70.png" width="300px">
</a>

## Usage
> Note: Currently, changes in the master hash will not be reflected in the iframes.
> Iframes will only be initialized once with the master hash.

As script from `dist/iframeHashManager.js`:
```html
<iframe id="facebook-killer" class='spa'></iframe>
<iframe id="instagram-killer" class='spa'></iframe>
<script src="js/iframeHashManager.js"></script>
<script >iframeHashManager.default(window)</script>
```

As ES5 module. The second parameter is optional. The options shown below are the defaults.
```bash
yarn add iframe-hash-manager
```

```js
var iframeHashManager = require('iframe-hash-manager')
iframeHashManager.default({
  context: window,          // you can pass any context, but context MUST be a window object
  selector: 'iframe',       // document.querySelectorAll is used internally
                            // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  id: iframe => iframe.id   // The function used to generate the iframe id
                            // This should be deterministic if you want share-able links
})
```

or as ES6 module.

```js
import iframeHashManager from 'iframe-hash-manager'
iframeHashManager() // Defaults as above
```

## Good Luck!
<img src="https://hugelolcdn.com/hugegifs.com/i/687.gif">

## Development
Take a look at the `package.json` to find the scripts that may be useful for development.
