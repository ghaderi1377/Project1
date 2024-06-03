"use strict";

// reverseString
function reverseString(event) {
  let newString = prompt("اعداد را با یک فاصله از هم وارد نمایید:");
  let mString = newString.split(" ");
  let n = mString.length;
  let rString = [];
  let i = 0;
  for (n; n >= i; n--) {
    rString.push(mString[n]);
  }
  alert("معکوس رشته شما برابر است با: " + rString);
}

// oddEven
function oddEven(event) {
  let newNum = prompt("عدد مورد نظر خود را وارد نمایید:");
  let num1 = parseInt(newNum);
  console.log(typeof num1);
  // if()
  while (1) {
    newNum = newNum % 2;
    if (newNum == 0) {
      alert(num1 + " زوج است.");
      return;
    } else if (newNum == 1) {
      alert(num1 + " فرد است.");
      return;
    }
  }
}

// primeNumber
function primeNumber(event) {
  let newNum2 = prompt("عدد مورد نظر خود را وارد نمایید:");
  let isPrime = true;
  if (newNum2 <= 1) {
    alert("توجه : لطفا اعداد بزرگتر از یک وارد نمایید.");
  }
  for (let i = 2; i < newNum2; i++) {
    if (newNum2 % i == 0) {
      alert(newNum2 + " اول نیست.");
      isPrime = false;
      return;
    }
  }
  if (isPrime) {
    alert(newNum2 + " اول است.");
  }
}

// gameNumbers
function gameNumbers(event) {
  let user = prompt("نام کاربری خود را وارد کنید: ");
  let winner = false;
  let passWinner = false;
  let luckyNumber;
  let toDoLock = document.getElementById("lock");
  let getData = JSON.parse(localStorage.getItem("usernames")) || [];
  let usernamesLength = getData.length;
  let y;
  for (let v = 0; v <= usernamesLength; v++) {
    if (user == getData[v]) {
      y = getData[v];
      passWinner = true;
    }
  }
  let x = Math.round(Math.random() * 10);
  if (x == 0) {
    x += 1;
  }
  console.log(x);
  function gameMode() {
    if (passWinner) {
      alert("خوش آمدید");
      toDoLock.classList.add("display-none");
    } else {
      for (let i = 5; i > 0; i--) {
        luckyNumber = prompt(
          "شانس های باقیمانده = " + i + "\nیک عدد بین 1 تا 10 وارد نمایید: "
        );
        if (luckyNumber == x) {
          alert("آفرییین درسته شما برنده شدید...");
          winner = true;
          toDoLock.classList.add("display-none");
          return;
        }
      }
    }
  }
  gameMode();
  if (winner) {
    getData.push(user);
    localStorage.setItem("usernames", JSON.stringify(getData));
  }
}

// To Do List
const addBtn = document.getElementById("add-btn");
const inputBox = document.getElementById("nTask");
const worksList = document.querySelector(".works-list");
const addBtnDiv = document.getElementById("add-btn-div");
let editTaskInput = document.querySelector(
  ".list-items div.editTask-input-section"
);
const editInput = document.getElementById("editTask");

inputBox.onkeyup = () => {
  let inpval = inputBox.value;
  if (inpval.trim() != 0) {
    addBtnDiv.classList.add("active-btn");
  } else {
    addBtnDiv.classList.remove("active-btn");
  }
};

addBtn.addEventListener("click", function () {
  let inputEnteredValue = inputBox.value;
  const newTask = JSON.parse(localStorage.getItem("tasks")) || [];
  newTask.push(inputEnteredValue);
  localStorage.setItem("tasks", JSON.stringify(newTask));
  showTasks();
});

let listArray;
showTasks();

function showTasks() {
  let newTask2 = localStorage.getItem("tasks");
  console.log(newTask2);
  if (newTask2 == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(newTask2);
  }

  let newTag = "";
  listArray.forEach((element, index) => {
    {
      console.log(element, index);
    }
    newTag += `<div class="list-items-section">
                <div class="list-items d-flex align-items-center relative">
                  <div class="list-item d-flex align-items-center ">
                    <input type="checkbox" />
                    <li class="item">${element}</li>
                    
                  </div>
                  <div class="edit d-flex align-items-center">
                    <i onclick="editTask(${index})" class="fa-solid fa-pen"></i>
                  </div>
                  <div class="delete d-flex align-items-center">
                    <i
                      onclick="deleteTask(${index})"
                      class="fa-regular fa-trash-can"
                    ></i>
                  </div>
                  <div class="editTask-input-section">
                      <input
                        id="editTask"
                        name="editTask"
                        type="text"
                      />
                      <div id="add-btn-editTask-div" class="active-btn">
                        <button onclick="editTaskComplated(${index})" id="add-btn-editTask">Edit</button>
                      </div>
                    </div>
                </div>
              </div>`;
  });

  worksList.innerHTML = newTag;
  inputBox.value = "";
  addBtnDiv.classList.remove("active-btn");

}
function deleteTask(index) {
  const newTask = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = newTask.filter((_, i) => i !== index);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  showTasks();
}
let tagEdit;
function editTask(element, index) {
  const newTask = JSON.parse(localStorage.getItem("tasks")) || [];

  const textEdit = newTask.filter((e, _) => e !== element)[element];
  console.log(textEdit);
  inputBox.value = textEdit;

  // showTasks();
}
