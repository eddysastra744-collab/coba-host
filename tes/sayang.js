// Array pesan kasih sayang yang lebih romantis
const loveMessages = [
  "Aku Sayang Kamu ❤️",
  "Kamu Istimewa ✨",
  "Terima Kasih Sudah Ada 🙏",
  "Kamu adalah alasan aku tersenyum 😊",
  "Setiap detik denganmu berharga 💕",
  "Hatiku milikmu sepenuhnya 💝",
  "Kamu adalah cahaya dalam hidupku 🌟",
  "Aku bersyukur memilikimu 🥰",
  "Cintaku padamu tak terhingga ♾️",
  "Kamu adalah impianku yang jadi kenyataan 💭",
  "Aku mencintaimu lebih dari kata-kata 💌",
  "Kamu adalah rumahku 🏠",
  "Hatiku berdetak untukmu 💓",
  "Kamu membuat hidupku lebih indah 🌸",
  "Aku akan selalu di sisimu 🤝",
  "Setiap detik bersamamu adalah hadiah 🎁",
  "Kamu adalah alasan aku bangun pagi ☀️",
  "Cintaku padamu tumbuh setiap hari 🌱",
  "Kamu adalah jawaban dari doaku 🙏",
  "Aku tidak bisa membayangkan hidup tanpamu 💭",
];

// Warna pastel untuk balon
const balloonColors = [
  "pink",
  "lavender",
  "peach",
  "mint",
  "white",
  "light-pink",
];

// Ukuran balon
const balloonSizes = ["small", "medium", "large"];

// Jumlah balon berdasarkan ukuran layar
const balloonCount = window.innerWidth < 768 ? 6 : 10;

// Inisialisasi
document.addEventListener("DOMContentLoaded", function () {
  createBalloons();
  createBackgroundHearts();
  createFloatingSparkles();
  createMovingClouds();
  playBackgroundMusic();
});

// Membuat balon dengan variasi warna dan ukuran
function createBalloons() {
  const container = document.getElementById("balloonContainer");

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement("div");
    const color =
      balloonColors[Math.floor(Math.random() * balloonColors.length)];
    const size = balloonSizes[Math.floor(Math.random() * balloonSizes.length)];

    balloon.className = `heart-balloon ${color} ${size}`;
    balloon.style.left = Math.random() * 85 + "%";
    balloon.style.top = Math.random() * 70 + "%";
    balloon.style.animationDelay = Math.random() * 4 + "s";
    balloon.style.animationDuration = Math.random() * 3 + 3 + "s";

    // Create heart shape
    const heart = document.createElement("div");
    heart.className = "heart";
    balloon.appendChild(heart);

    // Add click event
    balloon.addEventListener("click", function () {
      showLoveMessage(this);
    });

    container.appendChild(balloon);
  }
}

// Membuat hati background
function createBackgroundHearts() {
  const container = document.querySelector(".background-hearts");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "bg-heart";
    heart.innerHTML = "💕";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 10 + "s";
    heart.style.animationDuration = Math.random() * 10 + 10 + "s";
    container.appendChild(heart);
  }
}

// Membuat floating sparkles
function createFloatingSparkles() {
  const container = document.querySelector(".floating-sparkles");

  setInterval(() => {
    if (Math.random() > 0.7) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.innerHTML = "✨";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.top = Math.random() * 100 + "vh";
      sparkle.style.animationDelay = Math.random() * 2 + "s";
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    }
  }, 500);
}

// Membuat moving clouds
function createMovingClouds() {
  const container = document.querySelector(".moving-clouds");

  for (let i = 0; i < 3; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.left = -100 + i * 200 + "px";
    cloud.style.top = 10 + i * 20 + "%";
    cloud.style.animationDelay = i * 20 + "s";
    container.appendChild(cloud);
  }
}

// Menampilkan pesan kasih sayang
function showLoveMessage(balloon) {
  const popup = document.getElementById("messagePopup");
  const message = document.getElementById("loveMessage");

  // Efek burst pada balon
  balloon.classList.add("shake");
  setTimeout(() => {
    balloon.style.transform = "scale(0)";
    balloon.style.opacity = "0";
    setTimeout(() => {
      balloon.remove();
    }, 500);
  }, 500);

  // Pesan acak
  const randomMessage =
    loveMessages[Math.floor(Math.random() * loveMessages.length)];
  message.textContent = randomMessage;

  // Tampilkan popup
  popup.style.display = "block";

  // Tambahkan confetti
  createConfetti();

  // Tambahkan balon baru
  setTimeout(() => {
    createNewBalloon();
  }, 1000);
}

// Membuat balon baru
function createNewBalloon() {
  const container = document.getElementById("balloonContainer");
  const balloon = document.createElement("div");
  const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  const size = balloonSizes[Math.floor(Math.random() * balloonSizes.length)];

  balloon.className = `heart-balloon ${color} ${size}`;
  balloon.style.left = Math.random() * 85 + "%";
  balloon.style.top = "100%";
  balloon.style.animationDelay = Math.random() * 4 + "s";

  const heart = document.createElement("div");
  heart.className = "heart";
  balloon.appendChild(heart);

  balloon.addEventListener("click", function () {
    showLoveMessage(this);
  });

  container.appendChild(balloon);

  setTimeout(() => {
    balloon.style.top = Math.random() * 70 + "%";
    balloon.style.transition = "top 2s ease-out";
  }, 100);
}

// Membuat confetti
function createConfetti() {
  const container = document.querySelector(".confetti-container");

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = -10 + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animation = `confettiFall ${
      Math.random() * 3 + 2
    }s ease-out forwards`;
    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Menutup popup
function closePopup() {
  const popup = document.getElementById("messagePopup");
  popup.style.display = "none";
}

// Musik background
function playBackgroundMusic() {
  const music = document.getElementById("bgMusic");
  document.addEventListener(
    "click",
    function () {
      music.play().catch((e) => console.log("Audio play failed:", e));
    },
    { once: true }
  );
}

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

// Efek tambahan: sparkle saat mouse move
document.addEventListener("mousemove", function (e) {
  if (Math.random() > 0.98) {
    createSparkle(e.clientX, e.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.innerHTML = "✨";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1500);
}

// CSS untuk confetti
const style = document.createElement("style");
style.textContent = `
  .confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: confettiFall 3s ease-out forwards;
    pointer-events: none;
    z-index: 1500;
  }
  
  @keyframes confettiFall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
