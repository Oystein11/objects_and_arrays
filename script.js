//HTML kobling
const displayer = document.querySelector ("pictureID");
console.log (displayer);

const cat_button = document.querySelector ("#catID");
console.log (cat_button);

const all_button = document.querySelector ("#allID");
console.log (all_button);

// Emoji-ressurs
const emojis = {
    catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
    dogEmojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
    };
console.log (emojis);

//Display-variabel
let display = 0;

//Cat-button
function generate_cat () {
 display > emojis.catEmojis, 1++;
};

//All-button
function generate_all () {

};