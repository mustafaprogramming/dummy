// const anoumnt=12;
// if(anoumnt<10){
//     console.log('small number')
// }else{
//     console.log('big number')
// }
// console.log('my first node program')
// const data=require('./module')
// console.log(data)

// const os = require('os')
// const user=os.userInfo()
// console.log(user)
// console.log(`'The system Uptime is ${os.uptime()} seconds'`)

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem(),
// }
// console.log(currentOS)


// const path=require('path')
// console.log(path.sep)
// const filePath=path.join('/content','subfolder','text.txt')
// console.log(filePath)
// const base=path.basename(filePath)
// console.log(base)
// const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
// console.log(absolute)


// const {readFileSync,writeFileSync} = require('fs')

// const first = readFileSync('./conte/first.txt','utf8')
// const second = readFileSync('./conte/second.txt','utf8')

// writeFileSync('./conte/result-sync.txt',`Here is the result: ${first}, ${second}\n`,
//     {flag:'a'} //a === append
// )

// const {readFile,writeFile} = require('fs')
// readFile('./conte/first.txt','utf8',(err,res)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first=res;
//     readFile('./conte/second.txt','utf8',(err,res)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second=res;
//         writeFile('./conte/result-async .txt',`Here is the result: ${first}, ${second}\n`,{flag:'w'},(err,res)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(res)
    
//         })
//     })
// })
// const myerror=()
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('Welcome to Homepage')
//     }
//     else if(req.url==='/about'){
//         res.end('Here is our history')
//     }else{
//         res.end('<h1>Opps!</h1><p>Cant seem to find the page you are looking for</p><a href="/">Homepage</a>')
//     }
    

// })
// server.listen(5000)
// const _ = require('lodash')
// const item=[1,[2,[3,[4,[0,[1]]]]]]
// const newitem=_.flatMapDeep(item)
// console.log(newitem)
// console.log(item[1][1][1][1][1])