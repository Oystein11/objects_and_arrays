//HTML kobling
const cat_list = document.querySelector("#cat_list_ID");

//Emoji-ressurs
const emojis = {
  catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
  dogEmojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
};

function renderEmojis() {
  for (i = 0; i < emojis.catEmojis.length; i++) {
    let newLiElement = document.createElement("li");
    newLiElement.innerText = emojis.catEmojis[i];
    newLiElement.addEventListener("click", () => {
      navigator.clipboard.writeText(newLiElement.innerText);
      alert(newLiElement.innerText + " is now on your clipboard ");
      console.log(newLiElement.innerText);
    });
    cat_list.appendChild(newLiElement);
  }
}