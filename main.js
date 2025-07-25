(function () {
  "use strict";
  const select_year = document.getElementById("select_year");
  const select_month = document.getElementById("select_month");
  const select_day = document.getElementById("select_day");
  const uranai_enter = document.getElementById("uranai_enter");
  //const year = new Date().getFullYear();
  let i;

  function $set_year() {
    //年_生成
    for (i = 2025; i >= 1900; --i) {
      let op = document.createElement("option");
      op.value = i;
      // 元号を追加
      let label = `${i}`;
      if (i === 2019) {
        label += " (令和元) ";
      } else if (i > 2019) {
        label += ` (令和${i - 2018}) `;
      } else if (i === 1989) {
        label += " (平成元) ";
      } else if (i > 1989) {
        label += ` (平成${i - 1988}) `;
      } else if (i === 1926) {
        label += " (昭和元) ";
      } else if (i > 1926) {
        label += ` (昭和${i - 1925}) `;
      } else if (i == 1912) {
        label += " (大正元) ";
      } else if (i > 1912) {
        label += ` (大正${i - 1911}) `;
      } else {
        label += ` (明治${i - 1867}) `;
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

  function $uranai_enter() {
    // document.addEventListener: HTML文書全体（= document）に対してイベントを設定する
    document.addEventListener("DOMContentLoaded", function () {
      // 以下は, ページの読み込みが完了してから実行される

      // HTML内の特定の要素（タグ）を、その id 属性を使って取得する
      const button = document.getElementById("uranai_enter");

      button.addEventListener("click", function () {
        // .value は、入力フォームに書かれている「現在の値（ユーザーが入力した文字など）」を取得・設定するためのプロパティ
        // trim()は、文字列の前後の空白を取り除くメソッド
        const name = document.getElementById("write_name").value.trim();

        if (name === ""){
          // ポップアップにアラートを表示
          alert("名前を入力してください");
        }
        else{
          window.location.href = `result.html?name = ${encodeURIComponent(name)}`
        }
      });
    });
  }

  // load時，年月変更時に実行する
  window.onload = function () {
    $set_year();
    $set_month();
    $set_day();
    $uranai_enter();
    select_year.addEventListener("change", $set_day);
    select_month.addEventListener("change", $set_day);
  };
})();
