// Node.jsとExpressを使ってログイン機能、登録、占い結果保存APIを適用するサーバー

// Node.js のサーバーフレームワークで、APIやルートを簡単に作れる
const express = require('express');
// パスワードを安全に暗号化・比較するために使う
const bcrypt = require('bcryptjs');
// ログイン認証用のトークン（JWT）を作成・検証する
const jwt = require('jsonwebtoken');
// POST リクエストで送られてくる JSON データを読み取るために必要
const bodyParser = require('body-parser');
// フロント（localhost:5500など）からのアクセスを許可する
const cors = require('cors');

// Express のアプリケーションを作成
// app でルートやAPIを定義する
const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

// フロントとの通信許可

// CORS を有効化
// 異なるオリジン（フロントのファイル）から API にアクセス可能にする
app.use(cors());

// POST で送られてくる JSON データを自動でパースして req.body に格納
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello, Node!'));
app.listen(3000, () => console.log('Server running on http://localhost:3000'));