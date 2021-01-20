const dataPromo = document.createElement("div");

const timeBlock = (item) =>
  item.time_action
    ? `<div class="timerBlock">
Срок действия:
<div class="timer">
  <div class="timerDigits">
    <p class="timerDigit">
      ${
        item.time_action.match(/(\d+)d/)[1].length == 1
          ? 0
          : item.time_action.match(/(\d+)d/)[1][0]
      }
    </p>
    <p class="timerDigit">
      ${
        item.time_action.match(/(\d+)d/)[1].length == 1
          ? item.time_action.match(/(\d+)d/)[1][0]
          : item.time_action.match(/(\d+)d/)[1][1]
      }
    </p>
    <p>:</p>
    <p class="timerDigit">
    ${
      item.time_action.match(/(\d+)h/)[1].length == 1
        ? 0
        : item.time_action.match(/(\d+)h/)[1][0]
    }
  </p>
  <p class="timerDigit">
    ${
      item.time_action.match(/(\d+)h/)[1].length == 1
        ? item.time_action.match(/(\d+)h/)[1][0]
        : item.time_action.match(/(\d+)h/)[1][1]
    }
  </p>
    <p>:</p>
    <p class="timerDigit">
    ${
      item.time_action.match(/(\d+)m/)[1].length == 1
        ? 0
        : item.time_action.match(/(\d+)m/)[1][0]
    }
  </p>
  <p class="timerDigit">
    ${
      item.time_action.match(/(\d+)m/)[1].length == 1
        ? item.time_action.match(/(\d+)m/)[1][0]
        : item.time_action.match(/(\d+)m/)[1][1]
    }
  </p>
  </div>
  <div class="timerLabel">
    <p>дней</p>
    <p>часов</p>
    <p>минут</p>
  </div>
</div>
</div>`
    : `<div class="timerBlock"><b>NO LIMIT</b></div>`;

const promoWrapper = document.createElement("div");
PROMOTIONS.forEach((item) => {
  let promoItem = document.createElement("div");
  promoItem.innerHTML = `
  <div class="promoWrapper">
  <a class="promoName">${item.title}</a>
  <img src= ${item.img} alt="Phone image" />
  <p class="promoDescription">
    ${item.description}
  </p>
  ${timeBlock(item)}
  <a href=${item.url || "#"}>Подробнее</a>
  </div>
`;

  promoItem.classList.add("splide__slide");
  promoWrapper.appendChild(promoItem);
});

const promoItem = document.getElementsByClassName("container promo")[0];
promoItem.innerHTML = `
<div class="goodsHeader">
    Акция<span>❯</span>
        <div class="line"></div>
    <a href="#">Все акции</a>
</div>

<div class="promosWrapper splide" id="promoWrapper1">
	<div class="splide__track">
        <div class="splide__list">
            ${promoWrapper.innerHTML}
        </div>
    </div>
</div>
`;
PROMOTIONS.length < 1 && promoItem.remove();

let perPagePromoCount = 1;
let arrowsPromo = true;
const perPagePromo = (width) => {
  if (width < 600) {
    PROMOTIONS.length > 1
      ? ((perPagePromoCount = 1), (arrowsPromo = true))
      : ((perPagePromoCount = PROMOTIONS.length), (arrowsPromo = false));
    return;
  } else if (width < 900) {
    PROMOTIONS.length > 2
      ? ((perPagePromoCount = 2), (arrowsPromo = true))
      : ((perPagePromoCount = PROMOTIONS.length), (arrowsPromo = false));
    return;
  } else if (width < 1140) {
    PROMOTIONS.length > 3
      ? ((perPagePromoCount = 3), (arrowsPromo = true))
      : ((perPagePromoCount = PROMOTIONS.length), (arrowsPromo = false));
    return;
  } else if (width >= 1140) {
    PROMOTIONS.length > 4
      ? ((perPagePromoCount = 4), (arrowsPromo = true))
      : ((perPagePromoCount = PROMOTIONS.length), (arrowsPromo = false));
    return;
  }
};

(function () {
  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 30);
    }
  }

  function actualResizeHandler() {
    perPagePromo(document.body.clientWidth);
    new Splide("#promoWrapper1", {
      perPage: perPagePromoCount,
      perMove: 1,
      padding: 15,
      pagination: false,
      arrows: arrowsPromo,
    }).mount();
    window.location.reload();
  }
})();

function myFunc() {
  perPagePromo(document.body.clientWidth);
  new Splide("#promoWrapper1", {
    perPage: perPagePromoCount,
    perMove: 1,
    padding: 15,
    pagination: false,
    arrows: arrowsPromo,
  }).mount();
}
myFunc();
