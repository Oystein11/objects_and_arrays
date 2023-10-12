//HTML kobling
const emoji_list = document.querySelector ("#emoji_list_ID");
const dog_emoji_list = document.querySelector ("#dog_emoji_list_ID");

//Emoji-ressurs
const emojis = {
  cat_emojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
  dog_emojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
};
console.log (emojis);

//Funksjon
function display_emojis() {
    for (a = 0; a < emojis.cat_emojis.length; a++) {
        let li_emotes = document.createElement ("li");
        li_emotes.innerText = emojis.cat_emojis[a];
        
        li_emotes.addEventListener ("click", () => {
        navigator.clipboard.writeText(li_emotes.innerText);
        alert ("Du la  " + li_emotes.innerText + "-emojien til utklippstavlen din.");
        console.log ("Du la  " + li_emotes.innerText + "emojien til utklippstavlen din.");
    });
    emoji_list.appendChild(li_emotes);
  };
};