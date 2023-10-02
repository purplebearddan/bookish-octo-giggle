const App = ({ logo }) => {
  const App = document.createElement("div");
  App.id = "App";

  const header = document.createElement("header");
  header.classList.add("App-header");
  const img = document.createElement("img");
  img.src = logo;
  img.classList.add("App-logo");
  img.alt = "logo";

  const p = document.createElement("p");
  p.textContent = "Edit ";
  const code = document.createElement("code");
  code.textContent = "src/App.js";
  p.innerHTML += code;
  p.textContent += " and save to reload.";

  const a = document.createElement("a");
  a.classList.add("App-link");
  a.href = "https://reactjs.org";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Learn React";

  header.appendChild(img);
  header.appendChild(p);
  header.appendChild(a);
  App.appendChild(header);

  return App;
};
