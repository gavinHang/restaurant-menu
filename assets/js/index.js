// assets/js/index.js
window.addEventListener("DOMContentLoaded", ()=>{
  // footer year
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  // ===== Carousel logic =====
  const slidesEl = document.getElementById("slides");
  if (!slidesEl) return;

  const slideCount = slidesEl.children.length;
  const dotsEl = document.getElementById("dots");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let idx = 0;
  let timer = null;

  function renderDots(){
    if (!dotsEl) return;
    dotsEl.innerHTML = "";
    for(let i=0;i<slideCount;i++){
      const b = document.createElement("button");
      b.className = "dot" + (i===idx ? " active" : "");
      b.type = "button";
      b.setAttribute("aria-label", "跳到第 " + (i+1) + " 张");
      b.addEventListener("click", ()=>go(i,true));
      dotsEl.appendChild(b);
    }
  }

  function go(n, userAction=false){
    idx = (n + slideCount) % slideCount;
    slidesEl.style.transform = `translateX(${-idx * 100}%)`;
    if (dotsEl){
      Array.from(dotsEl.children).forEach((d,i)=>d.classList.toggle("active", i===idx));
    }
    if (userAction) restart();
  }

  function restart(){
    if (timer) clearInterval(timer);
    timer = setInterval(()=>go(idx+1), 4500);
  }

  if (prevBtn) prevBtn.addEventListener("click", ()=>go(idx-1,true));
  if (nextBtn) nextBtn.addEventListener("click", ()=>go(idx+1,true));

  renderDots();
  go(0);
  restart();
});