const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

if (typeof NEWS != "undefined") {
  if (NEWS.length < 1) {
    document.getElementsByClassName("leftBanner")[0].remove();
  } else {
    let inArray = (arr, num) => {
      for (var i = 0; i < arr.length; i++) {
        if (num === arr[i]) return true;
      }
      return false;
    };
    let createRand = (randLength, min, max) => {
      var randArray = [],
        i = 0;
      if (randLength > max - min + 1) {
        return null;
      }
      while (i < randLength) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!inArray(randArray, rand)) {
          i++;
          randArray.unshift(rand);
        }
      }
      return randArray;
    };

    const RandomList = createRand(3, 0, NEWS.length - 1);

    const dataNews = document.createElement("div");
    var string = "";
    const newsWrapper = document.createElement("div");
    NEWS.length <= 3
      ? NEWS.forEach((item) => {
          let newsItem = document.createElement("div");
          newsItem.innerHTML = ` <div class="news">
            <div class="imgWrapper">
            <p class="date">${new Date(item.date).getDate()}</p>
            <p class="month">${months[new Date(item.date).getMonth()]}</p>
            <img src=${item.img} />
            </div>
            <div>
            <a href=${item.url || "#"} class="newsName"
            >${item.title}</a
            >
            <p class="newsDesc">
            ${item.description}</a
            </p>
            </div>
            </div>`;
          newsWrapper.appendChild(newsItem);
        })
      : RandomList.forEach((i) => {
          let item = NEWS[i];

          let newsItem = document.createElement("div");
          newsItem.innerHTML = ` <div class="news">
            <div class="imgWrapper">
                <p class="date">${new Date(item.date).getDate()}</p>
                <p class="month">${months[new Date(item.date).getMonth()]}</p>
                <img src=${item.img} />
            </div>
            <div>
                <a href=${item.url || "#"} class="newsName"
                >${item.title}</a
                >
                <p class="newsDesc">
                ${item.description}</a
                </p>
            </div>
            </div>`;
          newsWrapper.appendChild(newsItem);
        });
    writeNowWrapper.classList.add("writeNowWrapper");
    const newsBlock = document.getElementsByClassName("leftBanner")[0];
    newsBlock.innerHTML = `
        <p>Новости компании</p>
        <div class="lineNews"></div>
        ${newsWrapper.outerHTML}
        <a href="#">Все новости</a>
        `;
  }
} else {
  document.getElementsByClassName("leftBanner")[0].remove();
}
