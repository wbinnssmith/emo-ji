(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.EmojiElement = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "grinning": {
    "keywords": ["face", "smile", "happy", "joy"],
    "char": "😀",
    "category": "people"
  },
  "grin": {
    "keywords": ["face", "happy", "smile", "joy"],
    "char": "😁",
    "category": "people"
  },
  "joy": {
    "keywords": ["face", "cry", "tears", "weep", "happy", "haha"],
    "char": "😂",
    "category": "people"
  },
  "smiley": {
    "keywords": ["face", "happy", "joy", "haha"],
    "char": "😃",
    "category": "people"
  },
  "smile": {
    "keywords": ["face", "happy", "joy", "funny", "haha", "laugh", "like"],
    "char": "😄",
    "category": "people"
  },
  "sweat_smile": {
    "keywords": ["face", "hot", "happy", "laugh"],
    "char": "😅",
    "category": "people"
  },
  "laughing": {
    "keywords": ["happy", "joy", "lol", "satisfied", "haha", "face", "glad"],
    "char": "😆",
    "category": "people"
  },
  "innocent": {
    "keywords": ["face", "angel", "heaven", "halo"],
    "char": "😇",
    "category": "people"
  },
  "smiling_imp": {
    "keywords": ["devil", "horns"],
    "char": "😈",
    "category": "people"
  },
  "imp": {
    "keywords": ["devil", "angry", "horns"],
    "char": "👿",
    "category": "people"
  },
  "wink": {
    "keywords": ["face", "happy", "mischievous", "secret"],
    "char": "😉",
    "category": "people"
  },
  "blush": {
    "keywords": ["face", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy"],
    "char": "😊",
    "category": "people"
  },
  "relaxed": {
    "keywords": ["face", "blush", "massage", "happiness"],
    "char": "☺️",
    "category": "people"
  },
  "yum": {
    "keywords": ["happy", "joy", "tongue", "smile", "face", "silly", "yummy", "goofy", "hungry"],
    "char": "😋",
    "category": "people"
  },
  "relieved": {
    "keywords": ["face", "relaxed", "phew", "massage", "happiness"],
    "char": "😌",
    "category": "people"
  },
  "heart_eyes": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "crush"],
    "char": "😍",
    "category": "people"
  },
  "sunglasses": {
    "keywords": ["face", "cool", "smile", "summer", "beach"],
    "char": "😎",
    "category": "people"
  },
  "smirk": {
    "keywords": ["face", "smile", "mean", "prank", "smug", "sarcasm"],
    "char": "😏",
    "category": "people"
  },
  "neutral_face": {
    "keywords": ["indifference", "meh"],
    "char": "😐",
    "category": "people"
  },
  "expressionless": {
    "keywords": ["face", "indifferent", "-_-", "meh"],
    "char": "😑",
    "category": "people"
  },
  "unamused": {
    "keywords": ["indifference", "bored", "straight face", "serious"],
    "char": "😒",
    "category": "people"
  },
  "sweat": {
    "keywords": ["face", "hot", "sad", "tired", "exercise"],
    "char": "😓",
    "category": "people"
  },
  "pensive": {
    "keywords": ["face", "sad", "depressed", "okay", "upset"],
    "char": "😔",
    "category": "people"
  },
  "confused": {
    "keywords": ["face", "indifference", "huh", "weird", "hmmm"],
    "char": "😕",
    "category": "people"
  },
  "confounded": {
    "keywords": ["face", "confused", "sick", "unwell", "oops"],
    "char": "😖",
    "category": "people"
  },
  "kissing": {
    "keywords": ["love", "like", "face", "3", "valentines", "infatuation"],
    "char": "😗",
    "category": "people"
  },
  "kissing_heart": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation"],
    "char": "😘",
    "category": "people"
  },
  "kissing_smiling_eyes": {
    "keywords": ["face", "affection", "valentines", "infatuation"],
    "char": "😙",
    "category": "people"
  },
  "kissing_closed_eyes": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation"],
    "char": "😚",
    "category": "people"
  },
  "stuck_out_tongue": {
    "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile"],
    "char": "😛",
    "category": "people"
  },
  "stuck_out_tongue_winking_eye": {
    "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile"],
    "char": "😜",
    "category": "people"
  },
  "stuck_out_tongue_closed_eyes": {
    "keywords": ["face", "prank", "playful", "mischievous", "smile"],
    "char": "😝",
    "category": "people"
  },
  "disappointed": {
    "keywords": ["face", "sad", "upset", "depressed"],
    "char": "😞",
    "category": "people"
  },
  "worried": {
    "keywords": ["face", "concern", "nervous"],
    "char": "😟",
    "category": "people"
  },
  "angry": {
    "keywords": ["mad", "face", "annoyed", "frustrated"],
    "char": "😠",
    "category": "people"
  },
  "rage": {
    "keywords": ["angry", "mad", "hate", "despise"],
    "char": "😡",
    "category": "people"
  },
  "cry": {
    "keywords": ["face", "tears", "sad", "depressed", "upset"],
    "char": "😢",
    "category": "people"
  },
  "persevere": {
    "keywords": ["face", "sick", "no", "upset", "oops"],
    "char": "😣",
    "category": "people"
  },
  "triumph": {
    "keywords": ["face", "gas", "phew", "proud", "pride"],
    "char": "😤",
    "category": "people"
  },
  "disappointed_relieved": {
    "keywords": ["face", "phew", "sweat", "nervous"],
    "char": "😥",
    "category": "people"
  },
  "frowning": {
    "keywords": ["face", "aw", "what"],
    "char": "😦",
    "category": "people"
  },
  "anguished": {
    "keywords": ["face", "stunned", "nervous"],
    "char": "😧",
    "category": "people"
  },
  "fearful": {
    "keywords": ["face", "scared", "terrified", "nervous", "oops", "huh"],
    "char": "😨",
    "category": "people"
  },
  "weary": {
    "keywords": ["face", "tired", "sleepy", "sad", "frustrated", "upset"],
    "char": "😩",
    "category": "people"
  },
  "sleepy": {
    "keywords": ["face", "tired", "rest", "nap"],
    "char": "😪",
    "category": "people"
  },
  "tired_face": {
    "keywords": ["sick", "whine", "upset", "frustrated"],
    "char": "😫",
    "category": "people"
  },
  "grimacing": {
    "keywords": ["face", "grimace", "teeth"],
    "char": "😬",
    "category": "people"
  },
  "sob": {
    "keywords": ["face", "cry", "tears", "sad", "upset", "depressed"],
    "char": "😭",
    "category": "people"
  },
  "open_mouth": {
    "keywords": ["face", "surprise", "impressed", "wow"],
    "char": "😮",
    "category": "people"
  },
  "hushed": {
    "keywords": ["face", "woo", "shh"],
    "char": "😯",
    "category": "people"
  },
  "cold_sweat": {
    "keywords": ["face", "nervous"],
    "char": "😰",
    "category": "people"
  },
  "scream": {
    "keywords": ["face", "munch", "scared", "omg"],
    "char": "😱",
    "category": "people"
  },
  "astonished": {
    "keywords": ["face", "xox", "surprised", "poisoned"],
    "char": "😲",
    "category": "people"
  },
  "flushed": {
    "keywords": ["face", "blush", "shy", "flattered"],
    "char": "😳",
    "category": "people"
  },
  "sleeping": {
    "keywords": ["face", "tired", "sleepy", "night", "zzz"],
    "char": "😴",
    "category": "people"
  },
  "dizzy_face": {
    "keywords": ["spent", "unconscious", "xox"],
    "char": "😵",
    "category": "people"
  },
  "no_mouth": {
    "keywords": ["face", "hellokitty"],
    "char": "😶",
    "category": "people"
  },
  "mask": {
    "keywords": ["face", "sick", "ill", "disease"],
    "char": "😷",
    "category": "people"
  },
  "smile_cat": {
    "keywords": ["animal", "cats"],
    "char": "😸",
    "category": "people"
  },
  "joy_cat": {
    "keywords": ["animal", "cats", "haha", "happy", "tears"],
    "char": "😹",
    "category": "people"
  },
  "smiley_cat": {
    "keywords": ["animal", "cats", "happy"],
    "char": "😺",
    "category": "people"
  },
  "heart_eyes_cat": {
    "keywords": ["animal", "love", "like", "affection", "cats", "valentines"],
    "char": "😻",
    "category": "people"
  },
  "smirk_cat": {
    "keywords": ["animal", "cats"],
    "char": "😼",
    "category": "people"
  },
  "kissing_cat": {
    "keywords": ["animal", "cats"],
    "char": "😽",
    "category": "people"
  },
  "pouting_cat": {
    "keywords": ["animal", "cats"],
    "char": "😾",
    "category": "people"
  },
  "crying_cat_face": {
    "keywords": ["animal", "tears", "weep", "sad", "cats", "upset"],
    "char": "😿",
    "category": "people"
  },
  "scream_cat": {
    "keywords": ["animal", "cats", "munch", "scared"],
    "char": "🙀",
    "category": "people"
  },
  "footprints": {
    "keywords": ["feet", "tracking", "walking", "beach"],
    "char": "👣",
    "category": "people"
  },
  "bust_in_silhouette": {
    "keywords": ["user", "person", "human"],
    "char": "👤",
    "category": "people"
  },
  "busts_in_silhouette": {
    "keywords": ["user", "person", "human", "group", "team"],
    "char": "👥",
    "category": "people"
  },
  "baby": {
    "keywords": ["child", "boy", "girl", "toddler"],
    "char": "👶",
    "category": "people"
  },
  "boy": {
    "keywords": ["man", "male", "guy", "teenager"],
    "char": "👦",
    "category": "people"
  },
  "girl": {
    "keywords": ["female", "woman", "teenager"],
    "char": "👧",
    "category": "people"
  },
  "man": {
    "keywords": ["mustache", "father", "dad", "guy", "classy", "sir", "moustache"],
    "char": "👨",
    "category": "people"
  },
  "woman": {
    "keywords": ["female", "girls", "lady"],
    "char": "👩",
    "category": "people"
  },
  "family": {
    "keywords": ["home", "parents", "child", "mom", "dad", "father", "mother", "people", "human"],
    "char": "👪",
    "category": "people"
  },
  "couple": {
    "keywords": ["pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage"],
    "char": "👫",
    "category": "people"
  },
  "two_men_holding_hands": {
    "keywords": ["pair", "couple", "love", "like", "bromance", "friendship", "people", "human"],
    "char": "👬",
    "category": "people"
  },
  "two_women_holding_hands": {
    "keywords": ["pair", "friendship", "couple", "love", "like", "female", "people", "human"],
    "char": "👭",
    "category": "people"
  },
  "cop": {
    "keywords": ["man", "police", "law", "legal", "enforcement", "arrest", "911"],
    "char": "👮",
    "category": "people"
  },
  "dancers": {
    "keywords": ["female", "bunny", "women", "girls"],
    "char": "👯",
    "category": "people"
  },
  "bride_with_veil": {
    "keywords": ["couple", "marriage", "wedding"],
    "char": "👰",
    "category": "people"
  },
  "person_with_blond_hair": {
    "keywords": ["man", "male", "boy", "blonde", "guy"],
    "char": "👱",
    "category": "people"
  },
  "man_with_gua_pi_mao": {
    "keywords": ["male", "boy"],
    "char": "👲",
    "category": "people"
  },
  "man_with_turban": {
    "keywords": ["male", "indian", "hinduism", "arabs"],
    "char": "👳",
    "category": "people"
  },
  "older_man": {
    "keywords": ["human", "male", "men"],
    "char": "👴",
    "category": "people"
  },
  "older_woman": {
    "keywords": ["female", "women", "girl", "lady"],
    "char": "👵",
    "category": "people"
  },
  "baby": {
    "keywords": ["child", "boy", "girl", "toddler"],
    "char": "👶",
    "category": "people"
  },
  "construction_worker": {
    "keywords": ["male", "human", "wip", "guy", "build"],
    "char": "👷",
    "category": "people"
  },
  "princess": {
    "keywords": ["girl", "woman", "female", "blond", "crown", "royal", "queen"],
    "char": "👸",
    "category": "people"
  },
  "guardsman": {
    "keywords": ["uk", "gb", "british", "male", "guy", "royal"],
    "char": "💂",
    "category": "people"
  },
  "angel": {
    "keywords": ["heaven", "wings", "halo"],
    "char": "👼",
    "category": "people"
  },
  "santa": {
    "keywords": ["festival", "man", "male", "xmas", "father christmas"],
    "char": "🎅",
    "category": "people"
  },
  "ghost": {
    "keywords": ["halloween", "spooky", "scary"],
    "char": "👻",
    "category": "people"
  },
  "japanese_ogre": {
    "keywords": ["monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon"],
    "char": "👹",
    "category": "people"
  },
  "japanese_goblin": {
    "keywords": ["red", "evil", "mask", "monster", "scary", "creepy"],
    "char": "👺",
    "category": "people"
  },
  "hankey": {
    "keywords": ["poop", "shitface", "fail", "turd"],
    "char": "💩",
    "category": "people"
  },
  "skull": {
    "keywords": ["dead", "skeleton", "creepy"],
    "char": "💀",
    "category": "people"
  },
  "alien": {
    "keywords": ["UFO", "paul", "weird", "outer_space"],
    "char": "👽",
    "category": "people"
  },
  "space_invader": {
    "keywords": ["game", "arcade", "play"],
    "char": "👾",
    "category": "people"
  },
  "bow": {
    "keywords": ["man", "male", "boy"],
    "char": "🙇",
    "category": "people"
  },
  "information_desk_person": {
    "keywords": ["female", "girl", "woman", "human"],
    "char": "💁",
    "category": "people"
  },
  "no_good": {
    "keywords": ["female", "girl", "woman", "nope"],
    "char": "🙅",
    "category": "people"
  },
  "ok_woman": {
    "keywords": ["women", "girl", "female", "pink", "human"],
    "char": "🙆",
    "category": "people"
  },
  "raising_hand": {
    "keywords": ["female", "girl", "woman"],
    "char": "🙋",
    "category": "people"
  },
  "person_with_pouting_face": {
    "keywords": ["female", "girl", "woman"],
    "char": "🙎",
    "category": "people"
  },
  "person_frowning": {
    "keywords": ["female", "girl", "woman", "sad", "depressed", "discouraged", "unhappy"],
    "char": "🙍",
    "category": "people"
  },
  "massage": {
    "keywords": ["female", "girl", "woman", "head"],
    "char": "💆",
    "category": "people"
  },
  "haircut": {
    "keywords": ["female", "girl", "woman"],
    "char": "💇",
    "category": "people"
  },
  "couple_with_heart": {
    "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
    "char": "💑",
    "category": "people"
  },
  "couplekiss": {
    "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
    "char": "💏",
    "category": "people"
  },
  "raised_hands": {
    "keywords": ["gesture", "hooray", "yea", "celebration"],
    "char": "🙌",
    "category": "people"
  },
  "clap": {
    "keywords": ["hands", "praise", "applause", "congrats", "yay"],
    "char": "👏",
    "category": "people"
  },
  "ear": {
    "keywords": ["face", "hear", "sound", "listen"],
    "char": "👂",
    "category": "people"
  },
  "eyes": {
    "keywords": ["look", "watch", "stalk", "peek", "see"],
    "char": "👀",
    "category": "people"
  },
  "nose": {
    "keywords": ["smell", "sniff"],
    "char": "👃",
    "category": "people"
  },
  "lips": {
    "keywords": ["mouth", "kiss"],
    "char": "👄",
    "category": "people"
  },
  "kiss": {
    "keywords": ["face", "lips", "love", "like", "affection", "valentines"],
    "char": "💋",
    "category": "people"
  },
  "tongue": {
    "keywords": ["mouth", "playful"],
    "char": "👅",
    "category": "people"
  },
  "nail_care": {
    "keywords": ["beauty", "manicure", "fashion"],
    "char": "💅",
    "category": "people"
  },
  "wave": {
    "keywords": ["hands", "gesture", "goodbye", "solong", "farewell", "hello", "palm"],
    "char": "👋",
    "category": "people"
  },
  "+1": {
    "keywords": ["thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like"],
    "char": "👍",
    "category": "people"
  },
  "-1": {
    "keywords": ["thumbsdown", "no", "dislike", "hand"],
    "char": "👎",
    "category": "people"
  },
  "point_up": {
    "keywords": ["hand", "fingers", "direction"],
    "char": "☝️",
    "category": "people"
  },
  "point_up_2": {
    "keywords": ["fingers", "hand", "direction"],
    "char": "👆",
    "category": "people"
  },
  "point_down": {
    "keywords": ["fingers", "hand", "direction"],
    "char": "👇",
    "category": "people"
  },
  "point_left": {
    "keywords": ["direction", "fingers", "hand"],
    "char": "👈",
    "category": "people"
  },
  "point_right": {
    "keywords": ["fingers", "hand", "direction"],
    "char": "👉",
    "category": "people"
  },
  "ok_hand": {
    "keywords": ["fingers", "limbs", "perfect"],
    "char": "👌",
    "category": "people"
  },
  "v": {
    "keywords": ["fingers", "ohyeah", "hand", "peace", "victory", "two"],
    "char": "✌️",
    "category": "people"
  },
  "facepunch": {
    "keywords": ["angry", "violence", "fist", "hit", "attack", "hand"],
    "char": "👊",
    "category": "people"
  },
  "fist": {
    "keywords": ["fingers", "hand", "grasp"],
    "char": "✊",
    "category": "people"
  },
  "hand": {
    "keywords": ["fingers", "stop", "highfive", "palm", "ban", "raised_hand"],
    "char": "✋",
    "category": "people"
  },
  "muscle": {
    "keywords": ["arm", "flex", "hand", "summer", "strong"],
    "char": "💪",
    "category": "people"
  },
  "open_hands": {
    "keywords": ["fingers", "butterfly"],
    "char": "👐",
    "category": "people"
  },
  "pray": {
    "keywords": ["please", "hope", "wish", "namaste", "highfive"],
    "char": "🙏",
    "category": "people"
  },
  "seedling": {
    "keywords": ["plant", "nature", "grass", "lawn", "spring"],
    "char": "🌱",
    "category": "nature"
  },
  "evergreen_tree": {
    "keywords": ["plant", "nature"],
    "char": "🌲",
    "category": "nature"
  },
  "deciduous_tree": {
    "keywords": ["plant", "nature"],
    "char": "🌳",
    "category": "nature"
  },
  "palm_tree": {
    "keywords": ["plant", "vegetable", "nature", "summer", "beach"],
    "char": "🌴",
    "category": "nature"
  },
  "cactus": {
    "keywords": ["vegetable", "plant", "nature"],
    "char": "🌵",
    "category": "nature"
  },
  "tulip": {
    "keywords": ["flowers", "plant", "nature", "summer", "spring"],
    "char": "🌷",
    "category": "nature"
  },
  "cherry_blossom": {
    "keywords": ["nature", "plant", "spring", "flower"],
    "char": "🌸",
    "category": "nature"
  },
  "rose": {
    "keywords": ["flowers", "valentines", "love", "spring"],
    "char": "🌹",
    "category": "nature"
  },
  "hibiscus": {
    "keywords": ["plant", "vegetable", "flowers", "beach"],
    "char": "🌺",
    "category": "nature"
  },
  "sunflower": {
    "keywords": ["nature", "plant", "fall"],
    "char": "🌻",
    "category": "nature"
  },
  "blossom": {
    "keywords": ["nature", "flowers", "yellow"],
    "char": "🌼",
    "category": "nature"
  },
  "bouquet": {
    "keywords": ["flowers", "nature", "spring"],
    "char": "💐",
    "category": "nature"
  },
  "ear_of_rice": {
    "keywords": ["nature", "plant"],
    "char": "🌾",
    "category": "nature"
  },
  "herb": {
    "keywords": ["vegetable", "plant", "medicine", "weed", "grass", "lawn"],
    "char": "🌿",
    "category": "nature"
  },
  "four_leaf_clover": {
    "keywords": ["vegetable", "plant", "nature", "lucky"],
    "char": "🍀",
    "category": "nature"
  },
  "maple_leaf": {
    "keywords": ["nature", "plant", "vegetable", "canada", "fall"],
    "char": "🍁",
    "category": "nature"
  },
  "fallen_leaf": {
    "keywords": ["nature", "plant", "vegetable", "leaves"],
    "char": "🍂",
    "category": "nature"
  },
  "leaves": {
    "keywords": ["nature", "plant", "tree", "vegetable", "grass", "lawn", "spring"],
    "char": "🍃",
    "category": "nature"
  },
  "mushroom": {
    "keywords": ["plant", "vegetable"],
    "char": "🍄",
    "category": "nature"
  },
  "chestnut": {
    "keywords": ["food", "squirrel"],
    "char": "🌰",
    "category": "nature"
  },
  "rat": {
    "keywords": ["animal", "mouse", "rodent"],
    "char": "🐀",
    "category": "nature"
  },
  "mouse2": {
    "keywords": ["animal", "nature", "rodent"],
    "char": "🐁",
    "category": "nature"
  },
  "mouse": {
    "keywords": ["animal", "nature", "cheese"],
    "char": "🐭",
    "category": "nature"
  },
  "hamster": {
    "keywords": ["animal", "nature"],
    "char": "🐹",
    "category": "nature"
  },
  "ox": {
    "keywords": ["animal", "cow", "beef"],
    "char": "🐂",
    "category": "nature"
  },
  "water_buffalo": {
    "keywords": ["animal", "nature", "ox", "cow"],
    "char": "🐃",
    "category": "nature"
  },
  "cow2": {
    "keywords": ["beef", "ox", "animal", "nature", "moo", "milk"],
    "char": "🐄",
    "category": "nature"
  },
  "cow": {
    "keywords": ["beef", "ox", "animal", "nature", "moo", "milk"],
    "char": "🐮",
    "category": "nature"
  },
  "tiger2": {
    "keywords": ["animal", "nature", "roar"],
    "char": "🐅",
    "category": "nature"
  },
  "leopard": {
    "keywords": ["animal", "nature"],
    "char": "🐆",
    "category": "nature"
  },
  "tiger": {
    "keywords": ["animal", "cat", "danger", "wild", "nature", "roar"],
    "char": "🐯",
    "category": "nature"
  },
  "rabbit2": {
    "keywords": ["animal", "nature", "pet", "magic", "spring"],
    "char": "🐇",
    "category": "nature"
  },
  "rabbit": {
    "keywords": ["animal", "nature", "pet", "spring", "magic"],
    "char": "🐰",
    "category": "nature"
  },
  "cat2": {
    "keywords": ["animal", "meow", "pet", "cats"],
    "char": "🐈",
    "category": "nature"
  },
  "cat": {
    "keywords": ["animal", "meow", "nature", "pet"],
    "char": "🐱",
    "category": "nature"
  },
  "racehorse": {
    "keywords": ["animal", "gamble", "luck"],
    "char": "🐎",
    "category": "nature"
  },
  "horse": {
    "keywords": ["animal", "brown", "nature", "unicorn"],
    "char": "🐴",
    "category": "nature"
  },
  "ram": {
    "keywords": ["animal", "sheep", "nature"],
    "char": "🐏",
    "category": "nature"
  },
  "sheep": {
    "keywords": ["animal", "nature", "wool", "shipit"],
    "char": "🐑",
    "category": "nature"
  },
  "goat": {
    "keywords": ["animal", "nature"],
    "char": "🐐",
    "category": "nature"
  },
  "rooster": {
    "keywords": ["animal", "nature", "chicken"],
    "char": "🐓",
    "category": "nature"
  },
  "chicken": {
    "keywords": ["animal", "cluck", "nature", "bird"],
    "char": "🐔",
    "category": "nature"
  },
  "baby_chick": {
    "keywords": ["animal", "chicken", "bird"],
    "char": "🐤",
    "category": "nature"
  },
  "hatching_chick": {
    "keywords": ["animal", "chicken", "egg", "born", "baby", "bird"],
    "char": "🐣",
    "category": "nature"
  },
  "hatched_chick": {
    "keywords": ["animal", "chicken", "baby", "bird"],
    "char": "🐥",
    "category": "nature"
  },
  "bird": {
    "keywords": ["animal", "nature", "fly", "tweet", "spring"],
    "char": "🐦",
    "category": "nature"
  },
  "penguin": {
    "keywords": ["animal", "nature"],
    "char": "🐧",
    "category": "nature"
  },
  "elephant": {
    "keywords": ["animal", "nature", "nose", "thailand", "circus"],
    "char": "🐘",
    "category": "nature"
  },
  "dromedary_camel": {
    "keywords": ["animal", "hot", "desert", "hump"],
    "char": "🐪",
    "category": "nature"
  },
  "camel": {
    "keywords": ["animal", "nature", "hot", "desert", "hump"],
    "char": "🐫",
    "category": "nature"
  },
  "boar": {
    "keywords": ["animal", "nature"],
    "char": "🐗",
    "category": "nature"
  },
  "pig2": {
    "keywords": ["animal", "nature"],
    "char": "🐖",
    "category": "nature"
  },
  "pig": {
    "keywords": ["animal", "oink", "nature"],
    "char": "🐷",
    "category": "nature"
  },
  "pig_nose": {
    "keywords": ["animal", "oink"],
    "char": "🐽",
    "category": "nature"
  },
  "dog2": {
    "keywords": ["animal", "nature", "friend", "doge", "pet", "faithful"],
    "char": "🐕",
    "category": "nature"
  },
  "poodle": {
    "keywords": ["dog", "animal", "101", "nature", "pet"],
    "char": "🐩",
    "category": "nature"
  },
  "dog": {
    "keywords": ["animal", "friend", "nature", "woof", "puppy", "pet", "faithful"],
    "char": "🐶",
    "category": "nature"
  },
  "wolf": {
    "keywords": ["animal", "nature", "wild"],
    "char": "🐺",
    "category": "nature"
  },
  "bear": {
    "keywords": ["animal", "nature", "wild"],
    "char": "🐻",
    "category": "nature"
  },
  "koala": {
    "keywords": ["animal", "nature"],
    "char": "🐨",
    "category": "nature"
  },
  "panda_face": {
    "keywords": ["animal", "nature"],
    "char": "🐼",
    "category": "nature"
  },
  "monkey_face": {
    "keywords": ["animal", "nature", "circus"],
    "char": "🐵",
    "category": "nature"
  },
  "see_no_evil": {
    "keywords": ["monkey", "animal", "nature", "haha"],
    "char": "🙈",
    "category": "nature"
  },
  "hear_no_evil": {
    "keywords": ["animal", "monkey", "nature"],
    "char": "🙉",
    "category": "nature"
  },
  "speak_no_evil": {
    "keywords": ["monkey", "animal", "nature", "omg"],
    "char": "🙊",
    "category": "nature"
  },
  "monkey": {
    "keywords": ["animal", "nature", "banana", "circus"],
    "char": "🐒",
    "category": "nature"
  },
  "dragon": {
    "keywords": ["animal", "myth", "nature", "chinese", "green"],
    "char": "🐉",
    "category": "nature"
  },
  "dragon_face": {
    "keywords": ["animal", "myth", "nature", "chinese", "green"],
    "char": "🐲",
    "category": "nature"
  },
  "crocodile": {
    "keywords": ["animal", "nature", "reptile"],
    "char": "🐊",
    "category": "nature"
  },
  "snake": {
    "keywords": ["animal", "evil", "nature", "hiss"],
    "char": "🐍",
    "category": "nature"
  },
  "turtle": {
    "keywords": ["animal", "slow", "nature", "tortoise"],
    "char": "🐢",
    "category": "nature"
  },
  "frog": {
    "keywords": ["animal", "nature", "croak"],
    "char": "🐸",
    "category": "nature"
  },
  "whale2": {
    "keywords": ["animal", "nature", "sea", "ocean"],
    "char": "🐋",
    "category": "nature"
  },
  "whale": {
    "keywords": ["animal", "nature", "sea", "ocean"],
    "char": "🐳",
    "category": "nature"
  },
  "dolphin": {
    "keywords": ["animal", "nature", "fish", "sea", "ocean", "flipper", "fins", "beach"],
    "char": "🐬",
    "category": "nature"
  },
  "octopus": {
    "keywords": ["animal", "creature", "ocean", "sea", "nature", "beach"],
    "char": "🐙",
    "category": "nature"
  },
  "fish": {
    "keywords": ["animal", "food", "nature"],
    "char": "🐟",
    "category": "nature"
  },
  "tropical_fish": {
    "keywords": ["animal", "swim", "ocean", "beach", "nemo"],
    "char": "🐠",
    "category": "nature"
  },
  "blowfish": {
    "keywords": ["animal", "nature", "food", "sea", "ocean"],
    "char": "🐡",
    "category": "nature"
  },
  "shell": {
    "keywords": ["nature", "sea", "beach"],
    "char": "🐚",
    "category": "nature"
  },
  "snail": {
    "keywords": ["slow", "animal", "shell"],
    "char": "🐌",
    "category": "nature"
  },
  "bug": {
    "keywords": ["animal", "insect", "nature", "worm"],
    "char": "🐛",
    "category": "nature"
  },
  "ant": {
    "keywords": ["animal", "insect", "nature", "bug"],
    "char": "🐜",
    "category": "nature"
  },
  "bee": {
    "keywords": ["animal", "insect", "nature", "bug", "spring"],
    "char": "🐝",
    "category": "nature"
  },
  "beetle": {
    "keywords": ["animal", "insect", "nature", "bug"],
    "char": "🐞",
    "category": "nature"
  },
  "feet": {
    "keywords": ["animal", "tracking", "footprints", "dog", "cat", "pet", "paw_prints"],
    "char": "🐾",
    "category": "nature"
  },
  "zap": {
    "keywords": ["thunder", "weather", "lightning bolt", "fast"],
    "char": "⚡",
    "category": "nature"
  },
  "fire": {
    "keywords": ["hot", "cook", "flame"],
    "char": "🔥",
    "category": "nature"
  },
  "crescent_moon": {
    "keywords": ["night", "sleep", "sky", "evening", "magic"],
    "char": "🌙",
    "category": "nature"
  },
  "sunny": {
    "keywords": ["weather", "nature", "brightness", "summer", "beach", "spring"],
    "char": "☀️",
    "category": "nature"
  },
  "partly_sunny": {
    "keywords": ["weather", "nature", "cloudy", "morning", "fall", "spring"],
    "char": "⛅",
    "category": "nature"
  },
  "cloud": {
    "keywords": ["weather", "sky"],
    "char": "☁️",
    "category": "nature"
  },
  "droplet": {
    "keywords": ["water", "drip", "faucet", "spring"],
    "char": "💧",
    "category": "nature"
  },
  "sweat_drops": {
    "keywords": ["water", "drip", "oops"],
    "char": "💦",
    "category": "nature"
  },
  "umbrella": {
    "keywords": ["rainy", "weather", "spring"],
    "char": "☔",
    "category": "nature"
  },
  "dash": {
    "keywords": ["wind", "air", "fast", "shoo", "fart", "smoke", "puff"],
    "char": "💨",
    "category": "nature"
  },
  "snowflake": {
    "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas"],
    "char": "❄️",
    "category": "nature"
  },
  "star2": {
    "keywords": ["night", "sparkle", "awesome", "good", "magic"],
    "char": "🌟",
    "category": "nature"
  },
  "star": {
    "keywords": ["night", "yellow"],
    "char": "⭐",
    "category": "nature"
  },
  "stars": {
    "keywords": ["night", "photo"],
    "char": "🌠",
    "category": "nature"
  },
  "sunrise_over_mountains": {
    "keywords": ["view", "vacation", "photo"],
    "char": "🌄",
    "category": "nature"
  },
  "sunrise": {
    "keywords": ["morning", "view", "vacation", "photo"],
    "char": "🌅",
    "category": "nature"
  },
  "rainbow": {
    "keywords": ["nature", "happy", "unicorn", "photo", "sky", "spring"],
    "char": "🌈",
    "category": "nature"
  },
  "ocean": {
    "keywords": ["sea", "water", "wave", "nature", "tsunami", "disaster"],
    "char": "🌊",
    "category": "nature"
  },
  "volcano": {
    "keywords": ["photo", "nature", "disaster"],
    "char": "🌋",
    "category": "nature"
  },
  "milky_way": {
    "keywords": ["photo", "space", "stars"],
    "char": "🌌",
    "category": "nature"
  },
  "mount_fuji": {
    "keywords": ["photo", "mountain", "nature", "japanese"],
    "char": "🗻",
    "category": "nature"
  },
  "japan": {
    "keywords": ["nation", "country", "japanese", "asia"],
    "char": "🗾",
    "category": "nature"
  },
  "globe_with_meridians": {
    "keywords": ["earth", "international", "world", "internet", "interweb", "i18n"],
    "char": "🌐",
    "category": "nature"
  },
  "earth_africa": {
    "keywords": ["globe", "world", "international"],
    "char": "🌍",
    "category": "nature"
  },
  "earth_americas": {
    "keywords": ["globe", "world", "USA", "international"],
    "char": "🌎",
    "category": "nature"
  },
  "earth_asia": {
    "keywords": ["globe", "world", "east", "international"],
    "char": "🌏",
    "category": "nature"
  },
  "new_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌑",
    "category": "nature"
  },
  "waxing_crescent_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌒",
    "category": "nature"
  },
  "first_quarter_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌓",
    "category": "nature"
  },
  "moon": {
    "keywords": ["nature", "night", "sky", "gray", "twilight", "planet", "space", "evening", "sleep"],
    "char": "🌔",
    "category": "nature"
  },
  "full_moon": {
    "keywords": ["nature", "yellow", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌕",
    "category": "nature"
  },
  "waning_gibbous_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep", "waxing_gibbous_moon"],
    "char": "🌖",
    "category": "nature"
  },
  "last_quarter_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌗",
    "category": "nature"
  },
  "waning_crescent_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌘",
    "category": "nature"
  },
  "new_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌚",
    "category": "nature"
  },
  "full_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌝",
    "category": "nature"
  },
  "first_quarter_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌛",
    "category": "nature"
  },
  "last_quarter_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌜",
    "category": "nature"
  },
  "sun_with_face": {
    "keywords": ["nature", "morning", "sky"],
    "char": "🌞",
    "category": "nature"
  },
  "tomato": {
    "keywords": ["fruit", "vegetable", "nature", "food"],
    "char": "🍅",
    "category": "foodanddrink"
  },
  "eggplant": {
    "keywords": ["vegetable", "nature", "food", "aubergine"],
    "char": "🍆",
    "category": "foodanddrink"
  },
  "corn": {
    "keywords": ["food", "vegetable", "plant"],
    "char": "🌽",
    "category": "foodanddrink"
  },
  "sweet_potato": {
    "keywords": ["food", "nature"],
    "char": "🍠",
    "category": "foodanddrink"
  },
  "grapes": {
    "keywords": ["fruit", "food", "wine"],
    "char": "🍇",
    "category": "foodanddrink"
  },
  "melon": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍈",
    "category": "foodanddrink"
  },
  "watermelon": {
    "keywords": ["fruit", "food", "picnic", "summer"],
    "char": "🍉",
    "category": "foodanddrink"
  },
  "tangerine": {
    "keywords": ["food", "fruit", "nature"],
    "char": "🍊",
    "category": "foodanddrink"
  },
  "lemon": {
    "keywords": ["fruit", "nature"],
    "char": "🍋",
    "category": "foodanddrink"
  },
  "banana": {
    "keywords": ["fruit", "food", "monkey"],
    "char": "🍌",
    "category": "foodanddrink"
  },
  "pineapple": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍍",
    "category": "foodanddrink"
  },
  "apple": {
    "keywords": ["fruit", "mac", "school"],
    "char": "🍎",
    "category": "foodanddrink"
  },
  "green_apple": {
    "keywords": ["fruit", "nature"],
    "char": "🍏",
    "category": "foodanddrink"
  },
  "pear": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍐",
    "category": "foodanddrink"
  },
  "peach": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍑",
    "category": "foodanddrink"
  },
  "cherries": {
    "keywords": ["food", "fruit"],
    "char": "🍒",
    "category": "foodanddrink"
  },
  "strawberry": {
    "keywords": ["fruit", "food", "nature"],
    "char": "🍓",
    "category": "foodanddrink"
  },
  "hamburger": {
    "keywords": ["meat", "fast food", "beef", "cheeseburger", "mcdonalds", "burger king"],
    "char": "🍔",
    "category": "foodanddrink"
  },
  "pizza": {
    "keywords": ["food", "party"],
    "char": "🍕",
    "category": "foodanddrink"
  },
  "meat_on_bone": {
    "keywords": ["good", "food", "drumstick"],
    "char": "🍖",
    "category": "foodanddrink"
  },
  "poultry_leg": {
    "keywords": ["food", "meat", "drumstick", "bird", "chicken", "turkey"],
    "char": "🍗",
    "category": "foodanddrink"
  },
  "rice_cracker": {
    "keywords": ["food", "japanese"],
    "char": "🍘",
    "category": "foodanddrink"
  },
  "rice_ball": {
    "keywords": ["food", "japanese"],
    "char": "🍙",
    "category": "foodanddrink"
  },
  "rice": {
    "keywords": ["food", "china", "asian"],
    "char": "🍚",
    "category": "foodanddrink"
  },
  "curry": {
    "keywords": ["food", "spicy", "hot", "indian"],
    "char": "🍛",
    "category": "foodanddrink"
  },
  "ramen": {
    "keywords": ["food", "japanese", "noodle", "chipsticks"],
    "char": "🍜",
    "category": "foodanddrink"
  },
  "spaghetti": {
    "keywords": ["food", "italian", "noodle"],
    "char": "🍝",
    "category": "foodanddrink"
  },
  "bread": {
    "keywords": ["food", "wheat", "breakfast", "toast"],
    "char": "🍞",
    "category": "foodanddrink"
  },
  "fries": {
    "keywords": ["chips", "snack", "fast food"],
    "char": "🍟",
    "category": "foodanddrink"
  },
  "dango": {
    "keywords": ["food", "barbecue", "meat"],
    "char": "🍡",
    "category": "foodanddrink"
  },
  "oden": {
    "keywords": ["food", "japanese"],
    "char": "🍢",
    "category": "foodanddrink"
  },
  "sushi": {
    "keywords": ["food", "fish", "japanese", "rice"],
    "char": "🍣",
    "category": "foodanddrink"
  },
  "fried_shrimp": {
    "keywords": ["food", "animal", "appetizer", "summer"],
    "char": "🍤",
    "category": "foodanddrink"
  },
  "fish_cake": {
    "keywords": ["food", "japan", "sea", "beach"],
    "char": "🍥",
    "category": "foodanddrink"
  },
  "icecream": {
    "keywords": ["food", "hot", "dessert", "summer"],
    "char": "🍦",
    "category": "foodanddrink"
  },
  "shaved_ice": {
    "keywords": ["hot", "dessert", "summer"],
    "char": "🍧",
    "category": "foodanddrink"
  },
  "ice_cream": {
    "keywords": ["food", "hot", "dessert"],
    "char": "🍨",
    "category": "foodanddrink"
  },
  "doughnut": {
    "keywords": ["food", "dessert", "snack", "sweet", "donut"],
    "char": "🍩",
    "category": "foodanddrink"
  },
  "cookie": {
    "keywords": ["food", "snack", "oreo", "chocolate", "sweet", "dessert"],
    "char": "🍪",
    "category": "foodanddrink"
  },
  "chocolate_bar": {
    "keywords": ["food", "snack", "dessert", "sweet"],
    "char": "🍫",
    "category": "foodanddrink"
  },
  "candy": {
    "keywords": ["snack", "dessert", "sweet"],
    "char": "🍬",
    "category": "foodanddrink"
  },
  "lollipop": {
    "keywords": ["food", "snack", "candy", "sweet"],
    "char": "🍭",
    "category": "foodanddrink"
  },
  "custard": {
    "keywords": ["dessert", "food"],
    "char": "🍮",
    "category": "foodanddrink"
  },
  "honey_pot": {
    "keywords": ["bees", "sweet", "kitchen"],
    "char": "🍯",
    "category": "foodanddrink"
  },
  "cake": {
    "keywords": ["food", "dessert"],
    "char": "🍰",
    "category": "foodanddrink"
  },
  "bento": {
    "keywords": ["food", "japanese", "box"],
    "char": "🍱",
    "category": "foodanddrink"
  },
  "stew": {
    "keywords": ["food", "meat", "soup"],
    "char": "🍲",
    "category": "foodanddrink"
  },
  "egg": {
    "keywords": ["food", "breakfast", "kitchen"],
    "char": "🍳",
    "category": "foodanddrink"
  },
  "fork_and_knife": {
    "keywords": ["cutlery", "kitchen"],
    "char": "🍴",
    "category": "foodanddrink"
  },
  "tea": {
    "keywords": ["drink", "bowl", "breakfast", "green", "british"],
    "char": "🍵",
    "category": "foodanddrink"
  },
  "coffee": {
    "keywords": ["drink", "beverage", "cafe", "espresso"],
    "char": "☕",
    "category": "foodanddrink"
  },
  "sake": {
    "keywords": ["wine", "drink", "drunk", "beverage", "japanese", "alcohol", "booze"],
    "char": "🍶",
    "category": "foodanddrink"
  },
  "wine_glass": {
    "keywords": ["drink", "beverage", "drunk", "alcohol", "booze"],
    "char": "🍷",
    "category": "foodanddrink"
  },
  "cocktail": {
    "keywords": ["drink", "drunk", "alcohol", "beverage", "booze"],
    "char": "🍸",
    "category": "foodanddrink"
  },
  "tropical_drink": {
    "keywords": ["beverage", "cocktail", "summer", "beach", "alcohol", "booze"],
    "char": "🍹",
    "category": "foodanddrink"
  },
  "beer": {
    "keywords": ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"],
    "char": "🍺",
    "category": "foodanddrink"
  },
  "beers": {
    "keywords": ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"],
    "char": "🍻",
    "category": "foodanddrink"
  },
  "baby_bottle": {
    "keywords": ["food", "container", "milk"],
    "char": "🍼",
    "category": "foodanddrink"
  },
  "ribbon": {
    "keywords": ["decoration", "pink", "girl", "bowtie"],
    "char": "🎀",
    "category": "celebration"
  },
  "gift": {
    "keywords": ["present", "birthday", "christmas", "xmas"],
    "char": "🎁",
    "category": "celebration"
  },
  "birthday": {
    "keywords": ["party", "cake", "celebration"],
    "char": "🎂",
    "category": "celebration"
  },
  "jack_o_lantern": {
    "keywords": ["halloween", "light", "pumpkin", "creepy", "fall"],
    "char": "🎃",
    "category": "celebration"
  },
  "christmas_tree": {
    "keywords": ["festival", "vacation", "december", "xmas", "celebration"],
    "char": "🎄",
    "category": "celebration"
  },
  "tanabata_tree": {
    "keywords": ["plant", "nature", "branch", "summer"],
    "char": "🎋",
    "category": "celebration"
  },
  "bamboo": {
    "keywords": ["plant", "nature", "vegetable", "panda"],
    "char": "🎍",
    "category": "celebration"
  },
  "rice_scene": {
    "keywords": ["photo", "japan", "asia", "tsukimi"],
    "char": "🎑",
    "category": "celebration"
  },
  "fireworks": {
    "keywords": ["photo", "festival", "carnival", "congratulations"],
    "char": "🎆",
    "category": "celebration"
  },
  "sparkler": {
    "keywords": ["stars", "night", "shine"],
    "char": "🎇",
    "category": "celebration"
  },
  "tada": {
    "keywords": ["party", "contulations", "birthday", "magic", "circus"],
    "char": "🎉",
    "category": "celebration"
  },
  "confetti_ball": {
    "keywords": ["festival", "party", "birthday", "circus"],
    "char": "🎊",
    "category": "celebration"
  },
  "balloon": {
    "keywords": ["party", "celebration", "birthday", "circus"],
    "char": "🎈",
    "category": "celebration"
  },
  "dizzy": {
    "keywords": ["star", "sparkle", "shoot", "magic"],
    "char": "💫",
    "category": "celebration"
  },
  "sparkles": {
    "keywords": ["stars", "shine", "shiny", "cool", "awesome", "good", "magic"],
    "char": "✨",
    "category": "celebration"
  },
  "boom": {
    "keywords": ["bomb", "explode", "explosion", "collision", "blown"],
    "char": "💥",
    "category": "celebration"
  },
  "mortar_board": {
    "keywords": ["school", "college", "degree", "university", "graduation", "cap", "hat", "legal", "learn", "education"],
    "char": "🎓",
    "category": "celebration"
  },
  "crown": {
    "keywords": ["king", "kod", "leader", "royalty", "lord"],
    "char": "👑",
    "category": "celebration"
  },
  "dolls": {
    "keywords": ["japanese", "toy", "kimono"],
    "char": "🎎",
    "category": "celebration"
  },
  "flags": {
    "keywords": ["fish", "japanese", "koinobori", "carp", "banner"],
    "char": "🎏",
    "category": "celebration"
  },
  "wind_chime": {
    "keywords": ["nature", "ding", "spring", "bell"],
    "char": "🎐",
    "category": "celebration"
  },
  "crossed_flags": {
    "keywords": ["japanese", "nation", "country", "border"],
    "char": "🎌",
    "category": "celebration"
  },
  "izakaya_lantern": {
    "keywords": ["light", "paper", "halloween", "spooky"],
    "char": "🏮",
    "category": "celebration"
  },
  "ring": {
    "keywords": ["wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem"],
    "char": "💍",
    "category": "celebration"
  },
  "heart": {
    "keywords": ["love", "like", "valentines"],
    "char": "❤️",
    "category": "celebration"
  },
  "broken_heart": {
    "keywords": ["sad", "sorry", "break"],
    "char": "💔",
    "category": "celebration"
  },
  "love_letter": {
    "keywords": ["email", "like", "affection", "envelope", "valentines"],
    "char": "💌",
    "category": "celebration"
  },
  "two_hearts": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💕",
    "category": "celebration"
  },
  "revolving_hearts": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💞",
    "category": "celebration"
  },
  "heartbeat": {
    "keywords": ["love", "like", "affection", "valentines", "pink"],
    "char": "💓",
    "category": "celebration"
  },
  "heartpulse": {
    "keywords": ["like", "love", "affection", "valentines", "pink"],
    "char": "💗",
    "category": "celebration"
  },
  "sparkling_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💖",
    "category": "celebration"
  },
  "cupid": {
    "keywords": ["love", "like", "heart", "affection", "valentines"],
    "char": "💘",
    "category": "celebration"
  },
  "gift_heart": {
    "keywords": ["love", "valentines"],
    "char": "💝",
    "category": "celebration"
  },
  "heart_decoration": {
    "keywords": ["purple-square", "love", "like"],
    "char": "💟",
    "category": "celebration"
  },
  "purple_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💜",
    "category": "celebration"
  },
  "yellow_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💛",
    "category": "celebration"
  },
  "green_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💚",
    "category": "celebration"
  },
  "blue_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💙",
    "category": "celebration"
  },
  "runner": {
    "keywords": ["man", "walking", "exercise", "race", "running"],
    "char": "🏃",
    "category": "activity"
  },
  "walking": {
    "keywords": ["human", "feet", "steps"],
    "char": "🚶",
    "category": "activity"
  },
  "dancer": {
    "keywords": ["female", "girl", "woman", "fun"],
    "char": "💃",
    "category": "activity"
  },
  "rowboat": {
    "keywords": ["sports", "hobby", "water", "ship"],
    "char": "🚣",
    "category": "activity"
  },
  "swimmer": {
    "keywords": ["sports", "exercise", "human", "athlete", "water", "summer"],
    "char": "🏊",
    "category": "activity"
  },
  "surfer": {
    "keywords": ["sports", "ocean", "sea", "summer", "beach"],
    "char": "🏄",
    "category": "activity"
  },
  "bath": {
    "keywords": ["clean", "shower", "bathroom"],
    "char": "🛀",
    "category": "activity"
  },
  "snowboarder": {
    "keywords": ["sports", "winter"],
    "char": "🏂",
    "category": "activity"
  },
  "ski": {
    "keywords": ["sports", "winter", "cold", "snow"],
    "char": "🎿",
    "category": "activity"
  },
  "snowman": {
    "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen"],
    "char": "⛄",
    "category": "activity"
  },
  "bicyclist": {
    "keywords": ["sports", "bike", "exercise", "hipster"],
    "char": "🚴",
    "category": "activity"
  },
  "mountain_bicyclist": {
    "keywords": ["transportation", "sports", "human", "race", "bike"],
    "char": "🚵",
    "category": "activity"
  },
  "horse_racing": {
    "keywords": ["animal", "betting", "competition", "gambling", "luck"],
    "char": "🏇",
    "category": "activity"
  },
  "tent": {
    "keywords": ["photo", "camp", "outdoors"],
    "char": "⛺",
    "category": "activity"
  },
  "fishing_pole_and_fish": {
    "keywords": ["food", "hobby", "summer"],
    "char": "🎣",
    "category": "activity"
  },
  "soccer": {
    "keywords": ["sports", "balls", "football", "fifa"],
    "char": "⚽",
    "category": "activity"
  },
  "basketball": {
    "keywords": ["sports", "balls", "NBA"],
    "char": "🏀",
    "category": "activity"
  },
  "football": {
    "keywords": ["sports", "balls", "NFL"],
    "char": "🏈",
    "category": "activity"
  },
  "baseball": {
    "keywords": ["sports", "balls", "MLB"],
    "char": "⚾️",
    "category": "activity"
  },
  "tennis": {
    "keywords": ["sports", "balls", "green"],
    "char": "🎾",
    "category": "activity"
  },
  "rugby_football": {
    "keywords": ["sports", "team"],
    "char": "🏉",
    "category": "activity"
  },
  "golf": {
    "keywords": ["sports", "business", "flag", "hole", "summer"],
    "char": "⛳",
    "category": "activity"
  },
  "trophy": {
    "keywords": ["win", "award", "contest", "place", "ftw", "ceremony"],
    "char": "🏆",
    "category": "activity"
  },
  "running_shirt_with_sash": {
    "keywords": ["play", "pageant"],
    "char": "🎽",
    "category": "activity"
  },
  "checkered_flag": {
    "keywords": ["contest", "finishline", "rase", "gokart"],
    "char": "🏁",
    "category": "activity"
  },
  "musical_keyboard": {
    "keywords": ["piano", "instrument"],
    "char": "🎹",
    "category": "activity"
  },
  "guitar": {
    "keywords": ["music", "instrument"],
    "char": "🎸",
    "category": "activity"
  },
  "violin": {
    "keywords": ["music", "instrument", "orchestra", "symphony"],
    "char": "🎻",
    "category": "activity"
  },
  "saxophone": {
    "keywords": ["music", "instrument", "jazz", "blues"],
    "char": "🎷",
    "category": "activity"
  },
  "trumpet": {
    "keywords": ["music", "brass"],
    "char": "🎺",
    "category": "activity"
  },
  "musical_note": {
    "keywords": ["score", "tone", "sound"],
    "char": "🎵",
    "category": "activity"
  },
  "notes": {
    "keywords": ["music", "score"],
    "char": "🎶",
    "category": "activity"
  },
  "musical_score": {
    "keywords": ["treble", "clef"],
    "char": "🎼",
    "category": "activity"
  },
  "headphones": {
    "keywords": ["music", "score", "gadgets"],
    "char": "🎧",
    "category": "activity"
  },
  "microphone": {
    "keywords": ["sound", "music", "PA"],
    "char": "🎤",
    "category": "activity"
  },
  "performing_arts": {
    "keywords": ["acting", "theater", "drama"],
    "char": "🎭",
    "category": "activity"
  },
  "ticket": {
    "keywords": ["event", "concert", "pass"],
    "char": "🎫",
    "category": "activity"
  },
  "tophat": {
    "keywords": ["magic", "gentleman", "classy", "circus"],
    "char": "🎩",
    "category": "activity"
  },
  "circus_tent": {
    "keywords": ["festival", "carnival", "party"],
    "char": "🎪",
    "category": "activity"
  },
  "clapper": {
    "keywords": ["movie", "film", "record"],
    "char": "🎬",
    "category": "activity"
  },
  "art": {
    "keywords": ["design", "paint", "draw"],
    "char": "🎨",
    "category": "activity"
  },
  "dart": {
    "keywords": ["game", "play", "bar"],
    "char": "🎯",
    "category": "activity"
  },
  "8ball": {
    "keywords": ["pool", "hobby", "game", "luck", "magic"],
    "char": "🎱",
    "category": "activity"
  },
  "bowling": {
    "keywords": ["sports", "fun", "play"],
    "char": "🎳",
    "category": "activity"
  },
  "slot_machine": {
    "keywords": ["bet", "gamble", "vegas", "fruit machine", "luck", "casino"],
    "char": "🎰",
    "category": "activity"
  },
  "game_die": {
    "keywords": ["dice", "random", "tabbletop", "play", "luck"],
    "char": "🎲",
    "category": "activity"
  },
  "video_game": {
    "keywords": ["play", "console", "PS4", "controller"],
    "char": "🎮",
    "category": "activity"
  },
  "flower_playing_cards": {
    "keywords": ["game", "sunset", "red"],
    "char": "🎴",
    "category": "activity"
  },
  "black_joker": {
    "keywords": ["poker", "cards", "game", "play", "magic"],
    "char": "🃏",
    "category": "activity"
  },
  "mahjong": {
    "keywords": ["game", "play", "chinese", "kanji"],
    "char": "🀄",
    "category": "activity"
  },
  "carousel_horse": {
    "keywords": ["photo", "carnival"],
    "char": "🎠",
    "category": "activity"
  },
  "ferris_wheel": {
    "keywords": ["photo", "carnival", "londoneye"],
    "char": "🎡",
    "category": "activity"
  },
  "roller_coaster": {
    "keywords": ["carnival", "playground", "photo", "fun"],
    "char": "🎢",
    "category": "activity"
  },
  "railway_car": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚃",
    "category": "travelandplaces"
  },
  "mountain_railway": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚞",
    "category": "travelandplaces"
  },
  "steam_locomotive": {
    "keywords": ["transportation", "vehicle", "train"],
    "char": "🚂",
    "category": "travelandplaces"
  },
  "train": {
    "keywords": ["transportation", "vehicle", "carriage", "public", "travel"],
    "char": "🚋",
    "category": "travelandplaces"
  },
  "monorail": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚝",
    "category": "travelandplaces"
  },
  "bullettrain_side": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚄",
    "category": "travelandplaces"
  },
  "bullettrain_front": {
    "keywords": ["transportation", "vehicle", "speed", "fast", "public", "travel"],
    "char": "🚅",
    "category": "travelandplaces"
  },
  "train2": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚆",
    "category": "travelandplaces"
  },
  "metro": {
    "keywords": ["transportation", "blue-square", "mrt", "underground", "tube"],
    "char": "🚇",
    "category": "travelandplaces"
  },
  "light_rail": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚈",
    "category": "travelandplaces"
  },
  "station": {
    "keywords": ["transportation", "vehicle", "public"],
    "char": "🚉",
    "category": "travelandplaces"
  },
  "tram": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚊",
    "category": "travelandplaces"
  },
  "bus": {
    "keywords": ["car", "vehicle", "transportation"],
    "char": "🚌",
    "category": "travelandplaces"
  },
  "oncoming_bus": {
    "keywords": ["vehicle", "transportation"],
    "char": "🚍",
    "category": "travelandplaces"
  },
  "trolleybus": {
    "keywords": ["bart", "transportation", "vehicle"],
    "char": "🚎",
    "category": "travelandplaces"
  },
  "minibus": {
    "keywords": ["vehicle", "car", "transportation"],
    "char": "🚐",
    "category": "travelandplaces"
  },
  "ambulance": {
    "keywords": ["health", "911", "hospital"],
    "char": "🚑",
    "category": "travelandplaces"
  },
  "fire_engine": {
    "keywords": ["transportation", "cars", "vehicle"],
    "char": "🚒",
    "category": "travelandplaces"
  },
  "police_car": {
    "keywords": ["vehicle", "cars", "transportation", "law", "legal", "enforcement"],
    "char": "🚓",
    "category": "travelandplaces"
  },
  "oncoming_police_car": {
    "keywords": ["vehicle", "law", "legal", "enforcement", "911"],
    "char": "🚔",
    "category": "travelandplaces"
  },
  "rotating_light": {
    "keywords": ["police", "ambulance", "911", "emergency", "alert", "error", "pinged", "law", "legal"],
    "char": "🚨",
    "category": "travelandplaces"
  },
  "taxi": {
    "keywords": ["uber", "vehicle", "cars", "transportation"],
    "char": "🚕",
    "category": "travelandplaces"
  },
  "oncoming_taxi": {
    "keywords": ["vehicle", "cars", "uber"],
    "char": "🚖",
    "category": "travelandplaces"
  },
  "car": {
    "keywords": ["red", "transportation", "vehicle"],
    "char": "🚗",
    "category": "travelandplaces"
  },
  "oncoming_automobile": {
    "keywords": ["car", "vehicle", "transportation"],
    "char": "🚘",
    "category": "travelandplaces"
  },
  "blue_car": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚙",
    "category": "travelandplaces"
  },
  "truck": {
    "keywords": ["cars", "transportation"],
    "char": "🚚",
    "category": "travelandplaces"
  },
  "articulated_lorry": {
    "keywords": ["vehicle", "cars", "transportation", "express"],
    "char": "🚛",
    "category": "travelandplaces"
  },
  "tractor": {
    "keywords": ["vehicle", "car", "farming", "agriculture"],
    "char": "🚜",
    "category": "travelandplaces"
  },
  "bike": {
    "keywords": ["sports", "bicycle", "exercise", "hipster"],
    "char": "🚲",
    "category": "travelandplaces"
  },
  "busstop": {
    "keywords": ["transportation", "wait"],
    "char": "🚏",
    "category": "travelandplaces"
  },
  "fuelpump": {
    "keywords": ["gas station", "petroleum"],
    "char": "⛽",
    "category": "travelandplaces"
  },
  "construction": {
    "keywords": ["wip", "progress", "caution", "warning"],
    "char": "🚧",
    "category": "travelandplaces"
  },
  "vertical_traffic_light": {
    "keywords": ["transportation", "driving"],
    "char": "🚦",
    "category": "travelandplaces"
  },
  "traffic_light": {
    "keywords": ["transportation", "signal"],
    "char": "🚥",
    "category": "travelandplaces"
  },
  "rocket": {
    "keywords": ["launch", "ship", "staffmode", "NASA", "outer space", "outer_space", "fly"],
    "char": "🚀",
    "category": "travelandplaces"
  },
  "helicopter": {
    "keywords": ["transportation", "vehicle", "fly"],
    "char": "🚁",
    "category": "travelandplaces"
  },
  "airplane": {
    "keywords": ["vehicle", "transportation", "flight", "fly"],
    "char": "✈️",
    "category": "travelandplaces"
  },
  "seat": {
    "keywords": ["sit", "airplane", "transport", "bus", "flight", "fly"],
    "char": "💺",
    "category": "travelandplaces"
  },
  "anchor": {
    "keywords": ["ship", "ferry", "sea", "boat"],
    "char": "⚓",
    "category": "travelandplaces"
  },
  "ship": {
    "keywords": ["transportation", "titanic", "deploy"],
    "char": "🚢",
    "category": "travelandplaces"
  },
  "speedboat": {
    "keywords": ["ship", "transportation", "vehicle", "summer"],
    "char": "🚤",
    "category": "travelandplaces"
  },
  "boat": {
    "keywords": ["ship", "summer", "transportation", "water", "sailing", "sailboat"],
    "char": "⛵",
    "category": "travelandplaces"
  },
  "aerial_tramway": {
    "keywords": ["transportation", "vehicle", "ski"],
    "char": "🚡",
    "category": "travelandplaces"
  },
  "mountain_cableway": {
    "keywords": ["transportation", "vehicle", "ski"],
    "char": "🚠",
    "category": "travelandplaces"
  },
  "suspension_railway": {
    "keywords": ["vehicle", "transportation"],
    "char": "🚟",
    "category": "travelandplaces"
  },
  "passport_control": {
    "keywords": ["custom", "blue-square"],
    "char": "🛂",
    "category": "travelandplaces"
  },
  "customs": {
    "keywords": ["passport", "border", "blue-square"],
    "char": "🛃",
    "category": "travelandplaces"
  },
  "baggage_claim": {
    "keywords": ["blue-square", "airport", "transport"],
    "char": "🛄",
    "category": "travelandplaces"
  },
  "left_luggage": {
    "keywords": ["blue-square", "travel"],
    "char": "🛅",
    "category": "travelandplaces"
  },
  "yen": {
    "keywords": ["money", "sales", "japanese", "dollar", "currency"],
    "char": "💴",
    "category": "travelandplaces"
  },
  "euro": {
    "keywords": ["money", "sales", "dollar", "currency"],
    "char": "💶",
    "category": "travelandplaces"
  },
  "pound": {
    "keywords": ["british", "sterling", "money", "sales", "bills", "uk", "england", "currency"],
    "char": "💷",
    "category": "travelandplaces"
  },
  "dollar": {
    "keywords": ["money", "sales", "bill", "currency"],
    "char": "💵",
    "category": "travelandplaces"
  },
  "statue_of_liberty": {
    "keywords": ["american", "newyork"],
    "char": "🗽",
    "category": "travelandplaces"
  },
  "moyai": {
    "keywords": ["stone", "easter island", "beach", "statue"],
    "char": "🗿",
    "category": "travelandplaces"
  },
  "foggy": {
    "keywords": ["photo", "mountain"],
    "char": "🌁",
    "category": "travelandplaces"
  },
  "tokyo_tower": {
    "keywords": ["photo", "japanese"],
    "char": "🗼",
    "category": "travelandplaces"
  },
  "fountain": {
    "keywords": ["photo", "summer", "water", "fresh"],
    "char": "⛲",
    "category": "travelandplaces"
  },
  "european_castle": {
    "keywords": ["building", "royalty", "history"],
    "char": "🏰",
    "category": "travelandplaces"
  },
  "japanese_castle": {
    "keywords": ["photo", "building"],
    "char": "🏯",
    "category": "travelandplaces"
  },
  "city_sunrise": {
    "keywords": ["photo", "good morning", "dawn"],
    "char": "🌇",
    "category": "travelandplaces"
  },
  "city_sunset": {
    "keywords": ["photo", "evening", "sky", "buildings"],
    "char": "🌆",
    "category": "travelandplaces"
  },
  "night_with_stars": {
    "keywords": ["evening", "city", "downtown"],
    "char": "🌃",
    "category": "travelandplaces"
  },
  "bridge_at_night": {
    "keywords": ["photo", "sanfrancisco"],
    "char": "🌉",
    "category": "travelandplaces"
  },
  "house": {
    "keywords": ["building", "home"],
    "char": "🏠",
    "category": "travelandplaces"
  },
  "house_with_garden": {
    "keywords": ["home", "plant", "nature"],
    "char": "🏡",
    "category": "travelandplaces"
  },
  "office": {
    "keywords": ["building", "bureau", "work"],
    "char": "🏢",
    "category": "travelandplaces"
  },
  "department_store": {
    "keywords": ["building", "shopping", "mall"],
    "char": "🏬",
    "category": "travelandplaces"
  },
  "factory": {
    "keywords": ["building", "industry", "pollution", "smoke"],
    "char": "🏭",
    "category": "travelandplaces"
  },
  "post_office": {
    "keywords": ["building", "email", "communication"],
    "char": "🏣",
    "category": "travelandplaces"
  },
  "european_post_office": {
    "keywords": ["building", "email"],
    "char": "🏤",
    "category": "travelandplaces"
  },
  "hospital": {
    "keywords": ["building", "health", "surgery", "doctor"],
    "char": "🏥",
    "category": "travelandplaces"
  },
  "bank": {
    "keywords": ["building", "money", "sales", "cash", "business", "enterprise"],
    "char": "🏦",
    "category": "travelandplaces"
  },
  "hotel": {
    "keywords": ["building", "whotel", "accomodation", "checkin"],
    "char": "🏨",
    "category": "travelandplaces"
  },
  "love_hotel": {
    "keywords": ["like", "affection", "dating"],
    "char": "🏩",
    "category": "travelandplaces"
  },
  "wedding": {
    "keywords": ["love", "like", "affection", "couple", "marriage", "bride", "groom"],
    "char": "💒",
    "category": "travelandplaces"
  },
  "church": {
    "keywords": ["building", "religion", "christ"],
    "char": "⛪",
    "category": "travelandplaces"
  },
  "convenience_store": {
    "keywords": ["building", "shopping", "groceries"],
    "char": "🏪",
    "category": "travelandplaces"
  },
  "school": {
    "keywords": ["building", "student", "education", "learn", "teach"],
    "char": "🏫",
    "category": "travelandplaces"
  },
  "cn": {
    "keywords": ["china", "chinese", "prc", "flag", "country", "nation", "banner"],
    "char": "🇨🇳",
    "category": "flags"
  },
  "fr": {
    "keywords": ["banner", "flag", "nation", "france", "french", "country"],
    "char": "🇫🇷",
    "category": "flags"
  },
  "de": {
    "keywords": ["german", "nation", "flag", "country", "banner"],
    "char": "🇩🇪",
    "category": "flags"
  },
  "it": {
    "keywords": ["italy", "flag", "nation", "country", "banner"],
    "char": "🇮🇹",
    "category": "flags"
  },
  "jp": {
    "keywords": ["japanese", "nation", "flag", "country", "banner"],
    "char": "🇯🇵",
    "category": "flags"
  },
  "kr": {
    "keywords": ["korea", "nation", "flag", "country", "banner"],
    "char": "🇰🇷",
    "category": "flags"
  },
  "ru": {
    "keywords": ["russian", "nation", "flag", "country", "banner"],
    "char": "🇷🇺",
    "category": "flags"
  },
  "es": {
    "keywords": ["spain", "flag", "nation", "country", "banner"],
    "char": "🇪🇸",
    "category": "flags"
  },
  "gb": {
    "keywords": ["banner", "nation", "flag", "british", "UK", "country", "english", "england", "union jack"],
    "char": "🇬🇧",
    "category": "flags"
  },
  "us": {
    "keywords": ["nation", "flag", "american", "country", "banner"],
    "char": "🇺🇸",
    "category": "flags"
  },
  "watch": {
    "keywords": ["time", "accessories"],
    "char": "⌚",
    "category": "objectsandsymbols"
  },
  "iphone": {
    "keywords": ["technology", "apple", "gadgets", "dial"],
    "char": "📱",
    "category": "objectsandsymbols"
  },
  "calling": {
    "keywords": ["iphone", "incoming"],
    "char": "📲",
    "category": "objectsandsymbols"
  },
  "computer": {
    "keywords": ["tech", "laptop", "screen", "display", "monitor"],
    "char": "💻",
    "category": "objectsandsymbols"
  },
  "alarm_clock": {
    "keywords": ["time", "wake"],
    "char": "⏰",
    "category": "objectsandsymbols"
  },
  "hourglass_flowing_sand": {
    "keywords": ["oldschool", "time", "countdown"],
    "char": "⏳",
    "category": "objectsandsymbols"
  },
  "hourglass": {
    "keywords": ["time", "clock", "oldschool", "limit", "exam", "quiz", "test"],
    "char": "⌛",
    "category": "objectsandsymbols"
  },
  "camera": {
    "keywords": ["gadgets", "photo"],
    "char": "📷",
    "category": "objectsandsymbols"
  },
  "video_camera": {
    "keywords": ["film", "record"],
    "char": "📹",
    "category": "objectsandsymbols"
  },
  "movie_camera": {
    "keywords": ["film", "record"],
    "char": "🎥",
    "category": "objectsandsymbols"
  },
  "tv": {
    "keywords": ["technology", "program", "oldschool", "show", "television"],
    "char": "📺",
    "category": "objectsandsymbols"
  },
  "radio": {
    "keywords": ["communication", "music", "podcast", "program"],
    "char": "📻",
    "category": "objectsandsymbols"
  },
  "pager": {
    "keywords": ["bbcall", "oldschool"],
    "char": "📟",
    "category": "objectsandsymbols"
  },
  "telephone_receiver": {
    "keywords": ["technology", "communication", "dial"],
    "char": "📞",
    "category": "objectsandsymbols"
  },
  "phone": {
    "keywords": ["technology", "communication", "dial", "telephone"],
    "char": "☎️",
    "category": "objectsandsymbols"
  },
  "fax": {
    "keywords": ["communication", "technology"],
    "char": "📠",
    "category": "objectsandsymbols"
  },
  "minidisc": {
    "keywords": ["technology", "record", "data", "disk"],
    "char": "💽",
    "category": "objectsandsymbols"
  },
  "floppy_disk": {
    "keywords": ["oldschool", "technology", "save", "90s"],
    "char": "💾",
    "category": "objectsandsymbols"
  },
  "cd": {
    "keywords": ["technology", "dvd", "disk", "disc"],
    "char": "💿",
    "category": "objectsandsymbols"
  },
  "dvd": {
    "keywords": ["cd", "disk", "disc"],
    "char": "📀",
    "category": "objectsandsymbols"
  },
  "vhs": {
    "keywords": ["record", "video", "oldschool", "90s", "80s"],
    "char": "📼",
    "category": "objectsandsymbols"
  },
  "battery": {
    "keywords": ["power", "energy", "sustain"],
    "char": "🔋",
    "category": "objectsandsymbols"
  },
  "electric_plug": {
    "keywords": ["charger", "power"],
    "char": "🔌",
    "category": "objectsandsymbols"
  },
  "bulb": {
    "keywords": ["light", "electricity", "idea"],
    "char": "💡",
    "category": "objectsandsymbols"
  },
  "flashlight": {
    "keywords": ["dark", "camping", "sight", "night"],
    "char": "🔦",
    "category": "objectsandsymbols"
  },
  "satellite": {
    "keywords": ["communication", "future", "radio", "space"],
    "char": "📡",
    "category": "objectsandsymbols"
  },
  "credit_card": {
    "keywords": ["money", "sales", "dollar", "bill", "payment", "shopping"],
    "char": "💳",
    "category": "objectsandsymbols"
  },
  "money_with_wings": {
    "keywords": ["dollar", "bills", "payment", "sale"],
    "char": "💸",
    "category": "objectsandsymbols"
  },
  "moneybag": {
    "keywords": ["dollar", "payment", "coins", "sale"],
    "char": "💰",
    "category": "objectsandsymbols"
  },
  "gem": {
    "keywords": ["blue", "ruby", "diamond", "jewelry"],
    "char": "💎",
    "category": "objectsandsymbols"
  },
  "closed_umbrella": {
    "keywords": ["weather", "rain", "drizzle"],
    "char": "🌂",
    "category": "objectsandsymbols"
  },
  "pouch": {
    "keywords": ["bag", "accessories", "shopping"],
    "char": "👝",
    "category": "objectsandsymbols"
  },
  "purse": {
    "keywords": ["fashion", "accessories", "money", "sales", "shopping"],
    "char": "👛",
    "category": "objectsandsymbols"
  },
  "handbag": {
    "keywords": ["fashion", "accessory", "accessories", "shopping"],
    "char": "👜",
    "category": "objectsandsymbols"
  },
  "briefcase": {
    "keywords": ["business", "documents", "work", "law", "legal"],
    "char": "💼",
    "category": "objectsandsymbols"
  },
  "school_satchel": {
    "keywords": ["student", "education", "bag"],
    "char": "🎒",
    "category": "objectsandsymbols"
  },
  "lipstick": {
    "keywords": ["female", "girl", "fashion", "woman"],
    "char": "💄",
    "category": "objectsandsymbols"
  },
  "eyeglasses": {
    "keywords": ["fashion", "accessories", "eyesight", "nerd", "dork"],
    "char": "👓",
    "category": "objectsandsymbols"
  },
  "womans_hat": {
    "keywords": ["fashion", "accessories", "female", "lady", "spring"],
    "char": "👒",
    "category": "objectsandsymbols"
  },
  "sandal": {
    "keywords": ["shoes", "fashion"],
    "char": "👡",
    "category": "objectsandsymbols"
  },
  "high_heel": {
    "keywords": ["fashion", "shoes", "female", "pumps"],
    "char": "👠",
    "category": "objectsandsymbols"
  },
  "boot": {
    "keywords": ["shoes", "fashion"],
    "char": "👢",
    "category": "objectsandsymbols"
  },
  "mans_shoe": {
    "keywords": ["fashion", "male"],
    "char": "👞",
    "category": "objectsandsymbols"
  },
  "athletic_shoe": {
    "keywords": ["shoes", "sports"],
    "char": "👟",
    "category": "objectsandsymbols"
  },
  "bikini": {
    "keywords": ["swimming", "female", "woman", "girl", "fashion", "beach", "summer"],
    "char": "👙",
    "category": "objectsandsymbols"
  },
  "dress": {
    "keywords": ["clothes", "fashion", "shopping"],
    "char": "👗",
    "category": "objectsandsymbols"
  },
  "kimono": {
    "keywords": ["dress", "fashion", "women", "female", "japanese"],
    "char": "👘",
    "category": "objectsandsymbols"
  },
  "womans_clothes": {
    "keywords": ["fashion", "shopping", "female"],
    "char": "👚",
    "category": "objectsandsymbols"
  },
  "shirt": {
    "keywords": ["fashion", "cloth", "casual", "tshirt"],
    "char": "👕",
    "category": "objectsandsymbols"
  },
  "necktie": {
    "keywords": ["shirt", "suitup", "formal", "fashion", "cloth", "business"],
    "char": "👔",
    "category": "objectsandsymbols"
  },
  "jeans": {
    "keywords": ["fashion", "shopping"],
    "char": "👖",
    "category": "objectsandsymbols"
  },
  "door": {
    "keywords": ["house", "entry", "exit"],
    "char": "🚪",
    "category": "objectsandsymbols"
  },
  "shower": {
    "keywords": ["clean", "water", "bathroom"],
    "char": "🚿",
    "category": "objectsandsymbols"
  },
  "bathtub": {
    "keywords": ["clean", "shower", "bathroom"],
    "char": "🛁",
    "category": "objectsandsymbols"
  },
  "toilet": {
    "keywords": ["restroom", "wc", "washroom", "bathroom"],
    "char": "🚽",
    "category": "objectsandsymbols"
  },
  "barber": {
    "keywords": ["hair", "salon", "style"],
    "char": "💈",
    "category": "objectsandsymbols"
  },
  "syringe": {
    "keywords": ["health", "hospital", "drugs", "blood", "medicine", "needle", "doctor", "nurse"],
    "char": "💉",
    "category": "objectsandsymbols"
  },
  "pill": {
    "keywords": ["health", "medicine", "doctor", "pharmacy"],
    "char": "💊",
    "category": "objectsandsymbols"
  },
  "microscope": {
    "keywords": ["laboratory", "experiment", "zoomin", "science", "study"],
    "char": "🔬",
    "category": "objectsandsymbols"
  },
  "telescope": {
    "keywords": ["stars", "space", "zoom"],
    "char": "🔭",
    "category": "objectsandsymbols"
  },
  "crystal_ball": {
    "keywords": ["disco", "party", "magic", "circus", "fortune_teller"],
    "char": "🔮",
    "category": "objectsandsymbols"
  },
  "wrench": {
    "keywords": ["tools", "diy", "ikea", "fix", "maintainer"],
    "char": "🔧",
    "category": "objectsandsymbols"
  },
  "hocho": {
    "keywords": ["knife", "blade", "cutlery", "kitchen", "weapon"],
    "char": "🔪",
    "category": "objectsandsymbols"
  },
  "nut_and_bolt": {
    "keywords": ["handy", "tools", "fix"],
    "char": "🔩",
    "category": "objectsandsymbols"
  },
  "hammer": {
    "keywords": ["tools", "verdict", "judge", "done", "law", "legal", "ruling", "gavel"],
    "char": "🔨",
    "category": "objectsandsymbols"
  },
  "bomb": {
    "keywords": ["boom", "explode", "explosion"],
    "char": "💣",
    "category": "objectsandsymbols"
  },
  "smoking": {
    "keywords": ["kills", "tobacco", "cigarette"],
    "char": "🚬",
    "category": "objectsandsymbols"
  },
  "gun": {
    "keywords": ["violence", "weapon", "pistol", "revolver"],
    "char": "🔫",
    "category": "objectsandsymbols"
  },
  "bookmark": {
    "keywords": ["favorite", "label", "save"],
    "char": "🔖",
    "category": "objectsandsymbols"
  },
  "newspaper": {
    "keywords": ["press", "headline"],
    "char": "📰",
    "category": "objectsandsymbols"
  },
  "key": {
    "keywords": ["lock", "door", "password"],
    "char": "🔑",
    "category": "objectsandsymbols"
  },
  "email": {
    "keywords": ["envelope", "letter", "postal", "inbox", "communication"],
    "char": "✉️",
    "category": "objectsandsymbols"
  },
  "envelope_with_arrow": {
    "keywords": ["email", "communication"],
    "char": "📩",
    "category": "objectsandsymbols"
  },
  "incoming_envelope": {
    "keywords": ["email", "inbox"],
    "char": "📨",
    "category": "objectsandsymbols"
  },
  "e-mail": {
    "keywords": ["communication", "inbox", "email"],
    "char": "📧",
    "category": "objectsandsymbols"
  },
  "inbox_tray": {
    "keywords": ["email", "documents"],
    "char": "📥",
    "category": "objectsandsymbols"
  },
  "outbox_tray": {
    "keywords": ["inbox", "email"],
    "char": "📤",
    "category": "objectsandsymbols"
  },
  "package": {
    "keywords": ["mail", "gift", "cardboard", "box", "moving"],
    "char": "📦",
    "category": "objectsandsymbols"
  },
  "postal_horn": {
    "keywords": ["instrument", "music"],
    "char": "📯",
    "category": "objectsandsymbols"
  },
  "postbox": {
    "keywords": ["email", "letter", "envelope"],
    "char": "📮",
    "category": "objectsandsymbols"
  },
  "mailbox_closed": {
    "keywords": ["email", "communication", "inbox"],
    "char": "📪",
    "category": "objectsandsymbols"
  },
  "mailbox": {
    "keywords": ["email", "inbox", "communication"],
    "char": "📫",
    "category": "objectsandsymbols"
  },
  "mailbox_with_mail": {
    "keywords": ["email", "inbox", "communication"],
    "char": "📬",
    "category": "objectsandsymbols"
  },
  "mailbox_with_no_mail": {
    "keywords": ["email", "inbox"],
    "char": "📭",
    "category": "objectsandsymbols"
  },
  "page_facing_up": {
    "keywords": ["documents", "office", "paper", "information"],
    "char": "📄",
    "category": "objectsandsymbols"
  },
  "page_with_curl": {
    "keywords": ["documents", "office", "paper"],
    "char": "📃",
    "category": "objectsandsymbols"
  },
  "bookmark_tabs": {
    "keywords": ["favorite", "save", "order", "tidy"],
    "char": "📑",
    "category": "objectsandsymbols"
  },
  "chart_with_upwards_trend": {
    "keywords": ["graph", "presenetation", "stats", "recovery", "business", "economics", "money", "sales", "good", "success"],
    "char": "📈",
    "category": "objectsandsymbols"
  },
  "chart_with_downwards_trend": {
    "keywords": ["graph", "presentation", "stats", "recession", "business", "economics", "money", "sales", "bad", "failure"],
    "char": "📉",
    "category": "objectsandsymbols"
  },
  "bar_chart": {
    "keywords": ["graph", "presentation", "stats"],
    "char": "📊",
    "category": "objectsandsymbols"
  },
  "date": {
    "keywords": ["calendar", "schedule"],
    "char": "📅",
    "category": "objectsandsymbols"
  },
  "calendar": {
    "keywords": ["schedule", "date", "planning"],
    "char": "📆",
    "category": "objectsandsymbols"
  },
  "low_brightness": {
    "keywords": ["sun", "afternoon", "warm", "summer"],
    "char": "🔅",
    "category": "objectsandsymbols"
  },
  "high_brightness": {
    "keywords": ["sun", "light"],
    "char": "🔆",
    "category": "objectsandsymbols"
  },
  "scroll": {
    "keywords": ["documents", "ancient", "history", "paper"],
    "char": "📜",
    "category": "objectsandsymbols"
  },
  "clipboard": {
    "keywords": ["stationery", "documents"],
    "char": "📋",
    "category": "objectsandsymbols"
  },
  "book": {
    "keywords": ["open_book", "read", "library", "knowledge", "literature", "learn", "study"],
    "char": "📖",
    "category": "objectsandsymbols"
  },
  "notebook": {
    "keywords": ["stationery", "record", "notes", "paper", "study"],
    "char": "📓",
    "category": "objectsandsymbols"
  },
  "notebook_with_decorative_cover": {
    "keywords": ["classroom", "notes", "record", "paper", "study"],
    "char": "📔",
    "category": "objectsandsymbols"
  },
  "ledger": {
    "keywords": ["notes", "paper"],
    "char": "📒",
    "category": "objectsandsymbols"
  },
  "closed_book": {
    "keywords": ["read", "library", "knowledge", "textbook", "learn"],
    "char": "📕",
    "category": "objectsandsymbols"
  },
  "green_book": {
    "keywords": ["read", "library", "knowledge", "study"],
    "char": "📗",
    "category": "objectsandsymbols"
  },
  "blue_book": {
    "keywords": ["read", "library", "knowledge", "learn", "study"],
    "char": "📘",
    "category": "objectsandsymbols"
  },
  "orange_book": {
    "keywords": ["read", "library", "knowledge", "textbook", "study"],
    "char": "📙",
    "category": "objectsandsymbols"
  },
  "books": {
    "keywords": ["literature", "library", "study"],
    "char": "📚",
    "category": "objectsandsymbols"
  },
  "card_index": {
    "keywords": ["business", "stationery"],
    "char": "📇",
    "category": "objectsandsymbols"
  },
  "link": {
    "keywords": ["rings", "url"],
    "char": "🔗",
    "category": "objectsandsymbols"
  },
  "paperclip": {
    "keywords": ["documents", "stationery"],
    "char": "📎",
    "category": "objectsandsymbols"
  },
  "pushpin": {
    "keywords": ["stationery", "mark", "here"],
    "char": "📌",
    "category": "objectsandsymbols"
  },
  "scissors": {
    "keywords": ["stationery", "cut"],
    "char": "✂️",
    "category": "objectsandsymbols"
  },
  "triangular_ruler": {
    "keywords": ["stationery", "math", "architect", "sketch"],
    "char": "📐",
    "category": "objectsandsymbols"
  },
  "round_pushpin": {
    "keywords": ["stationery", "location", "map", "here"],
    "char": "📍",
    "category": "objectsandsymbols"
  },
  "straight_ruler": {
    "keywords": ["stationery", "calculate", "length", "math", "school", "drawing", "architect", "sketch"],
    "char": "📏",
    "category": "objectsandsymbols"
  },
  "triangular_flag_on_post": {
    "keywords": ["mark", "milestone", "place"],
    "char": "🚩",
    "category": "objectsandsymbols"
  },
  "file_folder": {
    "keywords": ["documents", "business", "office"],
    "char": "📁",
    "category": "objectsandsymbols"
  },
  "open_file_folder": {
    "keywords": ["documents", "load"],
    "char": "📂",
    "category": "objectsandsymbols"
  },
  "black_nib": {
    "keywords": ["pen", "stationery", "writing", "write"],
    "char": "✒️",
    "category": "objectsandsymbols"
  },
  "pencil2": {
    "keywords": ["stationery", "write", "paper", "writing", "school", "study"],
    "char": "✏️",
    "category": "objectsandsymbols"
  },
  "memo": {
    "keywords": ["write", "documents", "stationery", "pencil", "paper", "writing", "legal", "exam", "quiz", "test", "study"],
    "char": "📝",
    "category": "objectsandsymbols"
  },
  "lock_with_ink_pen": {
    "keywords": ["security", "secret"],
    "char": "🔏",
    "category": "objectsandsymbols"
  },
  "closed_lock_with_key": {
    "keywords": ["security", "privacy"],
    "char": "🔐",
    "category": "objectsandsymbols"
  },
  "lock": {
    "keywords": ["security", "password", "padlock"],
    "char": "🔒",
    "category": "objectsandsymbols"
  },
  "unlock": {
    "keywords": ["privacy", "security"],
    "char": "🔓",
    "category": "objectsandsymbols"
  },
  "mega": {
    "keywords": ["sound", "speaker", "volume"],
    "char": "📣",
    "category": "objectsandsymbols"
  },
  "loudspeaker": {
    "keywords": ["volume", "sound"],
    "char": "📢",
    "category": "objectsandsymbols"
  },
  "speaker": {
    "keywords": ["sound", "volume", "silence", "broadcast"],
    "char": "🔈",
    "category": "objectsandsymbols"
  },
  "sound": {
    "keywords": ["volume", "speaker", "broadcast"],
    "char": "🔉",
    "category": "objectsandsymbols"
  },
  "loud_sound": {
    "keywords": ["volume", "noise", "noisy", "speaker", "broadcast"],
    "char": "🔊",
    "category": "objectsandsymbols"
  },
  "mute": {
    "keywords": ["sound", "volume", "silence", "quiet"],
    "char": "🔇",
    "category": "objectsandsymbols"
  },
  "zzz": {
    "keywords": ["sleepy", "tired"],
    "char": "💤",
    "category": "objectsandsymbols"
  },
  "bell": {
    "keywords": ["sound", "notification", "christmas", "xmas", "chime"],
    "char": "🔔",
    "category": "objectsandsymbols"
  },
  "no_bell": {
    "keywords": ["sound", "volume", "mute", "quiet", "silent"],
    "char": "🔕",
    "category": "objectsandsymbols"
  },
  "thought_balloon": {
    "keywords": ["bubble", "cloud", "speech", "thinking"],
    "char": "💭",
    "category": "objectsandsymbols"
  },
  "speech_balloon": {
    "keywords": ["bubble", "words", "message", "talk", "chatting"],
    "char": "💬",
    "category": "objectsandsymbols"
  },
  "children_crossing": {
    "keywords": ["school", "warning", "danger", "sign", "driving", "yellow-diamond"],
    "char": "🚸",
    "category": "objectsandsymbols"
  },
  "mag": {
    "keywords": ["search", "zoom", "find", "detective"],
    "char": "🔍",
    "category": "objectsandsymbols"
  },
  "mag_right": {
    "keywords": ["search", "zoom", "find", "detective"],
    "char": "🔎",
    "category": "objectsandsymbols"
  },
  "no_entry_sign": {
    "keywords": ["forbid", "stop", "limit", "denied", "disallow", "circle"],
    "char": "🚫",
    "category": "objectsandsymbols"
  },
  "no_entry": {
    "keywords": ["limit", "security", "privacy", "bad", "denied", "stop", "circle"],
    "char": "⛔",
    "category": "objectsandsymbols"
  },
  "name_badge": {
    "keywords": ["fire", "forbid"],
    "char": "📛",
    "category": "objectsandsymbols"
  },
  "no_pedestrians": {
    "keywords": ["rules", "crossing", "walking", "circle"],
    "char": "🚷",
    "category": "objectsandsymbols"
  },
  "do_not_litter": {
    "keywords": ["trash", "bin", "garbage", "circle"],
    "char": "🚯",
    "category": "objectsandsymbols"
  },
  "no_bicycles": {
    "keywords": ["cyclist", "prohibited", "circle"],
    "char": "🚳",
    "category": "objectsandsymbols"
  },
  "non-potable_water": {
    "keywords": ["drink", "faucet", "tap", "circle"],
    "char": "🚱",
    "category": "objectsandsymbols"
  },
  "no_mobile_phones": {
    "keywords": ["iphone", "mute", "circle"],
    "char": "📵",
    "category": "objectsandsymbols"
  },
  "underage": {
    "keywords": ["18", "drink", "pub", "night", "minor", "circle"],
    "char": "🔞",
    "category": "objectsandsymbols"
  },
  "accept": {
    "keywords": ["ok", "good", "chinese", "kanji", "agree", "yes", "orange-circle"],
    "char": "🉑",
    "category": "objectsandsymbols"
  },
  "ideograph_advantage": {
    "keywords": ["chinese", "kanji", "obtain", "get", "circle"],
    "char": "🉐",
    "category": "objectsandsymbols"
  },
  "white_flower": {
    "keywords": ["japanese", "spring"],
    "char": "💮",
    "category": "objectsandsymbols"
  },
  "secret": {
    "keywords": ["privacy", "chinese", "sshh", "kanji", "red-circle"],
    "char": "㊙️",
    "category": "objectsandsymbols"
  },
  "congratulations": {
    "keywords": ["chinese", "kanji", "japanese", "red-circle"],
    "char": "㊗️",
    "category": "objectsandsymbols"
  },
  "u5408": {
    "keywords": ["japanese", "chinese", "join", "kanji", "red-square"],
    "char": "🈴",
    "category": "objectsandsymbols"
  },
  "u6e80": {
    "keywords": ["full", "chinese", "japanese", "red-square", "kanji"],
    "char": "🈵",
    "category": "objectsandsymbols"
  },
  "u7981": {
    "keywords": ["kanji", "japanese", "chinese", "forbidden", "limit", "restricted", "red-square"],
    "char": "🈲",
    "category": "objectsandsymbols"
  },
  "u6709": {
    "keywords": ["orange-square", "chinese", "have", "kanji"],
    "char": "🈶",
    "category": "objectsandsymbols"
  },
  "u7121": {
    "keywords": ["nothing", "chinese", "kanji", "japanese", "orange-square"],
    "char": "🈚",
    "category": "objectsandsymbols"
  },
  "u7533": {
    "keywords": ["chinese", "japanese", "kanji", "orange-square"],
    "char": "🈸",
    "category": "objectsandsymbols"
  },
  "u55b6": {
    "keywords": ["japanese", "opening hours", "orange-square"],
    "char": "🈺",
    "category": "objectsandsymbols"
  },
  "u6708": {
    "keywords": ["chinese", "month", "moon", "japanese", "orange-square", "kanji"],
    "char": "🈷️",
    "category": "objectsandsymbols"
  },
  "u5272": {
    "keywords": ["cut", "divide", "chinese", "kanji", "pink-square"],
    "char": "🈹",
    "category": "objectsandsymbols"
  },
  "u7a7a": {
    "keywords": ["kanji", "japanese", "chinese", "empty", "sky", "blue-square"],
    "char": "🈳",
    "category": "objectsandsymbols"
  },
  "sa": {
    "keywords": ["japanese", "blue-square", "katakana"],
    "char": "🈂️",
    "category": "objectsandsymbols"
  },
  "koko": {
    "keywords": ["blue-square", "here", "katakana", "japanese", "destination"],
    "char": "🈁",
    "category": "objectsandsymbols"
  },
  "u6307": {
    "keywords": ["chinese", "point", "green-square", "kanji"],
    "char": "🈯",
    "category": "objectsandsymbols"
  },
  "chart": {
    "keywords": ["green-square", "graph", "presentation", "stats"],
    "char": "💹",
    "category": "objectsandsymbols"
  },
  "sparkle": {
    "keywords": ["stars", "green-square", "awesome", "good", "fireworks"],
    "char": "❇️",
    "category": "objectsandsymbols"
  },
  "eight_spoked_asterisk": {
    "keywords": ["star", "sparkle", "green-square"],
    "char": "✳️",
    "category": "objectsandsymbols"
  },
  "negative_squared_cross_mark": {
    "keywords": ["x", "green-square", "no", "deny"],
    "char": "❎",
    "category": "objectsandsymbols"
  },
  "white_check_mark": {
    "keywords": ["green-square", "ok", "agree", "vote", "election"],
    "char": "✅",
    "category": "objectsandsymbols"
  },
  "eight_pointed_black_star": {
    "keywords": ["orange-square", "shape", "polygon"],
    "char": "✴️",
    "category": "objectsandsymbols"
  },
  "vibration_mode": {
    "keywords": ["orange-square", "phone"],
    "char": "📳",
    "category": "objectsandsymbols"
  },
  "mobile_phone_off": {
    "keywords": ["mute", "orange-square", "silence", "quiet"],
    "char": "📴",
    "category": "objectsandsymbols"
  },
  "vs": {
    "keywords": ["words", "orange-square"],
    "char": "🆚",
    "category": "objectsandsymbols"
  },
  "a": {
    "keywords": ["red-square", "alphabet", "letter"],
    "char": "🅰️",
    "category": "objectsandsymbols"
  },
  "b": {
    "keywords": ["red-square", "alphabet", "letter"],
    "char": "🅱️",
    "category": "objectsandsymbols"
  },
  "ab": {
    "keywords": ["red-square", "alphabet"],
    "char": "🆎",
    "category": "objectsandsymbols"
  },
  "cl": {
    "keywords": ["alphabet", "words", "red-square"],
    "char": "🆑",
    "category": "objectsandsymbols"
  },
  "o2": {
    "keywords": ["alphabet", "red-square", "letter"],
    "char": "🅾️",
    "category": "objectsandsymbols"
  },
  "sos": {
    "keywords": ["help", "red-square", "words", "emergency", "911"],
    "char": "🆘",
    "category": "objectsandsymbols"
  },
  "id": {
    "keywords": ["purple-square", "words"],
    "char": "🆔",
    "category": "objectsandsymbols"
  },
  "parking": {
    "keywords": ["cars", "blue-square", "alphabet", "letter"],
    "char": "🅿️",
    "category": "objectsandsymbols"
  },
  "wc": {
    "keywords": ["toilet", "restroom", "blue-square"],
    "char": "🚾",
    "category": "objectsandsymbols"
  },
  "cool": {
    "keywords": ["words", "blue-square"],
    "char": "🆒",
    "category": "objectsandsymbols"
  },
  "free": {
    "keywords": ["blue-square", "words"],
    "char": "🆓",
    "category": "objectsandsymbols"
  },
  "new": {
    "keywords": ["blue-square", "words", "start"],
    "char": "🆕",
    "category": "objectsandsymbols"
  },
  "ng": {
    "keywords": ["blue-square", "words", "shape", "icon"],
    "char": "🆖",
    "category": "objectsandsymbols"
  },
  "ok": {
    "keywords": ["good", "agree", "yes", "blue-square"],
    "char": "🆗",
    "category": "objectsandsymbols"
  },
  "up": {
    "keywords": ["blue-square", "above", "high"],
    "char": "🆙",
    "category": "objectsandsymbols"
  },
  "atm": {
    "keywords": ["money", "sales", "cash", "blue-square", "payment", "bank"],
    "char": "🏧",
    "category": "objectsandsymbols"
  },
  "aries": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♈",
    "category": "objectsandsymbols"
  },
  "taurus": {
    "keywords": ["purple-square", "sign", "zodiac", "astrology"],
    "char": "♉",
    "category": "objectsandsymbols"
  },
  "gemini": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♊",
    "category": "objectsandsymbols"
  },
  "cancer": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♋",
    "category": "objectsandsymbols"
  },
  "leo": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♌",
    "category": "objectsandsymbols"
  },
  "virgo": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♍",
    "category": "objectsandsymbols"
  },
  "libra": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♎",
    "category": "objectsandsymbols"
  },
  "scorpius": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology", "scorpio"],
    "char": "♏",
    "category": "objectsandsymbols"
  },
  "sagittarius": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♐",
    "category": "objectsandsymbols"
  },
  "capricorn": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♑",
    "category": "objectsandsymbols"
  },
  "aquarius": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♒",
    "category": "objectsandsymbols"
  },
  "pisces": {
    "keywords": ["purple-square", "sign", "zodiac", "astrology"],
    "char": "♓",
    "category": "objectsandsymbols"
  },
  "restroom": {
    "keywords": ["blue-square", "toilet", "refresh", "wc", "gender"],
    "char": "🚻",
    "category": "objectsandsymbols"
  },
  "mens": {
    "keywords": ["toilet", "restroom", "wc", "blue-square", "gender", "male"],
    "char": "🚹",
    "category": "objectsandsymbols"
  },
  "womens": {
    "keywords": ["purple-square", "woman", "female", "toilet", "loo", "restroom", "gender"],
    "char": "🚺",
    "category": "objectsandsymbols"
  },
  "baby_symbol": {
    "keywords": ["orange-square", "child"],
    "char": "🚼",
    "category": "objectsandsymbols"
  },
  "wheelchair": {
    "keywords": ["blue-square", "disabled", "a11y", "accessibility"],
    "char": "♿",
    "category": "objectsandsymbols"
  },
  "potable_water": {
    "keywords": ["blue-square", "liquid", "restroom", "cleaning", "faucet"],
    "char": "🚰",
    "category": "objectsandsymbols"
  },
  "no_smoking": {
    "keywords": ["cigarette", "blue-square", "smell", "smoke"],
    "char": "🚭",
    "category": "objectsandsymbols"
  },
  "put_litter_in_its_place": {
    "keywords": ["blue-square", "sign", "human", "info"],
    "char": "🚮",
    "category": "objectsandsymbols"
  },
  "arrow_forward": {
    "keywords": ["blue-square", "right", "direction"],
    "char": "▶️",
    "category": "objectsandsymbols"
  },
  "arrow_backward": {
    "keywords": ["blue-square", "left", "direction"],
    "char": "◀️",
    "category": "objectsandsymbols"
  },
  "arrow_up_small": {
    "keywords": ["blue-square", "triangle", "direction", "point", "forward", "top"],
    "char": "🔼",
    "category": "objectsandsymbols"
  },
  "arrow_down_small": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "🔽",
    "category": "objectsandsymbols"
  },
  "fast_forward": {
    "keywords": ["blue-square", "play", "speed", "continue"],
    "char": "⏩",
    "category": "objectsandsymbols"
  },
  "rewind": {
    "keywords": ["play", "blue-square"],
    "char": "⏪",
    "category": "objectsandsymbols"
  },
  "arrow_double_up": {
    "keywords": ["blue-square", "direction", "top"],
    "char": "⏫",
    "category": "objectsandsymbols"
  },
  "arrow_double_down": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "⏬",
    "category": "objectsandsymbols"
  },
  "arrow_right": {
    "keywords": ["blue-square", "next"],
    "char": "➡️",
    "category": "objectsandsymbols"
  },
  "arrow_left": {
    "keywords": ["blue-square", "previous", "back"],
    "char": "⬅️",
    "category": "objectsandsymbols"
  },
  "arrow_up": {
    "keywords": ["blue-square", "continue", "top", "direction"],
    "char": "⬆️",
    "category": "objectsandsymbols"
  },
  "arrow_down": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "⬇️",
    "category": "objectsandsymbols"
  },
  "arrow_upper_right": {
    "keywords": ["blue-square", "point", "direction"],
    "char": "↗️",
    "category": "objectsandsymbols"
  },
  "arrow_lower_right": {
    "keywords": ["blue-square", "direction"],
    "char": "↘️",
    "category": "objectsandsymbols"
  },
  "arrow_lower_left": {
    "keywords": ["blue-square", "direction"],
    "char": "↙️",
    "category": "objectsandsymbols"
  },
  "arrow_upper_left": {
    "keywords": ["blue-square", "point", "direction"],
    "char": "↖️",
    "category": "objectsandsymbols"
  },
  "arrow_up_down": {
    "keywords": ["blue-square", "direction", "way"],
    "char": "↕️",
    "category": "objectsandsymbols"
  },
  "left_right_arrow": {
    "keywords": ["shape", "direction"],
    "char": "↔️",
    "category": "objectsandsymbols"
  },
  "arrows_counterclockwise": {
    "keywords": ["blue-square", "sync", "cycle"],
    "char": "🔄",
    "category": "objectsandsymbols"
  },
  "arrow_right_hook": {
    "keywords": ["blue-square", "return", "rotade", "direction"],
    "char": "↪️",
    "category": "objectsandsymbols"
  },
  "leftwards_arrow_with_hook": {
    "keywords": ["back", "return", "blue-square", "undo"],
    "char": "↩️",
    "category": "objectsandsymbols"
  },
  "arrow_heading_up": {
    "keywords": ["blue-square", "direction", "top"],
    "char": "⤴️",
    "category": "objectsandsymbols"
  },
  "arrow_heading_down": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "⤵️",
    "category": "objectsandsymbols"
  },
  "twisted_rightwards_arrows": {
    "keywords": ["blue-square", "shuffle", "music", "random"],
    "char": "🔀",
    "category": "objectsandsymbols"
  },
  "repeat": {
    "keywords": ["loop", "record"],
    "char": "🔁",
    "category": "objectsandsymbols"
  },
  "repeat_one": {
    "keywords": ["blue-square", "loop"],
    "char": "🔂",
    "category": "objectsandsymbols"
  },
  "hash": {
    "keywords": ["symbol", "blue-square", "twitter"],
    "char": "#️⃣",
    "category": "objectsandsymbols"
  },
  "zero": {
    "keywords": ["0", "numbers", "blue-square", "null"],
    "char": "0️⃣",
    "category": "objectsandsymbols"
  },
  "one": {
    "keywords": ["blue-square", "numbers", "1"],
    "char": "1️⃣",
    "category": "objectsandsymbols"
  },
  "two": {
    "keywords": ["numbers", "2", "prime", "blue-square"],
    "char": "2️⃣",
    "category": "objectsandsymbols"
  },
  "three": {
    "keywords": ["3", "numbers", "prime", "blue-square"],
    "char": "3️⃣",
    "category": "objectsandsymbols"
  },
  "four": {
    "keywords": ["4", "numbers", "blue-square"],
    "char": "4️⃣",
    "category": "objectsandsymbols"
  },
  "five": {
    "keywords": ["5", "numbers", "blue-square", "prime"],
    "char": "5️⃣",
    "category": "objectsandsymbols"
  },
  "six": {
    "keywords": ["6", "numbers", "blue-square"],
    "char": "6️⃣",
    "category": "objectsandsymbols"
  },
  "seven": {
    "keywords": ["7", "numbers", "blue-square", "prime"],
    "char": "7️⃣",
    "category": "objectsandsymbols"
  },
  "eight": {
    "keywords": ["8", "blue-square", "numbers"],
    "char": "8️⃣",
    "category": "objectsandsymbols"
  },
  "nine": {
    "keywords": ["blue-square", "numbers", "9"],
    "char": "9️⃣",
    "category": "objectsandsymbols"
  },
  "keycap_ten": {
    "keywords": ["numbers", "10", "blue-square"],
    "char": "🔟",
    "category": "objectsandsymbols"
  },
  "1234": {
    "keywords": ["numbers", "blue-square"],
    "char": "🔢",
    "category": "objectsandsymbols"
  },
  "abc": {
    "keywords": ["blue-square", "alphabet"],
    "char": "🔤",
    "category": "objectsandsymbols"
  },
  "abcd": {
    "keywords": ["blue-square", "alphabet"],
    "char": "🔡",
    "category": "objectsandsymbols"
  },
  "capital_abcd": {
    "keywords": ["alphabet", "words", "blue-square"],
    "char": "🔠",
    "category": "objectsandsymbols"
  },
  "information_source": {
    "keywords": ["blue-square", "alphabet", "letter"],
    "char": "ℹ️",
    "category": "objectsandsymbols"
  },
  "signal_strength": {
    "keywords": ["blue-square", "reception", "phone", "internet", "connection", "wifi", "bluetooth"],
    "char": "📶",
    "category": "objectsandsymbols"
  },
  "cinema": {
    "keywords": ["blue-square", "record", "film", "movie"],
    "char": "🎦",
    "category": "objectsandsymbols"
  },
  "symbols": {
    "keywords": ["blue-square", "music", "note", "ampersand", "percent", "glyphs", "characters"],
    "char": "🔣",
    "category": "objectsandsymbols"
  },
  "heavy_plus_sign": {
    "keywords": ["math", "calculation", "addition", "more", "increase"],
    "char": "➕",
    "category": "objectsandsymbols"
  },
  "heavy_minus_sign": {
    "keywords": ["math", "calculation", "subtract", "less"],
    "char": "➖",
    "category": "objectsandsymbols"
  },
  "wavy_dash": {
    "keywords": ["draw", "line", "moustache", "mustache", "squiggle", "scribble"],
    "char": "〰️",
    "category": "objectsandsymbols"
  },
  "heavy_division_sign": {
    "keywords": ["divide", "math", "calculation"],
    "char": "➗",
    "category": "objectsandsymbols"
  },
  "heavy_multiplication_x": {
    "keywords": ["math", "calculation"],
    "char": "✖️",
    "category": "objectsandsymbols"
  },
  "heavy_check_mark": {
    "keywords": ["ok", "nike"],
    "char": "✔️",
    "category": "objectsandsymbols"
  },
  "arrows_clockwise": {
    "keywords": ["sync", "cycle", "round", "repeat"],
    "char": "🔃",
    "category": "objectsandsymbols"
  },
  "tm": {
    "keywords": ["trademark", "brand", "law", "legal"],
    "char": "™️",
    "category": "objectsandsymbols"
  },
  "copyright": {
    "keywords": ["ip", "license", "circle", "law", "legal"],
    "char": "©️",
    "category": "objectsandsymbols"
  },
  "registered": {
    "keywords": ["alphabet", "circle"],
    "char": "®️",
    "category": "objectsandsymbols"
  },
  "currency_exchange": {
    "keywords": ["money", "sales", "dollar", "travel"],
    "char": "💱",
    "category": "objectsandsymbols"
  },
  "heavy_dollar_sign": {
    "keywords": ["money", "sales", "payment", "currency"],
    "char": "💲",
    "category": "objectsandsymbols"
  },
  "curly_loop": {
    "keywords": ["scribble", "draw", "shape", "squiggle"],
    "char": "➰",
    "category": "objectsandsymbols"
  },
  "loop": {
    "keywords": ["tape", "cassette"],
    "char": "➿",
    "category": "objectsandsymbols"
  },
  "part_alternation_mark": {
    "keywords": ["graph", "presentation", "stats", "business", "economics", "bad"],
    "char": "〽️",
    "category": "objectsandsymbols"
  },
  "exclamation": {
    "keywords": ["heavy_exclamation_mark", "danger", "surprise", "punctuation", "wow", "warning"],
    "char": "❗",
    "category": "objectsandsymbols"
  },
  "question": {
    "keywords": ["doubt", "confused"],
    "char": "❓",
    "category": "objectsandsymbols"
  },
  "grey_exclamation": {
    "keywords": ["surprise", "punctuation", "gray", "wow", "warning"],
    "char": "❕",
    "category": "objectsandsymbols"
  },
  "grey_question": {
    "keywords": ["doubts", "gray", "huh"],
    "char": "❔",
    "category": "objectsandsymbols"
  },
  "bangbang": {
    "keywords": ["exclamation", "surprise"],
    "char": "‼️",
    "category": "objectsandsymbols"
  },
  "interrobang": {
    "keywords": ["wat", "punctuation", "surprise"],
    "char": "⁉️",
    "category": "objectsandsymbols"
  },
  "x": {
    "keywords": ["no", "delete", "remove"],
    "char": "❌",
    "category": "objectsandsymbols"
  },
  "o": {
    "keywords": ["circle", "round"],
    "char": "⭕",
    "category": "objectsandsymbols"
  },
  "100": {
    "keywords": ["score", "perfect", "numbers", "century", "exam", "quiz", "test", "pass", "hundred"],
    "char": "💯",
    "category": "objectsandsymbols"
  },
  "end": {
    "keywords": ["words", "arrow"],
    "char": "🔚",
    "category": "objectsandsymbols"
  },
  "back": {
    "keywords": ["arrow", "words", "return"],
    "char": "🔙",
    "category": "objectsandsymbols"
  },
  "on": {
    "keywords": ["arrow", "words"],
    "char": "🔛",
    "category": "objectsandsymbols"
  },
  "top": {
    "keywords": ["words", "blue-square"],
    "char": "🔝",
    "category": "objectsandsymbols"
  },
  "soon": {
    "keywords": ["arrow", "words"],
    "char": "🔜",
    "category": "objectsandsymbols"
  },
  "cyclone": {
    "keywords": ["weather", "swirl", "blue", "cloud"],
    "char": "🌀",
    "category": "objectsandsymbols"
  },
  "m": {
    "keywords": ["alphabet", "blue-circle", "letter"],
    "char": "Ⓜ️",
    "category": "objectsandsymbols"
  },
  "ophiuchus": {
    "keywords": ["sign", "purple-square", "constellation", "astrology"],
    "char": "⛎",
    "category": "objectsandsymbols"
  },
  "six_pointed_star": {
    "keywords": ["purple-square", "religion", "jewish", "hexagram"],
    "char": "🔯",
    "category": "objectsandsymbols"
  },
  "beginner": {
    "keywords": ["badge", "shield"],
    "char": "🔰",
    "category": "objectsandsymbols"
  },
  "trident": {
    "keywords": ["weapon", "spear"],
    "char": "🔱",
    "category": "objectsandsymbols"
  },
  "warning": {
    "keywords": ["exclamation", "wip", "alert", "error", "problem", "issue"],
    "char": "⚠️",
    "category": "objectsandsymbols"
  },
  "hotsprings": {
    "keywords": ["bath", "warm", "relax"],
    "char": "♨️",
    "category": "objectsandsymbols"
  },
  "recycle": {
    "keywords": ["arrow", "environment", "garbage", "trash"],
    "char": "♻️",
    "category": "objectsandsymbols"
  },
  "anger": {
    "keywords": ["angry", "mad"],
    "char": "💢",
    "category": "objectsandsymbols"
  },
  "diamond_shape_with_a_dot_inside": {
    "keywords": ["jewel", "blue", "gem", "crystal", "fancy"],
    "char": "💠",
    "category": "objectsandsymbols"
  },
  "spades": {
    "keywords": ["poker", "cards", "suits", "magic"],
    "char": "♠️",
    "category": "objectsandsymbols"
  },
  "hearts": {
    "keywords": ["poker", "cards", "magic", "suits"],
    "char": "♥️",
    "category": "objectsandsymbols"
  },
  "clubs": {
    "keywords": ["poker", "cards", "magic", "suits"],
    "char": "♣️",
    "category": "objectsandsymbols"
  },
  "diamonds": {
    "keywords": ["poker", "cards", "magic", "suits"],
    "char": "♦️",
    "category": "objectsandsymbols"
  },
  "ballot_box_with_check": {
    "keywords": ["ok", "agree", "confirm", "black-square", "vote", "election"],
    "char": "☑️",
    "category": "objectsandsymbols"
  },
  "white_circle": {
    "keywords": ["shape", "round"],
    "char": "⚪",
    "category": "objectsandsymbols"
  },
  "black_circle": {
    "keywords": ["shape", "button", "round"],
    "char": "⚫",
    "category": "objectsandsymbols"
  },
  "radio_button": {
    "keywords": ["input", "old", "music", "circle"],
    "char": "🔘",
    "category": "objectsandsymbols"
  },
  "red_circle": {
    "keywords": ["shape", "error", "danger"],
    "char": "🔴",
    "category": "objectsandsymbols"
  },
  "large_blue_circle": {
    "keywords": ["shape", "icon", "button"],
    "char": "🔵",
    "category": "objectsandsymbols"
  },
  "small_red_triangle": {
    "keywords": ["shape", "direction", "up", "top"],
    "char": "🔺",
    "category": "objectsandsymbols"
  },
  "small_red_triangle_down": {
    "keywords": ["shape", "direction", "bottom"],
    "char": "🔻",
    "category": "objectsandsymbols"
  },
  "small_orange_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔸",
    "category": "objectsandsymbols"
  },
  "small_blue_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔹",
    "category": "objectsandsymbols"
  },
  "large_orange_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔶",
    "category": "objectsandsymbols"
  },
  "large_blue_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔷",
    "category": "objectsandsymbols"
  },
  "black_small_square": {
    "keywords": ["shape", "icon"],
    "char": "▪️",
    "category": "objectsandsymbols"
  },
  "white_small_square": {
    "keywords": ["shape", "icon"],
    "char": "▫️",
    "category": "objectsandsymbols"
  },
  "black_large_square": {
    "keywords": ["shape", "icon", "button"],
    "char": "⬛",
    "category": "objectsandsymbols"
  },
  "white_large_square": {
    "keywords": ["shape", "icon", "stone", "button"],
    "char": "⬜",
    "category": "objectsandsymbols"
  },
  "black_medium_square": {
    "keywords": ["shape", "button", "icon"],
    "char": "◼️",
    "category": "objectsandsymbols"
  },
  "white_medium_square": {
    "keywords": ["shape", "stone", "icon"],
    "char": "◻️",
    "category": "objectsandsymbols"
  },
  "black_medium_small_square": {
    "keywords": ["icon", "shape", "button"],
    "char": "◾",
    "category": "objectsandsymbols"
  },
  "white_medium_small_square": {
    "keywords": ["shape", "stone", "icon", "button"],
    "char": "◽",
    "category": "objectsandsymbols"
  },
  "black_square_button": {
    "keywords": ["shape", "input", "frame"],
    "char": "🔲",
    "category": "objectsandsymbols"
  },
  "white_square_button": {
    "keywords": ["shape", "input"],
    "char": "🔳",
    "category": "objectsandsymbols"
  },
  "clock1": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕐",
    "category": "objectsandsymbols"
  },
  "clock130": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕜",
    "category": "objectsandsymbols"
  },
  "clock2": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕑",
    "category": "objectsandsymbols"
  },
  "clock230": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕝",
    "category": "objectsandsymbols"
  },
  "clock3": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕒",
    "category": "objectsandsymbols"
  },
  "clock330": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕞",
    "category": "objectsandsymbols"
  },
  "clock4": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕓",
    "category": "objectsandsymbols"
  },
  "clock430": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕟",
    "category": "objectsandsymbols"
  },
  "clock5": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕔",
    "category": "objectsandsymbols"
  },
  "clock530": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕠",
    "category": "objectsandsymbols"
  },
  "clock6": {
    "keywords": ["time", "late", "early", "schedule", "dawn", "dusk"],
    "char": "🕕",
    "category": "objectsandsymbols"
  },
  "clock630": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕡",
    "category": "objectsandsymbols"
  },
  "clock7": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕖",
    "category": "objectsandsymbols"
  },
  "clock730": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕢",
    "category": "objectsandsymbols"
  },
  "clock8": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕗",
    "category": "objectsandsymbols"
  },
  "clock830": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕣",
    "category": "objectsandsymbols"
  },
  "clock9": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕘",
    "category": "objectsandsymbols"
  },
  "clock930": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕤",
    "category": "objectsandsymbols"
  },
  "clock10": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕙",
    "category": "objectsandsymbols"
  },
  "clock1030": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕥",
    "category": "objectsandsymbols"
  },
  "clock11": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕚",
    "category": "objectsandsymbols"
  },
  "clock1130": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕦",
    "category": "objectsandsymbols"
  },
  "clock12": {
    "keywords": ["time", "noon", "midnight", "late", "early", "schedule"],
    "char": "🕛",
    "category": "objectsandsymbols"
  },
  "clock1230": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕧",
    "category": "objectsandsymbols"
  },
  "octocat": {
    "keywords": ["animal", "octopus", "github", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "shipit": {
    "keywords": ["squirrel", "detective", "animal", "sherlock", "inspector", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "bowtie": {
    "keywords": ["face", "formal", "fashion", "suit", "classy", "magic", "circus"],
    "char": null,
    "category": "_custom"
  },
  "neckbeard": {
    "keywords": ["nerdy", "face", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "metal": {
    "keywords": ["fingers", "rocknroll", "concert", "band", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "fu": {
    "keywords": ["fuck", "finger", "dislike", "thumbsdown", "disapprove", "no", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "trollface": {
    "keywords": ["internet", "meme", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "godmode": {
    "keywords": ["doom", "oldschool"],
    "char": null,
    "category": "_custom"
  },
  "goberserk": {
    "keywords": ["doom", "rage", "bloody", "hurt"],
    "char": null,
    "category": "_custom"
  },
  "finnadie": {
    "keywords": ["doom", "oldschool"],
    "char": null,
    "category": "_custom"
  },
  "feelsgood": {
    "keywords": ["doom", "oldschool"],
    "char": null,
    "category": "_custom"
  },
  "rage1": {
    "keywords": ["angry", "mad", "hate", "despise"],
    "char": null,
    "category": "_custom"
  },
  "rage2": {
    "keywords": ["angry", "mad", "hate", "despise"],
    "char": null,
    "category": "_custom"
  },
  "rage3": {
    "keywords": ["angry", "mad", "hate", "despise"],
    "char": null,
    "category": "_custom"
  },
  "rage4": {
    "keywords": ["angry", "mad", "hate", "despise"],
    "char": null,
    "category": "_custom"
  },
  "suspect": {
    "keywords": ["mad", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "hurtrealbad": {
    "keywords": ["mad", "injured", "doom", "oldschool", "custom_"],
    "char": null,
    "category": "_custom"
  },
  "keys": [
    "grinning",
    "grin",
    "joy",
    "smiley",
    "smile",
    "sweat_smile",
    "laughing",
    "innocent",
    "smiling_imp",
    "imp",
    "wink",
    "blush",
    "relaxed",
    "yum",
    "relieved",
    "heart_eyes",
    "sunglasses",
    "smirk",
    "neutral_face",
    "expressionless",
    "unamused",
    "sweat",
    "pensive",
    "confused",
    "confounded",
    "kissing",
    "kissing_heart",
    "kissing_smiling_eyes",
    "kissing_closed_eyes",
    "stuck_out_tongue",
    "stuck_out_tongue_winking_eye",
    "stuck_out_tongue_closed_eyes",
    "disappointed",
    "worried",
    "angry",
    "rage",
    "cry",
    "persevere",
    "triumph",
    "disappointed_relieved",
    "frowning",
    "anguished",
    "fearful",
    "weary",
    "sleepy",
    "tired_face",
    "grimacing",
    "sob",
    "open_mouth",
    "hushed",
    "cold_sweat",
    "scream",
    "astonished",
    "flushed",
    "sleeping",
    "dizzy_face",
    "no_mouth",
    "mask",
    "smile_cat",
    "joy_cat",
    "smiley_cat",
    "heart_eyes_cat",
    "smirk_cat",
    "kissing_cat",
    "pouting_cat",
    "crying_cat_face",
    "scream_cat",
    "footprints",
    "bust_in_silhouette",
    "busts_in_silhouette",
    "baby",
    "boy",
    "girl",
    "man",
    "woman",
    "family",
    "couple",
    "two_men_holding_hands",
    "two_women_holding_hands",
    "cop",
    "dancers",
    "bride_with_veil",
    "person_with_blond_hair",
    "man_with_gua_pi_mao",
    "man_with_turban",
    "older_man",
    "older_woman",
    "baby",
    "construction_worker",
    "princess",
    "guardsman",
    "angel",
    "santa",
    "ghost",
    "japanese_ogre",
    "japanese_goblin",
    "hankey",
    "skull",
    "alien",
    "space_invader",
    "bow",
    "information_desk_person",
    "no_good",
    "ok_woman",
    "raising_hand",
    "person_with_pouting_face",
    "person_frowning",
    "massage",
    "haircut",
    "couple_with_heart",
    "couplekiss",
    "raised_hands",
    "clap",
    "ear",
    "eyes",
    "nose",
    "lips",
    "kiss",
    "tongue",
    "nail_care",
    "wave",
    "+1",
    "-1",
    "point_up",
    "point_up_2",
    "point_down",
    "point_left",
    "point_right",
    "ok_hand",
    "v",
    "facepunch",
    "fist",
    "hand",
    "muscle",
    "open_hands",
    "pray",
    "seedling",
    "evergreen_tree",
    "deciduous_tree",
    "palm_tree",
    "cactus",
    "tulip",
    "cherry_blossom",
    "rose",
    "hibiscus",
    "sunflower",
    "blossom",
    "bouquet",
    "ear_of_rice",
    "herb",
    "four_leaf_clover",
    "maple_leaf",
    "fallen_leaf",
    "leaves",
    "mushroom",
    "chestnut",
    "rat",
    "mouse2",
    "mouse",
    "hamster",
    "ox",
    "water_buffalo",
    "cow2",
    "cow",
    "tiger2",
    "leopard",
    "tiger",
    "rabbit2",
    "rabbit",
    "cat2",
    "cat",
    "racehorse",
    "horse",
    "ram",
    "sheep",
    "goat",
    "rooster",
    "chicken",
    "baby_chick",
    "hatching_chick",
    "hatched_chick",
    "bird",
    "penguin",
    "elephant",
    "dromedary_camel",
    "camel",
    "boar",
    "pig2",
    "pig",
    "pig_nose",
    "dog2",
    "poodle",
    "dog",
    "wolf",
    "bear",
    "koala",
    "panda_face",
    "monkey_face",
    "see_no_evil",
    "hear_no_evil",
    "speak_no_evil",
    "monkey",
    "dragon",
    "dragon_face",
    "crocodile",
    "snake",
    "turtle",
    "frog",
    "whale2",
    "whale",
    "dolphin",
    "octopus",
    "fish",
    "tropical_fish",
    "blowfish",
    "shell",
    "snail",
    "bug",
    "ant",
    "bee",
    "beetle",
    "feet",
    "zap",
    "fire",
    "crescent_moon",
    "sunny",
    "partly_sunny",
    "cloud",
    "droplet",
    "sweat_drops",
    "umbrella",
    "dash",
    "snowflake",
    "star2",
    "star",
    "stars",
    "sunrise_over_mountains",
    "sunrise",
    "rainbow",
    "ocean",
    "volcano",
    "milky_way",
    "mount_fuji",
    "japan",
    "globe_with_meridians",
    "earth_africa",
    "earth_americas",
    "earth_asia",
    "new_moon",
    "waxing_crescent_moon",
    "first_quarter_moon",
    "moon",
    "full_moon",
    "waning_gibbous_moon",
    "last_quarter_moon",
    "waning_crescent_moon",
    "new_moon_with_face",
    "full_moon_with_face",
    "first_quarter_moon_with_face",
    "last_quarter_moon_with_face",
    "sun_with_face",
    "tomato",
    "eggplant",
    "corn",
    "sweet_potato",
    "grapes",
    "melon",
    "watermelon",
    "tangerine",
    "lemon",
    "banana",
    "pineapple",
    "apple",
    "green_apple",
    "pear",
    "peach",
    "cherries",
    "strawberry",
    "hamburger",
    "pizza",
    "meat_on_bone",
    "poultry_leg",
    "rice_cracker",
    "rice_ball",
    "rice",
    "curry",
    "ramen",
    "spaghetti",
    "bread",
    "fries",
    "dango",
    "oden",
    "sushi",
    "fried_shrimp",
    "fish_cake",
    "icecream",
    "shaved_ice",
    "ice_cream",
    "doughnut",
    "cookie",
    "chocolate_bar",
    "candy",
    "lollipop",
    "custard",
    "honey_pot",
    "cake",
    "bento",
    "stew",
    "egg",
    "fork_and_knife",
    "tea",
    "coffee",
    "sake",
    "wine_glass",
    "cocktail",
    "tropical_drink",
    "beer",
    "beers",
    "baby_bottle",
    "ribbon",
    "gift",
    "birthday",
    "jack_o_lantern",
    "christmas_tree",
    "tanabata_tree",
    "bamboo",
    "rice_scene",
    "fireworks",
    "sparkler",
    "tada",
    "confetti_ball",
    "balloon",
    "dizzy",
    "sparkles",
    "boom",
    "mortar_board",
    "crown",
    "dolls",
    "flags",
    "wind_chime",
    "crossed_flags",
    "izakaya_lantern",
    "ring",
    "heart",
    "broken_heart",
    "love_letter",
    "two_hearts",
    "revolving_hearts",
    "heartbeat",
    "heartpulse",
    "sparkling_heart",
    "cupid",
    "gift_heart",
    "heart_decoration",
    "purple_heart",
    "yellow_heart",
    "green_heart",
    "blue_heart",
    "runner",
    "walking",
    "dancer",
    "rowboat",
    "swimmer",
    "surfer",
    "bath",
    "snowboarder",
    "ski",
    "snowman",
    "bicyclist",
    "mountain_bicyclist",
    "horse_racing",
    "tent",
    "fishing_pole_and_fish",
    "soccer",
    "basketball",
    "football",
    "baseball",
    "tennis",
    "rugby_football",
    "golf",
    "trophy",
    "running_shirt_with_sash",
    "checkered_flag",
    "musical_keyboard",
    "guitar",
    "violin",
    "saxophone",
    "trumpet",
    "musical_note",
    "notes",
    "musical_score",
    "headphones",
    "microphone",
    "performing_arts",
    "ticket",
    "tophat",
    "circus_tent",
    "clapper",
    "art",
    "dart",
    "8ball",
    "bowling",
    "slot_machine",
    "game_die",
    "video_game",
    "flower_playing_cards",
    "black_joker",
    "mahjong",
    "carousel_horse",
    "ferris_wheel",
    "roller_coaster",
    "railway_car",
    "mountain_railway",
    "steam_locomotive",
    "train",
    "monorail",
    "bullettrain_side",
    "bullettrain_front",
    "train2",
    "metro",
    "light_rail",
    "station",
    "tram",
    "bus",
    "oncoming_bus",
    "trolleybus",
    "minibus",
    "ambulance",
    "fire_engine",
    "police_car",
    "oncoming_police_car",
    "rotating_light",
    "taxi",
    "oncoming_taxi",
    "car",
    "oncoming_automobile",
    "blue_car",
    "truck",
    "articulated_lorry",
    "tractor",
    "bike",
    "busstop",
    "fuelpump",
    "construction",
    "vertical_traffic_light",
    "traffic_light",
    "rocket",
    "helicopter",
    "airplane",
    "seat",
    "anchor",
    "ship",
    "speedboat",
    "boat",
    "aerial_tramway",
    "mountain_cableway",
    "suspension_railway",
    "passport_control",
    "customs",
    "baggage_claim",
    "left_luggage",
    "yen",
    "euro",
    "pound",
    "dollar",
    "statue_of_liberty",
    "moyai",
    "foggy",
    "tokyo_tower",
    "fountain",
    "european_castle",
    "japanese_castle",
    "city_sunrise",
    "city_sunset",
    "night_with_stars",
    "bridge_at_night",
    "house",
    "house_with_garden",
    "office",
    "department_store",
    "factory",
    "post_office",
    "european_post_office",
    "hospital",
    "bank",
    "hotel",
    "love_hotel",
    "wedding",
    "church",
    "convenience_store",
    "school",
    "cn",
    "fr",
    "de",
    "it",
    "jp",
    "kr",
    "ru",
    "es",
    "gb",
    "us",
    "watch",
    "iphone",
    "calling",
    "computer",
    "alarm_clock",
    "hourglass_flowing_sand",
    "hourglass",
    "camera",
    "video_camera",
    "movie_camera",
    "tv",
    "radio",
    "pager",
    "telephone_receiver",
    "phone",
    "fax",
    "minidisc",
    "floppy_disk",
    "cd",
    "dvd",
    "vhs",
    "battery",
    "electric_plug",
    "bulb",
    "flashlight",
    "satellite",
    "credit_card",
    "money_with_wings",
    "moneybag",
    "gem",
    "closed_umbrella",
    "pouch",
    "purse",
    "handbag",
    "briefcase",
    "school_satchel",
    "lipstick",
    "eyeglasses",
    "womans_hat",
    "sandal",
    "high_heel",
    "boot",
    "mans_shoe",
    "athletic_shoe",
    "bikini",
    "dress",
    "kimono",
    "womans_clothes",
    "shirt",
    "necktie",
    "jeans",
    "door",
    "shower",
    "bathtub",
    "toilet",
    "barber",
    "syringe",
    "pill",
    "microscope",
    "telescope",
    "crystal_ball",
    "wrench",
    "hocho",
    "nut_and_bolt",
    "hammer",
    "bomb",
    "smoking",
    "gun",
    "bookmark",
    "newspaper",
    "key",
    "email",
    "envelope_with_arrow",
    "incoming_envelope",
    "e-mail",
    "inbox_tray",
    "outbox_tray",
    "package",
    "postal_horn",
    "postbox",
    "mailbox_closed",
    "mailbox",
    "mailbox_with_mail",
    "mailbox_with_no_mail",
    "page_facing_up",
    "page_with_curl",
    "bookmark_tabs",
    "chart_with_upwards_trend",
    "chart_with_downwards_trend",
    "bar_chart",
    "date",
    "calendar",
    "low_brightness",
    "high_brightness",
    "scroll",
    "clipboard",
    "book",
    "notebook",
    "notebook_with_decorative_cover",
    "ledger",
    "closed_book",
    "green_book",
    "blue_book",
    "orange_book",
    "books",
    "card_index",
    "link",
    "paperclip",
    "pushpin",
    "scissors",
    "triangular_ruler",
    "round_pushpin",
    "straight_ruler",
    "triangular_flag_on_post",
    "file_folder",
    "open_file_folder",
    "black_nib",
    "pencil2",
    "memo",
    "lock_with_ink_pen",
    "closed_lock_with_key",
    "lock",
    "unlock",
    "mega",
    "loudspeaker",
    "speaker",
    "sound",
    "loud_sound",
    "mute",
    "zzz",
    "bell",
    "no_bell",
    "thought_balloon",
    "speech_balloon",
    "children_crossing",
    "mag",
    "mag_right",
    "no_entry_sign",
    "no_entry",
    "name_badge",
    "no_pedestrians",
    "do_not_litter",
    "no_bicycles",
    "non-potable_water",
    "no_mobile_phones",
    "underage",
    "accept",
    "ideograph_advantage",
    "white_flower",
    "secret",
    "congratulations",
    "u5408",
    "u6e80",
    "u7981",
    "u6709",
    "u7121",
    "u7533",
    "u55b6",
    "u6708",
    "u5272",
    "u7a7a",
    "sa",
    "koko",
    "u6307",
    "chart",
    "sparkle",
    "eight_spoked_asterisk",
    "negative_squared_cross_mark",
    "white_check_mark",
    "eight_pointed_black_star",
    "vibration_mode",
    "mobile_phone_off",
    "vs",
    "a",
    "b",
    "ab",
    "cl",
    "o2",
    "sos",
    "id",
    "parking",
    "wc",
    "cool",
    "free",
    "new",
    "ng",
    "ok",
    "up",
    "atm",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpius",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
    "restroom",
    "mens",
    "womens",
    "baby_symbol",
    "wheelchair",
    "potable_water",
    "no_smoking",
    "put_litter_in_its_place",
    "arrow_forward",
    "arrow_backward",
    "arrow_up_small",
    "arrow_down_small",
    "fast_forward",
    "rewind",
    "arrow_double_up",
    "arrow_double_down",
    "arrow_right",
    "arrow_left",
    "arrow_up",
    "arrow_down",
    "arrow_upper_right",
    "arrow_lower_right",
    "arrow_lower_left",
    "arrow_upper_left",
    "arrow_up_down",
    "left_right_arrow",
    "arrows_counterclockwise",
    "arrow_right_hook",
    "leftwards_arrow_with_hook",
    "arrow_heading_up",
    "arrow_heading_down",
    "twisted_rightwards_arrows",
    "repeat",
    "repeat_one",
    "hash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "keycap_ten",
    "1234",
    "abc",
    "abcd",
    "capital_abcd",
    "information_source",
    "signal_strength",
    "cinema",
    "symbols",
    "heavy_plus_sign",
    "heavy_minus_sign",
    "wavy_dash",
    "heavy_division_sign",
    "heavy_multiplication_x",
    "heavy_check_mark",
    "arrows_clockwise",
    "tm",
    "copyright",
    "registered",
    "currency_exchange",
    "heavy_dollar_sign",
    "curly_loop",
    "loop",
    "part_alternation_mark",
    "exclamation",
    "question",
    "grey_exclamation",
    "grey_question",
    "bangbang",
    "interrobang",
    "x",
    "o",
    "100",
    "end",
    "back",
    "on",
    "top",
    "soon",
    "cyclone",
    "m",
    "ophiuchus",
    "six_pointed_star",
    "beginner",
    "trident",
    "warning",
    "hotsprings",
    "recycle",
    "anger",
    "diamond_shape_with_a_dot_inside",
    "spades",
    "hearts",
    "clubs",
    "diamonds",
    "ballot_box_with_check",
    "white_circle",
    "black_circle",
    "radio_button",
    "red_circle",
    "large_blue_circle",
    "small_red_triangle",
    "small_red_triangle_down",
    "small_orange_diamond",
    "small_blue_diamond",
    "large_orange_diamond",
    "large_blue_diamond",
    "black_small_square",
    "white_small_square",
    "black_large_square",
    "white_large_square",
    "black_medium_square",
    "white_medium_square",
    "black_medium_small_square",
    "white_medium_small_square",
    "black_square_button",
    "white_square_button",
    "clock1",
    "clock130",
    "clock2",
    "clock230",
    "clock3",
    "clock330",
    "clock4",
    "clock430",
    "clock5",
    "clock530",
    "clock6",
    "clock630",
    "clock7",
    "clock730",
    "clock8",
    "clock830",
    "clock9",
    "clock930",
    "clock10",
    "clock1030",
    "clock11",
    "clock1130",
    "clock12",
    "clock1230",
    "octocat",
    "shipit",
    "bowtie",
    "neckbeard",
    "metal",
    "fu",
    "trollface",
    "godmode",
    "goberserk",
    "finnadie",
    "feelsgood",
    "rage1",
    "rage2",
    "rage3",
    "rage4",
    "suspect",
    "hurtrealbad"
  ]
}

},{}],2:[function(require,module,exports){
module.exports = require("./emojis.json")

},{"./emojis.json":1}],3:[function(require,module,exports){
/* eslint-disable no-unused-vars */
'use strict';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],4:[function(require,module,exports){
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

},{"emojilib":2,"object-assign":3}]},{},[4])(4)
});
//# sourceMappingURL=emoji.js.map
