// "TODOを追加する" ボタンの処理を追加する
document
  .getElementById("add_todo_btn")
  .addEventListener("click", showTodoInputarea);

// "取消" ボタンの処理を追加する
document
  .getElementById("delete_todo_inputarea_btn")
  .addEventListener("click", hiddenTodoInputarea);

// "決定" ボタンの処理を追加する
document
  .getElementById("decision_todo_inputarea_btn")
  .addEventListener("click", addTodo);

// 既存のTODOリストの"削除" ボタンの処理を追加する
for (const el of document.getElementsByTagName("li")) {
  if (el.getElementsByTagName("button")[0].className === "delete")
    el.getElementsByClassName("delete")[0].addEventListener(
      "click",
      deleteTodo
    );
}
