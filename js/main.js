/* ============ EDIT ME: contact, socials, projects, gallery ============ */
const CFG={email:"hello@example.com",cv:"#",social:{Instagram:"https://www.instagram.com/akram.gdx/?hl=fr&g=5",Facebook:"https://www.facebook.com/profile.php?id=61592297473248",LinkedIn:"#",Behance:"#",GitHub:"#"}};
/* c = web | brand | sports | design ; img = image file name only, e.g. "kidverse.jpg" (put the file in images/projects/). Leave "" for a placeholder */
const PROJECTS=[
{t:"Attar — Perfume Brand Identity",c:"brand",d:"Arabic calligraphy logo with stationery and packaging mockups for a perfume house.",k:"Logo / Stationery / Packaging",img:"images/gallery/attar-brand.webp",pos:"50% 0%"},
{t:"Finjan — Coffee Brand Identity",c:"brand",d:"Coffee brand identity: logo variations, color palette and merchandise mockups.",k:"Logo / Color palette / Merchandise",img:"images/gallery/finjan-brand.webp",pos:"50% 0%"},
{t:"TWO SIDES, ONE LIFE — THE CHOICE IS YOURS",c:"design",d:"A surreal 3D conceptual artwork exploring the contrast between two paths in life: the comfort of the past and the limitless possibilities of the future. Through dramatic lighting, a floating geometric structure, and a powerful contrast between darkness and golden light, this design represents personal growth, ambition, and the courage to change.",k:"Graphic Design / Digital Art",img:"images/gallery/oc.webp",pos:"50% 0%"},

{t:"Algeria vs Switzerland — Match Poster",c:"sports",d:"Cinematic match-day poster for an international friendly.",k:"Sports poster",img:"images/gallery/algeria-switzerland.webp",pos:"50% 30%"},
{t:"Burger Social Media Ad",c:"design",d:"Bold Arabic social media advertisement for a burger restaurant.",k:"Social media / Advertising",img:"images/gallery/burger-ad.webp",pos:"50% 35%"},
{t:"KidVerse",c:"web",d:"Interactive educational platform for children.",k:"HTML / CSS / JavaScript / PHP / MySQL",img:"kidverse.jpg"},
{t:"Creative Digital Products",c:"web",d:"Modern digital products marketplace.",k:"HTML / CSS / JavaScript / PHP / MySQL",img:""},
{t:"Personal Portfolio",c:"web",d:"Modern personal portfolio website.",k:"HTML / CSS / JavaScript",img:""}];
/* g = Logo Design | Brand Identity | Sports Graphics | Esports | Social Media | Print Design
   r = image height / width (1 = square, 1.33 = tall, .67 = wide) */
