import { dataInfo } from "./data.js";
const data = JSON.parse(dataInfo);
console.log(data);
document.querySelector("body").style.margin = "0";

const contentEl = document.querySelector(".content");
contentEl.style.padding = "30px 100px";
contentEl.style.display = "flex";
contentEl.style.rowGap = "30px";
contentEl.style.columnGap = "30px";
contentEl.style.flexWrap = "wrap";
contentEl.style.justifyContent = "center";
contentEl.style.background = "#e5fffb";

data.forEach(({ API, Description, HTTPS, Link, Category }) => {
  const itemEl = document.createElement("div");

  itemEl.classList.add("item");
  itemEl.style.width = "250px";
  itemEl.style.padding = "10px";
  itemEl.style.border = "1px solid #000000";
  itemEl.style.textAlign = "center";
  itemEl.style.background = "#fff1e5";
  itemEl.style.borderRadius = "30px";

  const name = document.createElement("h1");
  name.style.background = "#abafff";
  name.style.borderRadius = "30px";
  name.style.fontFamily = "Arial";

  const description = document.createElement("p");
  const https = document.createElement("p");
  const link = document.createElement("a");
  //   link.style.textDecoration = "none";
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "none";
  });
  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "";
  });

  const category = document.createElement("p");
  category.style.color = "red";

  name.textContent = API;
  description.textContent = Description;
  https.textContent = "HTTPS: " + HTTPS;
  link.textContent = "Link";
  link.href = Link;
  category.textContent = Category;

  contentEl.appendChild(itemEl);
  itemEl.appendChild(name);
  itemEl.appendChild(description);
  itemEl.appendChild(https);
  itemEl.appendChild(link);
  itemEl.appendChild(category);
});
