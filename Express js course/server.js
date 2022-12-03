// Create server //
// const express = require('express');
// const app = express();

// app.get('/home', (req, res)=> {
//     res.send('Welcome to express js.!')
// })

// const port = process.env.PORT || 3000;

// app.listen(port, ()=> console.log(`Server listening on port ${port}`));
//-------------------------//

//                              Middleware                                      //

        // const express = require('express');
// const app = express();
//
// const myLogger = function(req, res, next) {
    // console.log('Logged!')
    // next();
// }
//
// app.use(myLogger);
//
// app.get('/', (req, res)=> {
    // res.send('Welcome page!')
// })
//
// app.listen(3000, ()=> console.log('App started!'))

//--------------------------//

// Create middleware function

// const express = require('express');
// const app = express();
//
// const loggerIn = function(req, res, next){
    // console.log('you see the browser!');
    // next();
// }
//
// const outer = function(req, res, next){
    // console.log('logged out successfully!')
    // next()
// }
//
// app.use(loggerIn)
// app.use(outer)
//
// app.get('/about', (req, res)=> {
    // res.send('loggedIn successfully...')
// })
//
// app.listen(3000, ()=> console.log('Application server started!'))
//==============================================================================//

//                           Views in express js                              //

// const express = require('express');
// const app = express();

// app.set('view engine', 'pug');

// app.get('/', (req, res)=> {
    // res.render('index', {title: 'Express course', h1: 'Hey...!'})
// }).listen(3000, ()=> console.log('Server started!!'))
//===========================================================================//

//                              PROJECT == 1                               //

// const express = require('express')
// const path = require('path');
// const app = express();


// app.set('views',path.join(__dirname,'views'))
// app.set('view engine', 'pug')

// app.use(express.urlencoded({
//     extended: true
// }))

// app.get('/', (req, res)=>{
//     res.render('index', { title: 'Form Handling'});
// })

// app.post('/form_submit', (req, res)=> {
//     const username = req.body.username;
//     const email = req.body.email;
//     res.end(`Username : ${username}, and email: ${email}`)
// })

// app.listen(8080, ()=> console.log('Server started.!'))
//=====================================================================//


//                             Session                                   //

// const express = require('express')
// const app = express();
// const session = require('express-session')

// const port = process.env.PORT || 3000;

// app.use(session({
//     secret: 'Your Secret Key',
//     resave: true,
//     saveUninitialized: true
// }))

// app.get('/', (req, res)=> {
//     req.session.name = 'Jhon';
//     res.send('Session set')
// })

// app.get('/session', (req, res)=> {
//     const name = req.session.name;
//     return res.end(name)
// })

// app.get('/destroy', (req, res)=> {
//     req.session.destroy((err)=> {
//         if(err) {
//             res.end(err)
//         }
//         return res.end('The session has been destroyed!')
//     })
// })


// app.listen(port, ()=> console.log(`Server started on port ${port}`))
//============================================================================================//

//                                Cookies                          //

const express = require('express');
const app = express();
const cookies = require('cookie-parser');

const port = process.env.PORT || 3000;

app.use(cookies());

let userData = {
    id: 1,
    name: 'Cookies',
    relation: 'Application server'
}

let apiData = {
    "prependHeader": true,
    "maxJsonSize": 400,
    "alwaysFold": false,
    "alwaysRenderAllContent": false,
    "sortKeys": false,
    "clickableUrls": true,
    "wrapLinkWithAnchorTag": false,
    "openLinksInNewWindow": true,
    "autoHighlight": true
}

app.get('/', (req, res)=> {
    res.send(userData)
})

app.get('/apidata', (req, res)=> {
    res.send(apiData)
})

app.get('/data', (req, res)=> {
    res.cookie('User data', userData)
    res.send('data added to cookies')
})

app.get('/setUsers', (req, res)=> {
    res.send(req.cookies)
})

app.get('/loggedOut', (req, res)=> {
    // res.clearCookie(userData)
    res.send('Cookies successfully crashed..!')
})

app.listen(port, ()=> console.log('Server started at port 3000'))


