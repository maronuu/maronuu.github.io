window.onload = function () {
  var button = document.querySelector(".language-switch");
  var currentLanguage = button.textContent;
  setLanguage(currentLanguage);
};

function setLanguage(argLang) {
  var elm = document.getElementsByClassName("languageSwitch");
  for (var i = 0; i < elm.length; i++) {
    if (elm[i].getAttribute("lang") == argLang) {
      elm[i].style.display = "";
    } else {
      elm[i].style.display = "none";
    }
  }
}

function switchLanguage() {
  const button = document.querySelector(".language-switch");
  const currentLanguage = button.textContent;
  button.textContent = currentLanguage === "EN" ? "JP" : "EN";
  setLanguage(button.textContent);
}
