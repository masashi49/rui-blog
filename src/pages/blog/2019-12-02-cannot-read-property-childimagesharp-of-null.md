---
templateKey: blog-post
title: Cannot read property 'childImageSharp' of null
date: 2019-12-02T14:22:45.752Z
description: Gatsbyのレイアウト調整中に急に出たエラー
featuredpost: true
featuredimage: /img/スクリーンショット-2019-12-02-23.36.37.png
tags:
  - javascript
  - Gatsby
  - issues
---
Gatsbyのレイアウトやデフォルトで入っている文章を修正したいなぁと思い、ディレクトリ構成やSCSSを触っていると、

```
Cannot read property 'childImageSharp' of null
```

というエラーが表示された。  

`プロパティがないよ`というのは明らかなのだけど、急に出てきたもんだからとてもビックリしました。  

<br>

「何かscssいじっている時に触ってもーたかな。。。」  

<br>



とりあえず冷やしていたビールを開けて、飲みながらググってみると、すぐに同じようなエラーがHITしました。

`https://github.com/gatsbyjs/gatsby/issues/2567`ここですでに解決されていそうなコメントを見つける事ができました。

<br>

![Gatsbyで急にプロパティがないというエラーが表示されたのでその解決方法を探った](/img/スクリーンショット-2019-12-02-23.29.14.png "解決しそうなコメントを発見した")

<br>

なるほどー！

<br>



おもむろに`.cache`ディレクトリと`.public`ディレクトリを削除して gatsby build コマンドを走らせて、無事元どおり表示させる事ができました。

<br>

このエラーに出会って色々なコンポーネントを開けて見てみたけど、
<br>
`index.mdがindexページの初期テキスト設定ファイルになっていた`
<br>
という事が衝撃でした。  

<br>

引き続きカスタマイズしつつ何か書いていきます。
