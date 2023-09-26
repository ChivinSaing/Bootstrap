// const promise=new Promise((resolve,reject)=>{
//     const job="IT Support";
//     if(job=="web developer"){
//         resolve('yes , you are');
//     }else{
//         reject('No , you are not ');
//     }
// });
// promise.then((result)=>{
//     console.log(result);
// })
//    .catch((err)=>{
//     console.log(err);
//    })
//    .finally('Promise End');

//const axios=require("axios");

//const fetchData=axios.get("https://fakestoreapi.com/products/1")
                    // .then((e)=>{
                    //     console.log(e);
                    // }).catch((err)=>{
                    //     console.log(err);
                    // })
    
        // យកទិន្នន័យបានមួយ
// const url = "https://fakestoreapi.com/products/1";

// const fetchData =async ()=>{
//     try {
//         const response=await fetch(url);
//         const data =await response.json();
//         var txt = ` <div class="card">
//                         <div class="thumnail">
//                             <img src="${data. image}" alt="">
//                         </div>
//                         <div class="detail">
//                             <h3>${data.title}</h3><br>
//                             <h4>Price : ${data.price}</h4>
//                             <h4>Rate: ${data.rating['rate']}</h4>
//                         </div>
//                     </div>`;
//     } catch(err){
//         console.log(err);
//     }
//     document.getElementsByClassName('container')[0].innerHTML=txt;
// }
// fetchData();

    // យកទិន្នន័យបានច្រើន
const url = "https://fakestoreapi.com/products?limit=28";
var txt='';
const fetchData =async ()=>{
    const response=await fetch(url);
    const data =await response.json();
        try {
            const response=await fetch(url);
            const data =await response.json();
            for(let item of data){
                txt +=`<div class="card">
                                <div class="thumnail">
                                        <img src="${item. image}" alt="">
                                    </div>
                                    <div class="detail">
                                        <h3>${item.title}</h3><br>
                                        <h4>Price : ${item.price}</h4>
                                        <h4>Category : ${item. category}</h4>
                                        <h4>Rate: ${item.rating['rate']}</h4>
                                    </div>
                                </div>`;
            }
            document.getElementsByClassName('container')[0].innerHTML=txt;
        } catch(err){
                    console.log(err);
                }
}
fetchData();


 