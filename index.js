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
		var shadow = this.createShadowRoot();

		var type = this.getAttribute('type');
		shadow.textContent = charFor(type);
	},

	attributeChangedCallback: function (attr, oldVal, newVal) {
		this.shadowRoot.textContent = charFor(newVal);
	}
});

module.exports = emoji;
