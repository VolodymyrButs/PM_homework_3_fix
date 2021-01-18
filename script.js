// buy button
let quantity = document.querySelector(".quantity");
let money = document.querySelector(".money");
document.querySelector(".currency").innerHTML = CURRENCY;
quantity.innerHTML = BASKET.elements;
money.innerHTML = BASKET.price;
const buy = (price, currency) => {
  if (price && currency) {
    quantity.innerHTML = Number(quantity.innerHTML) + 1;
    money.innerHTML =
      currency === CURRENCY
        ? Number(money.innerHTML) + price
        : Number(money.innerHTML) + price * CURRENCY_EXCHANGE[currency];
  } else {
    return;
  }
};

// create items category arrays
let itemsNew = ITEMS.filter((item) => item.type === "new").sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

let itemsRecommended = ITEMS.filter((item) => item.type === "recommended").sort(
  (a, b) => {
    return a.price - b.price || Number.NEGATIVE_INFINITY;
  }
);

const getDeltaPrice = (item) => {
  if (item.currency === CURRENCY) {
    return item.oldPrice - item.price || Number.NEGATIVE_INFINITY;
  } else {
    return (
      (item.oldPrice - item.price || Number.NEGATIVE_INFINITY) *
      CURRENCY_EXCHANGE[item.currency]
    );
  }
};

let itemsSale = ITEMS.filter((item) => item.type === "sale").sort((a, b) => {
  return getDeltaPrice(b) - getDeltaPrice(a);
});

const dataNew = document.createElement("div");
itemsNew.forEach((item) => {
  let prod = document.createElement("div");
  prod.classList.add("splide__slide");
  prod.innerHTML = ` 
  <div class="goodWrapper ${item.type} ">
        <img src='${item.img || "./img/noimage.jpg"}' alt="Phone image" />
        <a class="goodName">${item.description}</a>
        <div class="priceBlock">
          Цена: <span class="newPrice">${item.price || "SOLD OUT"} ${
    item.price && item.currency ? item.currency : ""
  }</span>
          <span class="oldPrice">${item.oldPrice || ""} ${
    item.oldPrice && item.currency ? item.currency : ""
  }</span>
        </div>
        <div class="buyBlock" >
          <div class="buyButton ${!item.price && "disable"}" onclick='buy(${
    item.price
  },"${item.currency}")'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 495.4 495.4"
              width="20"
              height="20"
            >
              <path
                d="M185 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C226.4 400 207.9 381.5 185 381.5z"
                class="a"
              />
              <path
                d="M365.6 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C407 400 388.5 381.5 365.6 381.5z"
                class="a"
              />
              <path d="M469.6 154.7l-229.2 0c-11.5 0-20.7 9.3-20.7 20.8s9.3 20.8 20.8 20.8l202.8 0 -12.9 43.5 -206.2 0c-10.6 0-19.2 8.6-19.2 19.3 0 10.6 8.6 19.3 19.3 19.3l194.8 0.1 -12.1 40.7H174.5L159 196.2 144.3 76.5c-1.2-9.5-8.1-17.3-17.3-19.6l-98-25C16.6 28.7 3.9 36.2 0.7 48.6s4.3 25.1 16.8 28.3l82.7 21.1 32.2 241.6c0 0 1.1 28.2 26.7 28.2h256.8c21.5 0 25.7-22.4 25.7-22.4l50.9-151.2C492.4 194.2 507.5 154.7 469.6 154.7z" />
            </svg>
            Kупить
          </div>
          <a href='${item.url}'>Подробнее</a>
        </div>
      </div>`;

  dataNew.appendChild(prod);
});

