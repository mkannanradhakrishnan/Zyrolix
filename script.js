/* ===== EDIT HERE ===== */
const CONFIG={email:"zyrolix26@gmail.com",
 emailjs:{serviceId:"service_uhezd0q",templateId:"template_y47tktn",publicKey:"NLNJcyrj3C_9Njcvw"}};
const SERVICES=[
 {n:"Website Development",v:'<div class="vis">&lt;/&gt; <span>build()</span></div>',l:["Modern business sites","Portfolio sites","E-commerce","Responsive web apps"]},
 {n:"Video Editing",v:'<div class="vis"><div class="tl"><b style="height:40%"></b><b style="height:80%;animation-delay:-.3s"></b><b style="height:55%;animation-delay:-.6s"></b><b style="height:90%;animation-delay:-.9s"></b><b style="height:35%;animation-delay:-1.1s"></b></div></div>',l:["Reels & short-form","Promotional videos","Cinematic edits","Social content"]},
 {n:"Logo Design",v:'<div class="vis"><div class="lg"></div></div>',l:["Brand identity","Minimalist logos","Modern concepts","Brand color systems"]},
 {n:"Poster Design",v:'<div class="vis"><div class="ps"></div></div>',l:["Promotional posters","Event posters","Social graphics","Marketing creatives"]}];
const FEATURES=[["Creative, original designs","No recycled templates."],["Responsive, modern websites","Built for phone, tablet and desktop."],["Client-focused solutions","Shaped around your goals."],["Attention to detail","Every pixel and frame reviewed."],["Smooth communication","Clear updates at each stage."],["Flexible for any project","From a single logo to a full site."]];
const STATS=[]; /* e.g. {n:25,label:"Projects delivered",suffix:"+"} — real numbers only */
const STEPS=[["Discover","Understand the client's goals."],["Strategize","Plan the design and development."],["Create","Build, design and edit."],["Refine","Review and improve the result."],["Deliver","Complete and hand over the project."]];
// Add client-approved work here: c=filter category, n=title, d=short summary,
// image=optional path under files/ (leave empty to show the gradient placeholder).
const PROJECTS=[
 {c:"Websites",n:"Website Project",d:"Add a short summary of the client website.",image:"",g:"#4c1d95,#0ea5e9"},
 {c:"Video Editing",n:"Video Project",d:"Add a short summary of the video work.",image:"",g:"#0e7490,#7c3aed"},
 {c:"Logos",n:"Logo Project",d:"Add a short summary of the brand identity.",image:"",g:"#6d28d9,#db2777"},
 {c:"Posters",n:"Poster Project",d:"Add a short summary of the campaign design.",image:"",g:"#1e3a8a,#a855f7"},
 {c:"Websites",n:"Web App Project",d:"Add a short summary of the responsive web app.",image:"",g:"#312e81,#22d3ee"},
 {c:"Posters",n:"Social Design Project",d:"Add a short summary of the social creative.",image:"",g:"#581c87,#38bdf8"}];
