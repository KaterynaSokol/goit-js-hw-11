import{i as n}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function i(s){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"44667658-9ba2d67695abf8a1c08d7f54b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=`${t}?${o}`;return fetch(a).then(e=>e.json()).catch(e=>console.log(e))}function u(s){return s.map(t=>`<li class="card">
             <a href="${t.largeImageURL}" class="big gallery-link">
               <img
                 src="${t.webformatURL}"
                 alt="${t.tags}"
                 title="${t.tags}"
                 class="card-img"
             /></a>
            <ul class="card-title">
               <li class="card-info">
                 <h2 class="card-text">Likes</h2>
                 <p class="card-text-value">${t.likes}</p>
             </li>
               <li class="card-info">
                 <h2 class="card-text">Views</h2>
                 <p class="card-text-value">${t.views}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Comments</h2>
                 <p class="card-text-value">${t.comments}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Downloads</h2>
                 <p class="card-text-value">${t.downloads}</p>
               </li>
             </ul> 
           </li>`).join("")}const l={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".input"),gallery:document.querySelector(".gallery")};l.searchForm.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.query.value;if(t===""){n.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"}),l.searchForm.reset();return}i(t).then(o=>{const a=u(o.hits);console.log(a),l.gallery.insertAdjacentHTML("beforeend",a)}).catch(o=>{})});
//# sourceMappingURL=commonHelpers.js.map
