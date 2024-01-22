# 目標
UIの悪いサイトの制作

## 制作物の説明
内容：制限時間以内(５分の予定)にUIの悪いサイト上でサインアップをする

## 残りのタスク
 ### index.vue
- [ ]制作物の説明をする文字の追加
- [ ]矢印の画像を作成(この画像を押すと回転するようにする)
 ### SignUpPage.vue
- [ ]Usernameとpasswordの入力欄の追加
- [ ]passwordを押したときに入力欄でパスワードのルールが隠れるようにする
- [ ]Nextボタンを押したときにパスワードのルールに合っているかをみてCAPTCHAPageに遷移するようにする

### CAPTCHAPage.vue
- [ ]カルーセルに使用する画像の作成
- [ ]数字入力欄の位置を調整
- [ ]Nextボタンを押したときにC#で入力された値の正誤判定のAPIで処理され、正しい場合にResultPageに遷移されるようにする

 ### ResultPage.vue
- [ ]v-ifで制限時間がなくなって遷移された時と制限時間以内に終えたときで、表示される文字を変える
- [ ]戻るボタンを追加

## 他に実装したい機能(時間との相談)
### タスクの重さ:高
- [ ]画面右下にサポートしてくれるボタンをまとめたものを作成(チャットボット的な) 
- [ ]制限時間が過ぎていくともにプログレスバーの%が増え,一分で100%になり、それを繰り返す

### タスクの重さ:中
- [ ]制限時間が残り3:00になったときに背景色を変更

### タスクの重さ:低
- [ ]制限時間を表示するボタンの中の文章を増やす

## 今すぐに達成すべき課題
残りのタスクをどのように振り分けるかを考える

メンバーの担当箇所
### 若林
- pages/ResultPage.vue
- pages/SignUpPage.vue
- layouts/MainLayout.vue
- components/CountdownButton.vue
- components/CountdownTimer.vue
- components/NextbuttonGroup.vue

### 牧田
- C#のAPI
- CAPTCHAPage.vue

### 福島
- pages/index.vue
- layouts/default.vue
## 今後解決すべき課題

- わからないこと

- 疑問点など

## 変更の同期ができない場合のコマンド
    git pull 

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
