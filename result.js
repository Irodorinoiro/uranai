(function () {
  "use strict";

  // DOM要素を取得
  const name_output = document.getElementById("name_output");
  const title_output = document.getElementById("title_output");
  const unsei_output = document.getElementById("unsei_output");
  const unsei_txt = document.getElementById("unsei_txt");

  // 日付取得
  let today = new Date();
  let today_month = today.getMonth() + 1;
  let today_day = today.getDate();
  let today_info = today.getFullYear() + today_month + today_day;

  // URLのパラメータを取得する関数
  const params = new URLSearchParams(window.location.search);
  let name = params.get("name"); // パラメータからnameを取得
  let year = parseInt(params.get("year"));
  let month = parseInt(params.get("month"));
  let day = parseInt(params.get("day"));

  //関数定義
  function $name_output() {
    // HTMLで表示する
    name_output.textContent += `${name}さんの運勢\n`;
    //name_output.textContent += `${year}年${month}月${day}日生まれ`;
  }

  function $title_output() {
    title_output.textContent = `${today_month}月${today_day}日の結果\n`;
  }

  function $unsei_output() {
    if ((today_info + year + month + day) % 3 === 0) {
      unsei_output.textContent = `大大大吉`;
    } else if ((today_info + year + month + day) % 3 === 1) {
      unsei_output.textContent = `大大吉`;
    } else if ((today_info + year + month + day) % 3 === 2) {
      unsei_output.textContent = `大吉`;
    }
  }

  function $unsei_txt() {
    // 非同期でテキストファイルを読み込む
    fetch("unsei.txt")
      //成功したらresponseを受け取り, テキストとして取得する
      .then((response) => response.text())
      // テキストを取得したら次の処理を行う
      .then((text) => {
        // テキストを改行で分割して配列に変換
        // filter: 配列から条件に合う要素を抽出
        const fortunes = text.split("\n").filter((line) => line.trim() !== ""); // 空行を除外
        console.log(fortunes);
        let a = Math.floor(Math.random() * fortunes.length);
        console.log("数値: ", a);
        // Math.floor(): 小数点以下を切り捨てて整数に変換
        // Math.random(): 0以上1未満のランダムな数値を生成
        const fortune = fortunes[a];
        console.log(fortune); //占い文章

        unsei_txt.textContent = fortune;
      })
      // エラーが発生した場合の処理
      .catch((err) => console.error("読み込みエラー", err));
  }

  // ページ読み込み後に実行
  window.addEventListener("DOMContentLoaded", function () {
    $name_output();
    $title_output();
    $unsei_output();
    $unsei_txt();
  });
})();
// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する
// 型宣言は, constかletを使え
