import"./modulepreload-polyfill-ec808ebb.js";import"./Input-7ac6837a.js";import{S as n}from"./MockServer-1f629502.js";import"./index-2ac6b6ac.js";const a=document.querySelector("#login form"),e=new n;a.addEventListener("submit",async t=>{t.preventDefault();const o=Object.fromEntries(new FormData(t.target));try{const{data:r}=await e.post("https://api.jobs.com.br/api/signin",o);alert("Logado"),location.replace("/")}catch{alert("Usuário não encontrado")}});
