import"./modulepreload-polyfill-ec808ebb.js";import"./Input-7ac6837a.js";import{S as m}from"./MockServer-1f629502.js";import"./backBtn-d3480e68.js";import"./index-2ac6b6ac.js";class u extends HTMLElement{constructor(){super(),this.build()}build(){(this.dataset.iconLeft||this.dataset.iconRight)&&(this.dataset.iconLeft,this.dataset.iconLeft||this.dataset.iconRight);const t=document.createElement("div");t.className="text-field w-full";const o=document.createElement("label");o.className="flex flex-column items-stretch";const e=document.createElement("span");e.innerText=this.dataset.label,e.className="text-bold text-gray-7 text-xxs mb-nano";const a=document.createElement("div");a.className="selectdiv";const i=document.createElement("select");i.placeholder=this.dataset.placeholder,i.name=this.dataset.name;var s=document.createElement("option");s.value="",s.text="Selecione",i.appendChild(s),a.appendChild(i),o.appendChild(e),o.appendChild(a),t.appendChild(o),this.appendChild(t)}}window.customElements.define("select-field",u);const p=document.querySelector("#register form"),r=document.querySelector("#frmB"),d=document.querySelector("[name='state']"),h=new m;l("[name='country']","https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome",!1);l("[name='state']","https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",!0);v();r.addEventListener("click",n=>{n.preventDefault();const t=document.querySelector("[name='privacy_policies']").value;if(r.type==="submit"&&t){const a=Object.fromEntries(new FormData(p));try{const{data:i}=h.post("https://api.jobs.com.br/api/signup",a);location="/precadastroconcluido/index.html"}catch{alert("Usuário não encontrado")}}if(document.querySelector("[name='name']").value.length>3&&document.querySelector("[name='email']").value.length>3&&t){const a=document.querySelector(".form-2");var e=a.classList.contains("slide-in");a.classList.remove("form-2"),a.setAttribute("class",e?"slide-out":"slide-in"),r.textContent="Finalizar Cadastro",r.type="submit"}});d.addEventListener("change",n=>{n.preventDefault(),document.querySelector("[name='city']").innerHTML="";let t=d.value;l("[name='city']",`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${t}/municipios?orderBy=nome`,!0)});function v(){var n=["Bacharelado","Doutorado","Especialização","Licenciatura","MBA","Mestrado","Pós doutorado","Tecnologo","Extensão","Sequencial","Ensino Médio","Ensino Técnico"];const t=document.querySelector("[name='studyLevel']");for(var o=0;o<n.length;o++){var e=document.createElement("option");e.value=n[o],e.text=n[o],t.appendChild(e)}}function l(n,t,o){let e=new XMLHttpRequest;e.open("GET",t,!0);const a=document.querySelector(n);e.onload=function(){this.status===200?JSON.parse(this.responseText).forEach(s=>{var c=document.createElement("option");c.text=s.nome,o?c.value=s.id:(c.value=s.nome,s.nome==="Brasil"&&(c.selected=!0)),a.appendChild(c)}):console.log(JSON.parse(this.responseText))},e.send()}
