---
templateKey: blog-post
title: Google analytics を設置しました
date: 2019-12-25T15:00:39.202Z
description: Gatsbyで作ったブログにgoogle-analyticsを導入しましたので、その手順をご紹介します。
featuredpost: false
featuredimage: /img/スクリーンショット-2019-12-26-0.02.18.png
tags:
  - gatsby
  - アナリティクス
---
タイトルの通りこのブログにGoogle analyticsを設置しました。

## Netlify側の設定

まずはNetlifyに、Googleアナリティクスの**トラッキングIDを環境変数として登録**しましょう。

まずは**Settings**へ移動します。

![Settingsへ移動します](/img/スクリーンショット-2019-12-26-0.04.17.png "Settingsへ移動します")

<br>

続いて**Build & deploy**へ行きましょう。

![Build & deployへ移動](/img/スクリーンショット-2019-12-26-0.04.21.png "Build & deployへ移動します")

<br>

最後に**Environment**へ移動します。ここにトラッキングIDを入力します。

**UA-xxxxxxx-x**までしっかり入力します。

![トラッキングIDを入力](/img/スクリーンショット-2019-12-26-0.04.45.png "googleアナリティクスのトラッキングIDを入力")

<br>

keyに関してはわかりやすい名前を入れて下さい。後で

```
process.env.GOOGLE_ANALYTICS_TRACKING_ID
```

という形で取り出します。

<br>

## Gatsby側の設定

まずはGoogleアナリティクスをインストールしましょう

下記コマンドを叩きます。

```
npm install --save gatsby-plugin-google-analytics
```

<br>

次に gatsby-config.js を開き、編集しましょう。\
色々書いてあるかと思いますが、pluginsの直下に書くのがポイントです。

```
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true
      }
    }
  ]
};
```

私の環境ではこのような感じ

![私のGatshbyのconfigの一部です](/img/スクリーンショット-2019-12-26-0.15.17.png "私のGatshbyのconfigの一部です")

<br>

これで設定は完了です！ 

拍子抜けするくらい簡単ですね！！

Googleアナリティクスが正しく動いているか確認して下さい。



おしまい！
