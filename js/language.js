"use strict";

const bestHostBase = "https://ukru.energybud.org.ua";
const githubHostBase = "https://yura33-dev.github.io/fundraising-minbat";
const localHostBase = "http://127.0.0.1:5500";

const handleLanguageSelect = (selectSelector) =>
  document
    .querySelector(selectSelector)
    .addEventListener("change", changeLanguage);

const changeLanguage = (e) => {
  const currentHref = getCurrentHref();

  switch (e.target.value) {
    case "eng":
      window.location.href = currentHref + "/index-en.html";
      break;
    default:
      window.location.href = currentHref;
  }
};

const getCurrentHref = () => {
  switch (window.location.origin) {
    case bestHostBase:
      return bestHostBase;
    case githubHostBase:
      return githubHostBase;
    default:
      return localHostBase;
  }
};

export default handleLanguageSelect;
