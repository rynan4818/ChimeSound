# ChimeSound

[M5StickcBsChimeServer](https://github.com/rynan4818/M5StickcBsChimeServer) を使って、ビーセイプレイ中などでもチャイム（ドアホン）が鳴ったら、ゲーム内でもチャイムを鳴らす

`ChimeSound.js` の m5_address を M5StickCのIPアドレスに修正して、chime_sound にチャイムに鳴らしたい音声ファイルを指定します。

OBSのブラウザに指定すれば、OBS起動中はチャイムが鳴ります。何も表示しないので、`表示されていないときにソースをシャットダウン`と`シーンがアクティブになったときにブラウザの表示を更新`のチェックを外しておけば、表示しなくてもＯＫです。
