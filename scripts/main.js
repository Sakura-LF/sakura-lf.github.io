// 用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中
// let myHeading = document.querySelector('h1');
// // 把 myHeading 变量的属性 textContent （标题内容）修改为“Hello world!”
// myHeading.textContent = 'Hello world!';

// let myVariable ;
// myVariable = "sakura"
// myVariable = "LF"
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }
//   multiply(4, 7);

// // 点击事件
//   document.querySelector('img').onclick = function() {
//     alert('别戳我，我怕疼。');
// }


// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/1.jpg') {
//       myImage.setAttribute('src', 'images/2.jpg');
//     } else {
//       myImage.setAttribute('src', 'images/1.jpg');
//     }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
 