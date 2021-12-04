// retrieving button from HTML Document
// var button=document.getElementsByTagName('button')[0];

const newTodoInput = document.querySelector('input');
const addTodoBtn = document.querySelector('button');
const todolist = document.querySelector('div.todos');

// Count for keeping the counting of items added
var count=0;

// addtodo for adding items in To-Do-List
function addtodo() {

// input_value will give us the input text given from user using query selector
var input_value = newTodoInput.value;

// New paragraph will be added in Div tag with key as atrribute and input text as innertext
var item=document.createElement('p');
item.innerText=input_value;
item.setAttribute("key",count);
todolist.append(item);

// Whenever user clicks on button, we will increase our count
count+=1;

// whenever user clicks on new para added => it should be removed from our HTML doc
item.addEventListener("click",function () {
    todolist.removeChild(item);
})

newTodoInput.value=""
}