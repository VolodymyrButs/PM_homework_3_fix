// buy button
let quantity = document.querySelector(".quantity");
let quantityMob = document.querySelector(".quantityMob");
let money = document.querySelector(".money");

document.querySelector(".currency").innerHTML = CURRENCY;
quantity.innerHTML = BASKET.elements;
quantityMob.innerHTML = BASKET.elements;
money.innerHTML = BASKET.price;

const getPrice = (price, currency) => {
  return currency === CURRENCY
    ? price
    : Math.ceil(price * CURRENCY_EXCHANGE[currency], 1);
};
const buyHandler = (price, name) => {
  let buyItemAlert = document.querySelector(".buyItemAlert");
  quantity.innerHTML = Number(quantity.innerHTML) + 1;
  quantityMob.innerHTML = Number(quantityMob.innerHTML) + 1;
  money.innerHTML = Number(money.innerHTML) + price;
  buyItemAlert.innerHTML = `<p>Товар ${name}, успешно добавлен в корзину</p>`;
  buyItemAlert.style.display = "block";

  setTimeout(() => {
    buyItemAlert.style.display = "none";
    buyItemAlert.innerHTML = "";
  }, 2000);
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

const renderCard = (item) => {
  return ` 
<div class="goodWrapper ${item.type} ">
      <img src='${item.img || "./img/noimage.jpg"}' alt="Phone image" />
      <a href=${item.url || "#"} class="goodName">${item.description}</a>
      <div class="priceBlock">
        Цена: <span class="newPrice">${
          getPrice(item.price, item.currency) || "SOLD OUT"
        } ${item.price && item.currency ? CURRENCY : ""}</span>
        <span class="oldPrice">${
          getPrice(item.oldPrice, item.currency) || ""
        } ${item.oldPrice && item.currency ? CURRENCY : ""}</span>
      </div>
      <div class="buyBlock" >
        <div class="buyButton ${
          !item.price && "disable"
        }" onclick='buyHandler(${getPrice(item.price, item.currency)}, "${
    item.description
  }")'>
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
        <a href='${item.url || "#"}'>Подробнее</a>
      </div>
    </div>`;
};

//NEW
const newBlock = document.createElement("div");
itemsNew.forEach((item) => {
  let product = document.createElement("div");
  product.classList.add("splide__slide");
  product.innerHTML = renderCard(item);
  newBlock.appendChild(product);
});

const newBlockWrapper = document.getElementsByClassName("container new")[0];
newBlockWrapper.innerHTML = `
  <div class="goodsHeader">
    Новинки<span>❯</span>
      <div class="line"></div>
        <a href="#">Все новинки</a>
      </div>
      <div class="goodsWrapper splide" id='goodsWrapperNew'>
        <div class="splide__track">
          <div class="splide__list">
          ${newBlock.innerHTML}
          </div>
        </div>
      </div>
    </div>
`;
itemsNew.length < 1 && newBlockWrapper.remove();

//Recommended
const recommendedBlock = document.createElement("div");
itemsRecommended.forEach((item) => {
  let product = document.createElement("div");
  product.classList.add("splide__slide");
  product.innerHTML = renderCard(item);

  recommendedBlock.appendChild(product);
});

const recommendedBlockWrapper = document.getElementsByClassName(
  "container recommended"
)[0];
recommendedBlockWrapper.innerHTML = `<div class="goodsHeader" >
Рекомендуем<span>❯</span>
<div class="line"></div>
<a href="#">Все Рекомендации</a>
</div>
<div class="goodsWrapper splide" id='goodsWrapperRecommended'>
	<div class="splide__track">
		<div class="splide__list">
${recommendedBlock.innerHTML}
</div>
</div>
</div>

`;
itemsRecommended.length < 1 && recommendedBlockWrapper.remove();

//SALE BLOCK
const saleBlock = document.createElement("div");
itemsSale.forEach((item) => {
  let product = document.createElement("div");
  product.classList.add("splide__slide");
  product.innerHTML = renderCard(item);
  saleBlock.appendChild(product);
});

const saleBlockWrapper = document.getElementsByClassName("container sale")[0];
saleBlockWrapper.innerHTML = `<div class="goodsHeader" >
Распродажа
<span>❯</span>
<div class="line"></div>

<a href="#">Все товары</a>
</div>
<div class="goodsWrapper splide" id='goodsWrapperSale'>
	<div class="splide__track">
		<div class="splide__list">
${saleBlock.innerHTML}
</div>
</div>
</div>

`;
itemsSale.length < 1 && saleBlockWrapper.remove();

//SLIDERS OPTIONS

const getSlidesPerPageCount = () => {
  const width = document.body.clientWidth;

  if (width < 600) {
    return 1;
  } else if (width < 900) {
    return 2;
  } else if (width < 1140) {
    return 3;
  } else {
    return 4;
  }
};

const getSliderOptions = (block) => {
  const blocksCount = block.childElementCount;
  const slidesPerPageCount = getSlidesPerPageCount();
  const hasManyPages = blocksCount > slidesPerPageCount;

  return {
    arrows: hasManyPages,
    perPage: hasManyPages ? slidesPerPageCount : blocksCount,
  };
};

//SLIDERS GENERATION

function sliderGeneration() {
  new Splide("#goodsWrapperSale", {
    perMove: 1,
    padding: 15,
    pagination: false,
    ...getSliderOptions(saleBlock),
  }).mount();
  new Splide("#goodsWrapperNew", {
    perMove: 1,
    padding: 15,
    pagination: false,
    ...getSliderOptions(newBlock),
  }).mount();
  new Splide("#goodsWrapperRecommended", {
    perMove: 1,
    padding: 15,
    pagination: false,
    ...getSliderOptions(recommendedBlock),
  }).mount();
}
sliderGeneration();

//SLIDERS RE-GENERATION ON RESIZE

(function () {
  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();
      }, 100);
    }
  }

  function actualResizeHandler() {
    sliderGeneration();
    window.location.reload();
  }
})();
