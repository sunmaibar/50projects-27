const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  '你按到我了!',
  '別按了會壞掉',
  'Hello...',
  '還想繼續按下去？',
  '那繼續按吧！',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
  const noti = document.createElement('div')
  noti.classList.add('toast')

  noti.innerText = getRandomMessage()
  toasts.appendChild(noti)

  setTimeout(() => {
    noti.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
