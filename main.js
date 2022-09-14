let conatiner = document.querySelector(".container");

let careers = [
  "UX Designer",
  "UI Designer",
  "Front-End Developer",
  "Freelancer",
  "Designer",
];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  conatiner.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
    0,
    characterIndex
  )}</h1>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
