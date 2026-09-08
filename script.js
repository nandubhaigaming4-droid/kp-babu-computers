const info = document.getElementById('componentInfo');
const stage = document.getElementById('pcStage');
const explodeBtn = document.getElementById('explodeBtn');

const details = {
  "CPU": ["CPU", "The brain of the PC. It handles calculations, applications and system operations.", "High-performance processor"],
  "GPU": ["GPU", "The graphics engine for gaming, 3D work and video workloads.", "Gaming / creator graphics"],
  "RAM": ["RAM", "Fast temporary memory that helps applications and games run smoothly.", "16–64 GB configurations"],
  "Motherboard": ["Motherboard", "The main board that connects the processor, memory, storage and other hardware.", "Platform & connectivity"],
  "M.2 SSD": ["M.2 SSD", "Fast storage for the operating system, apps and games.", "NVMe high-speed storage"],
  "Power Supply": ["Power Supply", "Converts wall power into stable power for every PC component.", "Choose adequate wattage"],
  "CPU Cooler": ["CPU Cooler", "Moves heat away from the processor to maintain stable performance.", "Air / liquid cooling"],
  "Case Fan": ["Case Fan", "Moves air through the case to keep components cooler.", "Airflow & thermals"],
  "Case": ["PC Case", "The chassis that protects and organizes the entire computer build.", "Choose for airflow & compatibility"]
};

function showPart(name){
  const d = details[name] || details["Case"];
  info.innerHTML = `<small>COMPONENT</small><h3>${d[0]}</h3><p>${d[1]}</p><strong>${d[2]}</strong>`;
  document.querySelectorAll('.part').forEach(p => p.classList.remove('selected'));
  document.querySelectorAll(`.part[data-part="${CSS.escape(name)}"]`).forEach(p => p.classList.add('selected'));
}
document.querySelectorAll('.part').forEach(part=>{
  part.addEventListener('mouseenter',()=>showPart(part.dataset.part));
  part.addEventListener('click',()=>showPart(part.dataset.part));
});
document.querySelectorAll('[data-focus]').forEach(btn=>{
  btn.addEventListener('click',()=>showPart(btn.dataset.focus));
});
explodeBtn.addEventListener('click',()=>{
  stage.classList.toggle('exploded');
  explodeBtn.textContent = stage.classList.contains('exploded') ? 'Close PC ↙' : 'Explore Inside ↗';
  info.innerHTML = stage.classList.contains('exploded')
    ? '<small>EXPLODED VIEW</small><h3>Inside the machine.</h3><p>Tap or hover each separated component to inspect it.</p>'
    : '<small>HOVER A PART</small><h3>Interactive PC</h3><p>Move your cursor over a component to inspect it.</p>';
});
const dot=document.querySelector('.cursor-dot');
window.addEventListener('pointermove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'});

document.querySelector('.menu-btn').addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  const visible=nav.style.display==='flex';
  nav.style.display=visible?'none':'flex';
  if(!visible){nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='#090c12';nav.style.flexDirection='column';}
});
