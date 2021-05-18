//Examine the document object
//  console.dir(document);
// console.log(document.URL);
//Changing the properties
// document.title= "Changed";
// console.log(document.title);
// console.log(document.all);
// console.log(document.all[15]);
// document.all[15].innerText="Hello";

//GetElementById
// let headerTitle = document.getElementById('hdr');
// headerTitle.style.color="blue";
// headerTitle.textContent="Hello";
// headerTitle.innerText ='Hlo';
// headerTitle.innerHTML="<p>Hello</p>";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.style.border="2px solid red";

//GetElementsByClassName
// let item =document.getElementsByClassName('list-style-line');
// item[2].textContent="Hello World";
// for(let i=0;i<item.length;i++){
//     item[i].style.color='blue';
// }

//GetElementByTagName
// let li= document.getElementsByTagName('li');
// li[1].style.backgroundColor="pink";
// li[1].textContent="Hello World";
// console.log(li);
// // console.log(li[2].textContent);
// for(let i=0;i<=li.length;i++){
//     console.log(li[i].innerText);
// }

//Query Selector
// let qrySelect= document.querySelector('#hdr');
// qrySelect.style.color='#faa';
// console.log(qrySelect.innerText);

//QuerySelector All
// let qryLi = document.querySelectorAll('.list-style-line');
// console.log(qryLi);
// qryLi[2].style.backgroundColor="#faf";
// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="#9f9f9f";
//     even[i].style.backgroundColor="#9bffab";
// }

// const itemList = document.getElementById('item');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ="#ffa";

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.parentElement.style.backgroundColor ="#aaa";
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);
//text is whitespaces in the list.
//Includes whiteSpaces.

//children
// console.log(itemList.children[1]);
// itemList.children[1].style.color="#2ad";

//firstChild
// console.log(itemList.firstChild);
//Includes whiteSpaces

//firstElementChild
// console.log(itemList.firstElementChild);
//not Includes whiteSpaces

//lastChild
// console.log(itemList.lastChild);
//Includes whiteSpaces

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.borderColor="#22a";

//nextSibiling
// console.log(itemList.nextSibling);
//include WhiteSpaces

//nextElementSibiling
// console.log(itemList.nextElementSibling);

//previousSibiling
// console.log(itemList.previousSibling);
//includes whiteSpaces

//previousElementSibiling
// console.log(itemList.previousElementSibling);

//create div
// let newDiv = document.createElement('div');
// console.log(newDiv);
//adding className
// newDiv.className="hlo";
//adding id
// newDiv.id="hello";
//setting attribute
// newDiv.setAttribute('title', 'Hello-Div');
//adding text
// newDiv.textContent= "Hello World";
//create text Node
// let newDivText = document.createTextNode("I'm textNode");
// newDiv.appendChild(newDivText);

// let main = document.querySelector('.main');
// let h2 = document.querySelector('.main h2');

// main.insertBefore(newDiv,h2);
// console.log(newDiv);

//append and appendChild
// let header2 = document.querySelector('.main h2');
// const txt = document.createTextNode('World');
// const appendsChild = header2.appendChild(txt); 
// const appends=header2.append('hello','two','three');
// console.log(appends);//does not return==undefined//accepts NodeObjects and DOMString.//allows multiple items to add.
// console.log(appendsChild);//returns a value//accepts only NodeObjects.//allows only single item.

//Event Listener
// const button = document.querySelector('.btn');

// button.addEventListener('click',function(){
//     console.log("Hello World");
// })
// let button1 = document.querySelector('.btn1').addEventListener('click',change);
// function clicked(){
//     console.log('Clicked');
// }
// const secDiv= document.createElement('div');
// console.log(secDiv);
// secDiv.id="output";
// secDiv.textContent = "Hello";
// var txt1 = document.createTextNode("World");
// secDiv.appendChild(txt1);
// const itsm = document.querySelector('.items');
// const items=itsm.appendChild(secDiv);
// const item = document.getElementById('item').addEventListener('click',function(){
//     console.log('Hovered');
// });
// itsm.addEventListener('mouseover',
// function(e){
//     items.innerHTML = '<h4>'+e.target.id+'</h4>';
//     console.log(e);
//     console.log(e.target);
// });

// function change(e){
//     // document.getElementById('item').style.backgroundColor="#f0f";
//     // const title= document.querySelector('.title');
//     // title.textContent= "Changed!!";
//     // title.style.fontFamily="cursive";
//     console.log(e.target);
//     console.log(e.target.className);
// }

// const btm= document.querySelector('.btn');
// const itmes = document.querySelector('.title');
// console.log(btm);
// btm.addEventListener('click',function(e){
//     console.log(e);
//     itmes.innerHTML = '<h4>'+e.target.baseURI+'</h4>'
//     itmes.style.backgroundColor = 'blue';
// });

// const input1= document.querySelector('form [type=text]');
// console.log(input1);
// input1.addEventListener('change',function(e){
//     console.log(e);
// })

//A Small Project
const form = document.querySelector('form');
const itemList = document.querySelector('#item');
const filters = document.querySelector('#filters');
// form submit event (addItem)
form.addEventListener('submit',addItem);
//delete or remove Items 
itemList.addEventListener('click',removeItem);
filters.addEventListener('keydown',searchItem);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input Value
    const newItem = document.querySelector('form [type=text]').value;

    //create list
    const newList = document.createElement('li');
    newList.className = "list-style-line";

    //Add textNode with input value;
    //Three ways;
    // listText = document.createTextNode('newItem');
    //newList.appendChild(listText);
    // newList.textContent = newItem;
    newList.appendChild(document.createTextNode(newItem));

    //Add newlist to list
    itemList.appendChild(newList);
    
    //Add del button 
    const newBtn = document.createElement('button');
    newBtn.className = 'del';
    const styleBtn ={
        backgroundColor:"rgb(241, 34, 34)",
        padding:'4px',
        border:"none",
        marginLeft:'150px'
    }
    // newBtn.style.backgroundColor="rgb(241, 34, 34)";
    for(let i in styleBtn){
        newBtn.style[i] = styleBtn[i];
    }
    newBtn.appendChild(document.createTextNode('X'));
    newList.appendChild(newBtn);

    //Value not entered
        if(newItem === ''){
            newList.style.display = "none";
        }
}

//Remove Item
function removeItem(e){
   if(e.target.classList.contains('del')){
      const newLi= e.target.parentElement;
        itemList.removeChild(newLi);
    }
}

// Search or Filters items
function searchItem(e){
  const text = e.target.value.toLowerCase();
  //Get li's
  const itemsList= document.getElementsByTagName('li');

    //Convert into Array
    Array.from(itemsList).forEach(function(item) {
          const itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display ="block";
            }else{
                item.style.display ="none";
            }
    });
}