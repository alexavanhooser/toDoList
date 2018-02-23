//----------------------ITEMS LEFT TO ADD-----------------------------
// Todo Item (Checkbox): When a user checks this you should add some kind of class to the list item that strikes through the text and makes the text lighter.
  //Don’t allow it to be edited if the box is checked (So hide the edit button).

// Todo Item (Edit Button): This button will take the text of the Todo item and put it into a textbox, allowing ourselves to edit it then turn it back into plain text when you hit enter.
//So if you think about it, you’re creating an input element, with an event listener listening for when the user hit the enter key. (Do some google'ing).

// Todo Item (Delete Button): Fairly simple, remove the entire List Item this button is within.
//How can you target the parent element of the button? The user should be prompted if they are sure they want to delete the Todo before you actually delete it.
//--------------------------------------------------------------------------------




//creating UL for user items
let list = document.createElement("ul"),
  userInput = document.getElementsByClassName("itemInput")[0],
  submitBtn = document.getElementById('submit');

list.classList.add('list');

//input field
// Input Field: The input field where the user will type in what they want to do.

//This field should be cleared when its text is added to the list of things Todo.
submitBtn.addEventListener("click", clearText && newItem);

function clearText() {
    userInput.value = '';
}
 //.length -1

// Add Todo Button: This is the button that will call our function to add a new Todo to the list.
//The logic behind this function is to dynamically create a new Todo Item list item element.
function newItem () {
      let userItem = document.getElementsByClassName("itemInput");
      let li = document.createElement('li');
      li.innerHTML = userItem[0].value + " "; // or you can try this
      document.body.appendChild(li);
      let iconTag = document.createElement('i');
      iconTag.setAttribute('class', "fa fa-trash fa-1x");
      iconTag.setAttribute('aria-hidden', "true");
      li.appendChild(iconTag);
      console.log(li);
      iconTag.addEventListener('click', function() { //This format makes it easier to addEvent listeners to the icons like this! << // Execute whatever you need to do depending on icon -
          document.body.removeChild(li);//for example we used trash can here, meaning delete, process delete here.
      });
      clearText();
}
