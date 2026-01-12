/* data.js
 * 全站菜单数据 + i18n 文案
 * 用法：window.APP_DATA
 */
window.APP_DATA = {
  i18n: {
    zh: {
      backHome: "返回首页",
      categoryDetail: "分类详情",
      dishIntroPrice: "菜品介绍与价格",
      empty: "暂无菜品数据",
      viewDetail: "查看详情",
      products: "Productos",
      category: "分类",
    },
    en: {
      backHome: "Back to Home",
      categoryDetail: "Category Details",
      dishIntroPrice: "Dishes & Prices",
      empty: "No dishes available",
      viewDetail: "View details",
      products: "Products",
      category: "Category",
    },
    es: {
      backHome: "Volver al inicio",
      categoryDetail: "Detalles de categoría",
      dishIntroPrice: "Platos y precios",
      empty: "No hay platos disponibles",
      viewDetail: "Ver detalles",
      products: "Productos",
      category: "Categoría",
    }
  },

  // 菜单数据：id 必须和 index.html 里 ?cat=xxx 对上
  categories: {
    entrantes: {
      name: { zh: "小菜", en: "Appetizers", es: "ENTRANTES" },
      img: "images/cat-entrantes.jpg",
      items: [
        { zh:"日韩炸鸡双拼", es:"COMBO DOBLE DE POLLO FRITO ESTILO COREANO (2 SABORES)", en:"Korean Fried Chicken Double Combo", price:"6,50€", descZh:"韩式双拼炸鸡（2 种口味），配酱料、芝麻", descEn:"Korean-style fried chicken (2 flavors), with sauce & sesame", descEs:"Pollo frito coreano (2 sabores), con salsa y sésamo" },
        { zh:"烤鸭", es:"PATO ASADO", en:"Roasted Duck", price:"7,90€", descZh:"传统烤鸭，配甜面酱、芝麻", descEn:"Traditional roasted duck with sweet bean sauce & sesame", descEs:"Pato asado tradicional con salsa dulce y sésamo" },
        { zh:"炸大虾", es:"EBI TEMPURA (4u)", en:"Shrimp Tempura (4 pcs)", price:"4,95€", descZh:"天妇罗炸虾（4 个），小麦粉裹炸", descEn:"Tempura shrimp (4 pcs)", descEs:"Tempura de gambas (4 uds)" },
        { zh:"海菜", es:"WAKAME", en:"Wakame", price:"4,50€", descZh:"凉拌海草", descEn:"Seasoned seaweed salad", descEs:"Ensalada de algas" },
        { zh:"毛豆", es:"EDAMAME", en:"Edamame", price:"3,95€", descZh:"盐煮毛豆", descEn:"Boiled soybeans with salt", descEs:"Edamame con sal" },
        { zh:"章鱼丸子", es:"TAKOYAKI", en:"Takoyaki", price:"4,95€", descZh:"日式章鱼小丸子（内裹章鱼块）", descEn:"Japanese octopus balls", descEs:"Bolitas de pulpo estilo japonés" },
        { zh:"芝麻球", es:"BOLAS DE SÉSAMO", en:"Sesame Balls", price:"3,95€", descZh:"油炸甜馅芝麻球", descEn:"Fried sweet sesame balls", descEs:"Bolas de sésamo rellenas" },
        { zh:"素菜春卷", es:"ROLITO DE PRIMAVERA", en:"Vegetable Spring Roll", price:"2,95€", descZh:"酥脆外皮裹蔬菜春卷", descEn:"Crispy vegetable spring roll", descEs:"Rollito de primavera vegetal" },
        { zh:"风味土豆", es:"PATATAS FRITAS CON ESPECIAS", en:"Spiced Fried Potatoes", price:"4,50€", descZh:"香辣风味炸土豆", descEn:"Spiced fried potatoes", descEs:"Patatas fritas con especias" },
        { zh:"卤牛肉", es:"CARNE ESTOFADA CHINA", en:"Braised Chinese Beef", price:"6,50€", descZh:"酱香卤制牛肉", descEn:"Chinese-style braised beef", descEs:"Ternera estofada china" },
        { zh:"芹菜香干", es:"APIO CON TOFU SECO", en:"Celery with Dried Tofu", price:"4,95€", descZh:"芹菜炒干豆腐", descEn:"Stir-fried celery with dried tofu", descEs:"Apio con tofu seco" },
        { zh:"清爽土豆丝", es:"PATATAS FRESCAS RALLADAS", en:"Shredded Potato Salad", price:"3,90€", descZh:"酸辣凉拌土豆丝", descEn:"Tangy & spicy shredded potato salad", descEs:"Patatas ralladas frescas" },
        { zh:"空气炸鸡翅", es:"ALITAS DE POLLO AL AIRE FRITO", en:"Air Fried Chicken Wings", price:"5,50€", descZh:"无油空气炸鸡翅", descEn:"Oil-free air fried wings", descEs:"Alitas al aire" },
        { zh:"肉夹馍", es:"ROUJIAMO", en:"Roujiamo (Chinese Burger)", price:"6,00€", descZh:"猪肉 + 蒜 + 青红椒中式汉堡", descEn:"Pork + garlic + peppers in a Chinese bun", descEs:"Bocadillo chino de cerdo" }
      ]
    },

    arroz: {
      name: { zh: "饭类", en: "Rice", es: "ARROZ" },
      img: "images/cat-arroz.jpg",
      items: [
        { zh:"黄焖鸡米饭", es:"HUANG MEN JI", en:"Braised Chicken with Rice", price:"11,90€", descZh:"白米饭配焖鸡、香菇、土豆、青红椒", descEn:"Rice with braised chicken, mushrooms, potatoes & peppers", descEs:"Arroz con pollo estofado, setas, patata y pimientos" },
        { zh:"长安特色炒饭", es:"ARROZ DE LA CASA", en:"House Signature Fried Rice", price:"7,50€", descZh:"炒饭配蛋、火腿、香肠、豌豆、胡萝卜", descEn:"Fried rice with egg, ham, sausage, peas & carrot", descEs:"Arroz frito con huevo, jamón, salchicha, guisantes y zanahoria" },
        { zh:"烤鸭饭", es:"ARROZ CON PATO ASADO", en:"Roasted Duck Rice", price:"12,95€", descZh:"白米饭配烤鸭、蔬菜、甜面酱", descEn:"Rice with roasted duck, veggies & sweet bean sauce", descEs:"Arroz con pato asado, verdura y salsa dulce" },
        { zh:"韩式拌饭", es:"BIBIMBAP COREANO", en:"Korean Bibimbap", price:"9,90€", descZh:"拌饭配饭、蔬菜、煎蛋、韩辣酱", descEn:"Mixed rice with veggies, fried egg & chili paste", descEs:"Arroz mezclado con verduras, huevo y gochujang" },
        { zh:"茄子饭", es:"BERENJENAS ESTOFADAS CON ARROZ", en:"Braised Eggplant with Rice", price:"11,90€", descZh:"白米饭配中式焖茄子", descEn:"Rice with Chinese-style braised eggplant", descEs:"Arroz con berenjena estofada" },
        { zh:"台湾卤肉饭", es:"ARROZ CON CARNE ESTOFADO AL ESTILO TAIWANESES", en:"Taiwanese Braised Pork Rice", price:"11,90€", descZh:"白米饭配台湾卤猪肉、酸菜", descEn:"Rice with Taiwanese braised pork & pickles", descEs:"Arroz con cerdo estofado estilo taiwanés" },
        { zh:"三鲜炒饭", es:"ARROZ 3 DELICIAS", en:"3 Delights Fried Rice", price:"6,50€", descZh:"炒饭配蛋、火腿、蔬菜", descEn:"Fried rice with egg, ham & vegetables", descEs:"Arroz frito 3 delicias" },
        { zh:"牛肉盖饭", es:"GAIFAN DE TERNERA", en:"Beef Gaifan", price:"12,50€", descZh:"白米饭配炒牛肉、蔬菜", descEn:"Rice with stir-fried beef & vegetables", descEs:"Arroz con ternera salteada" },
        { zh:"鸡排盖饭", es:"GAIFAN DE POLLO", en:"Fried Chicken Gaifan", price:"10,50€", descZh:"白米饭配炸鸡排、蔬菜", descEn:"Rice with fried chicken cutlet & vegetables", descEs:"Arroz con pollo frito" },
        { zh:"肉丝青椒盖饭", es:"GAIFAN DE POLLO CON PIMIENTOS", en:"Shredded Meat with Peppers Gaifan", price:"10,50€", descZh:"白米饭配鸡肉丝、青椒", descEn:"Rice with shredded chicken & green peppers", descEs:"Arroz con pollo y pimientos" }
      ]
    },

    fideos: {
      name: { zh: "面类", en: "Noodles & Ramen", es: "FIDEOS Y RAMEN" },
      img: "images/cat-fideos.jpg",
      items: [
        { zh:"西安 biangbiang 面", es:"FIDEOS XI'AN BIANGBIANG", en:"Xi'an Biangbiang Noodles", price:"11,95€", descZh:"宽面配肉/菜 + 蒜油；可选辣、选肉（猪/鸡/牛）", descEn:"Wide noodles with meat/veg + garlic oil; spicy & meat options", descEs:"Fideos anchos con carne/verdura y aceite de ajo; opciones de picante/carne" },
        { zh:"油泼面", es:"FIDEOS YOUPo", en:"Shaanxi Youpo Noodles", price:"10,95€", descZh:"手工面配包菜 + 酱油 + 蒜；可选辣", descEn:"Handmade noodles with cabbage, soy sauce & garlic; optional spicy", descEs:"Fideos caseros con col, soja y ajo; opción picante" },
        { zh:"酸辣粉", es:"SOPA DE FIDEOS AGRIPICANTE", en:"Hot & Sour Vermicelli", price:"6,95€", descZh:"红薯粉配包菜、木耳、花生、酸辣调味", descEn:"Sweet potato vermicelli with cabbage, fungus, peanuts; hot & sour", descEs:"Fideos con col, setas, cacahuetes; sabor agripicante" },
        { zh:"韩式冷面", es:"FIDEOS FRÍOS COREANOS", en:"Korean Cold Noodles", price:"9,50€", descZh:"冷面配牛肉、梨、黄瓜、蛋、辣酱", descEn:"Cold noodles with beef, pear, cucumber, egg & chili sauce", descEs:"Fideos fríos con ternera, pera, pepino, huevo y picante" },
        { zh:"素菜面", es:"FIDEOS VEGETARIANOS", en:"Vegetarian Noodles", price:"7,90€", descZh:"面条配蔬菜、鸡蛋", descEn:"Noodles with vegetables & egg", descEs:"Fideos con verduras y huevo" },
        { zh:"长安特色拉面", es:"RAMEN DE LA CASA", en:"House Signature Ramen", price:"13,50€", descZh:"拉面配鸡/猪肉、竹笋、葱、芝麻", descEn:"Ramen with chicken/pork, bamboo shoots, scallion & sesame", descEs:"Ramen con pollo/cerdo, bambú, cebolleta y sésamo" },
        { zh:"海鲜拉面", es:"RAMEN DE MARISCO", en:"Seafood Ramen", price:"12,95€", descZh:"拉面配虾、鱿鱼、葱、蛋", descEn:"Ramen with shrimp, squid, scallion & egg", descEs:"Ramen con gambas, calamar, cebolleta y huevo" },
        { zh:"牛肉拉面", es:"RAMEN DE TERNERA", en:"Beef Ramen", price:"12,50€", descZh:"拉面配牛肉、葱、蛋", descEn:"Ramen with beef, scallion & egg", descEs:"Ramen con ternera, cebolleta y huevo" }
      ]
    },

    dimdum: {
      name: { zh: "炒面 · 小笼包 · 馄饨", en: "Noodles · Xiaolongbao · Wonton", es: "TALLARINES · XIAOLONGBAO · WONTON" },
      img: "images/cat-dimdum.jpg",
      items: [
        { zh:"炒粉干", es:"FIDEOS DE ARROZ", en:"Rice Noodles Stir-fry", price:"6,90€", descZh:"米粉干配蛋、包菜、猪肉", descEn:"Rice noodles with egg, cabbage & pork", descEs:"Fideos de arroz con huevo, col y cerdo" },
        { zh:"方便面", es:"YAKISOBA", en:"Yakisoba", price:"7,90€", descZh:"日式炒面配肉、菜、洋葱", descEn:"Japanese-style fried noodles with meat, veggies & onion", descEs:"Yakisoba con carne, verduras y cebolla" },
        { zh:"三鲜炒面", es:"TALLARINES 3 DELICIAS", en:"3 Delights Noodles", price:"8,50€", descZh:"面条配蛋、虾、肉、菜", descEn:"Noodles with egg, shrimp, meat & vegetables", descEs:"Tallarines 3 delicias" },
        { zh:"炒河粉", es:"TALLARINES DE ARROZ FRITO", en:"Fried Rice Noodles", price:"8,50€", descZh:"河粉配蛋、肉、包菜、胡萝卜", descEn:"Rice noodles with egg, meat, cabbage & carrot", descEs:"Tallarines de arroz fritos" },
        { zh:"小笼包", es:"XIAOLONGBAO", en:"Xiaolongbao", price:"4,50€", descZh:"小麦面小笼包（猪肉 + 芹菜 + 芝麻）", descEn:"Steamed pork buns with celery & sesame", descEs:"Xiaolongbao de cerdo" },
        { zh:"生煎包", es:"XIAOLONGBAO FREIDO", en:"Pan-fried Buns", price:"4,50€", descZh:"煎制小笼包（同馅）", descEn:"Pan-fried buns (same filling)", descEs:"Xiaolongbao frito" },
        { zh:"馄饨汤", es:"SOPA WONTON GRANDE", en:"Big Wonton Soup", price:"7,90€", descZh:"猪肉馄饨汤配紫菜、香菜、干虾、蛋", descEn:"Pork wonton soup with seaweed, coriander, dried shrimp & egg", descEs:"Sopa wonton grande" }
      ]
    },

    gyoza: {
      name: { zh: "饺子 · 刮包", en: "Gyoza · Bao", es: "GYOZAS · BAO" },
      img: "images/cat-gyoza.jpg",
      items: [
        { zh:"油泼水饺（12 个）", es:"GYOZAS YOUPo (12u)", en:"Chili Oil Dumplings (12 pcs)", price:"-", descZh:"配醋 / 酱油 / 蒜", descEn:"Served with vinegar / soy sauce / garlic", descEs:"Con vinagre / soja / ajo" },
        { zh:"素菜饺子", es:"GYOZA VEGETAL", en:"Vegetable Gyoza", price:"7,95€", descZh:"素菜馅", descEn:"Vegetable filling", descEs:"Relleno vegetal" },
        { zh:"韭菜饺子", es:"GYOZA DE CERDO Y CEBOLLINO", en:"Pork & Chive Gyoza", price:"8,50€", descZh:"猪肉韭菜馅", descEn:"Pork and chive filling", descEs:"Cerdo y cebollino" },
        { zh:"鸡肉饺子", es:"GYOZA DE POLLO", en:"Chicken Gyoza", price:"8,50€", descZh:"鸡肉馅", descEn:"Chicken filling", descEs:"Pollo" },
        { zh:"煎饺（10 个）", es:"GYOZAS FRITAS (10u)", en:"Fried Dumplings (10 pcs)", price:"-", descZh:"煎制，配醋 / 酱油 / 蒜", descEn:"Pan-fried; with vinegar / soy sauce / garlic", descEs:"Fritas; con vinagre / soja / ajo" },
        { zh:"素菜煎饺", es:"GYOZA VEGETAL", en:"Fried Vegetable Gyoza", price:"6,80€", descZh:"素菜馅", descEn:"Vegetable filling", descEs:"Relleno vegetal" },
        { zh:"韭菜煎饺", es:"GYOZA DE CERDO Y CEBOLLINO", en:"Fried Pork & Chive Gyoza", price:"7,25€", descZh:"猪肉韭菜馅", descEn:"Pork and chive filling", descEs:"Cerdo y cebollino" },
        { zh:"鸡肉煎饺", es:"GYOZA DE POLLO", en:"Fried Chicken Gyoza", price:"7,25€", descZh:"鸡肉馅", descEn:"Chicken filling", descEs:"Pollo" },
        { zh:"鸡肉刮包", es:"BAO DE POLLO", en:"Chicken Bao", price:"4,25€", descZh:"刮包配炸鸡、黄瓜、酱", descEn:"Bao with fried chicken, cucumber & sauce", descEs:"Bao con pollo frito, pepino y salsa" },
        { zh:"鸭肉刮包", es:"BAO DE PATO", en:"Duck Bao", price:"4,25€", descZh:"刮包配烤鸭、黄瓜、酱", descEn:"Bao with roasted duck, cucumber & sauce", descEs:"Bao con pato, pepino y salsa" },
        { zh:"虾肉刮包", es:"BAO DE EBI TEMPURA", en:"Shrimp Tempura Bao", price:"4,25€", descZh:"刮包配天妇罗虾、黄瓜、酱", descEn:"Bao with shrimp tempura, cucumber & sauce", descEs:"Bao con tempura de gambas, pepino y salsa" }
      ]
    },

    bebidas: {
      name: { zh: "饮料", en: "Drinks", es: "BEBIDAS" },
      img: "images/cat-bebidas.jpg",
      items: [
        { zh:"碳酸饮料", es:"REFRESCO", en:"Soft Drink", price:"2,50€", descZh:"可选可乐 / 芬达 / Aquarius / 雀巢茶", descEn:"Coke / Fanta / Aquarius / Nestea", descEs:"Coca-Cola / Fanta / Aquarius / Nestea" },
        { zh:"矿泉水", es:"AGUA", en:"Water", price:"2,00€", descZh:"无气矿泉水", descEn:"Still water", descEs:"Agua sin gas" },
        { zh:"气泡水", es:"AGUA CON GAS", en:"Sparkling Water", price:"2,20€", descZh:"含气矿泉水", descEn:"Sparkling water", descEs:"Agua con gas" },
        { zh:"中国冷面", es:"TE FRIO CHINO", en:"Chinese Iced Tea", price:"3,00€", descZh:"中式冷面", descEn:"Chinese iced tea", descEs:"Té frío chino" },
        { zh:"加多宝", es:"JIADUOBAO", en:"Jiadubao Herbal Tea", price:"2,50€", descZh:"加多宝凉茶", descEn:"Herbal tea drink", descEs:"Bebida de té de hierbas" },
        { zh:"椰子汁", es:"BEBIDA DE COCO", en:"Coconut Drink", price:"2,80€", descZh:"椰子饮料", descEn:"Coconut drink", descEs:"Bebida de coco" },
        { zh:"波子汽水", es:"RAMUNE", en:"Ramune", price:"3,50€", descZh:"日式波子汽水", descEn:"Japanese Ramune soda", descEs:"Refresco japonés Ramune" },
        { zh:"Mahou 啤酒", es:"CERVEZA MAHOU", en:"Mahou Beer", price:"2,80€", descZh:"含麸质", descEn:"Contains gluten", descEs:"Contiene gluten" },
        { zh:"青岛啤酒", es:"CERVEZA CHINO TSINGTAO", en:"Tsingtao Beer", price:"3,00€", descZh:"含麸质", descEn:"Contains gluten", descEs:"Contiene gluten" },
        { zh:"麒麟一番榨啤酒", es:"CERVEZA JAPONES KIRIN ICHIBAN", en:"Kirin Ichiban Beer", price:"3,50€", descZh:"含麸质", descEn:"Contains gluten", descEs:"Contiene gluten" }
      ]
    }
  }
};