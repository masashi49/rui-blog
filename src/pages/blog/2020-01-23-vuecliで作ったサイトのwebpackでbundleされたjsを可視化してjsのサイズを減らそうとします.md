---
templateKey: blog-post
title: VueCliで作ったサイトのwebpackでbundleされたJsを可視化してJsのサイズを減らそうとします
date: 2020-01-23T09:25:54.880Z
description: VueCliで作ったサイトのwebpackを可視化してJavascriptのサイズを減らそうとする
featuredpost: false
featuredimage: /img/スクリーンショット-2020-01-23-18.49.37.png
tags:
  - Webpack
  - Javascript
  - Vue.js
---
[webpackのbundle後のJavaScriptのサイズを減らしている話](https://recruit-tech.co.jp/blog/2018/12/15/try_optimization_webpack_bundle_size/)という記事を見て、VueCliで作られたものはどうやって可視化するんだろうと思って調べました。<br>

最終的なやり方は下記です。

## stats-webpack-plugin <br>

<hr>

まずはmoduleのインストールを行いましょう

```
npm install --save-dev stats-webpack-plugin 

```
続いて、vue.config.jsファイルのconfigureWebpackを次のように変更します。

```
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    configureWebpack:{
        plugins: [new StatsPlugin("stats.json", {
            chunkModules: true,
            chunks: true,
            assets: false,
            modules: true,
            children: true,
            chunksSort: true,
            assetsSort: true
        })],
    },
}
```

## webpack-bundle-analyzer
<hr>

続いてwebpack-bundle-analyzerをインストールしましょう

```
npm install webpack-bundle-analyzer --save-dev

```

vue.config.jsの内容にwebpack-bundle-analyzerを使うぞと追記を行います

```
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  chainWebpack: (config) => {
    config.plugin("webpack-bundle-analyzer") // 打包分析
      .use(BundleAnalyzerPlugin)
      .init(Plugin => new Plugin());
  },
};
```

最終的なvue.config.jsはこのようになります

```
const StatsPlugin = require('stats-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    configureWebpack:{
        plugins: [new StatsPlugin("stats.json", { // 查看stats
            chunkModules: true,
            chunks: true,
            assets: false,
            modules: true,
            children: true,
            chunksSort: true,
            assetsSort: true
        })],
    },
    chainWebpack: (config) => {
        config.plugin("webpack-bundle-analyzer") // 打包分析
            .use(BundleAnalyzerPlugin)
            .init(Plugin => new Plugin());
    },

}

```


最後に、package.jsonにコマンドを追記します。<br>

`"report": "vue-cli-service build --report-json"`

## お疲れさまでした
意外とかんたんでしたね！<br>

`npm run report` を走らせることで、 [http://127.0.0.1:8888/](http://127.0.0.1:8888/)こんな感じでかってにブラウザが立ち上がるかと思います。

## おまけ
[webpack-chart](http://alexkuz.github.io/webpack-chart/)というサイトに、先程のコマンドで作られたstats.jsonを放り込むと、円グラフになってサイズを教えてくれます。<br><br><br>

以上です。
