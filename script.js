const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const game = document.getElementById("game");

let scene = 0;

start();

function start() {
  text.innerHTML = "Aku tahu…<br>hari ini adekk capek dan pura-pura kuat.";
  buttons.innerHTML = <button onclick="next()">Aku di sini</button>;
}

function next() {
  scene++;

  // SCENE 1: VALIDASI
  if (scene === 1) {
    text.innerHTML = "Perasaan adekk hari ini gimana?";
    buttons.innerHTML = `
      <button onclick="next()">😢 Masih sedih</button>
      <button onclick="next()">😤 Kesel banget</button>
      <button onclick="next()">😶 Bingung</button>
    `;
  }

  // SCENE 2: GAME
  else if (scene === 2) {
    text.innerHTML = "Klik pelan-pelan, lepasin yang berat 🎈";
    buttons.innerHTML = "";
    game.classList.remove("hidden");

    game.innerHTML = `
      <div class="balloon" onclick="pop(this)">Kenangan</div>
      <div class="balloon" onclick="pop(this)">Chat Lama</div>
      <div class="balloon" onclick="pop(this)">Janji Dia</div>
      <div class="balloon" onclick="pop(this)">Harapan</div>
      <button onclick="next()">Lanjut</button>
    `;
  }

  // SCENE 3: PELUKAN
  else if (scene === 3) {
    game.classList.add("hidden");
    text.innerHTML = "Kalau hari ini berat,<br>nggak apa-apa istirahat 🤍";
    buttons.innerHTML = <button onclick="hug()">Peluk aku</button>;
  }

  // SCENE 4: ENDING
  else {
    text.innerHTML = "Suatu hari nanti,<br>adekk bakal ketawa tanpa inget luka ini 🌱";
    buttons.innerHTML = <button onclick="restart()">Aku mau pelan-pelan</button>;
  }
}

function pop(el) {
  el.innerHTML = "adekk nggak harus kuat hari ini 🤍";
  el.style.background = "#caffbf";
}

function hug() {
  text.innerHTML = "pelukkk jauhhh 🤍";
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
}

function restart() {
  scene = 0;
  start();
}
