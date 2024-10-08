import "./style.css";
const onClickadd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = "";
  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
  const li = document.createElement('li');
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;
  
  const completeButton = document.createElement("button");
  completeButton.innerText = '完了';
  completeButton.addEventListener('click',() => {
    const completeTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click',() => {
      createIncompleteTodo(p.innerText);
      backButton.closest("li").remove();
    });

    completeTarget.firstElementChild.appendChild(backButton);
    document.getElementById('complete-list').appendChild(completeTarget);

  });
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click',() => {
    deleteButton.closest("li").remove();
  });
  
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById('incomplete-list').appendChild(li);
};

const add_button = document.getElementById('add-button');
add_button.addEventListener('click',onClickadd);

