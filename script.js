const keys = [...document.querySelectorAll(".key")];

const play = function (key) {
  key.style.boxShadow = "rgba(0, 0, 0, 0.35) 10px -10px 30px -20px inset";
  setInterval(
    () => (key.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 10px 15px"),
    400
  );
  const audio = key.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

keys.forEach((key) => key.addEventListener("click", () => play(key)));

document.addEventListener("keydown", (e) => {
  const targetKey = keys.find(
    (el) =>
      el.dataset.keyboardKey === e.key ||
      el.dataset.keyboardKey.toUpperCase() === e.key
  );
  if (targetKey) play(targetKey);
});
