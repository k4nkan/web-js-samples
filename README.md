# Samples

HTML・CSSで作ったページに、Vanilla JavaScriptを少し追加するサンプル集です。

## 使い方

コード表示は `fetch()` で各ファイルを読むため、ローカルサーバーで開きます。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開きます。

## 方針

- ライブラリなし
- `index.html` / `style.css` / `script.js` を分離する
- 各ページ下部にHTML・CSS・JSのコードとCopyボタンを置く
- UI編、計算編、API編、DB編に分ける
- まず簡単な実装で数を増やす
- テンプレートから小さい変更で作れる題材に絞る
- GitHub Pagesではリポジトリ直下を公開するだけで動く

## 構成

```text
.
├── index.html
├── assets/
│   ├── sample-layout.css
│   ├── home.css
│   ├── sample-common.css
│   └── copy-code.js
└── samples/
    ├── ui-01-fade-in/
    ├── calc-01-basic/
    ├── api-01-weather/
    └── db-01-like-count/
```

## サンプル一覧

| 区分 | サンプル | 主な内容 |
| --- | --- | --- |
| UI | フェードイン | `IntersectionObserver` |
| UI | モーダル | `dialog.showModal()` |
| UI | タブ切り替え | `hidden` の切り替え |
| UI | アコーディオン | クラスの付け外し |
| UI | リスト絞り込み | `input` イベント |
| UI | トースト | `setTimeout` |
| UI | カウンター | 変数と再描画 |
| UI | 文字数カウント | `value.length` |
| UI | カーソル | `mousemove` |
| UI | 背景グラデーション | クラスの付け替え |
| UI | クリックで背景変更 | `style.backgroundColor` |
| UI | テキストコピー | Clipboard API |
| UI | スクロール進捗 | `scrollY` |
| UI | パスワード表示切替 | `input.type` |
| 四則演算 | 基本計算 | 数値変換と条件分岐 |
| 四則演算 | 税込計算 | 掛け算と丸め |
| 四則演算 | 割り勘計算 | 割り算と端数処理 |
| 四則演算 | 平均点 | 配列と合計 |
| 四則演算 | 割合計算 | 掛け算 |
| 四則演算 | BMI | 割り算 |
| 四則演算 | 単位変換 | 割り算 |
| 四則演算 | 割引計算 | 掛け算 |
| API | 天気カード | Open-Meteo |
| API | 本検索 | Open Library |
| API | 犬画像 | Dog API |
| API | 英単語辞書 | Free Dictionary API |
| API | 為替レート | Frankfurter |
| API | GitHubユーザー | GitHub API |
| API | 郵便番号 | ZipCloud |
| API | QRコード | QR Server |
| API | 祝日リスト | Holidays JP |
| DB | いいね数 | `getLikes()` / `patchLike()` |
| DB | 閲覧者数 | `getViews()` / `patchView()` |
