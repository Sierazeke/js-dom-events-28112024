const body = document.body
const div = document.querySelector("div")
const spanViens = document.querySelector("#viens")
const spanDivi = document.querySelector("#divi")

// console.log(spanViens.setAttribute('id', 'sdasdsdasda'))      // nomaina id 
// console.log(spanViens.setAttribute('title', '8dfgserfqe'))        // nomaina title
spanViens.id = "5g78ug3iq89"          // arii nomaina id
spanViens.removeAttribute("title")           // nonems title
spanDivi.removeAttribute("id")          // nonems id
console.log(spanViens.dataset.test)
spanViens.dataset.newName = "Arbūzs"

spanViens.classList.add('new-class')
spanViens.classList.remove('viens1')
spanViens.classList.toggle('viens3', true)

spanViens.style.backgroundColor = "green"
spanDivi.style.backgroundColor = 'tomato'
