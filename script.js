const intro=document.getElementById('intro');
const letter=document.getElementById('letter');
const open=document.getElementById('open');
const back=document.getElementById('back');
const petals=document.getElementById('petals');
const sparkles=document.getElementById('sparkles');

function petal(){
  const p=document.createElement('span');
  p.className='petal';
  const s=11+Math.random()*18;
  p.style.width=s+'px'; p.style.height=s*1.45+'px';
  p.style.left=Math.random()*100+'vw';
  p.style.setProperty('--drift',(-140+Math.random()*280)+'px');
  p.style.animationDuration=(6+Math.random()*8)+'s';
  p.style.animationDelay=(Math.random()*1.5)+'s';
  petals.appendChild(p);
  setTimeout(()=>p.remove(),16000);
}
for(let i=0;i<30;i++){const s=document.createElement('span');s.className='sparkle';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=Math.random()*3+'s';sparkles.appendChild(s)}
setInterval(petal,850);
function burst(n=35){for(let i=0;i<n;i++)setTimeout(petal,i*70)}
open.addEventListener('click',()=>{intro.style.transition='opacity .8s,transform .8s';intro.style.opacity='0';intro.style.transform='scale(1.03)';setTimeout(()=>{intro.style.display='none';letter.classList.add('show');burst(35)},700)});
back.addEventListener('click',()=>{letter.classList.remove('show');setTimeout(()=>{intro.style.display='grid';requestAnimationFrame(()=>{intro.style.opacity='1';intro.style.transform='none'})},650)});
