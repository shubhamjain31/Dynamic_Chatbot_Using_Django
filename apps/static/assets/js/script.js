let botTrigger = document.getElementById("botTrigger");
let botOuterDiv = document.getElementsByClassName("botOuterDiv")[0];
let botInputBoxSubmit = document.getElementsByClassName("botInputBoxSubmit")[0];
let botInputBoxField = document.getElementsByClassName("botInputBoxField")[0];
let botmessageFeed = document.getElementsByClassName("botmessageFeed")[0];
botTrigger.addEventListener("click",()=>{
    botOuterDiv.classList.toggle("botOuterDivToggle");
})

botInputBoxSubmit.addEventListener("click",()=>{
    alert(botInputBoxField.innerHTML,botInputBoxField.text);
    let botChatElement = document.createElement("span");
    botChatElement.classList = "botChat";
    botChatElement.textContent = "Hello";
    botmessageFeed.append(botChatElement);
})