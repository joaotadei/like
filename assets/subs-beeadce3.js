import"./modulepreload-polyfill-ec808ebb.js";import"./menu-20eae783.js";import"./backBtn-d3480e68.js";import"./index-2ac6b6ac.js";const e=document.querySelector(".tabs").querySelectorAll(".tab-button"),i=`<p>
                        Para participar do <span class="text-bold text-primary">Programa de Trainee Supergasbras 2023</span>, os candidatos devem atender aos requisitos listados abaixo:
                        </p>
                        <ul>
                        <li>
                          <span class="text-bold text-primary">Formação:</span> entre Jul 2018 a Jul 2022
                        </li>
                        <li>
                          <span class="text-bold text-primary">Cursos:</span> Administração de Empresas, Análise de Sistemas, Ciências Contábeis, Ciências da Computação, Ciências Econômicas, Comunicação Social, Engenharia de Segurança do Trabalho e demais Engenharias, Estatística, Finanças, Jornalismo, Marketing, Relações Internacionais, Sistemas da Informação e Tecnologia da Informação
                        </li>
                        <li>
                          <span class="text-bold text-primary">Idioma:</span> Inglês avançado
                        </li>
                        <li>
                          Disponibilidade total para viagens nacionais ou internacionais
                        </li>
                        <li>
                          Disponibilidade para mudanças.
                        </li>
                        </ul>
                        <p>
                        <span class="text-bold text-secondary">IMPORTANTE:</span> Os requisitos listados são fundamentais para iniciarmos a análise do seu currículo com o perfil desejado para participação no programa. Tenha em mente que atender a estes requisitos não garante sua aprovação para a próxima fase!
                        </p>`;document.querySelector(".tb-item").innerHTML=i;e.forEach(a=>a.addEventListener("click",async s=>{s.preventDefault(),e.forEach(t=>t.classList.remove("tab-active")),a.classList.add("tab-active"),n(a.id)}));function n(a){if(a==="1"){document.querySelector(".tb-item").innerHTML=i;return}document.querySelector(".tb-item").innerHTML=`<p>Tab ${a}</p>`}
