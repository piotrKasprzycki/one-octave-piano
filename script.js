const keys = [...document.querySelectorAll(".key")];

const play = function (key) {
  const audio = key.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

keys.forEach((key) => key.addEventListener("click", () => play(key)));

document.addEventListener("keydown", (e) => {
  const targetKey = keys.find((el) => el.dataset.keyboardKey === e.key);
  if (targetKey) play(targetKey);
});
