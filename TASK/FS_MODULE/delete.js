const EventEmitter  = require('events')

const Events = new EventEmitter()
const albumData2 = require('./book2')

Events.on('delete', (data)=>{

  delete albumData2[data]

})

Events.emit('delete', (2))

//{ data1: 1, data2: 1 }
console.log(albumData2);