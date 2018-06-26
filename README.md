# emo-ji

[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/wbinnssmithemo-ji)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/wbinnssmithemo-ji.svg)](https://vaadin.com/directory/component/wbinnssmithemo-ji)

An Emoji html custom element that lets you use descriptive names in place of unicode! This module is called `emo-ji` and that's a recommended tag name, but you can assign it however you like.

![](https://cloud.githubusercontent.com/assets/755844/9690083/1df2b520-52ef-11e5-819a-fb4062910aeb.gif)

## Installation
`npm install --save emo-ji`

## Requirements
This is a vanilla web component. It assumes that [Custom Elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/) and the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM) are available in the runtime. This means it is currently compatible with the following browsers:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | Nope ✘ | Nope ✘ | 32+ ✔ | Nope ✘ |

If you need wider support, you can [polyfill](https://github.com/WebComponents/webcomponentsjs) web components!

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
