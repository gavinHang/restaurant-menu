// assets/js/category.js
(function () {
  /* ---------- utils ---------- */
  function getParam(name) {
    return new URLSearchParams(location.search).get(name);
  }
  function $(id) {
    return document.getElementById(id);
  }

  /* ---------- language ---------- */
  function getLang() {
    if (window.I18N && typeof window.I18N.getLang === "function") {
      return window.I18N.getLang();
    }
    return localStorage.getItem("lang") || "cn";
  }

  function t(obj) {
    const lang = getLang();
    return obj?.[lang] || obj?.zh || obj?.es || obj?.en || "";
  }

  function tDesc(item) {
    const lang = getLang();
    if (lang === "en") return item.descEn || item.descZh || "";
    if (lang === "es") return item.descEs || item.descZh || "";
    return item.descZh || "";
  }

  /* ---------- render ---------- */
  function render() {
    const root = window.APP_DATA;
    if (!root || !root.categories) return;

    const catId = getParam("cat") || "entrantes";
    const cat = root.categories[catId];

    const list = $("list");

    if (!cat) {
      if (list) list.innerHTML = "<div class='empty'>暂无菜品数据</div>";
      return;
    }

    /* ---- title ---- */
    if ($("pageTitle")) {
      $("pageTitle").textContent =
        `${t(cat.name)} · ${cat.name.es || ""}`;
    }

    if ($("pageSub")) {
      $("pageSub").textContent =
        getLang() === "en"
          ? "Category details"
          : getLang() === "es"
          ? "Detalles de la categoría"
          : "分类详情";
    }

    /* ---- list ---- */
    if (!Array.isArray(cat.items) || cat.items.length === 0) {
      if (list) list.innerHTML = "<div class='empty'>暂无菜品数据</div>";
      return;
    }

    list.innerHTML = cat.items
      .map(item => `
        <div class="item">
          <div class="row">
          <img src="${item.img || '默认图片路径'}" alt="${item.zh || item.es || item.en}">
          <div class="item-img">
          </div>
            <div>
              <p class="cn-text">${item.zh || ""}</p>
              <p class="es-text">${item.es || ""}</p>
              <p class="en-text">${item.en || ""}</p>
            </div>
            <span class="price">${item.price || "-"}</span>
          </div>
          <p class="desc">${tDesc(item)}</p>
        </div>
      `)
      .join("");
  }

  /* ---------- init ---------- */
  window.addEventListener("DOMContentLoaded", render);

  /* ---------- re-render on language switch ---------- */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest?.("[data-set-lang]");
    if (!btn) return;
    setTimeout(render, 0);
  });
})();