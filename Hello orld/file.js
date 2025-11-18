const fs = require ("fs");
//sync
//fs.writeFileSync('./test.txt',"hello create new file")

//async
//fs.writeFile('./test.txt',"hello create new file", (err)=> {})

//Sync
const result = fs.readFileSync('./contact.txt','utf-8');
// console.log(result);

//Async
// fs.readFile("./contact.txt", 'utf-8', (err , result) => {
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

fs.cpSync("./test.txt", "./copy.txt");
fs.unlink("./copy.txt");

fs.mkdirSync("my-docs/a/b",{recursive: true});


