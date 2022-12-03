// const http = require("http");

//           <---open-notify.org-API--->
//         <---People in Space Right Now--->
// http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// http.get("http://api.open-notify.org/astros.json", (resp) => {
//   let data = "";
//   resp.on("data", (chunk) => {
//     data += chunk;
//   });

//   resp.on("end", () => {
//     let jsonData = JSON.parse(data);
//     console.log(jsonData);
//   });
// });

//  <---International Space Station Current Location--->
// http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// http.get("http://api.open-notify.org/iss-now.json", (resp) => {
//   let data = "";
//   resp.on("data", (chunk) => {
//     data += chunk;
//   });

//   resp.on("end", () => {
//     let resultedData = JSON.parse(data);
//     console.log(resultedData);
//   });
// });

//

// POST REQUEST //
// By using AXIOS library //
// const axios = require('')
// const { data } = require('./data')

// axios.post('https://reqres.in/api/users', data).then(res => {
//     console.log(`Status code : ${res.status}`)
//     console.log(`Body : ${JSON.stringify(res.data)}`)
// }).catch(err => console.log(err))
//======================================================================//

// File system //

// const fs = require('fs');

// fs.readFile('./test.txt', 'utf-8', (data, err) => {
//     if(err) throw err;
//     console.log(data);
// })

// const data = fs.readFileSync('./test.txt', { encoding: 'utf-8', flag: 'r' });
// console.log(data);

// fs.stat('./test.txt', (err, stats) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.size)
// })

//=======================================================//

// Read and write file //
// const fs = require('fs');

// const content = [
//     {
//         type: "Node Application"
//     }
// ]
// fs.writeFileSync('test.json', JSON.stringify(content))
//-------------------------//

// Create file again

// const fs = require('fs');

// const data = [
//     {
//         name: "BMW",
//         model: "2022"
//     }
// ]

// fs.writeFileSync('carModel.json', JSON.stringify(data))
//=================================================================================//


//                                     Route                                               //

// const http = require('http');

// const routes = {
//     '/': function index(request, response) {
//         response.writeHead(200)
//         response.end('Hello from nodeJs');
//     },
//     '/about': function aboutUs(request, response) {
//         response.writeHead(200);
//         response.end('Hello from about page');
//     },
//     '/contact': function contactUs(request, response) {
//         response.end('How we can help you...!')
//     }
// }

// http.createServer((req, res) => {
//     if(req.url in routes) {
//         return routes[req.url](req, res);
//     }
// }).listen(3000, () => console.log('Server started..!'));

//==========================================================================//

//                                Event module in nodejs                                    //

// const events = require('events');

// let ev = new events.EventEmitter();

// ev.on('my_event', (data)=> {
//     console.log(`Event occurs: ${data}`)
// })

// ev.emit('my_event', `at the status code of ${200}, 'OK'`)
//===============================================================================//

//**                                    Stream                                   **//

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res)=> {
//     fs.readFile('test.json', (err, data)=> {
//         if(err) {
//             res.end('Something went wrong!')
//         }
//         res.end(data)
//     })
// })

// server.listen(3000, ()=> console.log('Application server started'));
// ================================================================================//

//                                    Exeption handling                        //

// try{
//     console.log('Start scripting...!');
//     console.log('After bla bla bla')

// } catch(err){
//     console.log('Error message: ', )
// }

//--------------//

// Exception Handling using promises //

// doSomething1()
// .then(() => {
//     return doSomething2().catch((err) => {
//         // error handler
//         throw err
//     })
// })
// .then(() => {
//     return doSomething3().catch((err)=> {
//         // error handler
//         throw err
//     })
// })
// .catch((err) => console.error(err))
//-----------------------------------//

// Exception handling using async and await //

async function someFunction() {
    try{
        await someOtherFunction()
    } catch(err) {
        console.error(err.message)
    }
}
//=======================================================================================//
//                                      END                                             //
//=======================================================================================//












