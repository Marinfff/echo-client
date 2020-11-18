import Echo from 'laravel-echo'
window.io = require('socket.io-client')

const connect = document.getElementById('connect')

connect.addEventListener('click', () => {
  const domain = document.getElementById('domain').value
  const channel = document.getElementById('channel').value
  const event = document.getElementById('event').value

  console.log(domain, channel, event)

  window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: domain
  })

  Echo.channel(channel)
    .listen(event, (e) => {
      console.log(e)
      const list = document.getElementById('events')
      list.innerHTML += `<div>${JSON.stringify(e)}</div>`
    })
})
