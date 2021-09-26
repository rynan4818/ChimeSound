# ChimeSound

[M5StickcChimeServer](https://github.com/rynan4818/M5StickcChimeServer) を使って、ビーセイプレイ中などでもチャイム（ドアホン）が鳴ったら、ゲーム内でもチャイムを鳴らす

`ChimeSound.js` の m5_address を M5StickCのIPアドレスに修正して、chime_sound にチャイムに鳴らしたい音声ファイルを指定します。

`index.html`をOBSのブラウザに指定すれば、OBS起動中はチャイムが鳴ります。何も表示しないので、`表示されていないときにソースをシャットダウン`と`シーンがアクティブになったときにブラウザの表示を更新`のチェックを外しておけば、表示しなくてもＯＫです。

[Beat Saber Overlay 改良版](https://github.com/rynan4818/beat-saber-overlay)に組み込む場合は、オーバーレイの `index.html` をメモ帳で開いて、最後の方の

    <script src="./js/options.js"></script>

の上の行に

    <script src="./js/ChimeSound.js"></script>

を追加してください。