const fs = require('fs')

const http = require('http')

const server = http.createServer();

// server.on('request', (req,res)=>{
//     var fs = require('fs');
//     fs.readFile('text.txt', (err, data) => {
//    if(err) return console.error(err);
//      res.end(data.toString())
//     })
// })



// server.listen(8000, '127.0.0.1')

// server.on('request',(req, res)=>{
//     const rstrem = fs.createReadStream('text.txt')
// } )

// server.listen(8000, '127.0.0.1')

//ANOTHER EXAMPLE
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const stream = fs.createReadStream('fs.js')
//     stream.pipe(res)
    
// })

// server.listen(3000, ()=> {
//     console.log(`server running at port 3000`);
// })