const TOOLS=["HTML","CSS","JavaScript","React","Figma","Adobe Photoshop","Adobe Premiere Pro","After Effects","Canva"];
const PACKAGES=[{n:"Starter",d:"For a focused, single-deliverable project.",l:["One service","Clear scope","Standard revisions"]},{n:"Professional",d:"For brands that need a complete, polished presence.",l:["Multiple services","Priority communication","Extended revisions"],pro:1},{n:"Custom",d:"Tell us what you need and we'll shape a plan.",l:["Tailored scope","Flexible timeline","Any combination"]}];
const FAQ=[["What services does Zyrolix provide?","Website development, video editing, logo design and poster design."],["How can I start a project?","Use the contact form or message us on WhatsApp with a short description."],["Do you create responsive websites?","Yes — every site is built to work on mobile, tablet and desktop."],["Can I request custom designs?","Yes. All work is created around your brand and goals."],["How long does a project take?","It depends on scope; we share a timeline with your quote."],["How can I get a quotation?","Send the form or a WhatsApp message and we'll reply with a quote."]];
const SOCIAL=[["Instagram","#"],["LinkedIn","#"],["YouTube","#"]];
/* ===================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
$('#yr').textContent=new Date().getFullYear();
if(CONFIG.email){$('#em').textContent=CONFIG.email;$('#mailb').href='mailto:'+CONFIG.email}else{$('#mailb').addEventListener('click',e=>{e.preventDefault();$('#msg').textContent='Official email not added yet — please use the form or WhatsApp.'})}
$('#svc').innerHTML=SERVICES.map(s=>`<article class="glass card" tabindex="0">${s.v}<h3>${s.n}</h3><ul>${s.l.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
$('#feat').innerHTML=FEATURES.map(f=>`<div class="glass rv"><h3 style="font-size:1.05rem">${f[0]}</h3><p style="color:var(--mut);font-size:.92rem">${f[1]}</p></div>`).join('');
$('#statg').innerHTML=STATS.map(s=>`<div><div class="g" style="font-size:2.4rem;font-weight:800"><span data-c="${s.n}">0</span>${s.suffix||''}</div>${esc(s.label)}</div>`).join('');
$('#steps').innerHTML=STEPS.map((s,i)=>`<div class="step"><small style="color:var(--b)">Step ${i+1}</small><h3>${s[0]}</h3><p style="color:var(--mut);font-size:.9rem">${s[1]}</p></div>`).join('');
const cats=['All Projects','Websites','Video Editing','Logos','Posters'];
$('#flt').innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${c}">${c}</button>`).join('');
$('#pf').innerHTML=PROJECTS.map(p=>`<article class="pj" data-c="${esc(p.c)}">${p.image?`<img class="im" src="${esc(p.image)}" alt="${esc(p.n)}" loading="lazy">`:`<div class="im" style="background:linear-gradient(135deg,${p.g})">Project image placeholder</div>`}<div class="t"><span class="ph">${p.image?'client work':'placeholder'}</span><div class="tag">${esc(p.c)}</div><h3 style="font-size:1.05rem">${esc(p.n)}</h3><p style="color:var(--mut);font-size:.88rem">${esc(p.d)}</p><a class="btn" style="display:inline-block;padding:7px 16px;margin-top:10px;font-size:.85rem" href="#contact">Start a project</a></div></article>`).join('');
$('#flt').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#flt button').forEach(x=>x.classList.toggle('on',x===b));$$('.pj').forEach(p=>p.hidden=!(b.dataset.c==='All Projects'||p.dataset.c===b.dataset.c))});
const PV={Web:["Web Design","Clean, fast, responsive sites that turn visitors into clients."],Video:["Video Editing","Reels, promos and cinematic cuts paced for attention."],Logo:["Logo Design","Minimal marks and color systems that scale everywhere."],Poster:["Poster Design","Layered, high-impact creatives for print and social."]};
$('#tabs').innerHTML=Object.keys(PV).map((k,i)=>`<button role="tab" class="${i?'':'on'}" data-k="${k}">${PV[k][0]}</button>`).join('');
const show=k=>{const p=$('#pv');p.classList.add('sw');setTimeout(()=>{p.innerHTML=`<h3 class="g" style="font-size:2rem">${PV[k][0]}</h3><p style="color:var(--mut);margin-top:10px">${PV[k][1]}</p><a class="btn main" style="margin-top:20px" href="#contact">Start a Project</a>`;p.classList.remove('sw')},RM?0:300)};
$('#tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#tabs button').forEach(x=>x.classList.toggle('on',x===b));show(b.dataset.k)});show('Web');
$('#tl').innerHTML=TOOLS.map(t=>`<div class="glass">${esc(t)}</div>`).join('');
const REVIEW_KEY='zyrolix-client-reviews';
const loadReviews=()=>{try{const saved=JSON.parse(localStorage.getItem(REVIEW_KEY)||'[]');return Array.isArray(saved)?saved.filter(r=>r&&typeof r.name==='string'&&typeof r.service==='string'&&typeof r.feedback==='string'&&Number.isInteger(r.rating)&&r.rating>=1&&r.rating<=5&&typeof r.date==='string'&&Number.isFinite(Date.parse(r.date))):[]}catch{return[]}};
let reviews=loadReviews();
const renderReviews=()=>{
 const score=$('#review-score'),stars=$('#review-summary-stars'),count=$('#review-count'),list=$('#review-list');
 const average=reviews.length?reviews.reduce((sum,r)=>sum+r.rating,0)/reviews.length:0;
 score.textContent=reviews.length?average.toFixed(1):'—';
 stars.textContent=reviews.length?'★'.repeat(Math.round(average))+'☆'.repeat(5-Math.round(average)):'☆☆☆☆☆';
 stars.setAttribute('aria-label',reviews.length?`${average.toFixed(1)} out of 5 stars`:'No ratings yet');
 count.textContent=reviews.length?`${reviews.length} ${reviews.length===1?'client review':'client reviews'}`:'No reviews yet';
 list.innerHTML=reviews.length?reviews.slice().reverse().map(r=>`<article class="glass review-item"><div class="review-item-head"><div><strong>${esc(r.name)}</strong><span>${esc(r.service)}</span></div><span class="review-stars" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span></div><p>${esc(r.feedback)}</p><time datetime="${esc(r.date)}">${new Date(r.date).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}</time></article>`).join(''):'<p class="review-empty">No reviews yet. Be the first to share your feedback.</p>';
};
renderReviews();
$('#rf').addEventListener('submit',async e=>{
 e.preventDefault();
 const form=e.currentTarget,status=$('#review-msg'),data=new FormData(form),name=String(data.get('name')||'').trim(),service=String(data.get('service')||''),feedback=String(data.get('feedback')||'').trim(),rating=Number(data.get('rating'));
 status.className='';
 if(!name||!service||!Number.isInteger(rating)||rating<1||rating>5||feedback.length<10){status.className='err';status.textContent='Enter your name, choose a star rating, and write at least 10 characters of feedback.';return}
 const review={name,service,rating,feedback,date:new Date().toISOString()},EJ=CONFIG.emailjs;
 status.textContent='Sending review…';
 let sent=false;
 if(EJ.serviceId&&EJ.templateId&&EJ.publicKey){
  try{const response=await fetch('https://api.emailjs.com/api/v1.0/email/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({service_id:EJ.serviceId,template_id:EJ.templateId,user_id:EJ.publicKey,template_params:{from_name:name,reply_to:CONFIG.email,service,budget:`${rating} / 5 stars`,message:feedback}})});if(!response.ok)throw new Error('EmailJS rejected the review');sent=true}catch{}
 }
 reviews=[...reviews,review].slice(-50);
 let saved=false;
 try{localStorage.setItem(REVIEW_KEY,JSON.stringify(reviews));saved=true}catch{}
 renderReviews();form.reset();
 status.className=sent?'ok':'err';
 status.textContent=sent?`Thank you. Your review was sent${saved?' and is shown in this browser.':'.'}`:saved?'Email delivery failed. This review is saved only in this browser; please contact Zyrolix directly.':'Could not send or save your review. Please contact Zyrolix directly.';
});
$('#pk').innerHTML=PACKAGES.map(p=>`<div class="glass ${p.pro?'pro':''}"><h3>${p.n}${p.pro?' <small style="color:var(--b)">· Most popular</small>':''}</h3><p style="color:var(--mut)">${p.d}</p><ul style="list-style:none;margin:14px 0;color:var(--mut)">${p.l.map(x=>`<li>✓ ${x}</li>`).join('')}</ul><a class="btn ${p.pro?'main':''}" href="#contact">Get a Quote</a></div>`).join('');
$('#fq').innerHTML=FAQ.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
$('#soc').innerHTML=SOCIAL.map(s=>`<a href="${s[1]}" style="display:inline-block;margin-right:12px">${s[0]}</a>`).join('');
$('#f').addEventListener('submit',async e=>{e.preventDefault();const m=$('#msg'),f=e.target;m.className='';
 if(!f.name.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)||f.message.value.trim().length<10){m.className='err';m.textContent='Please enter your name, a valid email and a message of at least 10 characters.';return}
 const EJ=CONFIG.emailjs;if(!(EJ.serviceId&&EJ.templateId&&EJ.publicKey)){m.className='err';m.textContent='Form not connected yet. Please use WhatsApp or call 8946099340.';return}
 m.textContent='Sending…';try{const r=await fetch('https://api.emailjs.com/api/v1.0/email/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({service_id:EJ.serviceId,template_id:EJ.templateId,user_id:EJ.publicKey,template_params:{from_name:f.name.value.trim(),reply_to:f.email.value.trim(),service:f.service.value,budget:f.budget.value,message:f.message.value.trim()}})});if(!r.ok)throw 0;m.className='ok';m.textContent='Message sent. We will reply soon.';f.reset()}catch{m.className='err';m.textContent='Could not send. Please try again or use WhatsApp.'}});
/* UI behavior */
addEventListener('load',()=>setTimeout(()=>$('#pre').classList.add('off'),RM?0:700));
$$('#h1 span').forEach((s,i)=>s.style.animationDelay=(.9+i*.18)+'s');
const ham=$('#ham'),lk=$('#links');ham.onclick=()=>{const o=lk.classList.toggle('o');ham.classList.toggle('o',o);ham.setAttribute('aria-expanded',o)};
lk.addEventListener('click',e=>{if(e.target.tagName==='A'){lk.classList.remove('o');ham.classList.remove('o')}});
const secs=$$('main section');
addEventListener('scroll',()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;$('#bar').style.width=(y/h*100)+'%';$('#nav').classList.toggle('sc',y>40);$('#top').classList.toggle('s',y>600);let cur='home';secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});$$('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur))},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');if(x.target.dataset.c){let n=+x.target.dataset.c,i=0;const t=setInterval(()=>{i+=Math.ceil(n/40);x.target.textContent=Math.min(i,n);if(i>=n)clearInterval(t)},30)}io.unobserve(x.target)}}),{threshold:.2});
$$('.rv,.step').forEach(el=>io.observe(el));$$('#statg [data-c]').forEach(el=>io.observe(el));
if(!RM&&matchMedia('(hover:hover)').matches){
 $$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*12}deg) rotateX(${-y*12}deg) scale(1.03)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
 $$('.mag').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
 if(matchMedia('(pointer:fine)').matches){document.body.classList.add('cc');addEventListener('mousemove',e=>{const c=$('#cur');c.classList.add('on');c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});document.addEventListener('mouseover',e=>{const c=$('#cur'),h=e.target.closest('a,button,summary,.card');c.style.width=c.style.height=h?'46px':'26px'})}}
/* particles */
(()=>{const cv=$('#cv'),x=cv.getContext('2d');if(RM)return;let w,h,P=[];const rz=()=>{w=cv.width=cv.offsetWidth;h=cv.height=cv.offsetHeight;P=Array.from({length:w<700?28:60},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.4,s:Math.random()*.4+.1}))};rz();addEventListener('resize',rz);
 const t=()=>{x.clearRect(0,0,w,h);P.forEach(p=>{p.y-=p.s;if(p.y<0){p.y=h;p.x=Math.random()*w}x.fillStyle='rgba(139,92,246,.7)';x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()});requestAnimationFrame(t)};t()})();
