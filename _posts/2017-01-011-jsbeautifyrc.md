---
layout: post
title: .jsbeautifyrcの設定メモ
description: .jsbeautifyrcの個人的な設定をメモとして残しています。
date: 2017-1-11
thumnail: /images/thum/thum-2017-01-11.jpg
tags:
  - html
  - css
  - javascript
category:
  - フロントエンド
ogimage: /images/ogimage.jpg
---

![]({{ site.baseurl }}/images/post/2017-01-11/mv.jpg){: .img-mv}


## .jsbeautifyrc

各プロジェクトごとに設定ファイルを用意し、下記のソースコードをテンプレートとして必要があればプロジェクトごとに設定を変えて利用しています。私が普段使っているエディタはAtomなので、Atomプラグインの[atom-beautify](https://atom.io/packages/atom-beautify)からショートカットコマンドで整形しています。

以下に自分なりの設定と、メモとして各設定の説明文をコメントとして残しておきます。<br>※一部不明なものあり。

### .jsbeautifyrcの個人的な設定

```
{
  "html": {
    "indent_char": " ",
    "indent_size": 0,
    "indent_with_tabs": false,
    "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
    "brace_style": "collapse",
    "indent_scripts": "normal",
    "end_with_newline": false,
    "indent_handlebars": false,
    "indent_inner_html": false,
    "max_preserve_newlines": 1,
    "preserve_newlines": true,
    "unformatted": ["a", "span", "img", "code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
    "wrap_line_length": 0
  },
  "css": {
    "indent_char": " ",
    "indent_size": 2,
    "indent_with_tabs": false,
    "allowed_file_extensions": ["css", "scss", "sass", "less"],
    "end_with_newline": false,
    "newline_between_rules": true,
    "selector_separator_newline": false,
    "selector_separator": " ",
  },
  "js": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "space_in_paren": false,
    "space_after_anon_function": true,
    "brace_style": "collapse",
    "break_chained_methods": false,
    "keep_array_indentation": false,
    "keep_function_indentation": true,
    "space_before_conditional": true,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "end_with_newline": false,
    "comma_first": false
  }
}
```

### html

```
{
  "html": {
    // インデントに使う文字
    "indent_char": " ",
    // インデント幅
    "indent_size": 0,
    // インデントにタブを使用するか
    "indent_with_tabs": false,
    // 適用するファイル形式？
    "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
    // scriptタグ内のbreceの展開形式 [collapse|expand|end-expand|none]
    "brace_style": "collapse",
    // scriptタグ内のインデントをhtmlに合わせるか
    "indent_scripts": "normal",
    // 文書の最後に空行を用意するか
    "end_with_newline": false,
    // 不明
    "indent_handlebars": false,
    // htmlタグ直下のheadタグ、bodyタグをインデント
    "indent_inner_html": false,
    // タグ間で許可する最大空行数
    "max_preserve_newlines": 1,
    // 空行の許可設定。falseで空行を全て削除
    "preserve_newlines": true,
    // 整形時にフォーマットしないタグ
    "unformatted": ["a", "span", "img", "code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
    // 一行あたりの最大文字数を設定（自動改行）
    "wrap_line_length": 0
  }
}
```

### css

```
{
  "css": {
    // インデントに使う文字
    "indent_char": " ",
    // インデント幅
    "indent_size": 2,
    // インデントにタブを使用するか
    "indent_with_tabs": false,
    // 適用するファイル形式？
    "allowed_file_extensions": ["css", "scss", "sass", "less"],
    // 文書の最後に空行を用意するか
    "end_with_newline": false,
    // 不明
    "newline_between_rules": true,
    // セレクタの間で改行するか
    "selector_separator_newline": false
  }
}
```

### javascript

```
{
  "js": {
    // インデントに使う文字
    "indent_size": 2,
    // インデント幅
    "indent_char": " ",
    // 最初の行のインデント
    "indent_level": 0,
    // インデントにタブを使用するか
    "indent_with_tabs": false,
    // 空行の許可設定。falseで空行を全て削除
    "preserve_newlines": true,
    // if (☆a = b☆)にスペースを入れるか
    "space_in_paren": false,
    // 無名関数 function☆()にスペースを入れるか
    "space_after_anon_function": true,
    // braceの展開方法
    "brace_style": "collapse",
    // チェーンメソッドを改行するか
    "break_chained_methods": false,
    // 配列を展開するか
    "keep_array_indentation": false,
    // 不明
    "keep_function_indentation": true,
    // if☆(a = b)にスペースを入れるか
    "space_before_conditional": true,
    // 不明
    "unescape_strings": false,
    // 横に長くなりすぎないよう何文字目で改行するか
    "wrap_line_length": 0,
    // 文書の最後に空行を用意するか
    "end_with_newline": false,
    // 配列内で展開時にカンマを先頭にするか
    "comma_first": false
  }
}
```
