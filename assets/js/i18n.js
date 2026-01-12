// assets/js/i18n.js
(function () {
  const KEY = "lang";
  const SUPPORTED = ["cn", "es", "en"];

  function getLang() {
    const saved = localStorage.getItem(KEY);
    if (SUPPORTED.includes(saved)) return saved;
    return "cn";
  }

  function applyLang(lang) {
    // ① 先清空所有语言 class（关键）
    SUPPORTED.forEach(l => {
      document.body.classList.remove(`lang-${l}`);
    });

    // ② 只加当前语言
    document.body.classList.add(`lang-${lang}`);

    // ③ html lang 属性
    document.documentElement.lang =
      lang === "cn" ? "zh-CN" : lang === "es" ? "es" : "en";

    // ④ 按钮高亮（互斥）
    document.querySelectorAll("[data-set-lang]").forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-set-lang") === lang
      );
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(KEY, lang);
    applyLang(lang);
  }

  // 暴露给全局
  window.I18N = { setLang, getLang };

  // 初始化
  window.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();

    document.querySelectorAll("[data-set-lang]").forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });

    applyLang(lang);
  });
})();