(function () {
  "use strict";

  // DOM要素を取得
  const nameOutput = document.getElementById("nameOutput");
  const titleOutput = document.getElementById("titleOutput");
  const unseiOutput = document.getElementById("unseiOutput");
  const unseiTxt = document.getElementById("unseiTxt");
  const shosaiOutput = document.getElementById("shosaiOutput");

  // 日付取得
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDay = today.getDate();

  // URLのパラメータを取得する関数
  const params = new URLSearchParams(window.location.search);
  let name = params.get("name"); // パラメータからnameを取得
  let year = parseInt(params.get("year"));
  let month = parseInt(params.get("month"));
  let day = parseInt(params.get("day"));
  let todayInfo =
    today.getFullYear() + todayMonth + todayDay + year + month + day;

  //関数定義
  function $nameOutput() {
    // HTMLで表示する
    nameOutput.textContent += `${name}さんの運勢\n`;
    //name_output.textContent += `${year}年${month}月${day}日生まれ`;
  }

  function $titleOutput() {
    titleOutput.textContent = `${todayMonth}月${todayDay}日の結果\n`;
  }

  function $unseiOutput() {
    if ((todayInfo + year + month + day) % 3 === 0) {
      unseiOutput.textContent = `大大大吉`;
    } else if ((todayInfo + year + month + day) % 3 === 1) {
      unseiOutput.textContent = `大大吉`;
    } else if ((todayInfo + year + month + day) % 3 === 2) {
      unseiOutput.textContent = `大吉`;
    }
  }

  function $unseiTxt() {
    // 非同期でテキストファイルを読み込む
    fetch("unsei.txt")
      //成功したらresponseを受け取り, テキストとして取得する
      .then((response) => response.text())
      // テキストを取得したら次の処理を行う
      .then((text) => {
        // テキストを改行で分割して配列に変換
        // filter: 配列から条件に合う要素を抽出
        const text1 = "今日はとても幸せなことが起こりそうな予感！";
        const item = ["パソコン", "ぬいぐるみ", "ペン", "タンブラー"];

        const fortunes = text.split("\n").filter((line) => line.trim() !== ""); // 空行を除外
        const itemIdx = todayInfo % item.length;
        const luckyItem = item[itemIdx];
        const replaceItem = text.replace("{luckyItem}", luckyItem);

        console.log("itemIdx: ", itemIdx);
        let a = Math.floor(Math.random() * fortunes.length);
        console.log("数値: ", a);
        // Math.floor(): 小数点以下を切り捨てて整数に変換
        // Math.random(): 0以上1未満のランダムな数値を生成
        const fortune = fortunes[a];
        console.log(fortune); //占い文章

        unseiTxt.textContent = text1 + replaceItem;
      })
      // エラーが発生した場合の処理
      .catch((err) =>
        console.error("運勢の文章を読み込む際にエラーが発生しました: ", err)
      );
  }

  function $shosaiOutput() {
    let i;
    const text1 = "総合運";
    const sogoIdx = (todayInfo % 2) + 4;
    let star = "";

    for (i = 0; i < sogoIdx; ++i) {
      star += "★";
    }
    for (i = 0; i < 5 - sogoIdx; ++i) {
      star += "☆";
    }
    try {
      shosaiOutput.textContent = text1 + star;
    } catch (error) {
      console.error("総合運の出力中にエラーが発生しました", error);
    }
  }

  // ページ読み込み後に実行
  window.addEventListener("DOMContentLoaded", function () {
    $nameOutput();
    $titleOutput();
    $unseiOutput();
    $unseiTxt();
    $shosaiOutput();
  });
})();
// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する
