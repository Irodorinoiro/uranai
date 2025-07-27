(function () {
  "use strict";
  const info_output = document.getElementById("info_output");

  function $info_output() {
    // URLのパラメータを取得する関数
    const params = new URLSearchParams(window.location.search);
    // パラメータからnameを取得
    const name = params.get("name");
    const year = params.get("year");
    const month = params.get("month");
    const day = params.get("day");

    // HTMLで表示する
    info_output.textContent = `${name}さんの運勢`;
    info_output.textContent += `${year}年${month}月${day}日生まれ`;
    
  }
  window.addEventListener("DOMContentLoaded", function () {
    $info_output();
  });
})();
// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する
