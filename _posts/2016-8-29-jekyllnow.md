---
layout: post
title: Github PagesとJekyll Nowでブログを作成する。
description: Github PagesとJekyll Nowでブログを作成したので、大まかな流れを記録しています。
date: 2016-08-29
thumnail: /images/thum/thum-2016-08-29.jpg
tags:
  - Jekyll
  - github
category:
  - フロントエンド
ogimage: /images/ogimage.jpg
---

![]({{ site.baseurl }}/images/post/2016-08-29/mv.jpg "メインビジュアル"){: .img-mv}

## 作成の経緯

数年前から自分のブログを作りたいなーと思っていたんですが、wordpressをちまちまいじっては飽きる、を繰り返し、なかなかブログ公開まで至っていませんでした。
レンタルサーバやドメインの契約も手間もかかるし、なんとなくブログを作るにはやはりそれなりの時間とコストがかかりますよね。

だったらどっかのブログサービスでいいじゃんとも思いましたが、私自身Webエンジニアだし、やはり自分の手で作りたい。
何かほかに良いアプローチはないかなーと探していたところ、Github PagesとJekyll Nowという組み合わせにたどり着きました。

 - [Github Pages](https://pages.github.com/)
 - [Jekyll Now](http://www.jekyllnow.com/)

## Github PagesとJekyll Now、それぞれの特徴

まずはそれぞれどんなものか、簡単にまとめ。

### Github Pages

[Github Pages](https://pages.github.com/)は、GitHubが提供するホスティングサービス。無料で使うことができ、自身のGitHubアカウント上に _usernam_.github.io という名でリポジトリを作成すると、Webサイトとして「https://_usernam_.github.io」にアクセスできるようになる。

これだけ。シンプルですねー。

あとはリポジトリにサイトリソースをpushしていけば、Webサイトを更新していけます。
通常サイトを作成するとなると、サーバの用意→ドメイン設定→FTPアップロードとなり、初めてインターネット上でサイトとして閲覧できますが、それに比べるとGitHub Pagesはとてもスピーディ。そして0円なり。

ただし基本的にサイトとして機能するのは静的コンテンツのみらしいです。phpとか、htaccessとかサーバサイドのプログラムは動かないのかな？

### Jekyll Now

[Jekyll](http://jekyllrb.com/)をベースに作られた、サイトジェネレータ。公式では「Create your blog in 30 seconds!」とおっしゃっていますが、実際まじで30秒でブログの土台ができます。恐ろしい子。

私は[Jekyll Nowのリポジトリ](https://github.com/barryclark/jekyll-now)から直接folkしてきました。
ちなみにJekyllを利用するにあたり、Windows環境では以下の物をインストールする必要がありました。

 - Ruby
 - bundle

若干の手間はかかりますが、数分で終わりますね。

## 大まかな流れ

1. Githubアカウントを作成。
2. [Jekyll Nowのリポジトリ](https://github.com/barryclark/jekyll-now)をfolk。
3. リポジトリ名をGitHub Pagesとして機能するよう変更

これだけで最低限の機能を持ったブログとして公開できちゃいます。
細かい手順に関しては、公式やわかりやすく書いてくれている方がたくさんいらっしゃるので、そちらを参考にしてください。

## Jekyllテンプレートのカスタマイズ

先の工程を踏めば「最低限の機能」はできるのですが、実際にゴリゴリとブログを書くには少し物足りない点があります。
私が物足りないと感じた点は以下の点です。

 - SNS対応（OGP・シェアボタン）が不完全
 - 記事のカテゴリ、タグ一覧のページがない
 - 記事一覧ページにサムネイル・カテゴリ・タグの関連付けがない

私はこれらを解消するために様々な記事を読み漁ってカスタマイズを施し、現在の形に至りました。
さらにデザイン・マークアップに関してもデフォルトのものにかなり手を加えたため、Jekyll Nowの原型はほぼないに等しい状態ですｗ
まだまだ改善したい点はあるのですが、カスタマイズに関してはキリがないので一旦はこのままいこうと思ってます。

### カスタマイズの際に参考にさせて頂いた記事

 - [Jekyllサイトにシンプルなタグ・カテゴリのリストを実装](http://qiita.com/mnishiguchi/items/fa1e8fd2e893ea801ce8)
 - [GitHub PagesのJekyllでogpタグを出力する](http://takezoe.hatenablog.com/entry/2016/07/03/104536)
 - [JekyllでTwitterカード用のタグを出力する](http://takezoe.hatenablog.com/entry/2016/07/03/175911)

あとはJekyllの[公式Tips](http://jekylltips-ja.github.io/guide/navigation-and-includes/)や[ドキュメント](http://jekyllrb.com/docs/home/)を参考にしています。

## 感想

一連の作業を終えて、「すごくギークなブログ構築だなあ」と思いましたｗ

記事を書く際の型はMarkdown、投稿するにはgit commit → pushですからね。
エンジニアにはかなり馴染みのあるやり方で運用していけるので、ギークな運用がしたい方にはおすすめです。

あとは、ある程度しっかりした作りのブログにしたかったら、やはりそれなりに時間がかかるということ。この点はWordpressとかをカスタマイズするのと同じですね。こだわり始めると終わらないカスタマイズ。笑
