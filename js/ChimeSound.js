const m5_address  = '192.168.1.2:81';         //M5StickCのIPアドレス
const chime_sound = './sound/door_chime0.mp3' //チャイムで鳴らす音(https://taira-komori.jpn.org/daily01.html から入手して soundフォルダに入れた)

const chime_sound_audio = new Audio(chime_sound);

function m5_connect() {
  var socket = new WebSocket(`ws://${m5_address}/`);
  socket.addEventListener('open', () => {
    console.log("M5 WebSocket opened");
  });
  socket.addEventListener('message', (message) => {
    const data = JSON.parse(message.data);
    if (data.chime === true) {
      chime_sound_audio.play();
    }
  });
  socket.addEventListener('close', () => {
    console.log("Failed to connect to M5 server, retrying in 3 seconds");
    setTimeout(m5_connect, 3000);
  });
}

m5_connect();
