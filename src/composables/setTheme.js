function switchTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
}

export default switchTheme;
