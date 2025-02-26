const ToggleButton = document.querySelectorAll(".ToggleButton");
const ToggleSwitcher = document.querySelectorAll(".ToggleSwitcher");
const ToggleText = document.querySelectorAll(".ToggleText");

ToggleButton.forEach((button, index) => {
  button.onclick = () => {
    ToggleText.forEach((text, i) => {
      if (i !== index) text.style.display = "none";
    });
    ToggleSwitcher.forEach((swither, i) => {
      if (i !== index) swither.style.transform = "rotate(0deg)";
    });
    const currentText = ToggleText[index];
    const currentSwitcher = ToggleSwitcher[index];
    currentText.style.display =
      currentText.style.display === "block" ? "none" : "block";

    currentSwitcher.style.transform =
      currentSwitcher.style.transform === "rotate(90deg)"
        ? "rotate(0deg)"
        : "rotate(90deg)";
  };
});
