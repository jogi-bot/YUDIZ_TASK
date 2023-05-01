const  http = require('http')
const event = require('events')
const { EventEmitter } = require('stream')
const { url } = require('inspector')

const events = new EventEmitter()

const stuff = {

}

events.on('1', (data)=>{
    stuff.data1 = data
})

events.on('2', (data)=>{
    stuff.data2 = data
})

events.emit('1', 2)
events.emit('2', 1)

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/s'){
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(stuff))
        
    }
     else if(req.method === 'POST' && req.url === '/d'){
        res.writeHead(300, {'Content-Type':'text/plain'})
        res.end('g')
    }
    else { 
       res.writeHead(404,{'Content-Type':'text/plain'})
       res.end('page it,s not open')

    }
    


})
console.log(stuff);

server.listen(3000, ()=>{
    console.log('you are in 8000');
})

module.exports = stuff

//{ data1: 2, data2: 1 }



