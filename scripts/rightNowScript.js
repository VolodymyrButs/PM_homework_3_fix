const dataNov = document.createElement("div");

const rightNowWrapper = document.createElement("div");

if (typeof BUYING_RIGHT_NOW != "undefined") {
  if (BUYING_RIGHT_NOW.length < 1) {
    document.getElementsByClassName("container now")[0].remove();
  } else {
    BUYING_RIGHT_NOW.forEach((item) => {
      let nowItem = document.createElement("div");
      nowItem.innerHTML = `<div class="writeNowItem">
    <img src=${item.img} alt="Write now image" />
    <a href=${item.url} class="goodName">${item.title}</a>
    </div>`;
      rightNowWrapper.appendChild(nowItem);
    });
    rightNowWrapper.classList.add("rightNowWrapper");
    const novItem = document.getElementsByClassName("container now")[0];
    novItem.innerHTML = `

<div class="goodsHeader now" >
Покупают прямо сейчас<span>❯</span>
<div class="line"></div>
<a href="#">Все новинки</a>
</div>

${rightNowWrapper.outerHTML}

`;
  }
} else {
  document.getElementsByClassName("container now")[0].remove();
}
