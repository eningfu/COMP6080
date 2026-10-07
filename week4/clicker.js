let score = Number(localStorage.getItem("score")) || 0;
let theme = localStorage.getItem("theme");

const cookie = document.getElementById("cookie");
const clickButton = document.getElementById("click-btn");
const scoreDisplay = document.getElementById("score");
const darkModeButton = document.getElementById("dark-mode-btn");
const resetButton = document.getElementById("reset-btn");
const achievementsContainer = document.getElementById("achievements");

// TODO 4: display any saved values
scoreDisplay.textContent = score;

if (theme === "dark") {
  document.body.classList.add('dark');
  document.querySelector('.game').classList.add('dark');
}


// TODO 1: update score and change image after 10/20 clicks
clickButton.addEventListener('click', () => {
  score++;

  scoreDisplay.textContent = score;

  if (score >= 50) {
    clickButton.classList.add('skin')
  } else if (score >= 20) {
    cookie.src = 'image2.png'
  } else if (score >= 10) {
    cookie.src = 'image1.png'
  } else {
    cookie.src = 'image.png'
  }

  localStorage.setItem("score", score);
  updateAchievements();

})

// TODO 2: reset game
resetButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  cookie.src = 'image.png'
  clickButton.classList.remove('skin')
})

// TODO 3: Display achievements
const achievements = [
  { name: "First Click", requirement: 1 },
  { name: "10 Clicks", requirement: 10 },
  { name: "50 Clicks", requirement: 50 },
  { name: "100 Clicks", requirement: 100 }
];

function updateAchievements() {
  achievementsContainer.innerHTML = ''
  achievements.forEach((achievement) => {
    const p = document.createElement('p');
    p.textContent = achievement.name;

    if (score >= achievement.requirement) {
      p.style.textDecoration = 'line-through';
    }

    achievementsContainer.appendChild(p)
  });
}

// TODO 5: toggle dark mode for body and game container
darkModeButton.addEventListener('click', () => {
  const page = document.body
  document.body.classList.toggle('dark');
  document.querySelector('.game').classList.toggle('dark');

  if (page.classList.contains('dark')) {
    localStorage.setItem("theme", "dark")
    console.log("dark mode")
  } else {
    localStorage.setItem("theme", "light")
  }
})

// so it appears when the page opens
updateAchievements();
