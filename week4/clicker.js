let score = 0;

const cookie = document.getElementById("cookie");
const clickButton = document.getElementById("click-btn");
const scoreDisplay = document.getElementById("score");
const darkModeButton = document.getElementById("dark-mode-btn");
const resetButton = document.getElementById("reset-btn");
const achievementsContainer = document.getElementById("achievements");

// TODO 4: display any saved values


// TODO 1: update score and change image after 10/20 clicks
clickButton.addEventListener('click', () => {
  
})

// TODO 2: reset game
resetButton.addEventListener('click', () => {

})

// TODO 3: Display achievements
const achievements = [
  { name: "First Click", requirement: 1 },
  { name: "10 Clicks", requirement: 10 },
  { name: "50 Clicks", requirement: 50 },
  { name: "100 Clicks", requirement: 100 }
];

function updateAchievements() {
  
}

// TODO 5: toggle dark mode for body and game container
darkModeButton.addEventListener('click', () => {
  
})

// so it appears when the page opens
updateAchievements();
