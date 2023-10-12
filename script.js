//HTML kobling
const cat_emoji_list = document.querySelector("#cat_emoji_list_ID");
const dog_emoji_list = document.querySelector("#dog_emote_list_ID")

//Emoji-ressurs
const emojis = {
  cat_emojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
  dog_emojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
};

function display_emojis() {
    for (a = 0; a < emojis.dog_emojis.length; a++) {
        let li_element_a = document.createElement("li");
        li_element_a.innerText = emojis.cat_emojis[a];
        li_element_a.addEventListener("click", () => {
        navigator.clipboard.writeText(li_element_a.innerText);
        console.log(li_element_a.innerText);
    });
    cat_emoji_list.appendChild(li_element_a);
  };
};