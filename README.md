# NextOne

とりあえず

# 技術的なメモ

## TwitterのOAuth認証に関して

### passport

- Nodeに提供されている "passport" という認証用ライブラリを利用
  - facebookやtwitterなど、色々な認証に対応している模様
- 下記のサイトを参考にした
  - GoogleのOAuth + sailsの実装例
    - [NodeのMVCフレームワーク Sails.jsで使える開発Tips](http://catcher-in-the-tech.net/637/)
  - Twitter用のpassport strategy
    - [jaredhanson/passport-twitter](https://github.com/jaredhanson/passport-twitter/blob/master/examples/signin/app.js)

### ハマったポイント

- Twitter clientのapplication keyは "Browser用" と "Client用" の2種類があるみたい
  - Clientの場合は、指定したRedirect URLへ飛ばしてくれる
  - Browserの場合は、PINコードが画面に表示されて、それを手入力すると先に進める
  - 上記サイトを参考に実装を行い、Browser用のキーを使うとsailsがexceptionを起こす (でハマった)
    - Expressで試してみると "Desktop applications only support the oauth_callback value 'oob'" というエラーメッセージが表示された
- (これを作った時は) APIキー申請の時に "Callback URL" を入力する所があって、そこにURLを入れるとClient用になった
  - 参考 : [TwitterのOAuthでCallbackさせるときの注意点](http://d.hatena.ne.jp/speg03/20091019/1255957580)
