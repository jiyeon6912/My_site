const contact_btn = document.querySelector('.contact_btn')
const contact_modal = document.querySelector('.contact_modal')
const close_btn = document.querySelector('.close_btn')
const frontText = document.querySelector('.front_text')

contact_btn.addEventListener('click',function(){
  console.log(this)
  contact_modal.classList.add('open')
  frontText.classList.add('on')
})

close_btn.addEventListener('click',function(){
  console.log(this)
  contact_modal.classList.remove('open')
  frontText.classList.remove('on')
})


