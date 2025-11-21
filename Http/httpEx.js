// const http = require('https');
// const req = http.request('https://www.google.com', (res) =>{
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end',()=>{
//         console.log('NO MORE DATA');
//     })
// });
// req.end();

const {get} = require('https');
get('https://www.google.com', (res) =>{
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end',()=>{
        console.log('NO MORE DATA');
    })
});

