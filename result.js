document.addEventListener("DOMContantLoaded", function()){
    
    // URLのパラメータを取得する関数
    const params = new URLSearchParams(window.location.search);
    // パラメータからnameを取得
    const name = params.get("name");
};

// URLで遷移するときは, URLにパラメータをつけて遷移する方法しかない
// そのためparamsを使ってURLのパラメータを取得する