const newItem = document.getElementsByClassName("container new")[0];
newItem.innerHTML = `<div class="goodsHeader" >
Новинки<span>❯</span>
<div class="line"></div>
<a href="#">Все новинки</a>
</div>
<div class="goodsWrapper splide" id='goodsWrapperNew'>
	<div class="splide__track">
		<div class="splide__list">
${dataNew.innerHTML}
</div>
</div>
</div>
</section>
`;
itemsNew.length < 1 && newItem.remove();
let perPageNewCount = 1;
let arrowsNew = true;
const perPageNew = (width) => {
  if (width < 600) {
    return dataNew.childElementCount > 1
      ? ((perPageNewCount = 1), (arrowsNew = true))
      : ((perPageNewCount = dataNew.childElementCount), (arrowsNew = false));
  } else if (width < 900) {
    return dataNew.childElementCount > 2
      ? ((perPageNewCount = 2), (arrowsNew = true))
      : ((perPageNewCount = dataNew.childElementCount), (arrowsNew = false));
  } else if (width < 1140) {
    return dataNew.childElementCount > 3
      ? ((perPageNewCount = 3), (arrowsNew = true))
      : ((perPageNewCount = dataNew.childElementCount), (arrowsNew = false));
  } else if (width >= 1140) {
    return dataNew.childElementCount > 4
      ? ((perPageNewCount = 4), (arrowsNew = true))
      : ((perPageNewCount = dataNew.childElementCount), (arrowsNew = false));
  }
};

