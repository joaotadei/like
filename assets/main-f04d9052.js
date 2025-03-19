import"./index-2e0de06d.js";import"./menu-8880462f.js";import{S as u}from"./MockServer-4f70ed7d.js";const d=new u,a=document.querySelector("#trainee-section button.btn-see-more"),r=document.querySelector("#internship-section button.btn-see-more");let c=[],o=[];a.addEventListener("click",l);r.addEventListener("click",m);p().then(()=>m());h().then(()=>l());function l(){a.disabled=!0;const t=document.querySelector("#trainee-items"),s=[];t.querySelectorAll("div.card").forEach(e=>s.push(e.dataset.id)),c.filter(e=>!s.includes(e.id)).forEach((e,i)=>{if(i>(s.length>0?3:7))return a.disabled=!1;const n=document.createElement("div");n.classList.add("card"),n.innerHTML+=`
      <img class="rounded-sm" src="${e.img}" alt='Poster 1'/>
      <p class="text-sm text-bold text-gray-7 mt-xxxs mb-xxxs lh-md">
        ${e.title}
      </p>
      <a href="subs/index.html" class="card-btn">
        Saiba Mais
      </a>
    `,n.dataset.id=e.id,t.appendChild(n)})}async function h(){const{data:t}=await d.get("https://api.jobs.com.br/api/trainne");c=t}function m(){r.disabled=!0;const t=document.querySelector("#internship-items"),s=[];t.querySelectorAll("div.card").forEach(e=>s.push(e.dataset.id)),o.filter(e=>!s.includes(e.id)).forEach((e,i)=>{if(i>(s.length>0?3:7))return r.disabled=!1;const n=document.createElement("div");n.classList.add("card"),n.innerHTML+=`
      <img class="rounded-sm" src="${e.img}" alt='Poster 1'/>
      <p class="text-sm text-bold text-gray-7 mt-xxxs mb-xxxs lh-md">
        ${e.title}
      </p>
      <a href="subs/index.html" class="card-btn">
        Saiba Mais
      </a>
    `,n.dataset.id=e.id,t.appendChild(n)})}async function p(){const{data:t}=await d.get("https://api.jobs.com.br/api/internship");o=t}
