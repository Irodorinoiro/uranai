(function () {
  "use strict";
  const select_year = document.getElementById("select_year");
  const select_month = document.getElementById("select_month");
  const select_day = document.getElementById("select_day");
  const year = new Date().getFullYear();
  let i;

  function $set_year() {
    //年_生成
    for (i = 2025; i >= 1900; --i) {
      let op = document.createElement("option");
      op.value = i;
      //op.text = i;
      // 元号を追加
      let label = `${i}`;
      if (i === 2019){ 
        label += " (令和元) ";
      }
      else if(i > 2019){
        label += ` (令和${i - 2018}) `
      }
      else if (i === 1989){

      }
      op.textContent = label;
      select_year.appendChild(op);
    }
  }
  function $set_month() {
    //月_生成
    for (i = 1; i <= 12; ++i) {

      // <option></option>をつくる
      let op = document.createElement("option");
      // ユーザーがこの選択肢を選ぶと、送信されるもの
      op.value = i;
      // ユーザーに見える部分
      op.text = i;
      // select_monthに追加
      select_month.appendChild(op);
    }
  }

  function $set_day() {
    // 日の選択肢を空にする
    let children = select_day.children;
    while (children.length) {
      children[0].remove();
    }

    // 日を生成（動的に変える）
    if (select_year.value !== "" && select_month.value !== "") {
      const last_day = new Date(
        select_year.value,
        select_month.value,
        0
      ).getDate();

      for (i = 1; i <= last_day; ++i) {
        let op = document.createElement("option");
        op.value = i;
        op.text = i;
        select_day.appendChild(op);
      }
    }
  }

  // load時，年月変更時に実行する
  window.onload = function () {
    $set_year();
    $set_month();
    $set_day();
    select_year.addEventListener("change", $set_day);
    select_month.addEventListener("change", $set_day);
  };
})();
