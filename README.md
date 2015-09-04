# emo-ji
An Emoji html custom element that lets you use descriptive names in place of unicode! This module is called `emo-ji` and that's a recommended tag name, but you can assign it however you like.

## Installation
`npm install --save emo-ji`

## Requirements
This is a vanilla web component. It assumes that Custom Elements and the Shadow DOM are available in the runtime. If they aren't, [pollyfill them](https://github.com/WebComponents/webcomponentsjs)!

## Usage
Bundle with browserify! Webpack works too. If you don't use one of these, use `dist/emoji.js` and EmojiElement will be set on `window`. Use that as the prototype when registering your element.

emo-ji does *not* modify your global environment as a side-effect (like HTML Imports would) and allows you to choose which custom tag name to register on your own! Since HTML imports don't allow namespacing and aliasing imports like CommonJS or ES6 do in JavaScript-land, this module embraces side-effect-free imports and lets you register the element yourself in js. It's only one line, after all.

```js
var emoji = require('emo-ji');

document.registerElement('emo-ji', { prototype: emoji });
```

... and in your document:

```html
<emo-ji type="unamused"></emo-ji>
<emo-ji type="rabbit"></emo-ji>
<emo-ji type="panda_face"></emo-ji>

<script src="bundle.js"></script>
```
... where `bundle.js` is your browserify or webpack bundle.

## Screenshots
![](https://cloud.githubusercontent.com/assets/755844/9677170/6fa77b08-528b-11e5-925d-f67ffe73179f.png)

## Credits
@muan's emojilib is pretty great. Any contributions there will only make other emoji things better!

(c) 2015 Will Binns-Smith. Licensed Apache 2.0
