---
title: "プリレンダリングについて"
date: "2023-01-01"
thumbnail: "/images/thumbnail02.jpg"
---

Next.jsでは、**静的生成**と**サーバーサイドレンダリング**の2つのプリレンダリングがある。違いはページのHTMLをいつ生成するかという点です。

- 静的生成はビルド時\に HTML を生成するプリレンダリング方法です。プリレンダリングされた HTML は、各リクエストで再利用されます。
- サーバーサイドレンダリングは、リクエストごとに HTML を生成するプリレンダリング方法です。
- ※通常のReactアプリケーション(SPA)の場合、ユーザーがWebページにアクセスし、Webページを表示する時にブラウザ側でHTMLを生成します。（クライアントサーバーレンダリング）

重要なのは、Next.js では、各ページでどのプリレンダリング方式を使うか、選択することができるということです。ほとんどのページで静的生成、その他のページでサーバーサイドレンダリングを利用することで、「ハイブリッド」な Next.js アプリを作成することができます。