const section = document.querySelector(".sec")
const button = document.querySelector(".btn")
const bgText = document.querySelector(".bg-text")
const circle = document.querySelector(".clipPath-circle")
const inputFocus = document.querySelector(".newColor-input")

let newColor

button.addEventListener("click", (e) => {
  e.preventDefault()
  newColor = document.querySelector(".newColor-input").value
  section.style.background = newColor
  circle.style.background = newColor
  circle.classList.add("active")
  bgText.classList.add("fade")
  bgText.innerHTML = newColor
})

inputFocus.addEventListener("focus", () => {
  circle.classList.remove("active")
  bgText.classList.remove("fade")
})