const GALLERY=[
{t:"Attar — Perfume Brand Identity",g:"Brand Identity",d:"Arabic calligraphy logo, stationery and packaging mockups.",img:"attar-brand.webp",r:1.34},
{t:"Algeria vs Switzerland — Match Poster",g:"Sports Graphics",d:"Cinematic match-day poster for an international friendly.",img:"algeria-switzerland.webp",r:.67},
{t:"Finjan — Coffee Brand Identity",g:"Brand Identity",d:"Logo variations, color palette and merchandise mockups.",img:"finjan-brand.webp",r:1.33},
{t:"Burger Social Media Ad",g:"Social Media",d:"Bold Arabic advertisement for a burger restaurant.",img:"burger-ad.webp",r:1},
{t:"POSTER ESP",g:"Social Media",d:"Poster team esport.",img:"post 1.png",r:1},
{t:"Zoro one piece ",g:"Print Design",d:"Poster team esport.",img:"printdesign.png",r:1},
{t:"A collection of logos ✦  ",g:"Logo Design",d:"design set logo.",img:"design set logo.png",r:1},
{t:"RONALDO 7 & MESSSI 10 ",g:"Sports Graphics",d:"RONALDO 7 & MESSSI 10",img:"sports.png",r:1},

{t:"Logo esport ",  g:"Esports" , d:"EAGLES TEAM ESPORET ", img:"logoesp.jpg", r:1.33},];
/* ====================================================================== */
const T={
en:{nh:"Home",na:"About",ns:"Skills",np:"Projects",nd:"Graphic Design",nw:"Web Development",nv:"Services",nc:"Contact",it:"I transform ideas into modern digital experiences and powerful visual identities.",role:"Web Developer & Creative Graphic Designer",hd:"Building modern websites and creating visual identities that turn ideas into memorable digital experiences.",b1:"View My Work",b2:"Let's Work Together",cv:"Download CV",ab:"About Me",ap1:"I'm Rahali Akram, a Web Developer and Creative Graphic Designer focused on building modern digital experiences and strong visual identities.",ap2:"I combine technology, design and creativity to create websites, brands, graphics and digital experiences that are visually attractive, functional and user-friendly.",s1:"Projects",s2:"Design Projects",s3:"Design",s4:"Creative Focus",sk:"Code and design, one craft.",skw:"Web Development",skg:"Graphic Design",pr:"Featured Projects",gd:"Visual identities, posters & graphics",sv:"What I can build for you",pc:"My Creative Process",ct:"Let's Create Something Great",cp:"Have an idea, project or collaboration in mind? Let's turn it into something meaningful.",av:"Available for freelance projects and creative collaborations.",send:"Send Message",soon:"More work coming soon.",f:["All","Web Development","Graphic Design","Branding","Sports & Esports"],gf:["All","Logo Design","Brand Identity","Sports Graphics","Esports","Social Media","Print Design"],view:"View Project",
sv1:["Web Development","Modern responsive websites with clean and functional interfaces."],sv2:["UI/UX Design","Modern interfaces focused on usability and visual hierarchy."],sv3:["Logo Design","Unique logos designed around the personality of each brand."],sv4:["Brand Identity","Complete visual identities including colors, typography and brand assets."],sv5:["Social Media Design","Professional posts, advertisements and social media graphics."],sv6:["Sports & Esports Graphics","Team logos, rosters, posters, jerseys and tournament graphics."],sv7:["Print Design","T-shirts, flyers, banners, business cards and promotional materials."],
p:[["Discover","Understand the idea, goals and audience."],["Plan","Create the visual and technical direction."],["Design","Build the visual concept and user experience."],["Develop","Transform the concept into a functional digital product."],["Refine","Test, improve and polish every detail."],["Deliver","Provide the final professional result."]]},
fr:{nh:"Accueil",na:"À propos",ns:"Compétences",np:"Projets",nd:"Design graphique",nw:"Développement web",nv:"Services",nc:"Contact",it:"Je transforme les idées en expériences numériques modernes et en identités visuelles puissantes.",role:"Développeur Web & Designer Graphique Créatif",hd:"Je crée des sites web modernes et des identités visuelles qui transforment les idées en expériences numériques mémorables.",b1:"Voir mes travaux",b2:"Travaillons ensemble",cv:"Télécharger le CV",ab:"À propos",ap1:"Je suis Rahali Akram, développeur web et designer graphique créatif, axé sur les expériences numériques modernes et les identités visuelles fortes.",ap2:"J'associe technologie, design et créativité pour concevoir des sites, des marques et des visuels attrayants, fonctionnels et simples à utiliser.",s1:"Projets",s2:"Projets design",s3:"Design",s4:"Focus créatif",sk:"Code et design, un seul art.",skw:"Développement web",skg:"Design graphique",pr:"Projets en vedette",gd:"Identités visuelles, affiches & graphismes",sv:"Ce que je peux créer pour vous",pc:"Mon processus créatif",ct:"Créons quelque chose de grand",cp:"Une idée, un projet ou une collaboration en tête ? Donnons-lui du sens.",av:"Disponible pour des projets freelance et des collaborations créatives.",send:"Envoyer le message",soon:"D\u2019autres projets bient\u00f4t.",f:["Tout","Développement web","Design graphique","Branding","Sport & Esport"],gf:["Tout","Logo","Identité de marque","Graphismes sportifs","Esport","Réseaux sociaux","Impression"],view:"Voir le projet",
sv1:["Développement web","Sites responsives modernes aux interfaces claires et fonctionnelles."],sv2:["Design UI/UX","Interfaces modernes centrées sur l'utilisabilité."],sv3:["Création de logo","Des logos uniques, à l'image de chaque marque."],sv4:["Identité de marque","Identités complètes : couleurs, typographie et supports."],sv5:["Réseaux sociaux","Publications, publicités et visuels professionnels."],sv6:["Graphismes sport & esport","Logos d'équipes, rosters, affiches, maillots et tournois."],sv7:["Design d'impression","T-shirts, flyers, bannières, cartes de visite."],
p:[["Découvrir","Comprendre l'idée, les objectifs et le public."],["Planifier","Définir la direction visuelle et technique."],["Concevoir","Créer le concept visuel et l'expérience."],["Développer","Transformer le concept en produit fonctionnel."],["Affiner","Tester, améliorer et peaufiner chaque détail."],["Livrer","Fournir le résultat final professionnel."]]},
ar:{nh:"الرئيسية",na:"نبذة",ns:"المهارات",np:"المشاريع",nd:"التصميم الجرافيكي",nw:"تطوير الويب",nv:"الخدمات",nc:"تواصل",it:"أحوّل الأفكار إلى تجارب رقمية حديثة وهويات بصرية قوية.",role:"مطوّر ويب ومصمم جرافيك مبدع",hd:"أبني مواقع حديثة وأصنع هويات بصرية تحوّل الأفكار إلى تجارب رقمية لا تُنسى.",b1:"شاهد أعمالي",b2:"لنعمل معاً",cv:"تحميل السيرة الذاتية",ab:"نبذة عني",ap1:"أنا رحالي أكرم، مطوّر ويب ومصمم جرافيك مبدع، أركّز على بناء تجارب رقمية حديثة وهويات بصرية قوية.",ap2:"أجمع بين التقنية والتصميم والإبداع لصناعة مواقع وعلامات وتصاميم جذابة وعملية وسهلة الاستخدام.",s1:"مشروع",s2:"مشروع تصميم",s3:"تصميم",s4:"تركيز إبداعي",sk:"برمجة وتصميم، حرفة واحدة.",skw:"تطوير الويب",skg:"التصميم الجرافيكي",pr:"أبرز المشاريع",gd:"هويات بصرية وملصقات وتصاميم",sv:"ما يمكنني تنفيذه لك",pc:"مراحل عملي الإبداعي",ct:"لنصنع شيئاً رائعاً",cp:"لديك فكرة أو مشروع أو تعاون في بالك؟ لنحوّله إلى شيء ذي معنى.",av:"متاح لمشاريع العمل الحر والتعاونات الإبداعية.",send:"إرسال الرسالة",soon:"المزيد من الأعمال قريباً.",f:["الكل","تطوير الويب","التصميم الجرافيكي","هوية العلامة","رياضة وإي-سبورت"],gf:["الكل","تصميم الشعارات","هوية العلامة","جرافيك رياضي","إي-سبورت","وسائل التواصل","الطباعة"],view:"عرض المشروع",
sv1:["تطوير الويب","مواقع حديثة متجاوبة بواجهات نظيفة وعملية."],sv2:["تصميم UI/UX","واجهات حديثة تركّز على سهولة الاستخدام."],sv3:["تصميم الشعارات","شعارات فريدة تعبّر عن شخصية كل علامة."],sv4:["الهوية البصرية","هويات متكاملة: ألوان وخطوط وعناصر العلامة."],sv5:["تصميم السوشيال ميديا","منشورات وإعلانات وتصاميم احترافية."],sv6:["جرافيك الرياضة والإي-سبورت","شعارات فرق وقوائم وملصقات وقمصان وبطولات."],sv7:["تصميم المطبوعات","تيشرتات وفلايرات وبانرات وبطاقات أعمال."],
p:[["اكتشف","فهم الفكرة والأهداف والجمهور."],["خطّط","وضع الاتجاه البصري والتقني."],["صمّم","بناء المفهوم البصري وتجربة المستخدم."],["طوّر","تحويل المفهوم إلى منتج رقمي فعّال."],["صقل","اختبار وتحسين وتلميع كل التفاصيل."],["سلّم","تقديم النتيجة النهائية الاحترافية."]]}};
const CATS=["","web","design","brand","sports"],ICO=["❰↯❱","◧","◆","◈","✦","⬡","▤"];
const WEB=[["HTML5","Semantic, accessible structure"],["CSS3","Layouts, motion and design systems"],["JavaScript","Lightweight interactive front-ends"],["PHP","Server logic and dynamic apps"],["MySQL","Relational data design"],["Responsive Design","Every screen, one experience"],["UI/UX","Clear hierarchy and usability"],["Git","Clean version control"]];
const GFX=[["Adobe Illustrator","Vector logos and marks"],["Adobe Photoshop","Photo manipulation and compositing"],["Branding","Strategy-led brand systems"],["Logo Design","Marks with personality"],["Visual Identity","Colors, type, assets"],["Social Media Design","Posts, ads, stories"],["Sports Graphics","Match days and rosters"],["Esports Design","Teams and tournaments"],["Print Design","Apparel, flyers, banners"]];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L="en";try{L=localStorage.getItem("lg")||"en"}catch(e){}
/* placeholder art: seeded outlined triangles (matches hero) */
function art(t,i,r=.75){let a=i*7919+t.length+1,R=()=>(a=a*16807%2147483647)/2147483647,w=800,h=Math.round(w*r),C=["#8052ff","#ffb829","#15846e","#d94fd1","#4f7bff"],s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" fill="#08080c"/>`;
for(let k=0;k<44;k++){let x=R()*w,y=R()*h,z=12+R()*44;s+=`<path d="M${x} ${y-z}L${x+z} ${y+z}L${x-z} ${y+z}Z" fill="none" stroke="${C[k%5]}" stroke-width="1.6" opacity="${(.3+R()*.65).toFixed(2)}" transform="rotate(${(R()*360)|0} ${x} ${y})"/>`}
return"data:image/svg+xml,"+encodeURIComponent(s+`<text x="50%" y="52%" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="300" font-size="${w/15}" letter-spacing="-2">${t.replace(/&/g,"&amp;")}</text></svg>`)}
/* write only the file name (e.g. "kidverse.jpg"): the folder is added automatically.
   a full path or a URL (https://...) also works. If the file is missing, a placeholder is shown. */
