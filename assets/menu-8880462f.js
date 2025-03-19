import{t as d}from"./index-2e0de06d.js";class u extends HTMLElement{constructor(){super(),this.build()}build(){const e=document.createElement("footer");e.classList.add("page-footer"),e.innerHTML=`
      <img src="/img/logo.png" class="my-auto" alt="Logo"/>
      <div class="h-full flex flex-column lg:items-center justify-space-between lg:py-xxs">
        <div></div>
        <div class="flex gap-xxs items-center">
          <a href="#" class="text-bold underline hover:no-underline text-gray-2 text-xxs">Termos de Uso</a>
          <a href="#" class="text-bold underline hover:no-underline text-gray-2 text-xxs">Políticas de Privacidade</a>
        </div>
        <span class="text-bold lg:text-center text-gray-5">
          Across® 2022
        </span>
      </div>
      <div class="social lg:my-auto">
        <p class="text-bold">Siga-nos</p>
        <div class="flex gap-xxxs mt-nano">
          <a class="hover:opacity-80" href="#">
            <i class="fa-brands fa-instagram text-white text-md"></i>
          </a>
          <a class="hover:opacity-80" href="#">
            <i class="fa-brands fa-facebook text-white text-md"></i>
          </a>
        </div>
      </div>
    `,this.appendChild(e)}}window.customElements.define("jobs-footer",u);const c=document.querySelectorAll("button.langs"),l=document.querySelectorAll(".langs-content ul li");let o=!1;const n=document.querySelector(".nav-menu button.menu-btn"),i=document.querySelectorAll(".nav-link");c.forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("is-active");const e=document.querySelector("#caret-icon");e.classList.toggle("fa-caret-down"),e.classList.toggle("fa-caret-up")})});l.forEach(t=>{t.addEventListener("click",()=>{l.forEach(e=>{e.querySelector("i")&&e.removeChild(e.querySelector("i")),e.classList.remove("text-primary")}),t.classList.add("text-primary"),t.innerHTML+='<i class="fa-solid fa-circle-check text-xs"></i>',c.forEach(e=>{e.querySelector("span").innerText=t.querySelector("span").innerText,e.classList.contains("is-active")&&e.click()})})});i.forEach(t=>t.addEventListener("click",async e=>{if(window.location.pathname!=="/"&&window.location.pathname!=="/index.html")return;e.preventDefault();const a="#"+e.target.href.split("#")[1];if(i.forEach(s=>s.classList.remove("is-active")),t.classList.add("is-active"),o&&r(),a==="#home")window.scrollTo({y:0}),location.hash="";else{location.hash=a;const s=document.querySelector(a).getBoundingClientRect().top+window.pageYOffset-32;window.scrollTo({top:s,behavior:"smooth"})}}));(()=>{var e;const t=location.hash||"#home";(e=document.querySelector(`[href="${t}"]`))==null||e.click()})();n.addEventListener("click",()=>{const t=n.querySelector("i"),e=document.querySelector(".nav-menu"),a=e.querySelector(".menu");t.classList.toggle("fa-bars"),t.classList.toggle("fa-circle-xmark"),t.classList.toggle("text-primary-dark"),t.classList.toggle("text-white"),e.classList.toggle("bg-primary-darker"),a.classList.toggle("is-cell"),c.forEach(s=>s.parentElement.parentElement.classList.contains("lg:none")&&s.classList.toggle("text-secondary")),o=!o});window.addEventListener("resize",d(()=>{window.innerWidth>=1024&&o&&r()},300));function r(){const t=n.querySelector("i"),e=document.querySelector(".nav-menu"),a=e.querySelector(".menu");o=!1,t.classList.add("fa-bars"),t.classList.remove("fa-circle-xmark"),t.classList.add("text-primary-dark"),t.classList.remove("text-white"),e.classList.remove("bg-primary-darker"),a.classList.remove("is-cell"),c.forEach(s=>s.parentElement.parentElement.classList.contains("lg:none")&&s.classList.remove("text-secondary"))}
