const topMenu = document.getElementById("menu");
let sortedTopMenu = Object.entries(TOP_MENU).sort(
  (a, b) => a[1].order - b[1].order
);

if (typeof TOP_MENU !== "undefined") {
  sortedTopMenu.forEach((item) => {
    if (item[1].title && item[1].title != "") {
      let topLi = document.createElement("li");
      topLi.style.position = "relative";

      item[1].submenu
        ? (topLi.innerHTML = item[1].title)
        : (topLi.innerHTML = `<a href=${item[1].url}>${item[1].title}</a>`);

      let sep = document.createElement("li");
      sep.className = "sep";

      if (item[1].submenu) {
        topLi.classList.add("withArrow");

        let sortedUl = item[1].submenu.sort((a, b) => a.order - b.order);

        if (sortedUl[1].title && sortedUl[1].title != "") {
          let submenuUl = document.createElement("ul");
          submenuUl.className = "submenuUl";

          sortedUl.forEach((item) => {
            let submenuLi = document.createElement("li");
            submenuLi.className = "submenuLi";
            submenuLi.innerHTML = `<a class='subMenuLink' href=${item.url}>${item.title}</a>`;

            // In addition there MUST be a default error page
            //'404page.html' instead of '#'

            submenuUl.appendChild(submenuLi);
          });
          topLi.appendChild(submenuUl);
        }
      }
      topMenu.appendChild(topLi);
      topMenu.appendChild(sep);
    }
  });
} else {
  topMenu.remove();
}

//-----MENU-----

const menu = document.querySelector(".menuWrapper");
let sortedMenu = MENU.sort((a, b) => a.order - b.order);

if (typeof MENU !== "undefined") {
  let prev = document.createElement("button");
  prev.className = "menuWrapperArrow menuWrapperArrow_prev";
  prev.innerHTML = "❮";

  menu.appendChild(prev);

  sortedMenu.forEach((item, index) => {
    if (typeof item.title !== "undefined") {
      let li = document.createElement("li");
      li.innerHTML = item.title;

      li.setAttribute("href", item.url);
      // In addition there MUST be a default error page
      //'404page.html' instead of '#'

      let separator = document.createElement("li");
      separator.className = "separator";

      menu.appendChild(li);
      menu.appendChild(separator);
    }
  });

  let next = document.createElement("button");
  next.className = "menuWrapperArrow menuWrapperArrow_next";
  next.innerHTML = "❯";

  menu.appendChild(next);
} else {
  menu.remove();
}