perPageNew(document.body.clientWidth);
new Splide("#goodsWrapperNew", {
  perPage: perPageNewCount,
  perMove: 1,
  padding: 15,
  pagination: false,
  arrows: arrowsNew,
  breakpoints: {
    1140: {
      arrowPath:
        "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    },
  },
  arrowPath:
    "M1516.39,1471l-3.39,2.06,9.46,20.97,6.54-1.25L1516.39,1471m0,44-3.39-2.06,9.46-20.97,6.54,1.25L1516.39,1515",
}).mount();

window.addEventListener("resize", () => {
  perPageNew(document.body.clientWidth);
  new Splide("#goodsWrapperNew", {
    perPage: perPageNewCount,
    perMove: 1,
    padding: 15,
    pagination: false,
    arrows: arrowsNew,
    breakpoints: {
      1140: {
        arrowPath:
          "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
      },
    },
    arrowPath:
      "M1516.39,1471l-3.39,2.06,9.46,20.97,6.54-1.25L1516.39,1471m0,44-3.39-2.06,9.46-20.97,6.54,1.25L1516.39,1515",
  }).mount();
});

const dataRecommended = document.createElement("div");
itemsRecommended.forEach((item) => {
  let prod = document.createElement("div");
  prod.classList.add("splide__slide");
  prod.innerHTML = ` 
  <div class="goodWrapper ${item.type} ">
        <img src='${item.img || "./img/noimage.jpg"}' alt="Phone image" />
        <a class="goodName">${item.description}</a>
        <div class="priceBlock">
          Цена: <span class="newPrice">${item.price || "SOLD OUT"} ${
    item.price && item.currency ? item.currency : ""
  }</span>
          <span class="oldPrice">${item.oldPrice || ""} ${
    item.oldPrice && item.currency ? item.currency : ""
  }</span>
        </div>
        <div class="buyBlock" >
          <div class="buyButton ${!item.price && "disable"}" onclick='buy(${
    item.price
  },"${item.currency}")'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 495.4 495.4"
              width="20"
              height="20"
            >
              <path
                d="M185 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C226.4 400 207.9 381.5 185 381.5z"
                class="a"
              />
              <path
                d="M365.6 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C407 400 388.5 381.5 365.6 381.5z"
                class="a"
              />
              <path d="M469.6 154.7l-229.2 0c-11.5 0-20.7 9.3-20.7 20.8s9.3 20.8 20.8 20.8l202.8 0 -12.9 43.5 -206.2 0c-10.6 0-19.2 8.6-19.2 19.3 0 10.6 8.6 19.3 19.3 19.3l194.8 0.1 -12.1 40.7H174.5L159 196.2 144.3 76.5c-1.2-9.5-8.1-17.3-17.3-19.6l-98-25C16.6 28.7 3.9 36.2 0.7 48.6s4.3 25.1 16.8 28.3l82.7 21.1 32.2 241.6c0 0 1.1 28.2 26.7 28.2h256.8c21.5 0 25.7-22.4 25.7-22.4l50.9-151.2C492.4 194.2 507.5 154.7 469.6 154.7z" />
            </svg>
            Kупить
          </div>
          <a href='${item.url}'>Подробнее</a>
        </div>
      </div>`;

  dataRecommended.appendChild(prod);
});

const itemRecommended = document.getElementsByClassName(
  "container recommended"
)[0];
itemRecommended.innerHTML = `<div class="goodsHeader" >
Рекомендуем<span>❯</span>
<div class="line"></div>
<a href="#">Все Рекомендации</a>
</div>
<div class="goodsWrapper splide" id='goodsWrapperRecommended'>
	<div class="splide__track">
		<div class="splide__list">
${dataRecommended.innerHTML}
</div>
</div>
</div>
</section>
`;
itemsRecommended.length < 1 && itemRecommended.remove();
let perPageRecomendedCount = 1;
let arrowsRecomended = true;
const perPageRecomended = (width) => {
  if (width < 600) {
    return dataRecommended.childElementCount > 1
      ? ((perPageRecomendedCount = 1), (arrowsRecomended = true))
      : ((perPageRecomendedCount = dataRecommended.childElementCount),
        (arrowsRecomended = false));
  } else if (width < 900) {
    return dataRecommended.childElementCount > 2
      ? ((perPageRecomendedCount = 2), (arrowsRecomended = true))
      : ((perPageRecomendedCount = dataRecommended.childElementCount),
        (arrowsRecomended = false));
  } else if (width < 1140) {
    return dataRecommended.childElementCount > 3
      ? ((perPageRecomendedCount = 3), (arrowsRecomended = true))
      : ((perPageRecomendedCount = dataRecommended.childElementCount),
        (arrowsRecomended = false));
  } else if (width >= 1140) {
    return dataRecommended.childElementCount > 4
      ? ((perPageRecomendedCount = 4), (arrowsRecomended = true))
      : ((perPageRecomendedCount = dataRecommended.childElementCount),
        (arrowsRecomended = false));
  }
};

perPageRecomended(document.body.clientWidth);
new Splide("#goodsWrapperRecommended", {
  perPage: perPageRecomendedCount,
  perMove: 1,
  padding: 15,
  pagination: false,
  arrows: arrowsRecomended,
  breakpoints: {
    1140: {
      arrowPath:
        "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    },
  },
  arrowPath:
    "M1516.39,1471l-3.39,2.06,9.46,20.97,6.54-1.25L1516.39,1471m0,44-3.39-2.06,9.46-20.97,6.54,1.25L1516.39,1515",
}).mount();

window.addEventListener("resize", () => {
  perPageRecomended(document.body.clientWidth);
  new Splide("#goodsWrapperRecommended", {
    perPage: perPageRecomendedCount,
    perMove: 1,
    padding: 15,
    pagination: false,
    arrows: arrowsRecomended,
    breakpoints: {
      1140: {
        arrowPath:
          "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
      },
    },
    arrowPath:
      "M1516.39,1471l-3.39,2.06,9.46,20.97,6.54-1.25L1516.39,1471m0,44-3.39-2.06,9.46-20.97,6.54,1.25L1516.39,1515",
  }).mount();
});

const dataSale = document.createElement("div");
itemsSale.forEach((item) => {
  let prod = document.createElement("div");
  prod.classList.add("splide__slide");
  prod.innerHTML = ` 
  <div class="goodWrapper ${item.type} ">
        <img src='${item.img || "./img/noimage.jpg"}' alt="Phone image" />
        <a class="goodName">${item.description}</a>
        <div class="priceBlock">
          Цена: <span class="newPrice">${item.price || "SOLD OUT"} ${
    item.price && item.currency ? item.currency : ""
  }</span>
          <span class="oldPrice">${item.oldPrice || ""} ${
    item.oldPrice && item.currency ? item.currency : ""
  }</span>
        </div>
        <div class="buyBlock" >
          <div class="buyButton ${!item.price && "disable"}" onclick='buy(${
    item.price
  },"${item.currency}")'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 495.4 495.4"
              width="20"
              height="20"
            >
              <path
                d="M185 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C226.4 400 207.9 381.5 185 381.5z"
                class="a"
              />
              <path
                d="M365.6 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C407 400 388.5 381.5 365.6 381.5z"
                class="a"
              />
              <path d="M469.6 154.7l-229.2 0c-11.5 0-20.7 9.3-20.7 20.8s9.3 20.8 20.8 20.8l202.8 0 -12.9 43.5 -206.2 0c-10.6 0-19.2 8.6-19.2 19.3 0 10.6 8.6 19.3 19.3 19.3l194.8 0.1 -12.1 40.7H174.5L159 196.2 144.3 76.5c-1.2-9.5-8.1-17.3-17.3-19.6l-98-25C16.6 28.7 3.9 36.2 0.7 48.6s4.3 25.1 16.8 28.3l82.7 21.1 32.2 241.6c0 0 1.1 28.2 26.7 28.2h256.8c21.5 0 25.7-22.4 25.7-22.4l50.9-151.2C492.4 194.2 507.5 154.7 469.6 154.7z" />
            </svg>
            Kупить
          </div>
          <a href='${item.url}'>Подробнее</a>
        </div>
      </div>`;

  dataSale.appendChild(prod);
});

const saleItem = document.getElementsByClassName("container sale")[0];
saleItem.innerHTML = `<div class="goodsHeader" >
Распродажа
<span>❯</span>
<div class="line"></div>

<a href="#">Все товары</a>
</div>
<div class="goodsWrapper splide" id='goodsWrapperSale'>
	<div class="splide__track">
		<div class="splide__list">
${dataSale.innerHTML}
</div>
</div>
</div>
</section>
`;
itemsSale.length < 1 && saleItem.remove();
let perPageSaleCount = 1;
let arrowsSale = true;
const perPageSale = (width) => {
  if (width < 600) {
    return dataSale.childElementCount > 1
      ? ((perPageSaleCount = 1), (arrowsSale = true))
      : ((perPageSaleCount = dataSale.childElementCount), (arrowsSale = false));
  } else if (width < 900) {
    return dataSale.childElementCount > 2
      ? ((perPageSaleCount = 2), (arrowsSale = true))
      : ((perPageSaleCount = dataSale.childElementCount), (arrowsSale = false));
  } else if (width < 1140) {
    return dataSale.childElementCount > 3
      ? ((perPageSaleCount = 3), (arrowsSale = true))
      : ((perPageSaleCount = dataSale.childElementCount), (arrowsSale = false));
  } else if (width >= 1140) {
    return dataSale.childElementCount > 4
      ? ((perPageSaleCount = 4), (arrowsSale = true))
      : ((perPageSaleCount = dataSale.childElementCount), (arrowsSale = false));
  }
};

perPageSale(document.body.clientWidth);
new Splide("#goodsWrapperSale", {
  perPage: perPageSaleCount,
  perMove: 1,
  padding: 15,
  pagination: false,
  arrows: arrowsSale,
  breakpoints: {
    1140: {
      arrowPath:
        "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    },
  },
  arrowPath:
    "M1516.39,1471l-3.39,2.06,9.46,20.97,6.54-1.25L1516.39,1471m0,44-3.39-2.06,9.46-20.97,6.54,1.25L1516.39,1515",
}).mount();

window.addEventListener("resize", () => {
  new Splide("#goodsWrapperSale", {
    perPage: perPageSaleCount,
    perMove: 1,
    padding: 15,
    pagination: false,
    arrows: arrowsSale,
    breakpoints: {
      1140: {
        arrowPath:
          "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
      },
    },
    arrowPath:
      "M1516.39,1471l-3.39,2.06,9.46,20.97,6.54-1.25L1516.39,1471m0,44-3.39-2.06,9.46-20.97,6.54,1.25L1516.39,1515",
  }).mount();
});
