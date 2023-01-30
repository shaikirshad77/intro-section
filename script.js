const openBtn=document.getElementById('open-menu')
const closeBtn=document.getElementById('close-btn')

const menu_bar=document.getElementById('my-header')
function openMenu() {
  openBtn.addEventListener('click',()=>{
      menu_bar.style.display='block'
      menu_bar.style.right=0
      

  })

  
}

function closeMenu() {
  closeBtn.addEventListener('click',()=>{
      menu_bar.style.display='none'
      menu_bar.style.right="-200px"
      

  })
}