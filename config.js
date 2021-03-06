const CURRENCY = "USD";

const CURRENCY_EXCHANGE = {
  UAH: 0.036,
  RUB: 0.014,
};

const BASKET = {
  elements: 4,
  price: 4000,
};

const TOP_MENU = {
  catalog8: {
    order: 4,
    title: "Каталог",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  about_company0: {
    order: 2,
    title: "О компании",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  catalog0: {
    order: 5,
    title: "Каталог",
    submenu: [
      {
        order: 2,
        title: "оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 1,
        title: "GSM ",
        url: "gsm_equipment.html",
      },
    ],
  },
  catalog1: {
    order: 4,
    title: "Каталог",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  about_company4: {
    order: 2,
    title: "О компании",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  payment_delivery: {
    order: 3,
    title: "Payment and delivery",
    url: "payment_delivery.html",
  },
  payment_delivery3: {
    order: 1,
    title: "Payment and delivery",
    url: "payment_delivery.html",
  },
  payment_delivery1: {
    order: 3,
    title: "Payment and delivery",
    url: "payment_delivery.html",
  },
  payment_delivery2: {
    order: 1,
    title: "Payment and delivery",
    url: "payment_delivery.html",
  },
};

const MENU = [
  {
    order: 1,
    title: "first",
    url: "voip_equipment.html",
  },
  {
    order: 2,
    title: "SKYPE оборудование",
    url: "skype_equipment.html",
  },

  {
    order: 3,
    title: "GSM оборудование",
    url: "gsm_equipment.html",
  },
  {
    order: 4,
    title: "VIDEO оборудование",
    url: "video_equipment.html",
  },
  {
    order: 2,
    title: "SKYPE оборудование",
    url: "skype_equipment.html",
  },

  {
    order: 3,
    title: "GSM оборудование",
    url: "gsm_equipment.html",
  },
  {
    order: 4,
    title: "VIDEO оборудование",
    url: "video_equipment.html",
  },
  {
    order: 8,
    title: "Last",
    url: "video_equipment.html",
  },
];

const NEWS = [
  {
    date: "2021/01/01",
    title: "Новинка от «Элтекс» - точка доступа WEP",
    description:
      "Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.",
    img: "./img/GRP_b2b_large.jpg",
    url: "voip_equipment.html",
  },
  {
    date: "2020/12/25",
    title: "Новинка от компании Grandstream!",
    description: "Скоро в продаже мощный маршрутизатор GWN7000!",
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/01/14",
    title: "WiFi точка доступа от компании Grandstream!",
    description: "Уже скоро в продаже!",
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/01/01",
    title: "Новинка от «Элтекс» - точка доступа WEP",
    description:
      "Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.",
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
  {
    date: "2020/12/25",
    title: "Новинка от компании Grandstream!",
    description: "Скоро в продаже мощный маршрутизатор GWN7000!",
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/01/14",
    title: "WiFi точка доступа от компании Grandstream!",
    description: "Уже скоро в продаже!",
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
];

const BANNER = [
  {
    order: 1,
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
  {
    order: 2,
    img: "https://same_url2.jpg",
    url: "voip_equipment.html",
  },
  {
    order: 1,
    img: "./img/banners/banner_bg.png",
    url: "voip_equipment.html",
  },
  {
    order: 1,
    img: "./img/1_large.png",
    url: "voip_equipment.html",
  },
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },

  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "4000",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2019/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "500",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },

  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",

    price: "100",

    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },

  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2019/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "150",
    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },

  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",

    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
  {
    title: "Название акции",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
    time_action: "1d 2h 2m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название акции",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
    time_action: "1d 2h 20m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название акции",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
    time_action: "23d 24h 25m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
];

const BUYING_RIGHT_NOW = [
  {
    title: "Название товара",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 2 fdsgxfghbfgnbfxghbdfgbdfgbdfbdfbdfbvdfbfvsd",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 2",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 2",
    img: "./img/1_large.png",
    url: "https://same_url/item.html",
  },
];
