---
templateKey: blog-post
title: Vue.jsにて、Androidのwebブラウザで「このサイトから離れますか？」のアラートの制御を行いました
date: 2020-02-03T09:32:27.548Z
description: ユーザーの意図的な操作、意図しない操作で挙動を振り分けたかったのです。
featuredpost: false
featuredimage: /img/スクリーンショット-2020-02-03-18.45.51.png
tags:
  - Javascript
  - Vue.js
---
Vue.jsにて、Androidのwebブラウザで「このサイトから離れますか？」のアラートの制御を行いました<br>

再読み込みなどの更新ボタンを押してしまった等、<b style="color:red;">意図しない操作でページを離れるであろうと場合</b>は「このサイトから離れますか？」的はアラートを表示。<br>
ログアウトボタンなど、<b  style="color:orange;">意図的にページを離れる時はアラートを表示させない</b>というものです。<br>


createdにて、addEventListenerにbeforeunloadを登録し、コールバックを呼び出す。
```
created() {
        //再読み込みで確認アラートが表示される
        window.addEventListener('beforeunload', this.refreshConfirm, false);
    },
```

反応するメソッドを用意しておく。

```
methods: {
    refreshConfirm(e){
        //一部のブラウザのみここのテキストが反映される。
        const confirmMessage = '本当にページ移動しますか？';
        e.returnValue = confirmMessage;
        return confirmMessage;
    },

    logout() {
        //意図的な操作ではアラートを表示させない。
        window.removeEventListener('beforeunload', this.refreshConfirm, false);
    },
    ・
    ・
    ・
```

調べてみると意外と簡単にできました。<br>

【JavaScript】離脱時に beforeunload でアラート表示、だがカスタムメッセージが設定できない<br>
というQiita記事を参考にさせていただきました([こちらです](https://qiita.com/naoki_koreeda/items/bf0f512dbd91b450c671))<br>

感謝!!
