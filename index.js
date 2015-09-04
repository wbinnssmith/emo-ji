var emojilib = require('emojilib');
var assign = require('object-assign');

function charFor(type) {
	var newChar;
	if (type in emojilib) {
		newChar = emojilib[type].char;
	} else {
		newChar = '\uFFFD';
	}

	return newChar;
}

var emoji = Object.create(HTMLElement.prototype);
assign(emoji, {
	createdCallback: function () {
		this._shadow = this.createShadowRoot();

		var type = this.getAttribute('type');
		this._shadow.textContent = charFor(type);
	},

	attributeChangedCallback: function (attr, oldVal, newVal) {
		this._shadow.textContent = charFor(newVal);
	}
});

module.exports = emoji;
