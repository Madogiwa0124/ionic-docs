![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Ionic日本語ドキュメンテーション

Ionic v4+の公式ドキュメントを日本語に翻訳するためのレポジトリです。
コンテンツは[ionicframework.jp](http://ionicframework.jp/docs/)で公開しています。

## 構成
開発には、`npm5.8 +`と`Node8 +`をインストールした環境が必要です。

### ローカルプレビュー
```bash
$ npm run dev
```
立ち上げが完了すると、`localhost:3333/docs/` が自動的に立ち上がります。

なお、`/docs/api/` `/docs/cli/` `docs/native/` 以下はファイルの自動生成を行わないとアクセスすることができません。
ローカルでのアクセスが必要な場合は、先に以下のコマンドを実行してください。

```bash
$ npm run predocgen && npm run docgen
```

__なお、これによって生成したファイルは通常翻訳できません。__
以下のフォルダ以下のファイルは、ソースファイルのコメントアウトから自動生成するため、必ず置換翻訳するようにしてください。

- `src/content/api/`
- `src/content/cli/commands/`
- `src/content/native`

### 翻訳ファイル
#### 通常翻訳

翻訳を行うファイルは `src/content` 以下に格納されています。表示されるURLと、「フォルダ/ファイル名」は一致するようになっておりますので、ご参考ください。

`src/content/intro.md` -> `/docs/intro`

#### Editing Content

The content is written as Markdown and stored in `src/pages`. Each Markdown file corresponds to a route. For example, `src/pages/intro.md` contains the content for the route `/docs/intro`.

After you've made changes, you'll need to rebuild the pages:

```shell
npm run build-pages # Build once
npm run watch-pages # Build continuously
```

#### 置換翻訳
ソースファイルから自動生成されるドキュメントは上書き対応のため、置換翻訳するようにします。どのようなものかを知るために、まず以下の翻訳ファイルをご覧ください。
https://github.com/ionic-jp/ionic-docs/blob/master/translate/ja/components.json

`translate`のkeyが原文、valueが翻訳後となっています。こういったファイルを生成し、サーバ上で自動置換・コンパイルを行います。

作業手順は以下の通りです。

1. npmコマンドで翻訳ファイルを生成する
```bash
$ npm run trans:create ja 【ファイルパス】
```

例えばAPIのaction-sheet.md（`src/content/api/action-sheet.md`）を翻訳する場合、ファイルパスは`api/`以下となりますので


```bash
$ npm run trans:create ja api/action-sheet.md
```

とご入力ください。そうすると自動的に`translate/ja/api/action-sheet.json`が生成されます。その後、`translate`に、key-valueで原文-翻訳をご入力ください。一行ずつ翻訳いただきますようお願いいたします。

なお、翻訳を元ファイルに適用するには以下コマンドを実行ください。

```bash
$ npm run trans ja
```

### 表記揺れ対応
| 元表記 | 日本語表記 | 備考 |
|:---|:---|:---|
| Components |コンポーネント | 一般用語 |
| Function/Functions | 機能 | 一般用語 |
| Test | テスト | 一般用語 |
| Page/Pages | Page | Ionic v3の特定機能を指す場合 |
| Component/Components | Component | Angularの特定機能を指す場合。ただし、UIパーツを指す場合は「コンポーネント」と日本語表記。 |
| Service/Services | Service | Angularの特定機能を指す場合 |
| Pipe/Pipes | Pipe | Angularの特定機能を指す場合 |
| Provider/Providers | Provider | Angularの特定機能を指す場合 |
| Module/Modules | Module | Angularの特定機能を指す場合 |
| Lazy Loading | Lazy Loading | 一般用語 |


## 翻訳作業について
### コントリビューションのお願い
翻訳プロジェクトは規模が大きく、多くの方々の協力なくては成立しません。ぜひ皆さんのコントリビューションをお待ちしております。また、翻訳作業についての議論はIonic Japan slackの `#translation` チャンネルで行っておりますのでぜひご参加ください。

[Ionicの知見を共有するためのslackのオープンチャンネル](https://ionic-jp.herokuapp.com)

### ワークフロー
#### 0. 本レポジトリをForkする
#### 1. 翻訳作業のIssueを作成する
#### 2. 翻訳する
#### 3. プルリクエストを作成する

### 注意事項
- 本レポジトリは、元レポジトリを引き継ぎ `Apache License` を採用しています。皆さんの翻訳も同一ライセンスとなりますのでご了承ください。
- 元レポジトリがライセンスを変更いた場合、本レポジトリはそれに追随する可能性があります。
- 翻訳前と翻訳後で行数が同じになるようにご注意ください。これは、本家のdiffを追跡しやすくするためですのでご協力お願いいたします。