const DIR={projects:"images/projects/",gallery:"images/gallery/"};
const imgPath=(f,dir)=>!f?"":(/^(https?:|data:|\/|\.|images\/)/.test(f)?f:dir+f);
PROJECTS.forEach((p,i)=>{p.fb=art(p.t,i,.75);p.src=imgPath(p.img,DIR.projects)||p.fb;p.cat=T.en.f[CATS.indexOf(p.c)]});
GALLERY.forEach((p,i)=>{p.fb=art(p.t,i+9,p.r);p.src=imgPath(p.img,DIR.gallery)||p.fb;p.cat=p.g});
document.addEventListener("error",e=>{const im=e.target;if(im.tagName!="IMG")return;const h=im.closest(".pj,.gi");if(!h)return;const it=(h.classList.contains("pj")?PROJECTS:GALLERY)[+h.dataset.i];if(it&&im.src!=it.fb){console.warn("Image not found:",it.src);im.src=it.fb}},true);
/* i18n */
function lang(l){L=l;try{localStorage.setItem("lg",l)}catch(e){}
const d=document.documentElement;d.lang=l;d.dir=l=="ar"?"rtl":"ltr";
$$("[data-i]").forEach(e=>{const v=T[l][e.dataset.i];if(v)e.textContent=v});
$$(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l==l));
const t=T[l];
$("#sl").innerHTML=[1,2,3,4,5,6,7].map(n=>`<div class="rv in"><i class="i" aria-hidden="true">${ICO[n-1]}</i><h3>${t["sv"+n][0]}</h3><p>${t["sv"+n][1]}</p></div>`).join("");
$("#ps").innerHTML=t.p.map((x,i)=>`<div class="pr rv" style="transition-delay:${i*.12}s"><span class="n">0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("");
$("#fn").innerHTML=["nh","na","ns","np","nd","nw","nv","nc"].map((k,i)=>`<a class="gl u" href="#${["home","about","skills","projects","design","web","services","contact"][i]}">${t[k]}</a>`).join("");
filters("#pf",t.f,"pc",PROJECTS);filters("#gf",t.gf,"gc",GALLERY);$$(".pr").forEach(e=>io.observe(e));
$("#f1").placeholder=l=="ar"?"الاسم":l=="fr"?"Nom":"Name";$("#f2").placeholder=l=="ar"?"البريد الإلكتروني":"Email";$("#f3").placeholder=l=="ar"?"الموضوع":l=="fr"?"Sujet":"Subject";$("#f4").placeholder="Message"}
let fs={pc:0,gc:0};
function filters(sel,names,key,list){const el=$(sel);el.innerHTML=names.map((n,i)=>`<button class="gl u ${fs[key]==i?"on":""}" data-k="${i}">${n}</button>`).join("");
el.onclick=e=>{const b=e.target.closest("button");if(!b)return;fs[key]=+b.dataset.k;filters(sel,names,key,list)};
key=="pc"?grid():gal()}
const soon=()=>`<p class="soon">${T[L].soon}</p>`;
function grid(){const f=fs.pc,b=T[L];$("#pl").innerHTML=PROJECTS.filter(p=>!f||p.c==CATS[f]).length?PROJECTS.map((p,i)=>(!f||p.c==CATS[f])?`<article class="pj rv in" tabindex="0" data-i="${i}"><div class="im"><img loading="lazy" style="object-position:${p.pos||"center"}" src="${p.src}" alt="${p.t} – ${p.cat}"><div class="ov"><span class="btn">${b.view}</span></div></div><div class="c">${p.cat}</div><h3>${p.t}</h3><p>${p.d}</p><div class="tk">${p.k}</div></article>`:"").join(""):soon()}
function gal(){const f=fs.gc,n=T.en.gf;$("#gl2").innerHTML=GALLERY.filter(p=>!f||p.g==n[f]).length?GALLERY.map((p,i)=>(!f||p.g==n[f])?`<figure class="gi rv in" tabindex="0" data-i="${i}"><img loading="lazy" src="${p.src}" alt="${p.t} – ${p.g}"><span>${p.t} · ${p.g}</span></figure>`:"").join(""):soon()}
$$(".lang button").forEach(b=>b.onclick=()=>lang(b.dataset.l));
/* viewer (project modal + lightbox) */
let cur=[],ci=0;const vw=$("#vw");
function show(){const p=cur[ci];$("#vi").src=p.src;$("#vi").alt=p.t;$("#vi").classList.remove("z");$("#vt").textContent=p.t;$("#vcat").textContent=p.cat;$("#vd").textContent=p.d;$("#vk").textContent=p.k||""}
function openV(l,i){cur=l;ci=i;show();vw.classList.add("on");document.body.style.overflow="hidden";$("#vc").focus()}
function closeV(){vw.classList.remove("on");document.body.style.overflow=""}
const step=d=>{ci=(ci+d+cur.length)%cur.length;show()};
$("#pl").onclick=e=>{const a=e.target.closest(".pj");if(a)openV(PROJECTS,+a.dataset.i)};
$("#gl2").onclick=e=>{const a=e.target.closest(".gi");if(a)openV(GALLERY,+a.dataset.i)};
document.addEventListener("keydown",e=>{if(e.key=="Enter"){const a=e.target.closest&&e.target.closest(".pj,.gi");if(a)a.click()}if(!vw.classList.contains("on"))return;if(e.key=="Escape")closeV();if(e.key=="ArrowRight")step(L=="ar"?-1:1);if(e.key=="ArrowLeft")step(L=="ar"?1:-1)});
$("#vc").onclick=closeV;$("#vp").onclick=()=>step(-1);$("#vn").onclick=()=>step(1);$("#vi").onclick=e=>e.target.classList.toggle("z");vw.onclick=e=>{if(e.target==vw)closeV()};
/* skills, socials */
const sk=a=>a.map(x=>`<li tabindex="0"><i class="ic" aria-hidden="true">▲</i><b>${x[0]}</b><small>${x[1]}</small></li>`).join("");
$("#sw").innerHTML=sk(WEB);$("#sg").innerHTML=sk(GFX);
const soc=Object.entries(CFG.social).map(([k,v])=>`<a class="gl u" href="${v}" target="_blank" rel="noopener">${k}</a>`).join("");$("#so").innerHTML=soc;$("#so2").innerHTML=soc;$("#cvl").href=CFG.cv;
$("#fm").onsubmit=e=>{e.preventDefault();const g=i=>encodeURIComponent($(i).value);location.href=`mailto:${CFG.email}?subject=${g("#f3")}&body=${g("#f4")}%0A%0A${g("#f1")} (${$("#f2").value})`};
/* nav */
const bg=$("#bg"),mn=$("#mn");bg.onclick=()=>{const o=mn.classList.toggle("o");bg.setAttribute("aria-expanded",o)};mn.onclick=e=>{if(e.target.closest("a")){mn.classList.remove("o");bg.setAttribute("aria-expanded",false)}};
/* scroll: progress, header, back-to-top */
const up=$("#up");function sc(){const h=document.documentElement,y=scrollY;$("#pg").style.width=(y/(h.scrollHeight-innerHeight)*100||0)+"%";$("#hd").classList.toggle("sc",y>40);up.classList.toggle("on",y>800)}
addEventListener("scroll",sc,{passive:true});up.onclick=()=>scrollTo({top:0});
/* reveal + counters + active nav */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const n=+e.target.dataset.n,s=e.target.dataset.s,t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1600);e.target.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
$$("[data-n]").forEach(e=>co.observe(e));
const ids=["home","about","skills","projects","design","services","process","contact"],links=$$("nav a");
const ao=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
ids.forEach(i=>ao.observe($("#"+i)));
/* magnetic buttons, glow, cursor */
$$(".mg").forEach(b=>{b.onpointermove=e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.3}px)`};b.onpointerleave=()=>b.style.transform=""});
const fine=matchMedia("(hover:hover) and (pointer:fine)").matches,gl=$("#gl"),cu=$("#cur");let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY;gl.style.transform=`translate(${mx}px,${my}px)`},{passive:true});
if(fine){document.body.classList.add("cc");(function f(){cx+=(mx-cx)*.25;cy+=(my-cy)*.25;cu.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(f)})();
document.addEventListener("pointerover",e=>cu.classList.toggle("h",!!e.target.closest("a,button,.pj,.gi,input,textarea,li")))}
/* hero: triangle constellation forming </> + vector pen curve */
(function(){const cv=$("#cv"),x=cv.getContext("2d"),C=["#8052ff","#ffb829","#15846e","#d94fd1","#4f7bff"],hero=$("#home");let W,H,P=[],m={x:-999,y:-999},pxo=0,pyo=0;
const pt=(hx,hy,amb)=>({hx,hy,x:Math.random()*W,y:Math.random()*H,r:2+Math.random()*3,a:Math.random()*6.28,c:Math.random()*5|0,amb});
function build(){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0);
const o=document.createElement("canvas");o.width=o.height=400;const c=o.getContext("2d");c.strokeStyle=c.fillStyle="#fff";c.lineCap=c.lineJoin="round";c.lineWidth=26;
c.beginPath();c.moveTo(120,110);c.lineTo(40,200);c.lineTo(120,290);c.moveTo(280,110);c.lineTo(360,200);c.lineTo(280,290);c.stroke();
c.lineWidth=14;c.beginPath();c.moveTo(166,311);c.bezierCurveTo(120,100,280,300,234,91);c.stroke();c.fillRect(154,299,24,24);c.fillRect(222,79,24,24);
const g=c.getImageData(0,0,400,400).data,st=W<600?9:6,s=Math.min(W,H)/400;P=[];
for(let j=0;j<400;j+=st)for(let i=0;i<400;i+=st)if(g[(j*400+i)*4+3]>128)P.push(pt((i+Math.random()*3)*s+(W-400*s)/2,(j+Math.random()*3)*s+(H-400*s)/2));
for(let k=0;k<110;k++)P.push(pt(Math.random()*W,Math.random()*H,1))}
let T0=0;function draw(t){requestAnimationFrame(draw);if(!W)return;x.clearRect(0,0,W,H);
for(const p of P){if(p.amb){p.x+=Math.cos(p.a)*.18;p.y+=Math.sin(p.a)*.18;p.a+=.004;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0}
else{const tx=p.hx+Math.sin(t/900+p.hy*.05)*1.6,ty=p.hy+Math.cos(t/1100+p.hx*.05)*1.6;p.x+=(tx-p.x)*.06;p.y+=(ty-p.y)*.06}
const dx=p.x-m.x,dy=p.y-m.y,q=dx*dx+dy*dy;if(q<9000&&q>1){const f=(1-q/9000)*6,l=Math.sqrt(q);p.x+=dx/l*f;p.y+=dy/l*f}p.rot=(p.rot||p.a)+.004}
for(const am of[0,1]){x.globalAlpha=am?.3:.9;x.lineWidth=1.2;for(let c=0;c<5;c++){x.strokeStyle=C[c];x.beginPath();for(const p of P){if(p.c!=c||!!p.amb!=!!am)continue;for(let k=0;k<3;k++){const a=p.rot+k*2.094,X=p.x+Math.cos(a)*p.r,Y=p.y+Math.sin(a)*p.r;k?x.lineTo(X,Y):x.moveTo(X,Y)}x.closePath()}x.stroke()}}}
hero.addEventListener("pointermove",e=>{const r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top;pxo=(e.clientX/innerWidth-.5)*-16;pyo=(e.clientY/innerHeight-.5)*-16;cv.style.transform=`translate(${pxo}px,${pyo}px)`});
hero.addEventListener("pointerleave",()=>{m.x=m.y=-999;cv.style.transform=""});
let rt;addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(build,200)});build();requestAnimationFrame(draw)})();
/* init */
lang(L);document.querySelectorAll(".rv:not(.in)").forEach(e=>io.observe(e));sc();
addEventListener("load",()=>setTimeout(()=>$("#ld").classList.add("x"),700));
