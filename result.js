(function () {
  "use strict";
  const name_output = document.getElementById("name_output");

  function $name_output() {
    // URLのパラメータを取得する関数
    const params = new URLSearchParams(window.location.search);
    // パラメータからnameを取得
    const name = params.get("name");

    // HTMLで表示する
    name_output.textContent = `${name}さんの運勢`;
  }
  window.addEventListener("DOMContentLoaded", function () {
    $name_output();
  });
})();
// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する
