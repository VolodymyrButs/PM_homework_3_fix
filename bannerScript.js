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
    new Splide("#banner1", {
      rewind: true,
      perPage: 1,
      perMove: 1,
      padding: 0,
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      pauseOnFocus: true,
    }).mount();
  }
})();

function myFunc() {
  let bannerBlock = document.getElementById("bannerWrap");

  let bannerWrapper = document.createElement("div");
  BANNER.forEach((item) => {
    let bannerContaiber = document.createElement("div");
    bannerContaiber.classList.add("bannerContainer");
    bannerContaiber.classList.add("splide__slide");
    bannerContaiber.style.backgroundImage = `url(${item.img})`;
    bannerContaiber.innerHTML = `
                <h1>Революционное решение</h1>
                <h2>На рынке среди систем вкс!</h2>
                <h3>GVC 3200 от компании grandstream это:</h3>
              </div>
              <ul>
                <li>
                  9-ти сторонняя аудио/видео конференция без покупки
                  дополнительного ПО
                </li>
                <li>2 Мпикс камера CMOS с разрешением 1920x1080V@15fps</li>
                <li>
                  Гигабитный порт, встроенный модуль WiFi (802.11n) и Bluetooth
                  4.0 Miracast
                </li>
              </ul>
             <a href=${item.url || "#"}> <button>Подробнее</button></a>
        `;
    bannerWrapper.appendChild(bannerContaiber);
  });
  bannerBlock.innerHTML = `
<div class="banner splide" id="banner1">
	<div class="splide__track">
        <div class="splide__list">
            ${bannerWrapper.innerHTML}
        </div>
    </div>
</div>

`;
  perPagePromo(document.body.clientWidth);
  new Splide("#banner1", {
    rewind: true,
    perPage: 1,
    perMove: 1,
    padding: 0,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  }).mount();
}
myFunc();
