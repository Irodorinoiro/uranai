(function () {
  "use strict";
  const info_output = document.getElementById("info_output");

  function $info_output() {
    // URLのパラメータを取得する関数
    const params = new URLSearchParams(window.location.search);
    // パラメータからnameを取得
    const name = params.get("name");
    const year = parseInt(params.get("year"));
    const month = parseInt(params.get("month"));
    const day = parseInt( params.get("day"));

    let today = new Date();
    let today_month = today.getMonth();
    let today_day = today.getDate();
    let today_info = today.getFullYear() + today_month + today_day;
    // HTMLで表示する
    info_output.textContent = `${today_month}月${today_day}日の占い結果\n`;
    info_output.textContent += `${name}さんの運勢\n`;
    //info_output.textContent += `${year}年${month}月${day}日生まれ`;
  }
  window.addEventListener("DOMContentLoaded", function () {
    $info_output();
  });
})();
// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する
// 型宣言は, constかletを使え
