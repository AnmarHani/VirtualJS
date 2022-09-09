import * as Virtual from '../../../core/index.js'

export const asyncTestFunc = async() => {
    await Virtual.API_GET('https://jsonplaceholder.typicode.com/posts')
    .then((data)=>{
        // for(const element of data.data){
            //     Virtual.asyncHTML("root", `<h1>${element.username}</h1>`)
            // }
            data.map((element)=>{
                Virtual.asyncHTML("root", `<h1>${element.title}</h1>`)
            })
        
    })
}

//for my Artificial Framework
// http://localhost/API_Framework/UserRoutes/GET.php/
// data.data.map((element)=>{
//     Virtual.asyncHTML("root", `<h1>${element.username}</h1>`)
// })