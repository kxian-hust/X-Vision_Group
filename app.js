(() => {
'use strict';
let lang = new URLSearchParams(location.search).get('lang');
try { if (!['zh','en'].includes(lang)) lang = localStorage.getItem('xvision-lang'); } catch {}
if (!['zh','en'].includes(lang)) lang = 'zh';
let topic = 'all', expanded = false;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function papers() {
 const q = $('#search').value.trim().toLocaleLowerCase();
 const rows = PUBLICATIONS.filter(p => (topic==='all'||p.topic===topic) && [p.title,p.authors,p.venue,p.year].join(' ').toLocaleLowerCase().includes(q));
 $('#pub-count').textContent = lang==='zh' ? `共 ${rows.length} ${TEXT.zh.count}` : `${rows.length} ${rows.length === 1 ? "publication" : TEXT.en.count}`;
 $('#paper-list').innerHTML = rows.map(p => `<article class="paper"><figure><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"></figure><div><span class="paper-tag">${esc(p.venue)}</span><h3>${esc(p.title)}</h3><p class="authors">${esc(p.authors).replace(/Ke Xian\*?/g, '<strong>$&</strong>')}</p><div class="paper-links">${p.links.map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener">${l.label.toLowerCase()==='code'?TEXT[lang].code:l.label.toLowerCase()==='project'?TEXT[lang].project:esc(l.label)} ↗</a>`).join('')}</div></div></article>`).join('') || `<p class="empty">${TEXT[lang].empty}</p>`;
}
function news() {
 $('#news-list').innerHTML = NEWS.slice(0,expanded?NEWS.length:5).map(n=>`<article class="news-item"><time datetime="${n[0].replace('.','-')}">${n[0]}</time><p>${esc(n[lang==='zh'?1:2])}${n[3]?` <a href="${esc(n[3])}" target="_blank" rel="noopener">↗</a>`:''}</p></article>`).join('');
 $('#more-news').textContent=TEXT[lang][expanded?'lessNews':'moreNews'];
 $('#more-news').setAttribute('aria-expanded',String(expanded));
}
function translate() {
 document.documentElement.lang=lang==='zh'?'zh-CN':'en';
 document.title=lang==='zh'?'X Vision Group | 三维视觉 · 计算摄影 · 具身智能':'X Vision Group | 3D Vision · Computational Photography · Embodied AI';
 document.querySelectorAll('[data-i]').forEach(el=>{el.innerHTML=TEXT[lang][el.dataset.i]||el.innerHTML});
 $('#language').innerHTML=lang==='zh'?'EN <span>↗</span>':'中文 <span>↗</span>';
 $('#language').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
 $('#search').placeholder=TEXT[lang].search;
 $('#search').setAttribute('aria-label',TEXT[lang].search);
 $('#awards').innerHTML=AWARDS.map(a=>`<li><time>${a[0]}</time><span><strong>${a[lang==='zh'?1:2]}</strong> · ${a[3]}</span></li>`).join('');
 papers();news();
}
function filter(t) {
 topic=t;
 document.querySelectorAll('[data-topic]').forEach(b=>{b.classList.toggle('active',b.dataset.topic===t);b.setAttribute('aria-pressed',String(b.dataset.topic===t))});
 papers();
}
$('#language').addEventListener('click',()=>{
 lang=lang==='zh'?'en':'zh';
 try {localStorage.setItem('xvision-lang',lang);} catch {}
 const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);
 translate();
});
$('#search').addEventListener('input',papers);
document.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.topic)));
$('#more-news').addEventListener('click',()=>{expanded=!expanded;news()});
translate();
})();
