(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();(function(){const s=document.querySelector(".menu-toggler"),r=document.querySelector("header nav ul");s&&s.addEventListener("click",e=>{r.classList.toggle("show-menu"),s.classList.toggle("close-menu")}),document.querySelectorAll("header nav ul a").forEach(e=>{e.addEventListener("click",o=>{r.classList.contains("show-menu")&&(r.classList.remove("show-menu"),s.classList.remove("close-menu"))})}),[document.querySelector("#email"),document.querySelector("#phone")].forEach(e=>{if(e){const o=e.getAttribute("href"),n=o.startsWith("mailto:")?"mailto:":"tel:";o.replace(n,"");let u="";for(let l=0;l<o.length;l++)u+=`&#${o.charCodeAt(l)};`;e.setAttribute("href",`${n}${u}`)}}),new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting?document.querySelectorAll("[data-progress]").forEach(function(n){n.style.width=n.dataset.progress+"%"}):document.querySelectorAll("[data-progress]").forEach(function(n){n.style.width=0})})},{threshold:.75}).observe(document.querySelector(".skills-block-wrap"))})();