

const link = fetch("https://reqres.in/api/users");
link.then((resp)=>{
    return resp.json()
}).then((result)=>{
    dataSaved(result.data)
}).catch((err)=>console.warn(err))


const dataSaved=(data)=>{
    for (let i = 0; i < data.length; i++) {
        document.querySelector(".avatar").innerHTML+=`<div style="display:flex">
                <img src="${data[i].avatar}" alt="img_avatar" srcset="">
                <h1>${data[i].id}</h1>
                <h3>${data[i].first_name + " " + data[i].last_name}</h3>
                <h2>${data[i].email}</h2>
            </div>`

    }
    // data.map((curElement,index,nextElem)=>{
    //     return(
    //         document.querySelector(".avatar").innerHTML+=`<div style="display:flex">
    //             <img src="${curElement.avatar}" alt="img_avatar" srcset="">
    //             <h1>${curElement.id}</h1>
    //             <h3>${curElement.first_name + " " + curElement.last_name}</h3>
    //             <h2>${curElement.email}</h2>
    //         </div>`

    //     )
    // });
}

/**
 * FILE CALLING API THERE ARE 2 PROMISE WE HAVE TO HANDLE
 */

// `<div class="">
//     <img src="${data[1].avatar}" alt="img_avatar" srcset="">
//     <h1>${data[1].id}</h1>
//     <h3>${data[1].first_name + " " + data[1].last_name}</h3>
//     <h2>${data[1].email}</h2>
// </div>`;



// for (let i = 0; i < 6; i++) {
//     console.log(i);
//     document.querySelector(".avatar").innerHTML += `<button>${i}</button><br>`;

// }


let x= Promise.reject(3);
let u=Promise.resolve(1221)
const im=[x,u]
let g=Promise.allSettled(im).then((result)=>{
    console.log(result);
})
console.log(g);