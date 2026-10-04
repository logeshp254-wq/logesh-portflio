const P=[
{t:"SEO Audit Project",p:"Website had low visibility on search engines.",a:["Conducted website audit","Identified SEO issues","Optimized meta titles","Improved heading structure","Suggested keyword opportunities"],r:["Improved SEO score","Better website structure","Enhanced user experience"],tools:"Google Search Console, SEMrush, Ahrefs"},
{t:"Keyword Research Project",p:"Content lacked a clear keyword and intent-based direction.",a:["Competitor analysis","Search intent mapping","Long-tail keyword research","Content opportunity identification"],r:["Comprehensive keyword strategy","Improved content planning"],tools:"SEMrush, Ahrefs, Google Keyword tools"},
{t:"Social Media Content Strategy",p:"Brand needed a consistent, audience-led social presence.",a:["Audience research","Content calendar creation","Engagement strategy","Competitor benchmarking"],r:["Consistent content framework","Better audience targeting"],tools:"Canva, Meta Business Suite"},
{t:"Google Business Profile Optimization",p:"Local profile was incomplete and under-optimized.",a:["Business profile audit","Category optimization","Review strategy","Local SEO recommendations"],r:["Improved local visibility","Better profile completeness"],tools:"Google Business Profile"}];
const li=a=>'<ul>'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
const m=document.getElementById('modal'),mc=document.getElementById('mcontent');
document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{const d=P[b.dataset.p];
 mc.innerHTML='<h3 style="font-size:1.5rem;margin-right:40px">'+d.t+'</h3><h4>Problem</h4><p>'+d.p+'</p><h4>Actions</h4>'+li(d.a)+'<h4>Results</h4>'+li(d.r)+'<h4>Tools Used</h4><p>'+d.tools+'</p>';
 m.classList.add('open')});
document.getElementById('mclose').onclick=()=>m.classList.remove('open');
m.onclick=e=>{if(e.target===m)m.classList.remove('open')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')m.classList.remove('open')});
document.querySelectorAll('.cert .thumb').forEach(t=>t.onclick=()=>{mc.innerHTML='<h3>'+t.parentElement.querySelector('h3').textContent+'</h3><div class="thumb" style="aspect-ratio:4/3;margin-top:16px;border:2px dashed #B9CCF0;border-radius:16px;display:grid;place-items:center;color:#7C93C2">[Certificate image]</div>';m.classList.add('open')});
const bg=document.getElementById('burger'),lk=document.getElementById('links');
bg.onclick=()=>lk.classList.toggle('open');lk.onclick=()=>lk.classList.remove('open');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n,pl=el.hasAttribute('data-plus');let i=0;const s=setInterval(()=>{i++;el.textContent=i+(i===n&&pl?'+':'');if(i>=n)clearInterval(s)},120)});
const f=document.getElementById('cform');
f.addEventListener('submit',async e=>{e.preventDefault();
 if(!f.name.value.trim()||!f.email.value.includes('@')||!f.message.value.trim()){alert('Please fill in your name, a valid email and a message.');return}
 try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});if(!r.ok)throw 0;f.reset();document.getElementById('ok').style.display='block'}
 catch(_){alert('Could not send. Please email me directly.')}});
