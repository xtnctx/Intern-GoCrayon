const text = document.querySelector('#tobechanged');

function changeText() {
    if (text.innerHTML !== "Hello") {
        text.innerHTML = "Hello"
    } else {
        text.innerHTML = "not yet changed"
    }
    
   }