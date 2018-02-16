let count = 0
const button = document.createElement('button')
button.textContent = count
button.addEventListener('click', () => {
  button.textContent = ++count
})

document.getElementById('app').appendChild(button)

