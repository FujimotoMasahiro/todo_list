// "TODOを追加するボタン" 押下時の処理
function showTodoInputarea() {
  // "TODO入力エリア" のエレメントを取得する
  const todo_input_area = document.getElementById("todo_input_area");

  // "TODO入力エリア" のエレメントが非表示の場合
  if (todo_input_area.style.display === "none") {
    // "TODO入力エリア" のエレメントを表示する
    todo_input_area.style.display = "";

    this.style.display = "none";
  }
}

// "取消ボタン" 押下時の処理
function hiddenTodoInputarea() {
  // "TODO入力エリア" のエレメントを取得する
  const todo_input_area = document.getElementById("todo_input_area");

  // "TODO入力エリア" のエレメントが非表示の場合
  if (todo_input_area.style.display === "") {

    // "TODO入力エリア" のエレメントを表示する
    todo_input_area.style.display = "none";

    document.getElementById("add_todo_btn").style.display = ""
  }
}

// "決定ボタン" 押下時の処理
function addTodo() {
  // チェックボックスのエレメントを作製する
  let input_checkbox_el = document.createElement("input");
  input_checkbox_el.setAttribute("type", "checkbox");

  // TODO情報のエレメントを作製する
  let span_el = document.createElement("span");
  const todo_input_form = document.getElementById("todo_input_form"); // "TODO入力フォーム" のエレメントを取得する
  span_el.appendChild(document.createTextNode(todo_input_form.value));
  todo_input_form.value = ""

  // "削除ボタン" のエレメントを作製する
  let delete_btn_el = document.createElement("button");
  delete_btn_el.classList.add("delete");
  delete_btn_el.appendChild(document.createTextNode("削除"));
  delete_btn_el.addEventListener("click", deleteTodo);

  // 追加するTODOのエレメントを作成する
  let li_el = document.createElement("li"); // li要素作成
  li_el.appendChild(input_checkbox_el);
  li_el.appendChild(span_el);
  li_el.appendChild(delete_btn_el);

  // TODOを一覧に追加する
  const todo_list_area_el = document.getElementById("todo_list_area"); // "TODO一覧表示エリア" のエレメントを取得する
  const todo_list_el = document.getElementsByTagName("li")
  const todo_area_first_task_el = todo_list_el[todo_list_el.length - 1];
  todo_list_area_el.insertBefore(li_el, todo_area_first_task_el);

  this.parentElement.style.display = "none";
  document.getElementById("add_todo_btn").style.display = ""
}

// "削除ボタン" 押下時の処理
function deleteTodo() {
  this.parentElement.remove();
}
