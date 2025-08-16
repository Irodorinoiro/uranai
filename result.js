let today = new Date();
let today_month = today.getMonth() + 1;
let today_day = today.getDate();
let today_info = today.getFullYear() + today_month + today_day;

// URLのパラメータを取得する関数
const params = new URLSearchParams(window.location.search);
// パラメータからnameを取得
let name = params.get("name");
let year = parseInt(params.get("year"));
let month = parseInt(params.get("month"));
let day = parseInt( params.get("day"));

(function () {
  "use strict";
  const name_output = document.getElementById("name_output");
  const title_output = document.getElementById("title_output");
  const unsei_output = document.getElementById("unsei_output");


  function $name_output() {
    // HTMLで表示する
    name_output.textContent += `${name}さんの運勢\n`;
    //name_output.textContent += `${year}年${month}月${day}日生まれ`;
  }

  function $title_output(){
    title_output.textContent = `${today_month}月${today_day}日の結果\n`;
  }

  function $unsei_output(){
    if ((today_info + year + month + day) % 3 === 0){
      unsei_output.textContent = `大大大吉`;
    }
    else if ((today_info + year + month + day) % 3 === 1){
      unsei_output.textContent = `大大吉`;
    }
    else if ((today_info + year + month + day) % 3 === 2){
      unsei_output.textContent = `大吉`;
    }
}

  window.addEventListener("DOMContentLoaded", function () {
    $name_output();
    $title_output();
    $unsei_output();
  });
})();
// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する
// 型宣言は, constかletを使え
